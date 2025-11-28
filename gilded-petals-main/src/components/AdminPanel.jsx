import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const newProduct = {
            title,
            price: parseFloat(price), // Price ko number mein convert karna zaroori hai
            category,
            image_url,
        };

        const { error } = await supabase
            .from('flower_products')
            .insert([newProduct]);

        setLoading(false);

        if (error) {
            console.error('Error adding product:', error);
            setStatus('error');
        } else {
            setStatus('success');
            // Form ko reset karna
            setTitle('');
            setPrice('');
            setCategory('');
            setImageUrl('');
            setTimeout(() => setStatus('idle'), 3000); // 3 seconds baad message hat jaega
        }
    };

    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-purple-700">Admin Product Uploader</h1>
            <Card className="max-w-3xl mx-auto shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl">Add New Resin Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            placeholder="Product Title (e.g., Nikkah Plaque)"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <Input
                            type="number"
                            placeholder="Price (e.g., 8500)"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Category (e.g., plaque, jewellery, tray)"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Image URL (Direct link to image)"
                            value={image_url}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />

                        <Button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2"
                        >
                            {loading ? 'Adding...' : 'Add Product to Shop'}
                        </Button>
                    </form>

                    {status === 'success' && (
                        <div className="mt-4 flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Product added successfully! Shop page will update immediately.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mt-4 flex items-center p-3 bg-red-100 text-red-700 rounded-lg">
                            <XCircle className="h-5 w-5 mr-2" />
                            Error adding product. Check console.
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminPanel;

















