// server.js
import express from "express";
import dotenv from "dotenv";
import { Resend } from "resend";

// 1. Load environment variables
dotenv.config();

// 2. Initialize express
const app = express();
app.use(express.json());

// 3. Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// 4. Route to send email
app.post("/send-email", async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM, // ye aapki .env file me hoga
      to,
      subject,
      html,
    });

    if (error) {
      return res.status(500).json({ error });
    }

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// 5. Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
