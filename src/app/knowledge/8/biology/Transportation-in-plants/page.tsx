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

const plantTransportation= () => {
  const content = [
    { 
      q: "What is transportation in plants?", 
      a: "Transportation in plants refers to the movement of substances like water, minerals, and nutrients throughout the plant body. This process is essential for maintaining plant health and growth. The main transport systems in plants are the xylem and phloem tissues. Xylem transports water and minerals from roots to leaves, while phloem transports sugars and other organic compounds from leaves to other parts of the plant." 
    },
     { 
      q: "Structure of root and root hair", 
      a: "Roots are the underground parts of plants that anchor the plant and absorb water and minerals from the soil. Root hairs are tiny, hair-like extensions of root epidermal cells that increase the surface area of the root for more efficient absorption. The structure of a root includes the root cap (calyptra), which protects the growing tip, and the zone of elongation, where cells grow rapidly. The root hair zone is where root hairs develop, increasing surface area for absorption.Epidermis is followed by multi-layered cortex composed of thin walled loosely packed cells, There is a single layer of endodermis which is followed by pericycle and then vascular bundles. The vascular bundles are arranged in a radial pattern in dicots and scattered in monocots." 
    },
     { 
      q: "Ascent of Sap", 
      a: "The ascent of sap refers to the upward movement of water and dissolved minerals from the roots to the leaves in plants. This process is driven by transpiration (the evaporation of water from leaf surfaces), which creates a negative pressure (tension) in the xylem vessels. The cohesion-tension theory explains how water molecules stick together (cohesion) and are pulled upward through the xylem due to the tension created by transpiration. This mechanism allows plants to transport water and nutrients from the soil to all parts of the plant body." 
    },
    { 
      q: "Translocation", 
      a: "Translocation refers to the movement of substances, particularly sugars and other organic compounds, from the leaves (where they are produced during photosynthesis) to other parts of the plant, such as roots, fruits, and growing tissues. This process is primarily carried out by the phloem tissue. The movement of these substances is driven by a pressure gradient created by the loading and unloading of sugars in source and sink tissues. Translocation is essential for distributing nutrients throughout the plant and supporting growth and development." 
    },
    { 
      q: "Structure of Xylem",
      a: "Xylem is the vascular tissue in plants responsible for transporting water and minerals from the roots to the leaves. It consists of several types of cells: tracheids, vessel elements, xylem fibers, and xylem parenchyma cells. \nTracheids are elongated cells with thickened cell walls that are dead at maturity and are found in all vascular plants. \nVessel elements are larger and shorter than tracheids, forming vessels in angiosperms.\n Xylem fibers provide structural support/\n Xylem parenchyma cells store food and other substances. The structure of xylem is adapted for efficient water transport and mechanical support.\nLignin, a complex polymer, is deposited in the cell walls of xylem cells, providing strength and rigidity to the tissue." 
    },
    { 
      q: "Structure of Phloem", 
      a: "Phloem is the vascular tissue in plants responsible for transporting organic compounds, such as sugars and amino acids, from the leaves (where they are produced during photosynthesis) to other parts of the plant. It consists of several types of cells: sieve tube elements, companion cells, phloem fibers, and phloem parenchyma cells. \nSieve tube elements are elongated cells with sieve plates that allow the movement of substances. \nCompanion cells are closely associated with sieve tube elements and help in their functioning. \nPhloem fibers provide structural support.\n Phloem parenchyma cells store food and other substances. The structure of phloem is adapted for efficient transport of organic compounds throughout the plant." 
    },
     { 
      q: "Diffusion vs Osmosis vs Active Transport", 
      a: "Diffusion is the passive movement of molecules from an area of higher concentration to an area of lower concentration. It occurs across a membrane and does not require energy. \nOsmosis is a specific type of diffusion involving the movement of water molecules across a selectively permeable membrane from an area of lower solute concentration to an area of higher solute concentration. While diffusion can involve any substance, osmosis specifically refers to water movement. \nActive transport is the movement of molecules against a concentration gradient, requiring energy in the form of ATP. It is used to move substances like ions and large molecules across membranes. Active transport allows cells to maintain specific concentrations of substances necessary for cellular function." 
    },
     { 
      q: "Path water follows from soil to leaf", 
      a: "Water moves from soil to leaf through the following path: \n1. Root hairs absorb water from the soil.\n2. Water moves through the cortex of the root via apoplastic and symplastic pathways.\n3. Water enters the xylem vessels in the root.\n4. Water is transported upward through the xylem vessels in the stem.\n5. Water reaches the leaves through the xylem vessels in the leaf veins.\nThis process is driven by transpiration, root pressure, and cohesion-tension theory." 
    },
     { 
      q: "Root pressure and Transpiration pull", 
      a: "Root pressure is the pressure that pushes water upward from the roots in a plant. It is generated by the active absorption of minerals and water by root hairs, which creates a positive pressure in the xylem vessels. \nTranspiration pull is the force that pulls water upward through the xylem vessels in a plant. It is caused by the evaporation of water from the leaves, which creates a negative pressure (tension) in the xylem vessels. This tension pulls water up from the roots to the leaves. The combination of root pressure and transpiration pull helps in the upward movement of water and minerals in plants." 
    },
    { 
      q: "Macro vs Micronutrients", 
      a: "Macro nutrients are required by plants in large quantities (e.g., Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, Sulfur). Micronutrients are required in small quantities (e.g., Iron, Manganese, Zinc, Copper, Boron, Molybdenum)." 
    },
    { 
      q: "Transpiration", 
      a: "Transpiration is the process by which water evaporates from the aerial parts of a plant, primarily through the stomata in the leaves. It plays a crucial role in the transport of water and minerals from roots to leaves, as it creates a negative pressure (tension) in the xylem vessels that pulls water upward. Transpiration also helps in cooling the plant and maintaining turgor pressure.\n It happens through \n1. Stomatal transpiration (through stomata)\n2. Cuticular transpiration (through cuticle)\n3. Lenticular transpiration (through lenticels).\n Its significance includes \nCooling effect \nAscent of sap \nMineral transport \nTurgor maintenance \nPhotosynthesis facilitation." 
    },
      { 
      q: "Factors affecting transpiration", 
      a: "Several factors affect the rate of transpiration in plants:\n1. Light intensity: Higher light intensity increases transpiration.\n2. Temperature: Higher temperature increases the rate of transpiration.\n3. Humidity: Lower humidity increases transpiration.\n4. Wind speed: Higher wind speed increases transpiration by removing water vapor from leaf surfaces.\n5. Water availability: Adequate water supply maintains high transpiration rates.\n6. Stomatal density and opening: More open stomata increase transpiration." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Transportation in Plants</span>
          </h1>
          <p className="text-gray-600 italic">Click any card to flip it and reveal the answer.</p>
        </header>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <Flashcard key={index} question={item.q} answer={item.a} />
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2026 Amitesh Tutorials - Master Biology Chapter-wise</p>
        </footer>
      </div>
    </div>
  );
};

export default plantTransportation;