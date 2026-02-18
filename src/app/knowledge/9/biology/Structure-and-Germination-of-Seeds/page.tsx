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

const StructureandGerminationofSeeds= () => {
  const content = [
    { 
      q: "Basic Structure of a Seed", 
      a: "A seed is a mature ovule that contains an embryo, stored food, and a protective seed coat. The basic structure of a seed includes the following components: \n 1) Embryo: The embryo is the young, developing plant that will grow into a new plant after germination. It consists of the radicle (the embryonic root), the plumule (the embryonic shoot), and one or more cotyledons (seed leaves that provide nourishment to the developing embryo), Epicotyle and Hypocotyl. \n 2) Stored Food: Seeds contain stored food in the form of starch, proteins, and oils, which provide energy and nutrients to the developing embryo during germination. The stored food can be located in the cotyledons or in a specialized tissue called the endosperm. \n 3) Seed Coat: The seed coat is the outer protective layer of the seed that protects the embryo and stored food from physical damage, desiccation, and pathogens. The seed coat can be hard or soft, depending on the species of plant, and it plays a crucial role in regulating water uptake during germination. Hilum is the scar on the seed coat where the seed was attached to the ovary wall, and it can serve as a point of water entry during germination. Micropyle is a small opening in the seed coat that allows for the entry of water and oxygen during germination, facilitating the growth of the embryo." 
    },
     { 
      q: "Dicot vs Monocot Seeds", 
      a: "Dicot seeds have two cotyledons (seed leaves) that provide nourishment to the developing embryo, while monocot seeds have only one cotyledon. Dicot seeds typically have a more complex structure, with a well-defined embryo and stored food located in the cotyledons. Monocot seeds often have a simpler structure, with the embryo and stored food located in a single cotyledon or in a specialized tissue called the endosperm. The differences in seed structure between dicots and monocots can influence their germination and growth patterns. Endosperm in monocot seeds serves as the primary source of stored food for the developing embryo, while in dicot seeds, the cotyledons often serve this function. The presence of two cotyledons in dicots allows for a more efficient transfer of nutrients to the developing embryo, while the single cotyledon in monocots may require additional adaptations for nutrient storage and transfer during germination." 
    },
     { 
      q: "Structure of a dicot seed", 
      a: "A dicot seed typically consists of the following structures: \n 1) Seed Coat: The outer protective layer that protects the embryo and stored food. It can be hard or soft, depending on the species. \n 2) Hilum: The scar on the seed coat where the seed was attached to the ovary wall. It serves as a point of water entry during germination. \n 3) Micropyle: A small opening in the seed coat that allows for the entry of water and oxygen during germination, facilitating the growth of the embryo. \n 4) Cotyledons: Two seed leaves that provide nourishment to the developing embryo. They contain stored food in the form of starch, proteins, and oils. \n 5) Embryo: The young, developing plant that will grow into a new plant after germination. It consists of the radicle (the embryonic root), the plumule (the embryonic shoot), and one or more cotyledons (seed leaves that provide nourishment to the developing embryo)." 
    },
    { 
      q: "Structure of a monocot seed", 
      a: "A monocot seed typically consists of the following structures: \n 1) Seed Coat: The outer protective layer that protects the embryo and stored food. It can be hard or soft, depending on the species. \n 2) Hilum: The scar on the seed coat where the seed was attached to the ovary wall. It serves as a point of water entry during germination. \n 3) Micropyle: A small opening in the seed coat that allows for the entry of water and oxygen during germination, facilitating the growth of the embryo. \n 4) Endosperm: A specialized tissue that serves as the primary source of stored food for the developing embryo. It contains starch, proteins, and oils that provide energy and nutrients during germination. \n 5) Embryo: The young, developing plant that will grow into a new plant after germination. It consists of the radicle (the embryonic root), the plumule (the embryonic shoot), and a single cotyledon (seed leaf that provides nourishment to the developing embryo). Aleurone layer is a layer of cells in the endosperm of monocot seeds that produces enzymes to break down stored food during germination, providing nutrients to the developing embryo.Scutellum is a specialized structure in monocot seeds that serves as an absorptive organ, facilitating the transfer of nutrients from the endosperm to the developing embryo during germination. Coleorhiza is a protective sheath that covers the radicle (embryonic root) in monocot seeds, providing protection as it emerges during germination. Coleoptile is a protective sheath that covers the plumule (embryonic shoot) in monocot seeds, allowing it to emerge safely during germination and grow towards the light." 
    },
    { 
      q: "Seed germination and its requirements", 
      a: "Seed germination is the process by which a seed develops into a new plant. The requirements for seed germination include: \n 1) Water: Seeds need to absorb water to activate enzymes that break down stored food and initiate the growth of the embryo. Water also softens the seed coat, allowing the radicle to emerge. \n 2) Oxygen: Seeds require oxygen for cellular respiration, which provides energy for the growth of the embryo during germination. \n 3) Temperature: Seeds have specific temperature requirements for germination, which can vary among different species. Some seeds require warm temperatures, while others may require cooler temperatures or even a period of cold stratification to break dormancy. \n 4) Light: Some seeds require light for germination, while others may require darkness. The light requirement can influence the timing and success of germination in different environments." 
    },
    { 
      q: "Types of seed germination", 
      a: "Seed germination can be classified into two main types: epigeal and hypogeal germination. In epigeal germination, the cotyledons are pushed above the ground as the seedling grows, while in hypogeal germination, the cotyledons remain below the ground. The type of germination can influence the growth and development of the seedling, as well as its ability to compete for resources in its environment." 
    },
     { 
      q: "Germination in bean seed", 
      a: "Germination in a bean seed typically follows the epigeal germination pattern. When a bean seed absorbs water, it swells and the seed coat softens, allowing the radicle (embryonic root) to emerge first. The radicle grows downward into the soil to anchor the seedling and absorb water and nutrients. As the radicle develops, the plumule (embryonic shoot) begins to grow upward towards the light. The cotyledons are pushed above the ground as the seedling grows, providing nourishment to the developing plant until it can produce its own leaves and begin photosynthesis." 
    },
     { 
      q: "Germination in maize seed", 
      a: "Germination in a maize seed typically follows the hypogeal germination pattern. When a maize seed absorbs water, it swells and the seed coat softens, allowing the radicle (embryonic root) to emerge first. The radicle grows downward into the soil to anchor the seedling and absorb water and nutrients. The plumule (embryonic shoot) begins to grow upward towards the light, but the cotyledon remains below the ground. The endosperm serves as the primary source of stored food for the developing embryo during germination, providing energy and nutrients until the seedling can produce its own leaves and begin photosynthesis." 
    },
     { 
      q: "Vivipary ", 
      a: "Vivipary is a type of seed germination where the seed germinates while still attached to the parent plant. In viviparous plants, the embryo develops and grows into a seedling while still connected to the parent plant, allowing it to receive nutrients and support until it is ready to detach and grow independently. Vivipary is commonly observed in certain species of mangroves and some aquatic plants, where the seeds germinate in water or in a moist environment. This adaptation allows the seedlings to establish themselves quickly in their environment, increasing their chances of survival." 
    },
     { 
      q: "Seedling", 
      a: "A seedling is a young plant that has recently germinated from a seed. It typically consists of a small stem, leaves, and roots. The seedling stage is crucial for the growth and development of the plant, as it relies on stored nutrients from the seed to support its initial growth until it can produce its own food through photosynthesis. During this stage, the seedling is vulnerable to environmental stresses such as drought, pests, and diseases, which can affect its survival and growth. Proper care and favorable conditions are essential for the successful establishment of seedlings." 
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Structure and Germination of Seeds</span>
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

export default StructureandGerminationofSeeds;