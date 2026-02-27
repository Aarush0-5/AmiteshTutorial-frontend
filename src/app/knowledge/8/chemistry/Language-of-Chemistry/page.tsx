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

const LanguageOfChemistry = () => {
  const content = [
       { 
      q: "Why atoms combine to form molecules?", 
      a: "Atoms combine to form molecules to achieve a stable electronic configuration, typically by filling their outermost electron shells. This is often done by sharing, transferring, or delocalizing electrons between atoms. The resulting molecules are more stable than the individual atoms because they have lower energy and are more chemically reactive.Duplet and octet rules explain that atoms tend to gain, lose, or share electrons to achieve a full outer shell of 2 electrons (duplet) for hydrogen and helium, or 8 electrons (octet) for most other elements. By forming molecules, atoms can achieve these stable configurations and minimize their energy." 
    },
     { 
      q: "Properties of Isotopes", 
      a: "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons. Properties of isotopes include:\n 1. They have the same chemical properties because they have the same number of electrons.\n 2. They differ in physical properties such as mass and density.\n 3. Some isotopes are stable, while others are radioactive and undergo decay.\n 4. Isotopes can be used in various applications such as medical imaging, dating archaeological artifacts, and nuclear power generation." 
    },
     { 
      q: "Ionic vs Covalent Bonds", 
      a: "Ionic bonds are formed when electrons are transferred from one atom to another, resulting in charged ions (cations and anions) that are held together by electrostatic attraction.\n Covalent bonds are formed when electrons are shared between atoms, allowing each atom to achieve a stable electron configuration. Ionic compounds typically form between metals and non-metals, while covalent compounds typically form between non-metals." 
    },
     { 
      q: "Properties of Ionic compounds", 
      a: "Ionic compounds have the following properties:\n 1. They are generally solid at room temperature and have high melting and boiling points.\n 2. They are good conductors of electricity when dissolved in water or melted.\n 3. They are soluble in polar solvents like water but insoluble in non-polar solvents.\n 4. They form crystalline structures due to the regular arrangement of ions.\n 5. They are typically brittle and break easily when struck." 
    },
     { 
      q: "Properties of Covalent compounds", 
      a: "Covalent compounds have the following properties:\n 1. They are generally gases, liquids, or soft solids at room temperature.\n 2. They have relatively low melting and boiling points compared to ionic compounds.\n 3. They are poor conductors of electricity in their pure form.\n 4. They are generally soluble in non-polar solvents like benzene and hexane but insoluble in polar solvents like water.\n 5. They can be either polar or non-polar depending on the electronegativity difference between the atoms involved." 
    },
     { 
      q: "Types of covalent bonds", 
      a: "Covalent bonds can be classified based on number of bonds formed between atoms:\n 1. Single covalent bond: Involves the sharing of one pair of electrons (e.g., H₂).\n 2. Double covalent bond: Involves the sharing of two pairs of electrons (e.g., O₂).\n 3. Triple covalent bond: Involves the sharing of three pairs of electrons (e.g., N₂).\nCovalent bonds can also be classified based on polarity:\n 1. Polar covalent bond: Electrons are shared unequally between atoms, resulting in a dipole moment (e.g., HCl).\n 2. Non-polar covalent bond: Electrons are shared equally between atoms, resulting in no dipole moment (e.g., Cl₂)." 
    },
    {
        q: "How to balance a chemical equation?",
        a: "To balance a chemical equation, follow these steps:\n 1. Write the unbalanced equation with correct chemical formulas for all reactants and products.\n 2. Count the number of atoms of each element on both sides of the equation.\n 3. Adjust coefficients (numbers in front of chemical formulas) to make the number of atoms of each element equal on both sides.\n 4. Start with elements that appear in only one reactant and one product, then move to more complex elements.\n 5. Check that all atoms are balanced and that coefficients are in their lowest whole-number ratio."  
    },
    {
        q:"Importance of balancing chemical equations?",
        a:"Balancing chemical equations is important because it ensures that the law of conservation of mass is upheld, meaning that matter cannot be created or destroyed in a chemical reaction. A balanced equation accurately represents the quantities of reactants and products involved in the reaction, allowing chemists to predict the amounts of substances consumed and produced. It also helps in calculating yields, determining limiting reagents, and understanding the stoichiometry of the reaction."
    },
    {
        q: "Importance of chemical equations in chemistry?",
        a: "Chemical equations are crucial in chemistry as they provide a concise way to represent chemical reactions. They allow chemists to understand the reactants and products involved, the proportions in which they react, and the energy changes that occur during the reaction. Chemical equations also help in predicting the outcomes of reactions, calculating yields, and designing experiments. They serve as a fundamental tool for communication and analysis in the field of chemistry."
    },
    {
        q: "Limitations of chemical equations?",
        a: "Chemical equations have several limitations, including:\n 1. They do not provide information about the reaction mechanism or the steps involved in the reaction.\n 2. They do not indicate the rate of the reaction or how quickly it occurs.\n 3. They do not show the physical states of reactants and products (solid, liquid, gas, aqueous) unless specified.\n 4. They do not account for side reactions or incomplete reactions that may occur in practice.\n 5. They cannot represent complex reactions with multiple steps or intermediates accurately."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Language of Chemistry</span>
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

export default LanguageOfChemistry;