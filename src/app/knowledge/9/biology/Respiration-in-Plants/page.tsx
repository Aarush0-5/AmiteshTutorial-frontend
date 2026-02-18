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

const RespirationinPlants= () => {
  const content = [
    { 
      q: "What is respiration?", 
      a: "Respiration is a metabolic process that occurs in all living organisms, including plants, where glucose (or other organic molecules) is broken down in the presence of oxygen to produce energy in the form of adenosine triphosphate (ATP). This process also releases carbon dioxide and water as byproducts. In plants, respiration occurs in the mitochondria of cells and is essential for providing energy for various cellular activities, including growth, development, and maintenance." 
    },
     { 
      q: "Eqaution of respiration" ,
      a: "Equation of respiration: C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy (ATP)" 
    },
     { 
      q: "Characteristics of respiration", 
      a: "Characteristics of respiration include: \n 1) It is a catabolic process that breaks down complex molecules into simpler ones, releasing energy. \n 2) It occurs in the mitochondria of cells, where glucose is oxidized to produce ATP. \n 3) It requires oxygen (aerobic respiration) or can occur in the absence of oxygen (anaerobic respiration). \n 4) It produces carbon dioxide and water as byproducts. \n 5) It is essential for providing energy for various cellular activities and maintaining the overall metabolism of the organism." 
    },
    { 
      q: "Glycolysis vs Kreb's Cycle", 
      a: "Glycolysis is the first step of cellular respiration that occurs in the cytoplasm of cells. It involves the breakdown of one molecule of glucose (C6H12O6) into two molecules of pyruvate (C3H4O3), producing a net gain of 2 ATP molecules and 2 NADH molecules. Glycolysis does not require oxygen and can occur under anaerobic conditions. \n Kreb's Cycle, also known as the Citric Acid Cycle or TCA Cycle, is the second step of cellular respiration that occurs in the mitochondria. It involves the oxidation of acetyl-CoA (derived from pyruvate) to produce carbon dioxide, ATP, NADH, and FADH2. The Kreb's Cycle requires oxygen and is an aerobic process that generates a significant amount of energy for the cell." 
    },
    { 
      q: "Respiration vs Burning", 
      a: "Respiration and burning are both processes that involve the release of energy, but they differ in several key ways: \n 1) Respiration is a biological process that occurs in living organisms, while burning is a chemical process that occurs in non-living materials. \n 2) Respiration involves the breakdown of organic molecules (like glucose) to produce energy, while burning involves the rapid oxidation of a fuel (like wood or gasoline) to produce heat and light. \n 3) Respiration is a controlled process that occurs at a moderate temperature, while burning is an uncontrolled process that occurs at high temperatures. \n 4) Respiration produces carbon dioxide and water as byproducts, while burning produces carbon dioxide, water, and other gases depending on the fuel being burned." 
    },
    { 
      q: "Respiration in plants", 
      a: "In plants respiration occurs in the mitochondria of cells, where glucose is broken down in the presence of oxygen to produce energy (ATP), carbon dioxide, and water. This process is essential for providing energy for various cellular activities, including growth, development, and maintenance. Plants also perform photosynthesis, which is the process of converting light energy into chemical energy stored in glucose. The glucose produced during photosynthesis can be used in respiration to generate ATP, which is necessary for the plant's metabolic processes." 
    },
     { 
      q: "What are Pneumatophores", 
      a: "Pneumatophores are specialized aerial roots that grow upwards from the underground root system of certain plants, particularly those that grow in waterlogged or swampy environments. They are commonly found in mangrove species and serve the purpose of facilitating gas exchange for the submerged root system. Pneumatophores have small pores called lenticels that allow oxygen to enter and carbon dioxide to exit, enabling the plant to survive in oxygen-poor conditions. These roots help the plant to obtain the necessary oxygen for respiration while preventing water from entering the root system." 
    },
     { 
      q: "Aerobic vs Anaerobic respiration", 
      a: "Aerobic respiration is a type of cellular respiration that requires oxygen to produce energy. It involves the complete breakdown of glucose into carbon dioxide and water, resulting in a high yield of ATP (approximately 36-38 ATP molecules per glucose molecule). Anaerobic respiration, on the other hand, occurs in the absence of oxygen and results in the partial breakdown of glucose. It produces less energy (approximately 2 ATP molecules per glucose molecule) and generates byproducts such as lactic acid (in animals) or ethanol and carbon dioxide (in yeast and some bacteria). Aerobic respiration is more efficient than anaerobic respiration in terms of energy production." 
    },
     { 
      q: "Respiration vs Photosynthesis", 
      a: "Respiration and photosynthesis are two fundamental biological processes that occur in plants, but they serve opposite functions. Photosynthesis is the process by which plants convert light energy into chemical energy stored in glucose (C6H12O6) using carbon dioxide and water, releasing oxygen as a byproduct. The equation for photosynthesis is: 6CO2 + 6H2O + light energy → C6H12O6 + 6O2. \n Respiration, on the other hand, is the process by which plants break down glucose in the presence of oxygen to produce energy (ATP), carbon dioxide, and water. The equation for respiration is: C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy (ATP). \n In summary, photosynthesis captures energy from sunlight to create glucose, while respiration releases energy from glucose to power cellular activities." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Respiration in plants</span>
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

export default RespirationinPlants;