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

const Tissues = () => {
  const content = [
    { 
      q: "What is a tissue?", 
      a: "A tissue is a group of similar cells that work together to perform a specific function. Tissues are the building blocks of organs and organisms. They can be classified into four main types: epithelial, connective, muscular, and nervous tissues." 
    },
     { 
      q: "Meristematic Tissues and their functions", 
      a: "Meristematic tissues are regions of actively dividing cells in plants. They are responsible for growth and development. Types include apical meristems (found at tips of roots and shoots, responsible for primary growth), lateral meristems (cambium, responsible for secondary growth), and intercalary meristems (found at the base of leaves or internodes, allowing regrowth).Their characteristics include small, densely packed cells with thin walls and large nuclei. They have the ability to differentiate into various types of cells, contributing to the formation of different tissues and organs in plants." 
    },
     { 
      q: "Permanent Tissues and their functions", 
      a: "Permanent tissues are mature tissues in plants that have lost the ability to divide. They are classified into simple permanent tissues (parenchyma, collenchyma, sclerenchyma) and complex permanent tissues (xylem and phloem). Parenchyma is involved in photosynthesis, storage, and secretion. Collenchyma provides support while allowing flexibility. Sclerenchyma provides rigid support. Xylem transports water and minerals, while phloem transports food." 
    },
    { 
      q: "Parenchyma and its functions", 
      a: "Parenchyma is a simple permanent tissue in plants composed of living cells with thin walls. It functions in photosynthesis, storage of nutrients and water, and secretion. Parenchyma cells can also help in wound healing and regeneration in plants." 
    },
    { 
      q: "Collenchyma and its functions", 
      a: "Collenchyma is a simple permanent tissue in plants composed of living cells with unevenly thickened walls. It provides flexible support to growing parts of the plant, such as stems and leaves, allowing them to bend without breaking. Made up of elongated cells with thickened corners, collenchyma is often found beneath the epidermis in stems and leaves." 
    },
    { 
      q: "Epidermis and its characteristics", 
      a: "Epidermis is the outermost layer of cells in plants, serving as a protective barrier against environmental factors. It is typically a single layer of tightly packed cells that may be covered with a waxy cuticle to prevent water loss. The epidermis also contains specialized structures such as stomata and guard cells for gas exchange" 
    },
     { 
      q: "Cork (Phellem) and its functions", 
      a: "Cork (phellem) is a protective tissue in plants that forms the outer layer of the bark. It is composed of dead cells with thick, suberized walls that provide insulation and protection against physical damage, water loss, and pathogens. Cork also helps in gas exchange through lenticels and can be used commercially for various purposes. The cell wells are deposited with suberin, a waxy substance that makes cork impermeable to water and gases, contributing to its protective properties." 
    },
     { 
      q: "Xylem and its charteristics", 
      a: "Xylem is a complex permanent tissue in plants responsible for the transport of water and minerals from roots to other parts of the plant. It is composed of various cell types, including tracheids, vessel elements, xylem fibers, and xylem parenchyma. Xylem cells are typically dead at maturity and have thickened walls that provide structural support to the plant. Its has lignin in its cell walls, which provides strength and rigidity, allowing it to withstand the negative pressure generated during water transport. Xylem also plays a crucial role in supporting the plant structurally, especially in woody plants where it forms the bulk of the wood." 
    },
     { 
      q: "Phloem and its characteristics", 
      a: "Phloem is a complex permanent tissue in plants responsible for the transport of food (sugars) from the leaves to other parts of the plant. It is composed of sieve tube elements, companion cells, phloem fibers, and phloem parenchyma. Phloem cells are typically living at maturity and have thin walls that allow for the efficient transport of nutrients. Sieve tube elements are connected end-to-end to form sieve tubes, which facilitate the flow of sap. Companion cells assist sieve tube elements in their metabolic functions and help maintain the flow of nutrients through the phloem." 
    },
     { 
      q: "Ligament and tendons", 
      a: "Ligaments are tough, fibrous connective tissues that connect bones to other bones, providing stability to joints. Tendons are similar connective tissues that connect muscles to bones, allowing for movement when muscles contract. Both ligaments and tendons are composed primarily of collagen fibers, which give them strength and flexibility." 
    },
     { 
      q: "Cartilage and its functions", 
      a: "Cartilage is a flexible connective tissue found in various parts of the body, including joints, ear, nose, and respiratory tract. It provides support and cushioning to these areas while allowing for smooth movement. Cartilage is composed of chondrocytes (cartilage cells) embedded in an extracellular matrix rich in collagen and proteoglycans, which give it its unique properties of strength and elasticity. Chondrin is a gelatinous substance found in cartilage that provides it with its characteristic resilience and ability to withstand compressive forces." 
    },
     { 
      q: "Bone and its functions", 
      a: "Bone is a hard, dense connective tissue that forms the skeleton of vertebrates. It provides structural support, protects internal organs, and facilitates movement by serving as attachment points for muscles. Bone is composed of osteocytes (bone cells) embedded in a matrix of collagen fibers and mineralized with calcium phosphate, which gives it strength and rigidity. The bone matrix also contains osteoid, an unmineralized organic component that provides flexibility and tensile strength to the bone. Ossein is a protein found in bone that contributes to its strength and resilience. Periosteum is a dense layer of connective tissue that covers the outer surface of bones, providing nourishment and serving as an attachment point for tendons and ligaments and haversian canals are microscopic channels in bone that contain blood vessels and nerves, allowing for the exchange of nutrients and waste products between bone cells and the circulatory system." 
    },
     { 
      q: "Blood Vs Lymph", 
      a: "Blood is a fluid connective tissue that circulates through the cardiovascular system, transporting oxygen, nutrients, hormones, and waste products. It consists of red blood cells, white blood cells, platelets, and plasma. Lymph is a clear fluid that circulates through the lymphatic system, carrying immune cells and waste products from tissues back to the bloodstream. It contains lymphocytes (a type of white blood cell) and is involved in immune responses and the maintenance of fluid balance in the body." 
    },
    {
        q: "Muscular tissue and its types",
        a: "Muscular tissue is a type of animal tissue responsible for movement. It is composed of muscle fibers that can contract and relax. There are three types of muscular tissue: skeletal muscle (voluntary, striated, attached to bones), smooth muscle (involuntary, non-striated, found in walls of internal organs), and cardiac muscle (involuntary, striated, found in the heart). Each type of muscular tissue has unique characteristics and functions that contribute to the overall movement and function of the body."
    },
    {
        q: "Nervous tissue and its functions",
        a: "Nervous tissue is a type of animal tissue that makes up the nervous system, including the brain, spinal cord, and peripheral nerves. It is composed of neurons (nerve cells) and glial cells (supporting cells). Nervous tissue is responsible for transmitting electrical signals throughout the body, allowing for communication between different parts of the body and coordination of bodily functions. Neurons transmit signals through their axons and dendrites."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Tissues</span>
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

export default Tissues;