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

const HeatandEnergy= () => {
  const content = [
    { 
      q: "Defining Energy and its types", 
      a: "Energy is the capacity or ability to do work. It exists in various forms such as kinetic energy (energy of motion), potential energy (stored energy due to position or configuration), thermal energy (heat energy), electrical energy, chemical energy, nuclear energy, and light energy. The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another." 
    },
     { 
      q: "Heat vs Temperature" ,
      a: "Heat is the total kinetic energy of the particles in a substance, while temperature is the average kinetic energy of the particles in a substance. Heat is measured in joules (J), while temperature is measured in degrees Celsius (°C) or Kelvin (K). An increase in heat does not necessarily mean an increase in temperature, as heat can be used to change the state of matter without changing its temperature." 
    },
     { 
      q: "Conversion of temperature from Celsius to Fahrenheit and vice versa", 
      a: "To convert from Celsius to Fahrenheit: F = (9/5 x C) + 32\nTo convert from Fahrenheit to Celsius: C = (5/9 x (F - 32))\nFor example, 0°C is equal to 32°F, and 100°C is equal to 212°F." 
    },
    { 
      q: "Conversion of temperature from Celsius to Kelvin and vice versa", 
      a: "To convert from Celsius to Kelvin: K = C + 273.15\nTo convert from Kelvin to Celsius: C = K - 273.15\nFor example, 0°C is equal to 273.15 K, and 100°C is equal to 373.15 K." 
    },
    { 
      q: "Conversion of temperature from Fahrenheit to Kelvin and vice versa",
      a: "To convert from Fahrenheit to Kelvin: K = (5/9 x (F - 32)) + 273.15\nTo convert from Kelvin to Fahrenheit: F = (9/5 x (K - 273.15)) + 32\nFor example, 32°F is equal to 273.15 K, and 0°C is equal to 32°F." 
    },
    { 
      q: "Thermal Expansion",
      a: "Thermal expansion refers to the increase in size or volume of a substance when it is heated. This occurs because the particles in a substance gain kinetic energy and move more vigorously, causing them to occupy more space. The amount of expansion depends on the material and the temperature change. For example, metals typically expand more than liquids or gases when heated. Three types of thermal expansion are linear expansion (change in length), area expansion (change in surface area), and volume expansion (change in volume)." 
    },
    { 
      q: "Anamolous Expansion of Water",
      a: "Water exhibits anomalous expansion, meaning it contracts when heated from 0°C to 4°C and expands when heated above 4°C. This is because water has a unique molecular structure that causes it to be densest at 4°C. This property is crucial for aquatic life, as it allows ice to float on water surfaces, insulating the water below and preventing it from freezing solid.Hope's Explanation: The anomalous expansion of water is due to the hydrogen bonding between water molecules. As water cools from 4°C to 0°C, the hydrogen bonds cause the molecules to arrange themselves in a more open structure, which takes up more space and results in expansion. When water is heated above 4°C, the increased kinetic energy causes the molecules to move more freely, breaking some of the hydrogen bonds and allowing the molecules to come closer together, resulting in contraction." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Heat and Energy</span>
          </h1>
          <p className="text-gray-600 italic">Click any card to flip it and reveal the answer.</p>
        </header>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <Flashcard key={index} question={item.q} answer={item.a} />
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2026 Amitesh Tutorials - Master Physics Chapter-wise</p>
        </footer>
      </div>
    </div>
  );
};

export default HeatandEnergy;