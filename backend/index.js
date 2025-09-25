// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow only your frontend origin in dev:
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());

// Init Resend SDK
const resend = new Resend(process.env.RESEND_API_KEY);

/** Build a simple HTML email from the order object */
function buildHtmlEmail(order) {
  const itemsHtml = (order.items || []).map(item => `
    <tr>
      <td style="padding:8px;border:1px solid #eee">${item.name}</td>
      <td style="padding:8px;border:1px solid #eee">${item.quantity}</td>
      <td style="padding:8px;border:1px solid #eee">₨${(item.price * item.quantity).toLocaleString()}</td>
    </tr>
  `).join('');

  return `
    <div style="font-family:Arial, Helvetica, sans-serif; color:#333;">
      <h2>Order Confirmation — ${order.id}</h2>
      <p>Hi ${order.customerName},</p>
      <p>Thank you for your order. We'll deliver on <strong>${order.deliveryDate} at ${order.deliveryTime}</strong>.</p>

      <h3>Items</h3>
      <table style="width:100%;border-collapse:collapse">${itemsHtml}</table>

      <p><strong>Total:</strong> ₨${order.total?.toLocaleString()}</p>
      <p><strong>Delivery Address:</strong> ${order.deliveryAddress}</p>

      <hr/>
      <p style="font-size:12px;color:#666">If you have questions, reply to this email.</p>
    </div>
  `;
}

/** POST /api/send-order-email
 *  Expects the full `order` object in req.body
 */
app.post('/api/send-order-email', async (req, res) => {
  const order = req.body;

  if (!order || !order.email) {
    return res.status(400).json({ success: false, message: 'Order or order.email is missing' });
  }

  try {
    const html = buildHtmlEmail(order);
    const to = Array.isArray(order.email) ? order.email : [order.email];

    // Send via Resend
    const { data } = await resend.emails.send({
      from: process.env.VERIFIED_SENDER,
      to,
      subject: `Order Confirmation - ${order.id}`,
      html,
    });

    return res.json({ success: true, id: data?.id || null });
  } catch (err) {
    console.error('send-order-email error:', err);
    return res.status(500).json({ success: false, error: String(err) });
  }
});

app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
