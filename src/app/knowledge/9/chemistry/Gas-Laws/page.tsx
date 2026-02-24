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

const GasLaws= () => {
  const content = [
    { 
      q: "Kinetic Molecular Theory of Gases", 
      a: "The Kinetic Molecular Theory of Gases describes the behavior of gas particles. According to this theory:\n 1. Gas particles are in constant, random motion.\n 2. The volume of individual gas particles is negligible compared to the volume of the container.\n 3. There are no attractive or repulsive forces between gas particles.\n 4. Collisions between gas particles and with the walls of the container are perfectly elastic (no energy is lost).\n 5. The average kinetic energy of gas particles is directly proportional to the absolute temperature." 
    },
     { 
      q: "Properties of gases", 
      a: "Gases have several distinct properties:\n 1. They have no definite shape or volume and expand to fill any container.\n 2. They are highly compressible due to the large spaces between gas particles.\n 3. They exert pressure on the walls of their container due to collisions with the particles.\n 4. They diffuse rapidly and mix uniformly with other gases.\n 5. Their behavior is governed by gas laws such as Boyle's Law, Charles's Law, and Gay-Lussac's Law.\nThey are highly expandable and can be easily compressed, making them useful in various applications such as in engines, balloons, and air conditioning systems.\nDiffusion is the process by which gas particles spread out and mix with other gases, and it occurs more rapidly in gases than in liquids or solids due to the greater kinetic energy of gas particles." 
    },
     { 
      q: "Absolute zero and its significance", 
      a: "Absolute zero is the theoretical temperature at which all molecular motion stops. It is defined as 0 Kelvin (0 K), which is equivalent to -273.15°C or -459.67°F. At absolute zero, the kinetic energy of particles is at its minimum value, and no heat energy can be extracted from a system. This concept is fundamental in thermodynamics and helps explain the behavior of gases and other substances at very low temperatures." 
    },
    { 
      q: "Boyle's Law", 
      a: "Boyle's Law states that for a fixed amount of gas at constant temperature, the pressure of the gas is inversely proportional to its volume. Mathematically, it is expressed as P1V1 = P2V2=constant, where P1 and V1 are the initial pressure and volume, and P2 and V2 are the final pressure and volume. This law explains how gases behave when compressed or expanded at constant temperature.\nIts derivation is based on the Kinetic Molecular Theory, which assumes that gas particles are in constant motion and that their collisions with the walls of the container create pressure. When the volume decreases, the particles collide more frequently with the walls, increasing the pressure, and vice versa." 
    },
    { 
      q: "Significance of Boyle's Law in real life",
      a: "Boyle's Law has several practical applications in real life:\n 1. In the operation of syringes, when the plunger is pulled back, the volume inside increases, causing a decrease in pressure and allowing fluid to be drawn in.\n 2. In scuba diving, as divers descend deeper into water, the pressure increases and the volume of air in their lungs decreases according to Boyle's Law.\n 3. In car engines, the compression stroke compresses the air-fuel mixture, increasing its pressure and temperature.\n 4. In weather balloons, as they rise higher into the atmosphere, the external pressure decreases and the volume of gas inside expands." 
    },
    { 
      q: "Charles's Law", 
      a: "Charles's Law states that for a fixed amount of gas at constant pressure, the volume of the gas is directly proportional to its absolute temperature. Mathematically, it is expressed as V1/T1 = V2/T2 = constant, where V1 and T1 are the initial volume and temperature, and V2 and T2 are the final volume and temperature. This law explains how gases expand or contract when heated or cooled at constant pressure.\nIts derivation is based on the Kinetic Molecular Theory, which assumes that gas particles move faster when heated, increasing their kinetic energy and causing them to occupy more space (i.e., increase in volume)." 
    },
     { 
      q: "Significance of Charles's Law in real life", 
      a: "Charles's Law has several practical applications in real life:\n 1. In hot air balloons, heating the air inside increases its volume and decreases its density, causing the balloon to rise.\n 2. In car tires, the volume of air inside increases with temperature, which can affect tire pressure.\n 3. In cooking, when food is heated in an oven, the gases inside expand according to Charles's Law.\n 4. In weather systems, changes in temperature affect the volume of air masses, influencing atmospheric pressure and weather patterns." 
    },
     { 
      q: "Gas Equation and its applications", 
      a: "The gas equation, also known as the ideal gas equation, is given by PV/T = Constant, where P is pressure, V is volume, , and T is temperature in Kelvin. This equation combines Boyle's Law, Charles's Law, into a single relationship that describes the behavior of an ideal gas.\nApplications of the gas equation include:\n 1. Calculating unknown quantities in gas problems (pressure, volume, temperature, or number of moles).\n 2. Determining the molar mass of a gas by measuring its density at known conditions.\n 3. Predicting how gases will behave under different conditions of pressure and temperature.\n 4. Understanding the behavior of gases in various industrial processes and laboratory experiments."
    },
     { 
      q: "Standard Temperature and Pressure (STP)", 
      a: "Standard Temperature and Pressure (STP) refers to a set of standard conditions used in scientific calculations and experiments. STP is defined as a temperature of 0°C (273.15 K) and a pressure of 1 atmosphere (1 atm or 101.325 kPa). These conditions are used to compare the behavior of gases under standardized conditions.\nAt STP, one mole of any ideal gas occupies a volume of 22.4 liters. This value is known as the molar volume of a gas at STP." 
    },
    { 
      q: "Effects of moisture on pressure", 
      a: "Presence of moisture (water vapor) in a gas mixture can affect the total pressure of the system. The total pressure of a gas mixture is the sum of the partial pressures of each individual gas, including water vapor. If moisture is present, it contributes to the total pressure, which can lead to an increase in pressure compared to a dry gas mixture. This is particularly important in applications such as weather forecasting, where humidity can influence atmospheric pressure and weather patterns." 
    },
    { 
      q: "Aqueous Tension and its properties", 
      a: "Aqueous tension refers to the pressure exerted by water vapor in a gas mixture. It is an important concept in understanding the behavior of gases in contact with water. The properties of aqueous tension include:\n 1. It is the partial pressure of water vapor in a gas mixture.\n 2. It depends on the temperature of the system.\n 3. At a given temperature, aqueous tension is constant and does not depend on the volume or pressure of other gases present.\n 4. It plays a significant role in determining the total pressure of moist air and other gas mixtures containing water vapor." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Gas Laws</span>
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

export default GasLaws;