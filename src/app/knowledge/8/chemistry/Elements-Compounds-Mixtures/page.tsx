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

const ElementsCompoundsMixtures = () => {
  const content = [
    { 
      q: "Elements, Compounds, and Mixtures", 
      a: "An element is a pure substance made up of only one type of atom, such as oxygen (O) or carbon (C).\n A compound is a substance formed when two or more elements are chemically combined in fixed proportions, such as water (H₂O) or carbon dioxide (CO₂).\n A mixture is a combination of two or more substances that are not chemically combined and can be separated by physical means, such as salt water or air." 
    },
     { 
      q: "Symbols of elements", 
      a: "Each element has a unique symbol, usually derived from its English or Latin name. For example:\n1. Hydrogen (H)\n2. Oxygen (O)\n3. Carbon (C)\n4. Nitrogen (N)\n5. Sodium (Na)\n6. Chlorine (Cl)\n7. Iron (Fe) - derived from the Latin word 'ferrum'\n8. Gold (Au) - derived from the Latin word 'aurum'" 
    },
     { 
      q: "Molecules of elements and compounds", 
      a: "A molecule is the smallest unit of a substance that retains all the properties of that substance. In elements, molecules are made up of atoms of the same element (e.g., O₂, N₂). In compounds, molecules are made up of atoms of different elements (e.g., H₂O, CO₂).\nAtomicity of elements means that elements are made up of indivisible particles called atoms. For example, oxygen is made up of oxygen atoms (O), and carbon is made up of carbon atoms (C).They can be monatomic (single atom, e.g., He), diatomic (two atoms, e.g., O₂), or polyatomic (more than two atoms, e.g., P₄)." 
    },
    { 
      q: "Characteristics of compounds", 
      a: "Compounds have the following characteristics:\n1. They are made up of two or more elements chemically combined in fixed proportions.\n2. The properties of a compound are different from those of its constituent elements.\n3. Compounds can be broken down into their constituent elements by chemical means.\n4. The mass of a compound is equal to the sum of the masses of its constituent elements.\n5. Compounds are pure substances with definite chemical formulas." 
    },
     { 
      q: "Homogeneous vs Heterogeneous Mixtures" ,
      a: "A homogeneous mixture is one in which the components are uniformly distributed throughout the mixture, such as salt water or air. In a heterogeneous mixture, the components are not uniformly distributed, and different parts of the mixture may have different compositions, such as sand and water or oil and water.Examples of homogeneous mixtures include solutions like sugar dissolved in water, while examples of heterogeneous mixtures include salad dressing or a mixture of iron filings and sulfur powder.\nA suspension is a type of heterogeneous mixture in which solid particles are dispersed in a liquid or gas but do not dissolve, such as muddy water or flour in water.\nA emulsion is a type of heterogeneous mixture in which two immiscible liquids are mixed together, such as oil and water. Emulsions can be stabilized by emulsifying agents that help to keep the two liquids mixed together." 
    },
     { 
      q: "Characteristics of mixtures", 
      a: "Mixtures have the following characteristics:\n1. They are made up of two or more substances that are not chemically combined.\n2. The components of a mixture retain their individual properties.\n3. The components of a mixture can be separated by physical means.\n4. The composition of a mixture can vary.\n5. Mixtures are not pure substances." 
    },
    { 
      q: "States of constituents in mixtures", 
      a: "In a mixture, the constituents can exist in different states of matter. For example:\n1. In a solid-liquid mixture like salt water, salt is in solid form and water is in liquid form.\n2. In a gas-liquid mixture like carbonated drinks, carbon dioxide is in gaseous form and water is in liquid form.\n3. In a solid-solid mixture like brass, copper and zinc are both in solid form.\n4. In a liquid-liquid mixture like oil and water, both oil and water are in liquid form but do not mix completely." 
    },
    { 
      q: "Separation of mixtures",
      a: "Separation of mixtures can be achieved through various physical methods, depending on the properties of the components. \nFor solid-solid mixtures, methods like handpicking, sieving, sublimation and magnetic separation can be used. For solid-liquid mixtures, methods like filtration, evaporation, and distillation are effective. For liquid-liquid mixtures, methods like decantation and centrifugation can be employed. The choice of separation method depends on factors such as particle size, solubility, and density of the components in the mixture.\nSedementation is a process used to separate solid particles from a liquid by allowing them to settle at the bottom of a container. Decantation involves pouring off the liquid while leaving the solid particles behind. Filtration uses a porous material to separate solid particles from a liquid. Evaporation involves heating a liquid to convert it into vapor, leaving behind any dissolved solids. Distillation is a process that separates components of a mixture based on their boiling points." 
    },
    { 
      q: "Crystallisation", 
      a: "Crystallisation is the process of forming crystals from a solution, melt, or gas. It occurs when a substance is dissolved in a solvent and then allowed to cool or evaporate slowly, causing the dissolved substance to form solid crystals. This process is commonly used in the purification of substances and in the formation of various materials such as salt, sugar, and minerals." 
    },
     { 
      q: "Distillation", 
      a: "Distillation is a process used to separate components of a liquid mixture based on their different boiling points. In this process, the mixture is heated to vaporize the component with the lower boiling point, which is then condensed back into a liquid in a separate container. This method is commonly used in the purification of water, alcohol, and other substances." 
    },
     { 
      q: "Separating liquid-liquid mixtures", 
      a: "For miscible liquid-liquid mixtures, fractional distillation can be used to separate the components based on their boiling points. For immiscible liquid-liquid mixtures, a separating funnel can be used to allow the denser liquid to settle at the bottom and be drained off separately from the less dense liquid." 
    },
     
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Elements, Compounds and Mixtures</span>
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

export default ElementsCompoundsMixtures;