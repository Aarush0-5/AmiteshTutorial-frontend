'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Head from "next/head"
import Link from 'next/link'; 

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
  {
    name: 'Annual Sports Day 2025',
    photos: ['/gallery/sd251.jpg', '/gallery/sd253.jpg', '/gallery/sd2518.jpg', '/gallery/sd255.jpg', '/gallery/sd256.jpg' , '/gallery/sd258.jpg', '/gallery/sd259.jpg','/gallery/sd2510.jpg','/gallery/sd2512.jpg','/gallery/sd2513.jpg','/gallery/sd2514.jpg','/gallery/sd2515.jpg','/gallery/sd2516.jpg','/gallery/sd2517.jpg','/gallery/sd254.jpg'],
  },
  {
    name: 'Independence Day 2025',
    photos: ['/gallery/ID250.jpg', '/gallery/ID251.jpg', '/gallery/ID252.jpg', '/gallery/ID253.jpg', '/gallery/ID254.jpg', '/gallery/ID255.jpg' ]
  },
  {
    name: 'Educational Excursion 2025',
    photos: ['/gallery/EE1.jpg', '/gallery/EE2.jpg', '/gallery/EE3.jpg', '/gallery/EE4.jpg', '/gallery/EE5.jpg', '/gallery/EE6.jpg' ]
  },
];

const Gallery: React.FC = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);

  const handleOccasionClick = (occasion: string) => {
    setSelectedOccasion(selectedOccasion === occasion ? null : occasion);
  };

  return (
    <>
      <Head>
        <title>Amitesh Tutorials | Gallery</title>
        <meta name="description" content="Explore the gallery of Amitesh Tutorials, showcasing our events and activities."/>
        <meta name="keywords" content="Coaching, Tutorials, Study, Amitesh Tutorials, Gallery, Events, Photos"/>
      </Head>

      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 min-h-screen text-white font-sans overflow-x-hidden">
        <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-xl sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Amitesh Tutorials Logo" width={75} height={75} />
              <span className="font-bold text-2xl lg:text-3xl text-yellow-300">AMITESH TUTORIALS</span>
            </Link>
            <nav>
              <Link href="/" className="bg-white text-blue-800 px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
               Home
              </Link>
            </nav>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-8 lg:space-y-12">
          
       
          <section className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Moments from Our Journey
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-blue-200">
              A collection of memories, events, and milestones from our coaching center.
            </p>
          </section>

         
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 animate-fade-in-up delay-100">
            {/* Occasion Navigation - Modernized Sidebar */}
            <aside className="w-full lg:w-1/4 p-6 bg-white rounded-3xl shadow-2xl overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Select an Occasion</h2>
              <ul className="space-y-2">
                {data.slice().reverse().map((occasion) => (
                  <li key={occasion.name}>
                    <button
                      className={`w-full text-left p-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        selectedOccasion === occasion.name
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleOccasionClick(occasion.name)}
                    >
                      {occasion.name}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

           
            <main className="w-full lg:w-3/4 p-6 bg-white rounded-3xl shadow-2xl flex-grow">
              {selectedOccasion === null && (
                <div className="flex justify-center items-center h-full text-2xl md:text-3xl text-gray-500 font-medium text-center">
                  <p>Please choose an occasion from the list to view photos.</p>
                </div>
              )}
              {data.map((occasion) => (
                <div
                  key={occasion.name}
                  className={`${selectedOccasion === occasion.name ? 'block animate-fade-in' : 'hidden'}`}
                >
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{occasion.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {occasion.photos.map((photo, index) => (
                      <div key={index} className="relative aspect-square rounded-xl shadow-lg overflow-hidden group">
                        <Image 
                          src={photo} 
                          alt={`${occasion.name} photo ${index + 1}`} 
                          layout="fill" 
                          objectFit="cover" 
                          className="transition-transform duration-500 transform group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>

    
        <footer className="bg-gray-900 text-gray-300 mt-16 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <Image src="/logo.jpg" alt="Amitesh Tutorials Logo" width={80} height={80} className="rounded-full" />
              <p className="text-blue-200 text-sm">Empowering students, one lesson at a time.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-white text-lg mb-2">Contact Us</h3>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2 2A18.06 18.06 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 11.23 11.23 0 0 0 5 10c-.79.79-1.58 1.58-2.37 2.37a2 2 0 0 0-.29 2.11z"></path></svg>
                6393169296
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                amiteshtutorials@gmail.com
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-white text-lg mb-2">Location</h3>
               <a href="https://maps.app.goo.gl/8F73q8mDTj3Zktcz5" className="flex items-center justify-center md:justify-start gap-2 text-sm text-blue-400 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
             Branch 1: Near BBD University, Lucknow
            </a>
              <a
                href=""
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-blue-400 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Branch 2: Omega Shopping Centre, Omega Green Park, Lucknow
              </a>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
            © Amitesh Tutorials 2025. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Gallery;