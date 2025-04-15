'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'T-shirt',
    image: '/shop/tshirt.jpg',
  },
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orderSent, setOrderSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const phoneNumber = '916392446832'; 
    const message = `Order Details:\nProduct: ${selectedProduct.name}\nName: ${name}\nQuantity: ${quantity}`;
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(url, '_blank');
    setOrderSent(true);

    setSelectedProduct(null);
    setName('');
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-indigo-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>

      {orderSent && (
        <p className="text-green-600 text-center mb-4 font-semibold">Order sent successfully via WhatsApp!</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-xl p-4 space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <button
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              onClick={() => {
                setSelectedProduct(product);
                setOrderSent(false); // Reset message if new order
              }}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-80">
            <h3 className="text-xl font-bold">Buy {selectedProduct.name}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
