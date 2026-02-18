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
        <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white rounded-2xl flex flex-col items-center justify-center p-8 my-rotate-y-180 shadow-inner overflow-y-auto">
          <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2">Answer</span>
          <p className="text-base leading-relaxed text-center">
            {answer}
          </p>
        </div>

      </div>
    </div>
  );
};

const Dentition= () => {
  const content = [
    { 
      q: "Structure of Teeth", 
      a: "Root: The part of the tooth that is embedded in the jawbone and anchors the tooth in place. It is covered by cementum, a hard substance that helps attach the tooth to the surrounding bone.\n Crown: The visible part of the tooth above the gumline. It is covered by enamel, the hardest substance in the human body, which protects the tooth from decay and damage.\n Neck: The narrow region where the root and crown meet, located at the gumline.\n Pulp Cavity: The central part of the tooth that contains the dental pulp, which consists of nerves and blood vessels that nourish the tooth and provide sensation.\nEnamel: The hard, outer layer that covers the crown of the tooth and protects it from decay and damage.\n Dentin: The layer beneath the enamel that forms the bulk of the tooth. It is less hard than enamel and contains microscopic tubules that can transmit sensations to the dental pulp.\n Cementum: The layer that covers the root of the tooth and helps anchor it to the jawbone. It is softer than enamel and dentin." 
    },
     { 
      q: "Characteristics of teeth" ,
      a: "Thecodont: Teeth are set in sockets within the jawbone, which provides stability and support.\n Heterodont: Humans have different types of teeth (incisors, canines, premolars, and molars) that serve different functions in the process of chewing and breaking down food.\n Diphyodont: Humans develop two sets of teeth in their lifetime - primary (baby) teeth and permanent (adult) teeth. The primary teeth are eventually replaced by the permanent teeth as a person grows." 
    },
     { 
      q: "Types of teeth", 
      a: "Incisors: The front teeth that are sharp and chisel-shaped, used for cutting and biting food. Humans typically have 8 incisors (4 on the upper jaw and 4 on the lower jaw).\n Canines: The pointed teeth located next to the incisors, used for tearing and gripping food. Humans typically have 4 canines (2 on the upper jaw and 2 on the lower jaw).\n Premolars: The teeth located behind the canines, used for crushing and grinding food. Humans typically have 8 premolars (4 on the upper jaw and 4 on the lower jaw).\n Molars: The large, flat teeth located at the back of the mouth, used for grinding and chewing food. Humans typically have 12 molars (6 on the upper jaw and 6 on the lower jaw), including the wisdom teeth." 
    },
    { 
      q: "Dentition formula", 
      a: "The dentition formula is a way to represent the number and types of teeth in a species. It is typically written as a fraction, with the number of teeth in the upper jaw (maxillary) over the number of teeth in the lower jaw (mandibular)." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Dentition</span>
          </h1>
          <p className="text-gray-600 italic">Click any card to flip it and reveal the answer.</p>
        </header>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <Flashcard key={index} question={item.q} answer={item.a} />
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2026 Amitesh Tutorials - Master Biology Chapter-wise</p>
        </footer>
      </div>
    </div>
  );
};

export default Dentition;