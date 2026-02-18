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

const Flower= () => {
  const content = [
    { 
      q: "Flower and its parts", 
      a: "A flower is the reproductive structure of angiosperms (flowering plants). It typically consists of four main parts: sepals, petals, stamens or androecium, and gynoecium or carpels. Sepals are the outermost whorl that protects the developing flower bud. Petals are often colorful and attract pollinators. Stamens are the male reproductive organs that produce pollen, while the gynoecium is the female reproductive organ that contains the ovary, style, and stigma. The ovary houses the ovules, which develop into seeds after fertilization. The style is a slender stalk that connects the stigma to the ovary, and the stigma is the receptive surface for pollen grains during pollination." 
    },
     { 
      q: "Complete and Incomplete Flowers", 
      a: "Complete flowers have all four main parts: sepals, petals, stamens, and gynoecium. Incomplete flowers lack one or more of these parts. For example, a flower that lacks petals is considered incomplete. The presence or absence of these parts can affect the flower's ability to attract pollinators and reproduce." 
    },
     { 
      q: "Bracts and Nectaries", 
      a: "Bracts are modified leaves that are often found at the base of a flower or inflorescence. They can be colorful and serve to attract pollinators, similar to petals. Nectaries are specialized glands that produce nectar, a sugary liquid that attracts pollinators such as bees, butterflies, and hummingbirds. Nectaries can be located in various parts of the flower, including the base of the petals or within the floral tube." 
    },
    { 
      q: "Flower Shape and Symmetry", 
      a: "Flower shape and symmetry can vary widely among different species of plants. Flowers can be actinomorphic (radially symmetrical), where the flower can be divided into equal halves along multiple planes, or zygomorphic (bilaterally symmetrical), where the flower can only be divided into equal halves along one plane. The shape and symmetry of a flower can influence its pollination strategy and the types of pollinators it attracts." 
    },
    { 
      q: "Sexuality in Flowers", 
      a: "Flowers can be classified based on their sexuality. A flower is considered bisexual (or perfect) if it contains both stamens and gynoecium, allowing it to produce both pollen and ovules. Unisexual (or imperfect) flowers contain either stamens or gynoecium, but not both. Unisexual flowers can be further classified as male (staminate) if they contain only stamens, or female (carpellate) if they contain only gynoecium. Neuter flowers lack both stamens and gynoecium and are typically sterile. The sexual characteristics of flowers play a crucial role in their reproductive strategies and the diversity of plant species." 
    },
    { 
      q: "Calyx and its characteristics", 
      a: "Calyx is the outermost whorl of a flower, consisting of sepals that protect the developing flower bud. The calyx can be either gamosepalous (sepals fused together) or polysepalous (sepals free from each other). The calyx serves to protect the flower during its early stages of development and can also play a role in attracting pollinators if the sepals are colorful or have unique shapes. Decidous calyx is one that falls off after the flower blooms, while persistent calyx remains attached to the flower even after blooming." 
    },
     { 
      q: "Corolla and its functions", 
      a: "Corolla is the second whorl of a flower, consisting of petals that are often colorful and serve to attract pollinators. The corolla can be either gamopetalous (petals fused together) or polypetalous (petals free from each other). The shape, color, and scent of the corolla can vary widely among different species of plants and play a crucial role in attracting specific pollinators. The corolla also provides a landing platform for pollinators and can help guide them towards the reproductive organs of the flower." 
    },
     { 
      q: "Androecium and its charteristics", 
      a: "Androecium is the third whorl of a flower, consisting of stamens that are the male reproductive organs. Each stamen typically consists of a filament (a slender stalk) and an anther (the pollen-producing structure). The number of stamens can vary among different species of plants, and they can be arranged in various ways within the flower. The androecium plays a crucial role in the reproductive process by producing pollen, which contains the male gametes necessary for fertilization. The structure and arrangement of the androecium can influence the efficiency of pollination and the success of reproduction in flowering plants." 
    },
     { 
      q: "Cohesions of stamens", 
      a: "Stamens can exhibit various types of cohesion, which refers to the fusion or connection of stamens in a flower. The types of cohesion include: \n 1) Monadelphous: where all stamens are fused together by their filaments into a single group (e.g., cotton). \n 2) Diadelphous: where stamens are fused into two groups, with one group containing more stamens than the other (e.g., pea). \n 3) Polyadelphous: where stamens are fused into more than two groups (e.g., China rose). \n 4) Syngenesious: where anthers of the stamens are fused together while the filaments remain free (e.g., sunflower). \n 5) Synandrous: where both filaments and anthers are fused together (e.g., Calotropis). The type of stamen cohesion can affect the pollination mechanism and the efficiency of pollen transfer in flowering plants." 
    },
     { 
      q: "Gyneoecium and its characteristics", 
      a: "Gynoecium is the fourth whorl of a flower, consisting of carpels that are the female reproductive organs. Each carpel typically consists of an ovary (which contains ovules), a style (a slender stalk), and a stigma (the receptive surface for pollen). The number of carpels can vary among different species of plants, and they can be arranged in various ways within the flower. The gynoecium plays a crucial role in the reproductive process by housing the ovules, which develop into seeds after fertilization. The structure and arrangement of the gynoecium can influence the efficiency of fertilization and the success of reproduction in flowering plants." 
    },
     { 
      q: "Types of gynoecium", 
      a: "Gynoecium can be classified based on the number of carpels and their arrangement. The types of gynoecium include: \n 1) Monocarpellary: where the gynoecium consists of a single carpel (e.g., mustard). \n 2) Multicarpellary: where the gynoecium consists of multiple carpels, which can be arranged in different ways: \n - Apocarpous: where the carpels are free from each other (e.g., rose). \n - Syncarpous: where the carpels are fused together (e.g., tomato). The type of gynoecium can affect the reproductive strategy and the diversity of plant species." 
    },
     { 
      q: "Inflorescence ", 
      a: "Inflorescence refers to the arrangement of flowers on a branch of floral axis of a plant." 
    },
     { 
      q: "Placentation", 
      a: "Placentation refers to the arrangement of ovules within the ovary of a flower." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Flower</span>
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

export default Flower;