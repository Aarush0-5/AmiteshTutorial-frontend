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
      q: "Pure Substance vs Mixture", 
      a: "Pure substances are materials that have a constant composition and distinct properties. They can be elements (composed of a single type of atom) or compounds (composed of two or more types of atoms chemically bonded together). Examples include water (H2O) and oxygen (O2).\n Mixtures are combinations of two or more substances that are not chemically bonded and can be separated by physical means. They can be homogeneous (uniform composition, such as salt dissolved in water) or heterogeneous (non-uniform composition, such as a salad)." 
    },
     { 
      q: "Atomicity vs Molecularity", 
      a: "Atomicity refers to the number of atoms in a molecule of an element. For example, oxygen gas (O2) has an atomicity of 2 because each molecule contains two oxygen atoms. Molecularity refers to the number of molecules involved in a chemical reaction step. For example, in a reaction where two molecules react together, the molecularity is 2." 
    },
     { 
      q: "Valency", 
      a: "Valency refers to the combining capacity of an atom of an element. It is determined by the number of electrons in the outermost shell (valence shell) of an atom. For example, hydrogen has a valency of 1 because it has one electron in its outermost shell and can form one bond. Oxygen has a valency of 2 because it has six electrons in its outermost shell and needs two more electrons to complete its octet." 
    },
    { 
      q: "Ions and its types", 
      a: "Ions are charged particles formed when atoms gain or lose electrons. There are two main types of ions: cations and anions.\n Cations are positively charged ions formed when an atom loses electrons (e.g., Na+).\nAnions are negatively charged ions formed when an atom gains electrons (e.g., Cl-). The formation of ions is essential for the formation of ionic compounds, which are held together by electrostatic forces between oppositely charged ions." 
    },
    { 
      q: "Variable Valency",
      a: "Variable valency refers to the ability of some elements to exhibit more than one valency. This occurs when an element can lose or gain different numbers of electrons, resulting in different oxidation states. For example, iron (Fe) can have a valency of 2 (Fe²⁺) or 3 (Fe³⁺), and copper (Cu) can have a valency of 1 (Cu⁺) or 2 (Cu²⁺). Elements with variable valency are typically transition metals." 
    },
    { 
      q: "Molecular Formula vs Empirical Formula", 
      a: "The molecular formula shows the actual number of atoms of each element in a molecule, while the empirical formula shows the simplest whole-number ratio of atoms in a compound. For example, the molecular formula of glucose is C6H12O6, but its empirical formula is CH2O. The molecular formula is always a multiple of the empirical formula." 
    },
     { 
      q: "Importance of Molecular Formula", 
      a: "The molecular formula is important because it provides the exact number of atoms of each element in a molecule. This information is crucial for understanding the structure and properties of a compound, calculating molar mass, and determining the stoichiometry of chemical reactions. It also helps in identifying and distinguishing between different compounds that may have the same empirical formula but different molecular formulas." 
    },
     { 
      q: "Radicals and their types", 
      a: "Radicals are atoms or groups of atoms that have unpaired electrons, making them highly reactive. There are two main types of radicals: free radicals and molecular radicals.\n Free radicals are individual atoms or molecules with unpaired electrons (e.g., hydroxyl radical OH•). They can cause damage to cells and tissues in the body, leading to aging and diseases.\n Molecular radicals are formed when a molecule has an unpaired electron (e.g., nitric oxide NO). They play important roles in various biological processes and chemical reactions.\n They can be simple (when they consist of a single atom) or complex (when they consist of multiple atoms) or they can be acidic (when they can donate a proton) or basic (when they can accept a proton) or they can be electropositive (when they can accept an electron) or electronegative (when they can donate an electron)."
    },
     { 
      q: "How to write the chemical formula of a compound?", 
      a: "To write the chemical formula of a compound, follow these steps:\n 1. Identify the elements involved in the compound.\n 2. Determine the valency (or oxidation state) of each element.\n 3. Use the criss-cross method to balance the charges: write the valency of each element as a subscript on the opposite element.\n 4. Simplify the subscripts if necessary to get the simplest whole-number ratio.\n Example: For magnesium oxide (MgO), magnesium has a valency of +2 and oxygen has a valency of -2. The formula is MgO because +2 and -2 cancel out." 
    },
    { 
      q: "Rules to naming compounds", 
      a: "Adding the suffix '-ide' to the name of the non-metal element (e.g., sodium chloride for NaCl).\n Using prefixes to indicate the number of atoms in a compound (e.g., carbon dioxide for CO2, where 'di-' indicates two oxygen atoms).\n For ionic compounds, naming the cation first followed by the anion (e.g., calcium carbonate for CaCO3).\n For covalent compounds, using prefixes to indicate the number of atoms and adding '-ide' to the second element (e.g., sulfur hexafluoride for SF6)." 
    },
    { 
      q: "Definng chemical equation", 
      a: "A chemical equation is a symbolic representation of a chemical reaction, showing the reactants (starting materials) on the left side and the products (substances formed) on the right side, separated by an arrow (→). The equation also includes coefficients to balance the number of atoms of each element on both sides, ensuring that the law of conservation of mass is satisfied. For example, the chemical equation for the reaction between hydrogen and oxygen to form water is: 2H2 + O2 → 2H2O." 
    },
     { 
      q: "Relative atomic mass vs Relative molecular mass", 
      a: "Relative atomic mass is the average mass of an atom of an element compared to 1/12th the mass of a carbon-12 atom. It is expressed in atomic mass units (amu).\n Relative molecular mass is the sum of the relative atomic masses of all atoms in a molecule. It is also expressed in atomic mass units (amu). For example, the relative molecular mass of water (H2O) is 18 amu, which is calculated as 2(1 amu) + 16 amu = 18 amu." 
    },
     { 
      q: "Percentage composition of a compound", 
      a: "Percentage composition of a compound is the percentage by mass of each element in the compound. It is calculated using the formula: (mass of element in 1 mole of compound / molar mass of compound) x 100%. For example, in water (H2O), the percentage composition of hydrogen is (2 x 1 g/mol / 18 g/mol) x 100% = 11.1%, and that of oxygen is (16 g/mol / 18 g/mol) x 100% = 88.9%." 
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