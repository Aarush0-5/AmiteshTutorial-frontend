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

const CurrentElectricity= () => {
  const content = [
    { 
      q: "Defining charge", 
      a: "Charge is a fundamental property of matter that causes it to experience a force when placed in an electromagnetic field. There are two types of electric charges: positive and negative. Like charges repel each other, while opposite charges attract each other. The SI unit of electric charge is the coulomb (C). The charge of an electron is approximately -1.6 x 10⁻¹⁹ C, and the charge of a proton is +1.6 x 10⁻¹⁹ C." 
    },
     { 
      q: "Conservation of charge" ,
      a: "The law of conservation of charge states that the total electric charge in an isolated system remains constant over time. This means that charge cannot be created or destroyed, only transferred from one object to another. For example, when a glass rod is rubbed with silk, electrons are transferred from the glass to the silk, but the total charge of the system remains unchanged.\nMathematically, Q=ne, where Q is the total charge, n is the number of elementary charges, and e is the charge of a single electron." 
    },
     { 
      q: "Current", 
      a: "Current is the flow of electric charge through a conductor. It is defined as the rate at which charge flows past a given point in a circuit. \nI=Q/t \nThe SI unit of current is the ampere (A), which is equivalent to one coulomb per second (C/s). \nCurrent can be either direct current (DC), where the flow of charge is in one direction, or alternating current (AC), where the flow of charge periodically reverses direction." 
    },
    { 
      q: "Potential Difference", 
      a: "Potential difference, also known as voltage, is the difference in electric potential energy between two points in an electric field. It is defined as the work done per unit charge to move a charge from one point to another. \nV=W/Q \nThe SI unit of potential difference is the volt (V), which is equivalent to one joule per coulomb (J/C). Potential difference is essential for driving current through a conductor." 
    },
    { 
      q: "Direct and Alternating Current",
      a: "Direct current (DC) flows in one direction only, while alternating current (AC) periodically reverses direction. DC is commonly used in batteries and electronic devices, whereas AC is used in household electrical systems because it can be easily transformed to different voltages using transformers." 
    },
    { 
      q: "Resistance and Ohm's Law", 
      a: "Resistance is the opposition to the flow of electric current in a conductor. Ohm's Law states that the current flowing through a conductor is directly proportional to the potential difference across its ends, provided the temperature and other physical conditions remain constant. \nV=IR \nWhere V is the potential difference, I is the current, and R is the resistance. The SI unit of resistance is the ohm (Ω)." 
    },
     { 
      q: "Resistance and its factors", 
      a: "Resistance depends on several factors, including the material of the conductor, its length, and its cross-sectional area.\nThe resistance of a conductor is directly proportional to its length and inversely proportional to its cross-sectional area.\n Additionally, different materials have different resistivities, which affect their resistance. For example, copper has a low resistivity and is commonly used in electrical wiring." 
    },
     { 
      q: "Closed and Open Circuits", 
      a: "A closed circuit is a complete path through which electric current can flow. In a closed circuit, all components are connected in such a way that current can flow from the power source, through the components, and back to the source. An open circuit is one where the path is broken, preventing current from flowing. For example, a switch in the 'off' position creates an open circuit." 
    },
     { 
      q: "Primary and Secondary Cells", 
      a: "Primary cells are non-rechargeable and are used only once. Examples include alkaline batteries and zinc-carbon batteries.\n Secondary cells, on the other hand, are rechargeable and can be used multiple times. Examples include lead-acid batteries and lithium-ion batteries.\nThe main difference between primary and secondary cells is that primary cells cannot be recharged, while secondary cells can be recharged by passing an electric current through them in the reverse direction." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Current Electricity</span>
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

export default CurrentElectricity;