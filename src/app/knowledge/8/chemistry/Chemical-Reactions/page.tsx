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

const ChemicalReactions = () => {
  const content = [
    {
        q:"What is a chemical bond?",
        a:"A chemical bond is a force of attraction that holds atoms together in a molecule or compound. It is formed when atoms share or transfer electrons to achieve a more stable electron configuration. The main types of chemical bonds are ionic bonds, covalent bonds, and metallic bonds."
    },
      { 
      q: "Combination Reactions", 
      a: "Combination reactions are chemical reactions in which two or more substances combine to form a single product. These reactions often involve elements combining with oxygen to form oxides.\n Example: 2Mg + O2 → 2MgO (magnesium combines with oxygen to form magnesium oxide)." 
    },
     { 
      q: "Decomposition Reactions", 
      a: "Decomposition reactions are chemical reactions in which a single compound breaks down into two or more simpler substances. These reactions are often initiated by heat(thermal decomposition), light(photolysis), or electricity(electrolysis).\n Example: 2H2O → 2H2 + O2 (water decomposes into hydrogen and oxygen gases)." 
    },
     { 
      q: "Displacement Reactions and Double Displacement Reactions", 
      a: "Displacement reactions are chemical reactions in which a more reactive element displaces a less reactive element from its compound. These reactions occur when a single element reacts with a compound to form another compound and a different element.\n Example: Zn + CuSO4 → ZnSO4 + Cu (zinc displaces copper from copper sulfate).\n Double displacement reactions are chemical reactions in which two compounds exchange their ions to form two new compounds. These reactions often occur in aqueous solutions.\n Example: AgNO3 + NaCl → AgCl + NaNO3 (silver nitrate and sodium chloride react to form silver chloride and sodium nitrate)." 
    },
     { 
      q: "Precipitation Reactions", 
      a: "Precipitation reactions are chemical reactions in which two soluble salts react to form an insoluble salt (precipitate). These reactions occur when the product of the reaction is insoluble in water.\n Example: AgNO3 + NaCl → AgCl + NaNO3 (silver nitrate and sodium chloride react to form silver chloride precipitate and sodium nitrate)." 
    },
    { 
      q: "Neutralization Reactions and its uses in daily life", 
      a: "Neutralization reactions are chemical reactions in which an acid reacts with a base to form salt and water. These reactions are also known as acid-base reactions.\n Example: HCl + NaOH → NaCl + H2O (hydrochloric acid reacts with sodium hydroxide to form sodium chloride and water).\n Uses in daily life:\n 1. Antacids (e.g., milk of magnesia) neutralize excess stomach acid.\n 2. Soil treatment: lime is added to acidic soil to neutralize it.\n 3. Wastewater treatment: acids and bases are neutralized before discharge." 
    },
    {
        q: "Reactivity Series of Metals",
        a: "The reactivity series of metals is a list of metals arranged in order of their reactivity from highest to lowest. It helps predict how metals will react with other substances, such as acids, water, and other metals. The most reactive metals are at the top of the series, while the least reactive are at the bottom.\n Example: Potassium (K) > Sodium (Na) > Calcium (Ca) > Magnesium (Mg) > Aluminum (Al) > Zinc (Zn) > Iron (Fe) > Lead (Pb) > Hydrogen (H) > Copper (Cu) > Silver (Ag) > Gold (Au)." 
    },
    {
        q: "Oxides and their preparation",
        a: "Oxides are compounds that consist of oxygen and another element. They can be classified into two main types: metal oxides and non-metal oxides. Metal oxides are typically basic, while non-metal oxides are usually acidic.\n Preparation of oxides can be done through various methods, such as:\n 1. Direct combination: Reacting an element with oxygen (e.g., 2Mg + O2 → 2MgO).\n 2. Thermal decomposition: Heating a compound to produce an oxide (e.g., CaCO3 → CaO + CO2).\n 3. Oxidation reactions: Reacting a substance with oxygen in the presence of heat or a catalyst (e.g., 4Fe + 3O2 → 2Fe2O3)." 
    },
    {
        q: "Acidic vs Basic vs Neutral vs Amphoteric Oxides",
        a: "Acidic oxides are oxides that react with water to form acids or with bases to form salts. They are typically non-metal oxides (e.g., CO2, SO3).\n Basic oxides are oxides that react with water to form bases or with acids to form salts. They are typically metal oxides (e.g., Na2O, CaO).\n Neutral oxides are oxides that do not react with either acids or bases. They are typically non-metal oxides (e.g., CO, N2O).\n Amphoteric oxides are oxides that can react with both acids and bases to form salts and water. They can exhibit both acidic and basic properties (e.g., Al2O3, ZnO)." 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Chemical Reactions</span>
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

export default ChemicalReactions;