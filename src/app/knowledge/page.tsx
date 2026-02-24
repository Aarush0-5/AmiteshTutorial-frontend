'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';


const menuConfig: Record<string, Record<string, string[]>> = {
  "7": {
    "biology": ["Nutrition in Plants", "Respiration in Organisms", "Reproduction in Plants"],
    "socialscience": ["Environment", "Our Changing Earth", "Human Environment"],
    "history": ["Tracing Changes", "New Kings and Kingdoms"]
  },
  "8": {
    "biology": ["Cell Structure", "Microorganisms"],
    "socialscience": ["Resources", "Land and Soil"],
    "history": ["How When and Where", "From Trade to Territory"]
  },
  "9": {
    "biology": ["Aids-to-Health","Dentition","Digestive System","Diversity In Living Organisms", "Economic Importance of Bacteria and Fungi","Flower", "Health Hygiene","Waste Management","Nutrition","Pollination and Fertilisation","Skeleton","Respiratory System","Respiration in Plants","Skin","Structure and Germination of Seeds","The Fundamental Unit of Life", "Tissues"],
    "socialscience": ["Contemporary India", "Economics"],
    "history": ["The French Revolution", "Nazism and the Rise of Hitler"],
    "physics": ["Motion in one Dimension", "Laws of Motion", "Current Electricity", "Energy", "Sound Waves","Fluid Dynamics","Magnetism"],
    "chemistry": ["Chemical Changes and Reactions", "Water", "Language of Chemistry", "Atmospheric Pollution", "Gas Laws", "Atomic Structure and Chemical Bonding", "Hydrogen", "The Periodic Table"]
  }
};

const FlashcardFilterPage = () => {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');

 
  const handleNavigation = () => {
    if (selectedClass && selectedSubject && selectedChapter) {
      const chapterSlug = encodeURIComponent(selectedChapter.replace(/\s+/g, '-'));
      router.push(`/knowledge/${selectedClass}/${selectedSubject}/${chapterSlug}`);
    }
  };

  return (
    <div className="flex flex-col  bg-gray-100 font-sans">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-xl text-blue-800">AMITESH TUTORIALS</span>
          </Link>
          <Link href="/" className="hover:text-red-600 text-black">
          Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Study Materials</h1>
          <p className="text-lg text-gray-600">Select your criteria to view specialized flashcards.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white shadow-xl p-8 rounded-2xl border border-gray-200 space-y-6">
          <h2 className="text-2xl text-gray-800 font-bold text-center">Filter by Topic</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-600">Select Class</label>
              <select 
                value={selectedClass} 
                onChange={e => { setSelectedClass(e.target.value); setSelectedSubject(''); setSelectedChapter(''); }} 
                className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                <option value="">-- Choose Class --</option>
                {Object.keys(menuConfig).map(c => <option key={c} value={c}>Class {c}</option>)}
              </select>
            </div>

            <div className={`flex flex-col transition-opacity ${!selectedClass ? 'opacity-50' : 'opacity-100'}`}>
              <label className="mb-2 text-sm font-medium text-gray-600">Select Subject</label>
              <select 
                disabled={!selectedClass}
                value={selectedSubject} 
                onChange={e => { setSelectedSubject(e.target.value); setSelectedChapter(''); }} 
                className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                <option value="">-- Choose Subject --</option>
                {selectedClass && Object.keys(menuConfig[selectedClass]).map(s => (
                  <option key={s} value={s} className="capitalize">{s}</option>
                ))}
              </select>
            </div>

            <div className={`flex flex-col transition-opacity ${!selectedSubject ? 'opacity-50' : 'opacity-100'}`}>
              <label className="mb-2 text-sm font-medium text-gray-600">Select Chapter</label>
              <select 
                disabled={!selectedSubject}
                value={selectedChapter} 
                onChange={e => setSelectedChapter(e.target.value)} 
                className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                <option value="">-- Choose Chapter --</option>
                {selectedSubject && menuConfig[selectedClass][selectedSubject].map(ch => (
                  <option key={ch} value={ch}>{ch}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transform transition-all active:scale-95"
            onClick={handleNavigation}
            disabled={!selectedChapter}
          >
            GO TO FLASHCARDS →
          </button>
        </div>
      </main>
    </div>
  );
};

export default FlashcardFilterPage;