'use client'
import { useState } from 'react';
import type { NextPage } from 'next';

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
    <div className="space-y-4 max-w-3xl mx-auto mt-8">
      {flashcards.map((card, idx) => (
        <div
          key={idx}
          className="border rounded-lg shadow-sm bg-white overflow-hidden cursor-pointer"
          onClick={() => toggleIndex(idx)}
        >
          <div className="p-4 text-lg font-medium text-gray-800">
            {card.question}
          </div>
          {openIndex === idx && (
            <div className="p-4 border-t text-gray-700 whitespace-pre-line">
              {card.answer}
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

  const fetchFlashcards = async () => {
    if (!selectedClass || !selectedSubject) return;

    try {
      const filePath = `/flashcards/${selectedClass}_${selectedSubject}.txt`;
      const res = await fetch(filePath);
      const text = await res.text();
      const json = JSON.parse(text);
      setFlashcards(json);
    } catch (err) {
      console.error('Error loading flashcards:', err);
      setFlashcards([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 px-4 py-10 space-y-6">
      <div className="max-w-xl mx-auto bg-blue-600 shadow p-6 rounded-xl space-y-4">
        <h2 className="text-xl text-white font-bold text-center">Select Class & Subject</h2>
        <div className="flex flex-col gap-4">
          <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="border p-2 rounded">
            <option value="">Select Class</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
          </select>

          <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} className="border p-2 rounded">
            <option value="">Select Subject</option>
            <option value="biology">Biology</option>
            <option value="socialscience">Social science</option>
          </select>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:text-black"
            onClick={fetchFlashcards}
          >
            PRESENT THE QUESTIONS !
          </button>
        </div>
      </div>

      {flashcards.length > 0 && <FlashcardList flashcards={flashcards} />}
    </div>
  );
};

export default FlashcardPage;
