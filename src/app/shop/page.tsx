'use client';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

interface Product {
  id: number;
  name: string;
  image: string[];
  actual_price?: string;
  discount_price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Polo colour premium T-shirt',
    discount_price: '₹ 450 Only',
    image: ['/shop/tshirt.jpg', '/shop/tshirtback.png'],
  },
  {
    id: 2,
    name: 'Unruled A4 Premium Notebook (150pg)',
    actual_price: '₹ 150',
    discount_price: '₹ 99 Only',
    image: ['/shop/notebook.png'],
  },
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [payment, setPayment] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orderSent, setOrderSent] = useState(false);
  const [QRshow, setQRshow] = useState(false);
  const [selectedcod, setSelectedcod] = useState(false);
  const [selectedqr, setSelectedqr] = useState(false);

  const handlePayment = (isCOD: boolean) => {
    if (isCOD) {
      setSelectedcod(true);
      setSelectedqr(false);
      setQRshow(false);
      setPayment('Cash on delivery');
    } else {
      setSelectedqr(true);
      setSelectedcod(false);
      setQRshow(true);
      setPayment('QR scanned');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const phoneNumber = '916393169296';
    const message = `Order Details:\nProduct: ${selectedProduct.name}\nName: ${name}\nQuantity: ${quantity}\nSize: ${size}\nPayment: ${payment}`;
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(url, '_blank');
    setOrderSent(true);
    setSelectedProduct(null);
    setName('');
    setQuantity(1);
    setSize('');
    setQRshow(false);
    setSelectedcod(false);
    setSelectedqr(false);
  };

  return (
    <div className="min-h-screen bg-blue-600 font-sans p-8 text-white">
      <Head>
        <title>Shop | Amitesh Tutorials</title>
      </Head>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Shop</h1>
        <p className="text-lg text-blue-100">Explore our latest collection of merchandise.</p>
      </header>

      {orderSent && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center font-semibold mb-8">
          <p>
            Order Noted! You will receive the order at the center shortly. Thank you!
          </p>
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-gray-900 shadow-xl rounded-2xl p-6 space-y-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-full h-80 overflow-y-scroll rounded-xl border border-gray-200">
              {product.image.map((image, index) => (
                <div key={index} className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${product.name} image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl text-center font-bold mt-4">
              {product.name}
            </h2>
            <div className="flex justify-center items-center gap-x-4">
              {product.actual_price && (
                <span className="text-xl text-gray-500 line-through">
                  {product.actual_price}
                </span>
              )}
              <span className="text-2xl font-bold text-red-600">
                {product.discount_price}
              </span>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => {
                setSelectedProduct(product);
                setOrderSent(false);
              }}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-2xl space-y-6 w-full max-w-md animate-scale-up">
            <h3 className="text-2xl font-bold text-center text-gray-900">
              Order {selectedProduct.name}
            </h3>
            <div className="overflow-y-auto max-h-[80vh] px-2 py-4"> {/* Added scrollable container here */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
                {selectedProduct.name.includes('T-shirt') && (
                  <input
                    type="text"
                    placeholder="Size (e.g., S, M, L, XL)"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                  />
                )}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-center text-lg font-semibold text-gray-800">
                    Choose a payment method:
                  </h3>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handlePayment(true)}
                      className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                        selectedcod
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      Cash on Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePayment(false)}
                      className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
                        selectedqr
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      QR Code Scan
                    </button>
                  </div>
                </div>

                {QRshow && (
                  <div className="bg-gray-100 p-6 rounded-xl shadow-inner text-center">
                    <h4 className="text-xl font-bold mb-4 text-gray-800">
                      Scan, Pay, and Submit
                    </h4>
                    <div className="w-48 h-48 mx-auto relative mb-4">
                      <Image
                        src="/shop/qr.jpg"
                        alt="QR Code"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      After scanning, please submit the form to confirm your order.
                    </p>
                  </div>
                )}
              </form>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!payment}
                className="flex-1 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Confirm Order
              </button>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="flex-1 ml-4 bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}