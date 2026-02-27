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

const Matter = () => {
  const content = [
    { 
      q: "Kinetic Theory of Matter", 
      a: "The kinetic theory of matter explains the behavior of particles in solids, liquids, and gases. According to this theory:\n1. All matter is made up of tiny particles (atoms or molecules) that are in constant motion.\n2. The particles have spaces between them, and the amount of space varies depending on the state of matter.\n3. The kinetic energy of particles increases with temperature.\n4. In solids, particles are tightly packed and vibrate in fixed positions.\n5. In liquids, particles are less tightly packed and can move around each other.\n6. In gases, particles are far apart and move freely in all directions." 
    },
     { 
      q: "Change of State of Matter", 
      a: "The change of state of matter refers to the transformation of a substance from one physical state (solid, liquid, gas) to another. This occurs due to changes in temperature and pressure:\n1. Melting: Solid to liquid (e.g., ice to water).\n2. Freezing: Liquid to solid (e.g., water to ice).\n3. Vaporization: Liquid to gas (e.g., water to steam).\n4. Condensation: Gas to liquid (e.g., steam to water).\n5. Sublimation: Solid directly to gas (e.g., dry ice turning into carbon dioxide gas)." 
    },
     { 
      q: "What does a change of state occur?", 
      a: "A change in state occurs when a substance undergoes a physical transformation due to changes in temperature or pressure. For example, when ice is heated, it absorbs energy and melts into water. Conversely, when water is cooled, it releases energy and freezes into ice. The change of state is a physical change because the chemical composition of the substance remains the same, even though its physical form changes." 
    },
    { 
      q: "Law of Conservation of Mass", 
      a: "The law of conservation of mass states that mass is neither created nor destroyed in a chemical reaction. In other words, the total mass of the reactants must equal the total mass of the products in any chemical reaction. This principle is fundamental to understanding chemical reactions and helps in balancing chemical equations." 
    },
     
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Matter</span>
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

export default Matter;