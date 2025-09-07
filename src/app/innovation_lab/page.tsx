'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

interface Book {
  id: string;
  title: string;
  imageUrl: string;
  chapterImages: string[];
}

const books: Book[] = [
  {
    id: 'book1',
    title: 'The Silent Enigma Chp-1',
    imageUrl: '/Innovation_lab/Chp-1/Silent_enigma.jpeg',
    chapterImages: [
      '/Innovation_lab/Chp-1/1.jpeg',
      '/Innovation_lab/Chp-1/2.jpeg',
      '/Innovation_lab/Chp-1/3.jpeg',
      '/Innovation_lab/Chp-1/4.jpeg',
      '/Innovation_lab/Chp-1/5.jpeg',
      '/Innovation_lab/Chp-1/6.jpeg',
      '/Innovation_lab/Chp-1/7.jpeg',
      '/Innovation_lab/Chp-1/8.jpeg',
      '/Innovation_lab/Chp-1/9.jpeg',
      '/Innovation_lab/Chp-1/10.jpeg',
      '/Innovation_lab/Chp-1/11.jpeg',
      '/Innovation_lab/Chp-1/12.jpeg',
    ],
  },
  {
    id: 'book2',
    title: 'The Silent Engima Chp-2',
    imageUrl: '/Innovation_lab/Chp-2/1.0.jpeg',
    chapterImages: [
      '/Innovation_lab/Chp-2/2.0.jpeg',
      '/Innovation_lab/Chp-2/3.0.jpeg',
      '/Innovation_lab/Chp-2/4.0.jpeg',
      '/Innovation_lab/Chp-2/5.0.jpeg',
      '/Innovation_lab/Chp-2/6.0.jpeg',
      '/Innovation_lab/Chp-2/7.0.jpeg',
      '/Innovation_lab/Chp-2/8.0.jpeg',
      '/Innovation_lab/Chp-2/9.0.jpeg',
    ],
  },
];

const BookCard: React.FC<{ book: Book; onClick: (bookId: string) => void }> = ({ book, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 flex flex-col items-center transform hover:scale-105 animate-fade-in-up"
      onClick={() => onClick(book.id)}
      role="button"
      tabIndex={0}
      aria-label={`Open chapters for ${book.title}`}
    >
      <Image
        src={book.imageUrl}
        alt={book.title}
        width={300}
        height={400}
        className="w-full h-auto object-cover rounded-lg mb-4 shadow-md"
      />
      <h3 className="text-xl font-semibold text-gray-800 text-center">{book.title}</h3>
    </div>
  );
};

// Corrected ChapterViewer component to make images fit
interface ChapterViewerProps {
  chapters: string[];
  onClose: () => void;
  bookTitle: string;
}

const ChapterViewer: React.FC<ChapterViewerProps> = ({ chapters, onClose, bookTitle }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const goToNextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  const goToPreviousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 max-w-5xl w-full h-5/6 flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-4xl font-bold p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors z-10"
          onClick={onClose}
          aria-label="Close chapter viewer"
        >
          ×
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 border-b pb-4">
          {bookTitle} - Chapter {currentChapterIndex + 1}
        </h2>

        {/* Chapter Image Display */}
        {/* Make this container relative and give it a flexible height */}
        <div className="relative flex-grow flex items-center justify-center p-4">
          <Image
            src={chapters[currentChapterIndex]}
            alt={`${bookTitle} Chapter ${currentChapterIndex + 1}`}
            layout="fill" // Re-introduce layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-xl"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={goToPreviousChapter}
            disabled={currentChapterIndex === 0}
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Previous Chapter"
          >
            ← Previous
          </button>
          <button
            onClick={goToNextChapter}
            disabled={currentChapterIndex === chapters.length - 1}
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Next Chapter"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
const InnovationLab: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openChapterViewer = (bookId: string) => {
    const book = books.find((b) => b.id === bookId);
    if (book) {
      setSelectedBook(book);
    }
  };

  const closeChapterViewer = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white font-sans overflow-x-hidden">
      <Head>
        <title>Amitesh Tutorials | Innovation Lab</title>
        <meta name="description" content="Explore stories and content created in the Amitesh Tutorials Innovation Lab." />
        <meta name="keywords" content="Innovation Lab, Stories, Amitesh Tutorials, Education" />
      </Head>

      {/* Header - Consistent with Homepage */}
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

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Welcome to the Innovation Lab
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-blue-200">
            Discover a collection of creative works and stories crafted by our talented students.
          </p>
        </section>

        {/* Books Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onClick={openChapterViewer} />
          ))}
        </section>
      </main>

      {selectedBook && (
        <ChapterViewer
          chapters={selectedBook.chapterImages}
          onClose={closeChapterViewer}
          bookTitle={selectedBook.title}
        />
      )}

      {/* Footer - Consistent with Homepage */}
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
              Near BBD University, Lucknow
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
          © Amitesh Tutorials 2025. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default InnovationLab;