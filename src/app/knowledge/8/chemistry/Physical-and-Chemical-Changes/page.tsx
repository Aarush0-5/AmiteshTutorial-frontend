'use client';
import { useState } from 'react';

const Flashcard = ({ question, answer }: { question: string; answer: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'my-rotate-y-180' : ''}`}>
        
        <div className="absolute w-full h-full backface-hidden bg-white border-2 border-blue-500 rounded-2xl flex flex-col items-center justify-center p-6 shadow-md hover:shadow-xl transition-shadow">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Question</span>
          <h2 className="text-xl font-bold text-gray-800 text-center leading-tight">
            {question}
          </h2>
          <p className="mt-4 text-sm text-gray-400">Click to reveal answer</p>
        </div>
       
        <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white rounded-2xl flex flex-col items-center justify-start p-6 my-rotate-y-180 shadow-inner">
          <span className="text-blue-200 font-bold uppercase tracking-widest text-[10px] mb-2 sticky top-0 bg-blue-600 w-full text-center pb-2">
            Answer
          </span>
          <div className="overflow-y-auto w-full pr-1 custom-scrollbar">
            <p className="text-sm md:text-base leading-relaxed text-center whitespace-pre-line">
              {answer}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const Changes = () => {
  const content = [
    { 
      q: "Physical vs Chemical Changes", 
      a: "Physical changes are those in which the form or appearance of a substance changes but its chemical composition remains the same. Examples include melting of ice, boiling of water, and tearing of paper.\nChemical changes involve the formation of new substances with different chemical properties. Examples include rusting of iron, burning of wood, and digestion of food." 
    },
     { 
      q: "Characteristics of Physical Changes", 
      a: "Physical changes are characterized by:\n1. No new substances are formed.\n2. The change is usually reversible.\n3. The chemical composition of the substance remains the same.\n4. Examples include melting, freezing, evaporation, and dissolution.\n5. Physical changes often involve changes in state, shape, or size." 
    },
     { 
      q: "Characteristics of Chemical Changes", 
      a: "Chemical changes are characterized by:\n1. Formation of new substances with different chemical properties.\n2. The change is usually irreversible.\n3. Energy changes (absorption or release) often occur during chemical changes.\n4. Examples include rusting of iron, burning of wood, and digestion of food.\n5. Chemical changes involve breaking and forming chemical bonds between atoms." 
    },
    { 
      q: "Energy changes in Physical and Chemical Changes", 
      a: "In physical changes, energy is usually absorbed or released but no new substances are formed. For example, when ice melts, it absorbs heat energy from the surroundings.\nIn chemical changes, energy changes are more significant and often accompany the formation of new substances. For example, when wood burns, it releases heat and light energy. Chemical reactions can be endothermic (absorb energy) or exothermic (release energy)." 
    },
     { 
      q: "Endothermic vs Exothermic Changes" ,
      a: "Endothermic changes absorb energy (usually in the form of heat) from the surroundings. Examples include melting of ice and photosynthesis.\nExothermic changes release energy (usually in the form of heat) to the surroundings. Examples include burning of wood and rusting of iron." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Physical and Chemical Changes</span>
          </h1>
          <p className="text-gray-600 italic">Click any card to flip it and reveal the answer.</p>
        </header>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <Flashcard key={index} question={item.q} answer={item.a} />
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2026 Amitesh Tutorials - Master Chemistry Chapter-wise</p>
        </footer>
      </div>
    </div>
  );
};

export default Changes;