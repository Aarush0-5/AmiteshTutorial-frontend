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

const Hydrogen= () => {
  const content = [
    { 
      q: "Hydrogen and its properties", 
      a: "Hydrogen is the lightest and most abundant element in the universe. It is a colorless, odorless gas that is highly flammable. Hydrogen has several important properties:\n 1. It is the simplest element with only one proton and one electron.\n 2. It exists as a diatomic molecule (H2) under normal conditions.\n 3. It is highly reactive and readily forms compounds with other elements.\n 4. It is an excellent reducing agent in chemical reactions." 
    },
     { 
      q: "Discovery and occurrence of hydrogen", 
      a: "Hydrogen was first discovered by Henry Cavendish in 1766. He produced hydrogen by reacting metals with acids and noted its flammability. Hydrogen is the most abundant element in the universe, making up about 75% of all normal matter. It is found in various forms:\n 1. In water (H2O), which is the most common source of hydrogen on Earth.\n 2. In organic compounds like hydrocarbons (e.g., methane, CH4).\n 3. In the atmosphere, though in very small quantities.\n 4. In stars and other celestial bodies where it is formed through nuclear fusion.\nHyzone is hydrogen is triatomic state" 
    },
     { 
      q: "Position of hydrogen in the periodic table", 
      a: "Hydrogen is placed in Group 1 of the periodic table, along with alkali metals like lithium, sodium, and potassium. Despite being in Group 1, hydrogen is unique because it is a non-metal and does not exhibit the typical properties of alkali metals. It has one electron in its outer shell and can lose this electron to form a positive ion (H+), similar to other alkali metals. However, hydrogen also has some properties similar to halogens (Group 17) because it can gain an electron to form a negative ion (H-). This dual nature makes hydrogen unique among all elements." 
    },
    { 
      q: "Hydrogen and Alkali metals", 
      a: "Hydrogen shares some properties with alkali metals such as \n 1. It has one electron in its outer shell, similar to alkali metals.\n 2. It can lose this electron to form a positive ion (H+), like alkali metals.\n Reducing agent: Hydrogen can act as a reducing agent in chemical reactions, meaning it can donate electrons to other substances. This is similar to alkali metals, which are also strong reducing agents due to their tendency to lose their outer electron.\n Burning in air: Hydrogen burns in air to form water (H2O), which is a characteristic reaction of alkali metals when they react with oxygen to form oxides. \nReaction with non-metals: Hydrogen can react with non-metals to form covalent compounds, similar to how alkali metals can react with non-metals to form ionic compounds. For example, hydrogen reacts with chlorine to form hydrogen chloride (HCl), while sodium reacts with chlorine to form sodium chloride (NaCl)\nLiberation at cathode: In electrolysis, hydrogen is liberated at the cathode when water is electrolyzed, which is similar to how alkali metals can be liberated at the cathode during electrolysis of their compounds." 
    },
    { 
      q: "Hydrogen and Halogens",
      a: "Hydrogen shares some properties with halogens such as:\n 1. It can gain an electron to form a negative ion (H-), similar to halogens.\n 2. It can form covalent compounds with halogens, like hydrogen chloride (HCl).\n 3. It has a similar electronegativity to some halogens, though it is less electronegative than fluorine and chlorine.\n Oxidizing agent: Hydrogen can act as an oxidizing agent in chemical reactions, meaning it can accept electrons from other substances. This is similar to halogens, which are also strong oxidizing agents due to their tendency to gain electrons.\n Reaction with metals: Hydrogen can react with certain metals to form metal hydrides, similar to how halogens can react with metals to form metal halides. For example, hydrogen reacts with sodium to form sodium hydride (NaH), while chlorine reacts with sodium to form sodium chloride (NaCl).\n Liberation at anode: In electrolysis, hydrogen can be liberated at the anode when certain compounds are electrolyzed, which is similar to how halogens can be liberated at the anode during electrolysis of their compounds." 
    },
    { 
      q: "Difference between hydrogen and alkali metals and halogens", 
      a: "Hydrogen differs from alkali metals and halogens in several ways:\n 1. Unlike alkali metals, hydrogen is a non-metal and does not conduct electricity well.\n 2. Unlike halogens, hydrogen does not readily form negative ions in most compounds.\n 3. Hydrogen can behave both as a metal (losing an electron to form H+) and as a non-metal (gaining an electron to form H-), making it unique among all elements.\n 4. While alkali metals are highly reactive and tend to lose electrons, hydrogen is more versatile in its chemical behavior." 
    },
    { 
      q: "Preparation of hydrogen", 
      a: "Hydrogen can be prepared in the laboratory by the following methods:\n 1.Reaction with potassium 2K + 2H2O → 2KOH + H2 (g)\n 2. Reaction with sodium 2Na + 2H2O → 2NaOH + H2 (g)\n 3. Reaction with Calcium Ca + 2H2O → Ca(OH)2 + H2 (g)\n 4. Reaction with zinc Zn + 2HCl → ZnCl2 + H2 (g)\n The above reaction happen with cold water \nReaction with Magnesium Mg + 2H2O → Mg(OH)2 + H2 (g)\n The above reaction happen with hot water \nReaction with Aluminium 2Al + 6H2O → 2Al(OH)3 + 3H2 (g)\n The above reaction happen with hot water \nReaction with Iron 3Fe + 4H2O → Fe3O4 + 4H2 (g)\n Reaction with zinc Zn + H20 → ZnO + H2 (g) The above reaction happen with steam \n Reaction with Carbon C + H2O → CO + H2 (g) The above reaction happen with steam \n 5. Electrolysis of water 2H2O → 2H2 (g) + O2 (g) \n 6. Reaction of acids with metals Zn + 2HCl → ZnCl2 + H2 (g)\n 7. Reaction of metal hydrides with water NaH + H2O → NaOH + H2 (g)" 
    },
     { 
      q: "Reactivity series and position of hydrogen in it", 
      a: "The reactivity series of metals is a list of metals arranged in order of their reactivity, from most reactive to least reactive. Hydrogen is placed in the middle of this series, between metals like potassium and sodium (which are more reactive) and metals like copper and silver (which are less reactive). This position indicates that hydrogen is less reactive than most metals but more reactive than non-metals. In the reactivity series, hydrogen is often used as a reference point to determine whether a metal can displace hydrogen from its compounds." 
    },
     { 
      q: "Reaction of metals with dilute acids ", 
      a: "When metals react with dilute acids, they produce a salt and hydrogen gas. The general reaction is: Metal + Dilute Acid → Salt + Hydrogen Gas\nFor example:\n1. Zinc + Dilute Hydrochloric acid → Zinc chloride + Hydrogen gas\nZn + 2HCl → ZnCl2 + H2 (g)\n2. Magnesium + Dilute Sulfuric acid → Magnesium sulfate + Hydrogen gas\nMg + H2SO4 → MgSO4 + H2 (g)\n3. Iron + Dilute Hydrochloric acid → Iron(II) chloride + Hydrogen gas\nFe + 2HCl → FeCl2 + H2 (g)\nThis reaction is commonly used in the laboratory to prepare hydrogen gas."
    },
     { 
      q: "Reaction of alkali on metals ", 
      a: "Metals react with alkalis to form metal hydroxides and hydrogen gas. The general reaction is: Metal + Alkali → Metal Hydroxide + Hydrogen Gas\nFor example:\n1. Sodium + Water → Sodium hydroxide + Hydrogen gas\n2Na + 2H2O → 2NaOH + H2 (g)\n2. Potassium + Water → Potassium hydroxide + Hydrogen gas\n2K + 2H2O → 2KOH + H2 (g)\n3. Calcium + Water → Calcium hydroxide + Hydrogen gas\nCa + 2H2O → Ca(OH)2 + H2 (g)\nThis reaction is highly exothermic and can be dangerous if not handled properly." 
    },
    { 
      q: "Test for hydrogen", 
      a: "Hydrogen gas can be tested by bringing a burning splint near the gas. If hydrogen is present, it will burn with a 'pop' sound. This is because hydrogen is highly flammable and reacts with oxygen in the air to form water vapor.Its a non supporter of combustion, so it will not support the burning of a splint on its own.\nPure hydrogen burns with a pale blue flame that is almost invisible in daylight, so the 'pop' sound is the most reliable way to identify it." 
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