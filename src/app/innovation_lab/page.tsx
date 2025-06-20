"use client";



import React, { useState } from 'react';


interface Book {
  id: string;
  title: string;
  imageUrl: string;
  chapterImages: string[];
}


const books: Book[] = [
  {
    id: 'book1',
    title: 'The Silent Enigma',
    imageUrl: './Innovation_lab/Chp-1/Silent_enigma.jpeg',
    chapterImages: [
      './Innovation_lab/Chp-1/1.jpeg',
      './Innovation_lab/Chp-1/2.jpeg',
      './Innovation_lab/Chp-1/3.jpeg',
      './Innovation_lab/Chp-1/4.jpeg',
      './Innovation_lab/Chp-1/5.jpeg',
      './Innovation_lab/Chp-1/6.jpeg',
      './Innovation_lab/Chp-1/7.jpeg',
      './Innovation_lab/Chp-1/8.jpeg',
      './Innovation_lab/Chp-1/9.jpeg',
      './Innovation_lab/Chp-1/10.jpeg',
      './Innovation_lab/Chp-1/11.jpeg',
      './Innovation_lab/Chp-1/12.jpeg',
      ]
      ,}
];


interface BookCardProps {
  book: Book;
  onClick: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 flex flex-col items-center transform hover:scale-105"
      onClick={() => onClick(book.id)}
      role="button" 
      tabIndex={0} 
      aria-label={`Open chapters for ${book.title}`} 
    >
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-48 h-64 object-cover rounded-lg mb-4 shadow-md"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/300x400/CCCCCC/666666?text=Image+Error`;
          e.currentTarget.alt = "Image not available";
        }}
      />
      <h3 className="text-xl font-semibold text-gray-800 text-center">{book.title}</h3>
    </div>
  );
};


interface ChapterViewerProps {
  chapters: string[];
  onClose: () => void;
  bookTitle: string; 
}

const ChapterViewer: React.FC<ChapterViewerProps> = ({ chapters, onClose, bookTitle }) => {
  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl p-6 max-w-4xl w-full h-5/6 flex flex-col">
        
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl font-bold p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          onClick={onClose}
          aria-label="Close chapter viewer"
        >
          &times; 
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">{bookTitle} - Chapters</h2>

        
        <div className="flex flex-grow  oxerflow-x-hidden overflow-y-hidden space-x-6 pb-4 items-center justify-start hide-scrollbar">
          {chapters.map((chapterImg, index) => (
            <div key={index} className="flex-shrink-0  flex flex-col items-center justify-center h-full">
              <img
                src={chapterImg}
                alt={`${bookTitle} Chapter ${index + 1}`}
                className="max-h-full max-w-full object-contain rounded-lg shadow-xl border-2 border-gray-700"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/800x600/999999/FFFFFF?text=Chapter+Image+Error`;
                  e.currentTarget.alt = "Chapter image not available";
                }}
              />
              <p className="mt-2 text-lg text-gray-400">Chapter {index + 1}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Scroll right to view more chapters &rarr;
        </p>

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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white font-inter">
      <header className="py-8 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 pb-2">
          Innovation Lab
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
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

      <style>
        {`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        `}
      </style>
    </div>
  );
};

export default InnovationLab;
