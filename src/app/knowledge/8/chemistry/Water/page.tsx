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

const Water = () => {
  const content = [
    { 
      q: "Water and its distribution on Earth", 
      a: "Water is a vital resource for all known forms of life and covers about 71% of the Earth's surface. It is found in various forms, including oceans, rivers, lakes, glaciers, and underground aquifers. The distribution of water on Earth is uneven, with the majority (about 97%) being saltwater in the oceans, while only about 3% is freshwater. Of the freshwater, a significant portion is locked in glaciers and ice caps, while the rest is found in rivers, lakes, and underground reservoirs." 
    },
     { 
      q: "Chemical properties of water", 
      a: "Water is a chemical compound with the molecular formula H2O. It is a polar molecule with a bent molecular geometry. Water has several important chemical properties:\n 1. It is an excellent solvent, capable of dissolving many substances.\n 2. It can undergo ionization, forming H+ and OH- ions.\n 3. It reacts with certain metals (e.g., sodium) to produce hydrogen gas and hydroxides.\n 4. It can react with oxides to form acids or bases." 
    },
    {
        q: "Solution vs Suspension vs Colloids",
        a: "A solution is a homogeneous mixture where one substance (solute) is dissolved in another (solvent). A suspension is a heterogeneous mixture where solid particles are dispersed in a liquid but are not dissolved, and they can settle over time. Colloids are mixtures where small particles are dispersed throughout a medium but do not settle, such as milk or fog."
    },
    {
        q: "Saturated vs Unsaturated vs Supersaturated Solutions",
        a: "A saturated solution contains the maximum amount of solute that can dissolve at a given temperature. An unsaturated solution contains less solute than the maximum, allowing more solute to dissolve. A supersaturated solution contains more solute than the maximum and is unstable; it can crystallize if disturbed."
    },
    {
        q: "Water of Crystallization",
        a: "Water of crystallization refers to the water molecules that are chemically bound within the crystal structure of a compound. These water molecules are essential for maintaining the structure and properties of the compound. For example, in copper sulfate pentahydrate (CuSO4·5H2O), there are five water molecules associated with each formula unit of copper sulfate."
    },
    {
        q: "Hygroscopic Substances",
        a: "Hygroscopic substances are materials that can absorb moisture from the air. They can be solids or liquids and are often used as desiccants to keep environments dry. Examples include silica gel, calcium chloride, and glycerol."
    },
     { 
      q: "Water as a universal solvent", 
      a: "Water is called a universal solvent because it can dissolve more substances than any other liquid. This property is due to water's polar nature, where the oxygen atom has a partial negative charge and the hydrogen atoms have partial positive charges. This allows water molecules to surround and separate ions and molecules of other substances, effectively dissolving them. Water's ability to dissolve a wide range of substances makes it essential for biological processes and chemical reactions in living organisms."
    },
    {
        q: "Reaction of metals with water",
        a: "1)With Cold Water: Some metals like sodium, potassium, and calcium react vigorously with cold water to produce hydroxides and hydrogen gas. For example, 2Na + 2H2O → 2NaOH + H2.\n 2)With Steam: Metals like iron and zinc react with steam to form oxides and hydrogen gas. For example, 3Fe + 4H2O (steam) → Fe3O4 + 4H2.\n 3)With Hot Water: Some metals like magnesium react with hot water to produce hydroxides and hydrogen gas. For example, Mg + 2H2O (hot) → Mg(OH)2 + H2.\n 4)No Reaction: Metals like gold and platinum do not react with water under normal conditions.\n5) Metal Oxides: Some metals form oxides that can react with water to produce hydroxides. For example, CaO + H2O → Ca(OH)2."
    },
    { 
      q: "Soft vs Hard water", 
      a: "Soft water contains low concentrations of dissolved minerals (mainly calcium and magnesium), while hard water contains high concentrations of these minerals. The key differences are:\n 1. Soft water is gentle on skin and hair and does not leave mineral deposits.\n 2. Hard water can cause limescale buildup in pipes and appliances and may leave a residue on surfaces.\n 3. Hard water requires more soap to produce lather because the minerals react with soap to form scum.\n 4. Soft water is generally preferred for household use because it is gentler on plumbing and appliances." 
    },
    { 
      q: "Types of hard water and their effects", 
      a: "Hard water is classified into two types:\n 1. Temporary hard water: Contains bicarbonates of calcium and magnesium. It can be removed by boiling.\n 2. Permanent hard water: Contains sulfates and chlorides of calcium and magnesium. It cannot be removed by boiling but can be softened using ion exchange resins or other methods.\nEffects of hard water include:\n - Limescale buildup in pipes and appliances.\n - Reduced effectiveness of soap and detergents.\n - Formation of scum when soap reacts with minerals." 
    },
    { 
      q: "Removal of temporary and permanent hardness of water", 
      a: "Temporary hardness can be removed by boiling the water, which converts bicarbonates to insoluble carbonates that precipitate out.\nPermanent hardness is removed by using ion exchange resins or adding chemicals like washing soda (sodium carbonate) which precipitates calcium and magnesium ions as their carbonates." 
    },
    { 
      q: "Advantages and disadvantages of hard water", 
      a: "Advantages of hard water:\n 1. It provides essential minerals like calcium and magnesium, which are beneficial for health.\n 2. It is less likely to cause corrosion in pipes compared to soft water.\nDisadvantages of hard water:\n 1. It causes limescale buildup in pipes and appliances, reducing their efficiency.\n 2. It reduces the effectiveness of soap and detergents, leading to more usage.\n 3. It can leave a residue on surfaces and make them appear dull." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Water</span>
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

export default Water;