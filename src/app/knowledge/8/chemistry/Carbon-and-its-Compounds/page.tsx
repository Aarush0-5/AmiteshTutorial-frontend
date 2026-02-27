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

const CarbonAndItsCompounds = () => {
  const content = [
    { 
      q: "Carbon and its significance in chemistry", 
      a: "Carbon is a fundamental element in organic chemistry and life. It is the backbone of all organic compounds, forming the basis of carbohydrates, proteins, lipids, and nucleic acids. Carbon's unique ability to form four covalent bonds allows it to create diverse molecular structures. It exists in various forms like diamond, graphite, and fullerenes, each with distinct properties. Carbon is essential for all known life forms and plays a crucial role in the carbon cycle." 
    },
     { 
      q: "Carbon's Occurence in Nature", 
      a: "Carbon occurs naturally in various forms in the environment. It is found in the atmosphere as carbon dioxide (CO2), in the biosphere as organic compounds in living organisms, and in the geosphere as coal, oil, and natural gas. Carbon is also present in minerals like limestone (calcium carbonate) and graphite. The carbon cycle describes how carbon moves between these reservoirs through processes like photosynthesis, respiration, decomposition, and combustion." 
    },
    {
        q: "Organic vs Inorganic Compounds",
        a: "Organic compounds are primarily composed of carbon and hydrogen atoms, often with other elements like oxygen, nitrogen, and sulfur. They are typically associated with living organisms and include substances like carbohydrates, proteins, lipids, and nucleic acids. Inorganic compounds do not contain carbon-hydrogen bonds and are generally found in non-living matter. Examples include salts like sodium chloride (NaCl), oxides like carbon dioxide (CO2), and metals like iron oxide (Fe2O3)."
    },
    {
        q: "Allotropes of Carbon",
        a: "Allotropes are different structural forms of the same element. Carbon has several allotropes, including diamond, graphite, and fullerenes. Diamond is a hard, transparent form of carbon with a crystalline structure. Graphite is a soft, black form of carbon that is a good conductor of electricity. Fullerenes are spherical molecules composed entirely of carbon atoms, such as C60 (buckminsterfullerene)."
    },
    {
        q: "Diamond and its properties",
        a: "Diamond is a hard, transparent form of carbon with a crystalline structure. It is the hardest natural material known and has excellent thermal conductivity. Diamond is used in industrial applications like cutting tools and abrasives due to its hardness. It is also used in jewelry because of its brilliance and durability.\nFormation of natural diamonds occurs deep within the Earth's mantle under high pressure and temperature conditions. Synthetic diamonds can be created in laboratories using high-pressure, high-temperature (HPHT) or chemical vapor deposition (CVD) methods.\nProperties of diamond include:\n1. Hardness: Diamond is the hardest known natural material.\n2. Transparency: It is transparent to visible light.\n3. Thermal Conductivity: Diamond has excellent thermal conductivity.\n4. Electrical Insulation: Diamond is an electrical insulator.\n5. Refractive Index: It has a high refractive index, giving it its characteristic sparkle.\nEffect of heat on diamond: When heated in the absence of oxygen, diamond can convert to graphite. However, in the presence of oxygen, it will burn at around 700-900°C, producing carbon dioxide (CO2)."
    },
    {
        q: "Graphite and its properties",
        a: "Graphite is a soft, black form of carbon that is a good conductor of electricity. It is used in pencils, lubricants, and as an electrode in batteries. Graphite has a layered structure with weak van der Waals forces between layers, making it easy to slide and use as a lubricant.\nProperties of graphite include:\n1. Softness: Graphite is soft and can be easily scratched.\n2. Conductivity: It is a good conductor of electricity due to the presence of free electrons in its structure.\n3. Lubricity: It has low friction and is used as a lubricant in high-temperature applications.\n4. Chemical Inertness: Graphite is chemically inert and resistant to most acids and bases."
    },
     { 
      q: "Fullerenes and their applications", 
      a: "Fullerenes are spherical molecules composed entirely of carbon atoms, such as C60 (buckminsterfullerene). They have unique properties and potential applications in various fields:\n1. Medicine: Fullerenes can be used in drug delivery systems and as antioxidants.\n2. Electronics: They are used in the development of new electronic devices and sensors.\n3. Materials Science: Fullerenes can be incorporated into composite materials to enhance their properties.\n4. Nanotechnology: They serve as building blocks for creating nanostructures and nanomaterials."
    },
    {
        q: "Charcoal vs Wood Charcoal vs Sugar Charcoal",
        a: "Charcoal is a black, porous material made by heating wood or other organic materials in the absence of oxygen. It is primarily composed of carbon and is used as a fuel, in art, and for filtration. \nWood charcoal specifically refers to charcoal made from wood, while charcoal can also be made from other materials like coconut shells or peat. Wood charcoal is commonly used for grilling and barbecuing due to its ability to burn at high temperatures and impart a smoky flavor to food.\nSugar charcoal is a type of charcoal made from sugarcane bagasse, which is the fibrous residue left after extracting juice from sugarcane. It is used as a fuel and in various industrial applications."
    },
    { 
      q: "Lampblack or Soot and its uses", 
      a: "Lampblack or soot is a fine black powder produced by the incomplete combustion of organic materials like oil, coal, or wood. It is composed mainly of carbon and is used in various applications:\n1. Manufacturing: It is used in the production of inks, paints, and rubber products.\n2. Industrial Uses: It serves as a pigment in printing inks and as a filler in plastics and rubber.\n3. Artistic Uses: It is used in drawing and painting as a black pigment.\n4. Environmental Applications: It can be used to absorb pollutants in water treatment processes."
    },
    { 
      q: "Gas carbon and its applications", 
      a: "Gas carbon, also known as carbon black, is a fine black powder produced by the incomplete combustion of hydrocarbons. It is used in various applications:\n1. Manufacturing: It is used in the production of tires, inks, paints, and rubber products.\n2. Industrial Uses: It serves as a pigment in printing inks and as a filler in plastics and rubber.\n3. Environmental Applications: It can be used to absorb pollutants in water treatment processes."
    },
    { 
      q: "Coke vs Coal and their uses", 
      a: "Coal is a naturally occurring sedimentary rock that is primarily composed of carbon and is used as a fuel in power plants and for heating. It is also used in the production of steel and other industrial processes.\nCoke is a form of carbon obtained by heating coal in the absence of air (a process called destructive distillation). It is used primarily in the production of steel, where it acts as a reducing agent to remove oxygen from iron ore. Coke is also used in the production of other chemicals and as a fuel in high-temperature industrial processes."
    },
    { 
      q: "Carbon dioxide and its properties", 
      a: "Carbon dioxide (CO2) is a colorless, odorless gas that is naturally present in the atmosphere. It is produced by the combustion of carbon-containing fuels and is a major greenhouse gas.\nProperties of carbon dioxide include:\n1. It is denser than air and does not support combustion.\n2. It dissolves in water to form carbonic acid, making it slightly acidic.\n3. It is used in fire extinguishers due to its ability to displace oxygen.\n4. It plays a crucial role in the carbon cycle and photosynthesis.\nIts chemical properties include:\n1. It reacts with water to form carbonic acid (H2CO3).\n2. It can react with bases to form carbonates and bicarbonates.\n3. It can be used in the production of urea and other chemicals.\.With alkalis, carbon dioxide forms carbonates and bicarbonates. For example, when carbon dioxide reacts with sodium hydroxide (NaOH), it forms sodium carbonate (Na2CO3) and water:\nCO2 + 2NaOH → Na2CO3 + H2O\nThis reaction is commonly used in various industrial processes and in the laboratory to capture and utilize carbon dioxide.\nWith lime water, carbon dioxide forms calcium carbonate (CaCO3), which is insoluble in water and causes the lime water to turn milky:\nCO2 + Ca(OH)2 → CaCO3 + H2O\nThis reaction is often used as a test for the presence of carbon dioxide gas." 
    },
    {
        q: "Preparation of carbon dioxide in the laboratory",
        a: "Carbon dioxide can be prepared in the laboratory by reacting a carbonate or bicarbonate with an acid. For example, when calcium carbonate (CaCO3) reacts with hydrochloric acid (HCl), it produces carbon dioxide gas:\nCaCO3 + 2HCl → CaCl2 + CO2 + H2O\nThis reaction is commonly used to generate carbon dioxide for various experiments and demonstrations.\n Heating carbonates like calcium carbonate (CaCO3) can also produce carbon dioxide:\nCaCO3 → CaO + CO2\nThis method is often used in industrial processes to produce carbon dioxide on a larger scale."
    },
    {
        q: "Carbon monoxide and its properties",
        a: "Carbon monoxide (CO) is a colorless, odorless, and tasteless gas that is highly toxic to humans and animals. It is produced by the incomplete combustion of carbon-containing fuels.\nProperties of carbon monoxide include:\n1. It is lighter than air and can accumulate in enclosed spaces, posing a risk of poisoning.\n2. It binds to hemoglobin in the blood more effectively than oxygen, reducing the blood's ability to carry oxygen and leading to symptoms of carbon monoxide poisoning.\n3. It is used in industrial processes such as the production of chemicals and as a fuel in certain applications."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Carbon and its Compounds</span>
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

export default CarbonAndItsCompounds;