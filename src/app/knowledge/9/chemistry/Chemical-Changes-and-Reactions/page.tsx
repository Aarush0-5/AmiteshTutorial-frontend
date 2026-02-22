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

const ChemicalReactions= () => {
  const content = [
    { 
      q: "Physical change vs Chemical change", 
      a: "Physical changes are changes in the physical properties of a substance without altering its chemical composition. Examples include melting of ice, boiling of water, and dissolving salt in water.\n Chemical changes are changes that result in the formation of new substances with different chemical properties. Examples include rusting of iron, burning of wood, and digestion of food." 
    },
     { 
      q: "Reactants vs Products", 
      a: "In a chemical reaction, reactants are the substances that participate in the reaction and are consumed during the process. Products are the new substances formed as a result of the chemical reaction.\n For example, in the reaction 2H2 + O2 → 2H2O, hydrogen (H2) and oxygen (O2) are reactants, and water (H2O) is the product." 
    },
     { 
      q: "Conditions of a chemical reaction", 
      a: "For a chemical reaction to occur, certain conditions must be met:\n 1. Contact between reactants: The reactants must be in contact with each other.\n 2. Sufficient energy: The reactants must have enough energy to overcome the activation energy barrier.\n 3. Proper orientation: The reactant molecules must be properly oriented for effective collisions.\n 4. Catalysts (if required): Some reactions require catalysts to proceed at a reasonable rate." 
    },
    { 
      q: "Catalysts and their types", 
      a: "Catalysts are substances that increase the rate of a chemical reaction without being consumed in the process.\n There are two main types of catalysts: \nPositive catalysts (which increase the rate of reaction) \n Negative catalysts (which decrease the rate of reaction)." 
    },
    { 
      q: "Characteristics of chemical reactions",
      a: "Chemical reactions have several characteristics:\n 1. They are accompanied by changes in energy (heat, light, or electricity).\n 2. They result in the formation of new substances with different properties.\n 3. They are irreversible in most cases.\n 4. They follow the law of conservation of mass (the total mass of reactants equals the total mass of products).\n 5. They may involve changes in color, temperature, or the formation of precipitates or gases." 
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
      q: "Exothermic vs Endothermic reactions", 
      a: "Exothermic reactions are chemical reactions that release energy (usually as heat) to the surroundings. The total energy of the products is less than the total energy of the reactants.\n Example: C + O2 → CO2 (combustion of carbon releases heat).\n Endothermic reactions are chemical reactions that absorb energy (usually as heat) from the surroundings. The total energy of the products is greater than the total energy of the reactants.\n Example: 2H2O → 2H2 + O2 (electrolysis of water requires an input of electrical energy)." 
    },
     { 
      q: "Photochemical reactions vs Thermochemical reactions vs Electrochemical reactions", 
      a: "Photochemical reactions are chemical reactions that are initiated by light energy. These reactions occur when photons (light particles) are absorbed by molecules, causing chemical bonds to break or form.\n Example: Photosynthesis in plants, where light energy is used to convert carbon dioxide and water into glucose and oxygen.\n Thermochemical reactions are chemical reactions that involve the transfer of heat energy. These reactions can be either exothermic (releasing heat) or endothermic (absorbing heat).\n Example: Combustion of methane (CH4 + 2O2 → CO2 + 2H2O) is an exothermic reaction that releases heat.\n Electrochemical reactions are chemical reactions that involve the transfer of electrons between species. These reactions often occur in electrochemical cells, such as batteries.\n Example: The reaction in a lead-acid battery involves the transfer of electrons between lead dioxide and lead." 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Chemical Reactions and their types</span>
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