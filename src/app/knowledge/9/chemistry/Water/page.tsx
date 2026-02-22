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

const ChemistryLanguage= () => {
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
      q: "Chemical and physical properties of water", 
      a: "Water has several physical properties: it is a colorless, odorless, and tasteless liquid at room temperature; it has a boiling point of 100°C (212°F) and a freezing point of 0°C (32°F); it is an excellent solvent; it has a high specific heat capacity; and it expands when it freezes.\n Water also has several chemical properties: it is a polar molecule; it can undergo ionization to form H+ and OH- ions; it reacts with certain metals to produce hydrogen gas and hydroxides; and it can react with oxides to form acids or bases." 
    },
    { 
      q: "Freezing and boiling points of water", 
      a: "The freezing point of water is 0°C (32°F) and the boiling point is 100°C (212°F) at standard atmospheric pressure. These points are important in understanding the physical state changes of water and are used in various scientific and industrial applications." 
    },
    { 
      q: "Anamalous expansion of water",
      a: "Water exhibits anomalous expansion, meaning it contracts when heated from 0°C to 4°C and expands when heated above 4°C. This behavior is due to the unique hydrogen bonding in water molecules. At 4°C, water has its maximum density and minimum volume. This property is crucial for aquatic life, as it allows ice to float on water surfaces." 
    },
    { 
      q: "Latent heat of fusion and vaporization of water", 
      a: "Latent heat is the amount of heat energy required to change the state of a substance without changing its temperature. The latent heat of fusion of water is 334 J/g, which is the energy needed to convert 1 gram of ice at 0°C to liquid water at 0°C. \nThe latent heat of vaporization of water is 2260 J/g, which is the energy needed to convert 1 gram of liquid water at 100°C to steam at 100°C." 
    },
     { 
      q: "Specific heat capacity of water", 
      a: "The specific heat capacity of water is 4.18 J/g°C. This means that it takes 4.18 joules of energy to raise the temperature of 1 gram of water by 1 degree Celsius. Water's high specific heat capacity makes it an excellent thermal regulator in biological systems and the environment." 
    },
     { 
      q: "Water as a universal solvent", 
      a: "Water is called a universal solvent because it can dissolve more substances than any other liquid. This property is due to water's polar nature, where the oxygen atom has a partial negative charge and the hydrogen atoms have partial positive charges. This allows water molecules to surround and separate ions and molecules of other substances, effectively dissolving them. Water's ability to dissolve a wide range of substances makes it essential for biological processes and chemical reactions in living organisms."
    },
     { 
      q: "Solution and its types", 
      a: "A solution is a homogeneous mixture of two or more substances in which the solute is uniformly distributed in the solvent. \nBinary solutions consist of two components: a solute (the substance being dissolved) and a solvent (the substance doing the dissolving). \nTernary solutions consist of three components: a solute, a solvent, and an additional substance that can act as either a solute or a solvent.\n Quaternary solutions consist of four components: a solute, a solvent, and two additional substances that can act as either solutes or solvents." 
    },
    { 
      q: "True solution vs Colloidal solution vs Suspension", 
      a: "True solutions are homogeneous mixtures where the solute particles are completely dissolved and are too small to be seen even under a microscope. Examples include salt in water and sugar in water.\n Colloidal solutions are heterogeneous mixtures where the solute particles are larger than those in true solutions but smaller than those in suspensions. They are visible under a microscope but do not settle out upon standing. Examples include milk, fog, and gelatin.\n Suspensions are heterogeneous mixtures where the solute particles are large enough to be seen with the naked eye and settle out upon standing. Examples include sand in water and muddy water." 
    },
    { 
      q: "Properties of solutions", 
      a: "Solutions have several properties:\n 1. Homogeneity: Solutions are homogeneous mixtures, meaning the composition is uniform throughout.\n 2. Transparency: Solutions are usually transparent, allowing light to pass through them.\n 3. Stability: Solutions are stable and do not separate on standing.\n 4. Particle size: The solute particles in a solution are very small (less than 1 nm) and cannot be seen with a microscope.\n 5. Filtration: Solutions cannot be separated by filtration because the solute particles are too small." 
    },
     { 
      q: "Aqueous solution and its properties", 
      a: "An aqueous solution is a solution in which water is the solvent. Water's unique properties make it an excellent solvent for many substances. Aqueous solutions have several properties:\n 1. They are typically transparent and colorless.\n 2. They conduct electricity due to the presence of dissolved ions.\n 3. They are stable and do not separate on standing.\n 4. The solute particles are very small (less than 1 nm) and cannot be seen with a microscope.\n 5. They can be separated by evaporation of the water." 
    },
     { 
      q: "Non-aqueous solution and its properties", 
      a: "A non-aqueous solution is a solution in which the solvent is not water. Non-aqueous solutions have several properties:\n 1. They are typically not transparent and may be colored.\n 2. They do not conduct electricity as well as aqueous solutions because they do not contain dissolved ions.\n 3. They are stable and do not separate on standing.\n 4. The solute particles are very small (less than 1 nm) and cannot be seen with a microscope.\n 5. They can be separated by evaporation of the non-aqueous solvent." 
    },
     { 
      q: "Dilute vs Concentrated solution", 
      a: "A dilute solution is one in which a small amount of solute is dissolved in a large amount of solvent. A concentrated solution is one in which a large amount of solute is dissolved in a small amount of solvent. The concentration of a solution can be expressed in various ways, such as molarity, molality, or percentage by mass." 
    },
     { 
      q: "Saturated vs Unsaturated vs Supersaturated solution", 
      a: "A saturated solution is one in which no more solute can be dissolved in a given amount of solvent at a particular temperature and pressure. An unsaturated solution is one in which more solute can be dissolved in a given amount of solvent at a particular temperature and pressure. A supersaturated solution is one in which more solute is dissolved than would normally be possible under the given conditions, and it is unstable." 
    },
     { 
      q: "Effect of temperature and pressure on solubility", 
      a: "The solubility of a substance is affected by temperature and pressure:\n 1. For solids dissolving in liquids, increasing temperature generally increases solubility.\n 2. For gases dissolving in liquids, increasing temperature decreases solubility.\n 3. For gases dissolving in liquids, increasing pressure increases solubility (Henry's Law).\n 4. For solids dissolving in liquids, pressure has little effect on solubility." 
    },
     { 
      q: "Concentration of a solution and its units", 
      a: "The concentration of a solution refers to the amount of solute dissolved in a given amount of solvent. Common units of concentration include:\n It can be expressed in terms of molarity (moles of solute per liter of solution), molality (moles of solute per kilogram of solvent), percentage by mass (mass of solute divided by total mass of solution multiplied by 100%), and parts per million (ppm) or parts per billion (ppb) for very dilute solutions." 
    },
     { 
      q: "Solubility and its factors", 
      a: "Solubility is the ability of a substance (solute) to dissolve in a solvent. The factors affecting solubility include:\n 1. Nature of the solute and solvent (polar vs non-polar).\n 2. Temperature (generally increases solubility for solids in liquids).\n 3. Pressure (mainly affects gases dissolving in liquids).\n 4. Particle size of the solute (smaller particles dissolve faster).\n 5. Stirring or agitation (increases dissolution rate)." 
    },
     { 
      q: "Solubility curve and its interpretation", 
      a: "A solubility curve is a graph that shows how the solubility of a substance changes with temperature. The interpretation of a solubility curve involves:\n 1. The slope of the curve indicates whether solubility increases or decreases with temperature.\n 2. A steep slope indicates a highly soluble substance.\n 3. A flat slope indicates a substance with low solubility.\n 4. The point where two curves intersect represents the same solubility at that temperature." 
    },
     { 
      q: "Factors affecting the solubility of gases", 
      a: "The solubility of gases in liquids is affected by several factors:\n 1. Temperature: Generally, increasing temperature decreases the solubility of gases in liquids.\n 2. Pressure: Increasing pressure increases the solubility of gases in liquids (Henry's Law).\n 3. Nature of the gas and solvent: Polar gases dissolve better in polar solvents, and non-polar gases dissolve better in non-polar solvents." 
    },
     { 
      q: "Henry's Law and its applications", 
      a: "Henry's Law states that at a constant temperature, the amount of a gas that dissolves in a liquid is directly proportional to the partial pressure of that gas above the liquid. Applications include:\n 1. Carbonated beverages (CO₂ is dissolved under pressure).\n 2. Scuba diving (to prevent decompression sickness).\n 3. Oxygen therapy (increasing pressure increases oxygen solubility in blood)." 
    },
     { 
      q: "Crystallization and its types", 
      a: "Crystallization is the process of forming crystals from a solution, melt, or gas. The main processes of crystallization include:\n 1. Evaporation: The solvent evaporates, leaving behind the solute as crystals.\n 2. Cooling: The solution is cooled, reducing solubility and causing crystals to form.\n 3. Precipitation: A chemical reaction produces an insoluble product that crystallizes out of the solution." 
    },
     { 
      q: "Hydrated vs Anhydrous salts", 
      a: "Hydrated salts are compounds that contain water molecules as part of their crystal structure. Anhydrous salts are salts that do not contain water molecules in their crystal structure. The key differences are:\n 1. Hydrated salts have water molecules in their formula (e.g., CuSO₄·5H₂O).\n 2. Anhydrous salts do not have water molecules in their formula (e.g., CuSO₄).\n 3. Hydrated salts are typically blue or green, while anhydrous salts are usually white or colorless.\n 4. Heating hydrated salts can remove the water of crystallization, converting them to anhydrous form." 
    },
     { 
      q: "Properties of hydrated and anhydrous salts", 
      a: "Hydrated salts have water molecules in their crystal structure and are typically colored (e.g., CuSO₄·5H₂O is blue). Anhydrous salts do not contain water molecules in their crystal structure and are usually white or colorless (e.g., CuSO₄ is white). When hydrated salts are heated, they lose their water of crystallization and become anhydrous.\nEfflorescence is the process where hydrated salts lose water to the atmosphere and become anhydrous, while deliquescence is the process where anhydrous salts absorb moisture from the atmosphere and become hydrated.\nHygroscopic substances are those that can absorb moisture from the air, while non-hygroscopic substances do not absorb moisture from the air.\nDeliquescent substances are those that can absorb so much moisture from the air that they dissolve in the absorbed water, while non-deliquescent substances do not dissolve in the absorbed water." 
    },
     { 
      q: "Drying vs Dehydration", 
      a: "Drying is the process of removing moisture from a substance by evaporation, typically using heat or air circulation. \nDehydration is the removal of water from a substance, often through chemical means or by using desiccants. While drying is a physical process, dehydration can be either physical or chemical." 
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
      q: "Advantages and disadvantages of hard water", 
      a: "Advantages of hard water:\n 1. It provides essential minerals like calcium and magnesium, which are beneficial for health.\n 2. It is less likely to cause corrosion in pipes compared to soft water.\nDisadvantages of hard water:\n 1. It causes limescale buildup in pipes and appliances, reducing their efficiency.\n 2. It reduces the effectiveness of soap and detergents, leading to more usage.\n 3. It can leave a residue on surfaces and make them appear dull." 
    },
     { 
      q: "Cleansing action of soap and detergents in hard water", 
      a: "In hard water, soap reacts with calcium and magnesium ions to form an insoluble precipitate called scum. This reduces the effectiveness of soap in cleaning. Detergents, on the other hand, are more effective in hard water because they do not form scum with calcium and magnesium ions. Instead, they form soluble salts that can be easily rinsed away." 
    },
     { 
      q: "Removal of temporary and permanent hardness of water", 
      a: "Temporary hardness can be removed by boiling the water, which converts bicarbonates to insoluble carbonates that precipitate out.\nPermanent hardness is removed by using ion exchange resins or adding chemicals like washing soda (sodium carbonate) which precipitates calcium and magnesium ions as their carbonates." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">The language of chemistry</span>
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

export default ChemistryLanguage;