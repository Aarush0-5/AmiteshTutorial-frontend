"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Occasion {
  name: string;
  photos: string[];
}

const data: Occasion[] = [
  {
    name: 'Christmas 2024',
    photos: ['/gallery/img7.jpg', '/gallery/img3.jpg', '/gallery/img2.jpg', '/gallery/img4.jpg', '/gallery/img5.jpg', '/gallery/img1.jpg'],
  },
  {
    name: 'Republic Day 2025',
    photos: ['/gallery/rep42025.jpg', '/gallery/rep22025.jpg', '/gallery/rep2025.jpg', '/gallery/rep32025.jpg'],
  },
  {
    name: 'Vasant Panchmi 2025',
    photos: ['/gallery/vp20258.jpg','/gallery/vp20252.jpg', '/gallery/vp20253.jpg', '/gallery/vp20254.jpg', '/gallery/vp20257.jpg', '/gallery/vp20256.jpg' , '/gallery/vp20251.jpg'],
  },
  {
    name: 'ScholarShip Exam 2025',
    photos: ['/gallery/st25.jpg','/gallery/st251.jpg', '/gallery/st252.jpg', '/gallery/st253.jpg', '/gallery/st254.jpg', '/gallery/st255.jpg' , '/gallery/st256.jpg', '/gallery/st257.jpg', '/gallery/st258.jpg'],
  },
];

const Gallery: React.FC = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);

  const handleOccasionClick = (occasion: string) => {
    setSelectedOccasion(selectedOccasion === occasion ? null : occasion);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-center whitespace-nowrap text-4xl font-bold font-serif bg-blue-600 underline underline-offset-4 text-white mb-5 p-5">Welcome to Gallery!</h1>
      <div className="flex flex-col lg:flex-row flex-grow">
        <aside className="w-full lg:w-1/4 p-4 overflow-y-auto bg-gray-500">
          <ul>
            {data.map((occasion) => (
              <li key={occasion.name}>
                <h2
                  className="cursor-pointer font-serif bg-black text-white font-bold text-xl p-3 mb-2"
                  onClick={() => handleOccasionClick(occasion.name)}
                >
                  {occasion.name}
                </h2>
              </li>
            ))}
          </ul>
        </aside>
        <main className="w-full lg:w-3/4 p-4 bg-gray-200 flex-grow">
          {selectedOccasion === null && (
            <div className="flex justify-center items-center h-full text-3xl text-gray-500">
              Choose an occasion
            </div>
          )}
          {data.map((occasion) => (
            <div
              key={occasion.name}
              className={`mt-5 bg-gray-100 p-4 rounded-lg shadow-lg ${selectedOccasion === occasion.name ? 'block' : 'hidden'}`}
            >
              <h2 className="text-3xl text-center font-bold underline mb-8">{occasion.name}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {occasion.photos.map((photo, index) => (
                  <div key={index} className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <Image src={photo} alt={`${occasion.name} ${index + 1}`} width={500} height={500} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      <footer className="mt-4 flex flex-row justify-center items-center text-3xl text-center font-semibold bg-blue-600 text-white p-4">
        More on: <a href="https://www.instagram.com/amiteshtutorials/" className="ml-2"><Image src="/instagramm.png" alt="Insta's logo" width={70} height={70} /></a>
      </footer>
    </div>
  );
};

export default Gallery;
