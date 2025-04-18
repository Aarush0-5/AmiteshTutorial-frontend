'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'T-shirt',
    price: 149,
    image: '/shop/tshirt.jpg',
  },
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [cod, setCod] = useState(true);
  const [payment , setPayment] = useState('')
  const [quantity, setQuantity] = useState(1);
  const [orderSent, setOrderSent] = useState(false);
  const [QRshow, setQRshow] = useState(false);
  const [selectedcod , setSelectedcod] = useState(false);
  const [selectedqr , setSelectedqr] = useState(false);

  const handlePayment = (cod:boolean) => {
    if (cod) {
      setSelectedcod(true);
      setSelectedqr(false);
      setQRshow(false)
      setPayment("Cash on delivery");
    }
    if (!cod) {
      setCod(false);
      setSelectedqr(true)
      setSelectedcod(false)
      setQRshow(true)
      setPayment("QR scanned")
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
    setSize('')
    setQRshow(false)
    setSelectedcod(false);
    setSelectedqr(false);
  };


  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-indigo-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>

      {orderSent && (
       <p className="text-green-600 text-center mb-4 font-semibold">Order Noted, You will receive the order at the center!</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-xl p-4 space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-md"
            />
            <h2 className="text-xl text-center font-semibold">{product.name}</h2>
            <h2 className="text-xl text-center font-semibold">₹ {product.price} only !</h2>
            <button
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
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
                type="text"
                placeholder="Size"
                onChange={(e) => setSize(e.target.value)}
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
              <div className="flex flex-col gap-y-2">
                <h3 className="text-center">Choose a payment method :  </h3>
                <button type="button" onClick={() => handlePayment( cod )} className = {selectedcod ? "text-green-600" :"text-black"} >Cash On delivery </button>
                <button type="button" onClick={() => handlePayment( !cod )} className = {selectedqr ? "text-green-600" : "text-black"}>QR code scan </button>
              </div>
              {QRshow && 
              (<div className="bg-white p-4 rounded-md shadow-lg space-y-4">
                <h4 className="text-center text-l font-semibold">Scan , Pay and Submit</h4>
                <img src="/shop/qr.jpg" alt="QR Code" className="w-full h-auto" />
              </div>)}
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
