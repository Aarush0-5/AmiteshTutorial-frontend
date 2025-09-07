'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

interface FlashcardProps {
  question: string;
  answer: string;
}

const FlashcardList = ({ flashcards }: { flashcards: FlashcardProps[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto mt-10">
      {flashcards.map((card, idx) => (
        <div
          key={`${idx}-${card.question}`}
          className="border border-gray-200 rounded-xl shadow-lg bg-white overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          onClick={() => toggleIndex(idx)}
        >
          <div className="p-6 text-xl font-semibold text-gray-900 bg-gray-50 flex justify-between items-center">
            <span>{card.question}</span>
            <svg
              className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                openIndex === idx ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {openIndex === idx && (
            <div className="p-6 text-gray-700 bg-white border-t border-gray-200 animate-fade-in-down">
              <p className="whitespace-pre-line leading-relaxed">{card.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FlashcardPage: NextPage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [flashcards, setFlashcards] = useState<FlashcardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFlashcards = async () => {
    if (!selectedClass || !selectedSubject) {
      setError('Please select both a class and a subject.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setFlashcards([]);

    try {
      const filePath = `/flashcards/${selectedClass}_${selectedSubject}.json`;
      const res = await fetch(filePath);
      
      if (!res.ok) {
        throw new Error(`Failed to load flashcards. Please check if the file exists: ${res.status}`);
      }

      const json = await res.json();
      setFlashcards(json);
    } catch (err) {
      console.error('Error loading flashcards:', err);
      setError('An error occurred while loading flashcards. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Head>
        <title>Flashcards | Amitesh Tutorials</title>
      </Head>

      <header className="bg-white shadow-sm p-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Amitesh Tutorials Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-xl text-blue-800">AMITESH TUTORIALS</span>
          </Link>
          <nav>
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
               Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Flashcards</h1>
          <p className="text-lg text-gray-600">Master key concepts with interactive flashcards.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-blue-50 shadow-lg p-8 rounded-2xl border border-blue-100 space-y-6">
          <h2 className="text-2xl text-gray-800 font-bold text-center">Select Your Subject</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="class-select" className="mb-2 text-sm font-medium text-gray-600">
                Class
              </label>
              <select 
                id="class-select"
                value={selectedClass} 
                onChange={e => setSelectedClass(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="">Select Class</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject-select" className="mb-2 text-sm font-medium text-gray-600">
                Subject
              </label>
              <select 
                id="subject-select"
                value={selectedSubject} 
                onChange={e => setSelectedSubject(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="">Select Subject</option>
                <option value="biology">Biology</option>
                <option value="socialscience">Social science</option>
                <option value="history">History</option>
              </select>
            </div>
          </div>

          <button
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
            onClick={fetchFlashcards}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'PRESENT THE QUESTIONS!'}
          </button>
          
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
              {error}
            </div>
          )}
        </div>

        {flashcards.length > 0 && <FlashcardList flashcards={flashcards} />}
      </main>

      <footer className="bg-gray-900 text-gray-400 mt-16 p-8 text-center text-sm">
        <p>© 2025 Amitesh Tutorials. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FlashcardPage;