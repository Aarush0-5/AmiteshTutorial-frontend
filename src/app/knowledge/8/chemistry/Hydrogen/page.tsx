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

const Hydrogen = () => {
  const content = [
    { 
      q: "Significance of Hydrogen in Chemistry", 
      a: "Hydrogen is the most abundant element in the universe and plays a crucial role in chemistry:\n1. It is a key component in water (H2O), which is essential for life.\n2. Hydrogen is used in the production of ammonia (NH3) through the Haber process, which is vital for fertilizers.\n3. It serves as a reducing agent in many chemical reactions.\n4. Hydrogen fuel cells are used to generate electricity with water as the only byproduct, making them environmentally friendly.\n5. It is used in metallurgy to reduce metal oxides to metals." 
    },
     { 
      q: "Preparation of Hydrogen", 
      a: "Hydrogen can be prepared in the laboratory by the following methods:\n1. From cold water : When metals like sodium, potassium, calcium, or aluminum react with cold water, they produce hydrogen gas and a metal hydroxide.\n2. From steam : When metals like zinc, iron, or aluminum react with steam (hot water vapor), they produce hydrogen gas and a metal oxide.\n3. From acids : When metals react with dilute acids (like hydrochloric acid), they produce hydrogen gas and a salt.\n4. From hot water : When magnesium reacts with hot water,it produces hydrogen gas and a metal hydroxide.\n5. Electrolysis of water : Passing an electric current through water can decompose it into hydrogen and oxygen gases.\nAlkali + water → Alkali hydroxide + Hydrogen\nMetal + steam → Metal oxide + Hydrogen\nMetal + acid → Salt + Hydrogen\nMetal + hot water → Metal hydroxide + Hydrogen\n2H2O (l) → 2H2 (g) + O2 (g) (Electrolysis)" 
    },
     { 
      q: "Electrolysis and its components", 
      a: "Electrolysis is the process of decomposing a substance by passing an electric current through it. The components involved in electrolysis are:\n1. Electrolyte: A substance that conducts electricity when dissolved in water or melted.\n2. Electrodes: Conductors (usually made of carbon or metal) that are connected to the power source.\n3. Power source: Provides the electric current needed for electrolysis.\n4. Anode: The positive electrode where oxidation occurs.\n5. Cathode: The negative electrode where reduction occurs." 
    },
    { 
      q: "Bosch process for hydrogen production", 
      a: "The Bosch process is an industrial method for producing hydrogen gas. \n Step 1: Carbon dioxide (CO2) is reacted with hydrogen gas (H2) at high temperatures (around 700-1000°C) and in the presence of a catalyst to produce carbon monoxide (CO) and water (H2O).\n CO2 + H2 → CO + H2O\n Step 2: The carbon monoxide produced in the first step is then reacted with more hydrogen gas to produce additional hydrogen and carbon dioxide.\n CO + H2 → CO2 + H2\n Step 3 KOH is used to absorb the carbon dioxide produced in the second step, leaving behind pure hydrogen gas.\n Step 4 Ammoniacal solution of Copper Chloride is used to dissolve the carbon monoxide produced in the first step, leaving behind pure hydrogen gas." 
    },
    { 
      q: "Chemical Properties of Hydrogen", 
      a: "Action on Litmus: It is neutral on litmus paper. It does not change the color of either red or blue litmus paper.\nAction on dry and moist air: Hydrogen does not react with dry air, but it can react with oxygen in moist air to form water vapor (H2O).\nAction on chlorine: Hydrogen reacts with chlorine gas to form hydrogen chloride (HCl) in a highly exothermic reaction.\nH2 + Cl2 → 2HCl\nAction on oxygen: Hydrogen reacts with oxygen gas to form water vapor (H2O) in a highly exothermic reaction.\n2H2 + O2 → 2H2O\nAction on nitrogen: Hydrogen can react with nitrogen gas under high temperature and pressure in the presence of a catalyst to form ammonia (NH3).\nN2 + 3H2 → 2NH3\nAction on metals: Hydrogen can react with certain metals to form metal hydrides, such as sodium hydride (NaH) and calcium hydride (CaH2)." 
    },
    { 
      q: "Hydrogen and its properties", 
      a: "Hydrogen is the lightest and most abundant element in the universe. It is a colorless, odorless gas that is highly flammable. Hydrogen has several important properties:\n 1. It is the simplest element with only one proton and one electron.\n 2. It exists as a diatomic molecule (H2) under normal conditions.\n 3. It is highly reactive and readily forms compounds with other elements.\n 4. It is an excellent reducing agent in chemical reactions." 
    },
    { 
      q: "Redox reactions of hydrogen", 
      a: "Hydrogen can act as both an oxidizing agent and a reducing agent in redox reactions:\n1. As a reducing agent: Hydrogen reduces metal oxides to form metals and water.\nH2 + CuO → Cu + H2O\n2. As an oxidizing agent: Hydrogen can be oxidized to form hydrides with highly electropositive metals.\nH2 + 2Na → 2NaH\nIn both cases, hydrogen undergoes changes in oxidation state, making it a versatile element in redox chemistry." 
    },
     { 
      q: "Reduction vs Oxidation", 
      a: "Reduction is the gain of electrons or the decrease in oxidation state of an element in a chemical reaction. Oxidation is the loss of electrons or the increase in oxidation state of an element in a chemical reaction. In redox reactions, one substance is oxidized while another is reduced. In the case of hydrogen, it can be reduced to form hydrides (H-) or oxidized to form water (H2O) or other compounds depending on the reaction conditions." 
    },
     
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Hydrogen</span>
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

export default Hydrogen;