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

const TheFundamentalUnitOfLifePage = () => {
  const content = [
    { 
      q: "What is a cell?", 
      a: "The smallest structural and functional unit of life, capable of independent existence. Every organ—from brain to bone—is made of hundreds of thousands of cells." 
    },
     { 
      q: "Characterisitcs of cells ?", 
      a: "a)They are the building blocks of life, b)Capable of independent existence and performs all the basic functions of life, c)Cells arise from pre-existing cells through cell division, d)Contain genetic material (DNA) that is passed on during cell division." 
    },
     { 
      q: "Discovery of cell", 
      a: "Discovered by Robert Hooke in 1665 while examining cork under a microscope. He observed tiny box-like structures and called them 'cells' because they resembled small rooms." 
    },
    { 
      q: "The Invention of the Microscope", 
      a: "Van Leeuwenhoek made the first simple microscope (200x). Robert Hooke developed a compound microscope with two lenses. Modern electron microscopes use electron beams and magnets." 
    },
    { 
      q: "What was Cell Theory?", 
      a: "Proposed by Schleiden and Schwann in 1839. Later modified by Rudolf Virchow. It states: 1) All living organisms are made of cells. 2) The cell is the basic unit of life. 3) All cells arise from pre-existing cells. An exception to cell theory is viruses, which are not made of cells and cannot reproduce independently." 
    },
    { 
      q: "Cell Size Facts", 
      a: "Bacteria (0.3-5.0 μm) are the smallest. Red Blood Cells are ~7 μm. Nerve cells are the longest. The Ostrich egg is the largest single cell." 
    },
     { 
      q: "How the cell shape and cell size suit various functions", 
      a: "Human white blood cells are ameboid and can change shape to engulf pathogens. Nerve cells have long extensions (axons) to transmit signals over distances. Red blood cells are biconcave to maximize surface area for oxygen transport.Muscle cells are elongated and packed with contractile proteins for movement.Guard cells are kidney-shaped and control the opening of stomata in plants for gas exchange.xylem vessels are long and hollow to transport water in plants." 
    },
     { 
      q: "What is Cell membrane and its functions", 
      a: "Cell membrane is a thin, flexible barrier that surrounds the cell. It controls what enters and leaves the cell, provides protection and support, and allows communication with other cells through receptor proteins. Acts as a semipermeable barrier, maintaining homeostasis by regulating the internal environment of the cell." 
    },
     { 
      q: "What is Cell wall and its functions", 
      a: "Cell wall is a rigid layer found outside the cell membrane in plant cells, fungi, and some bacteria. It provides structural support and protection, maintains cell shape, prevents excessive water uptake, and allows the passage of certain substances while blocking others." 
    },
     { 
      q: "What is a Nucleus and its functions", 
      a: "Nucleus is a membrane-bound organelle ,discovered by Robert Brown (1831,) that contains the cell's genetic material (DNA). It controls cellular activities by regulating gene expression, serves as the site of DNA replication and RNA synthesis, and protects the DNA from damage. It is double-membraned and contains nucleolus, where ribosomal RNA is produced. It contains chromatin, which is DNA wrapped around histone proteins, and is organized into chromosomes during cell division." 
    },
     { 
      q: "What is Cytoplasm and protoplasm and its functions", 
      a: "Cytoplasm is the jelly-like substance that fills the cell and surrounds the organelles. It provides a medium for chemical reactions, supports and suspends organelles, and allows for the movement of materials within the cell. Protoplasm refers to the living contents of a cell, including both the cytoplasm and the nucleus." 
    },
     { 
      q: "What is the endoplasmic reticulum and its functions", 
      a: "The endoplasmic reticulum (ER) is a network of membranous tubules and sacs. Rough ER has ribosomes and synthesizes proteins, while Smooth ER lacks ribosomes and synthesizes lipids, detoxifies drugs, and stores calcium ions." 
    },
     { 
      q: "What is mitochondria and its functions", 
      a: "The mitochondria is a double-membraned organelle known as the powerhouse of the cell. It generates ATP through cellular respiration. It is made up of an outer membrane, an inner membrane with folds called cristae, and a matrix that contains enzymes and mitochondrial DNA." 
    },
    {
        q: "What are Ribosomes and their functions",
        a: "Ribosomes are small, non-membrane-bound organelles responsible for protein synthesis. They can be found floating freely in the cytoplasm or attached to the rough endoplasmic reticulum. Ribosomes read messenger RNA (mRNA) sequences and assemble amino acids into polypeptide chains to form proteins."
    },
    {
        q: "What are Golgi apparatus and its functions",
        a: "The Golgi apparatus is a stack of flattened membranous sacs that modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles. It receives vesicles from the ER, processes their contents, and sends them to their final destinations."
    },
    {
        q: "What are Lysosomes and their functions",
        a: "Lysosomes are membrane-bound organelles that contain digestive enzymes. They break down waste materials, cellular debris, and foreign substances. Lysosomes play a key role in cellular homeostasis and can also be involved in programmed cell death (apoptosis)."
    },
    {
        q: "What are Vacuoles and their functions",
        a: "Vacuoles are membrane-bound sacs that store substances such as water, nutrients, and waste products. In plant cells, the central vacuole maintains turgor pressure, which helps keep the plant upright. In animal cells, vacuoles are smaller and more numerous, involved in storage and transport."
    },
    {
        q: "What are Plastids and their functions",
        a: "Plastids are a group of plant organelles that include chloroplasts, chromoplasts, and leucoplasts. Chloroplasts contain chlorophyll and are responsible for photosynthesis. Chromoplasts store pigments that give fruits and flowers their color. Leucoplasts are involved in the storage of starch, oils, or proteins."
    },
    {
        q: "Centrosomes, Centrioles and their functions",
        a: "Centrosomes are organelles that serve as the main microtubule organizing centers in animal cells. They consist of two centrioles, which are cylindrical structures made of microtubules. Centrosomes play a crucial role in cell division by helping to organize the mitotic spindle, which separates chromosomes during mitosis."
    },
    {
        q: "Cell inclusions and their functions",
        a: "Cell inclusions are non-living substances found in the cytoplasm of cells. They include glycogen granules (energy storage), lipid droplets (fat storage), and pigment granules (coloration). These inclusions serve various functions such as energy storage, protection, and pigmentation."
    },
    { 
      q: "Eukaryotic vs Prokaryotic", 
      a: "Eukaryotic: True nucleus & membrane-bound organelles (Complex). Prokaryotic: No true nucleus or membrane-bound organelles (Simple/Small)." 
    },
    { 
      q: "Animal vs Plant Cells", 
      a: "Plant cells have cell walls, chloroplasts, and large central vacuoles. Animal cells have irregular shapes and smaller vacuoles." 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            The Fundamental Unit of Life: <span className="text-blue-600">Cell</span>
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

export default TheFundamentalUnitOfLifePage;