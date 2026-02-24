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

const AtomicStructureCovalentBonding= () => {
  const content = [
    { 
      q: "Dalton's atomic theory", 
      a: "John Dalton's atomic theory, proposed in the early 19th century (1803), consists of several key postulates:\n 1. All matter is made up of tiny indivisible particles called atoms.\n 2. Atoms of a given element are identical in mass and properties, while atoms of different elements differ in mass and properties.\n 3. Atoms cannot be created, destroyed, or transformed into other atoms during chemical reactions; they can only combine, separate, or rearrange.\n 4. Compounds are formed when atoms of different elements combine in fixed ratios." 
    },
     { 
      q: "Atom Vs Element Vs Molecule", 
      a: "An atom is the smallest unit of an element that retains its chemical properties. \nAn element is a pure substance made up of only one type of atom. \nA molecule is a group of two or more atoms bonded together chemically to form a compound. For example, water (H2O) is a molecule composed of two hydrogen atoms and one oxygen atom." 
    },
     { 
      q: "Discovery of Electrons", 
      a: "Electrons were discovered by J.J. Thomson in 1897 through his experiments with cathode rays. He observed that cathode rays were deflected by electric and magnetic fields, leading him to conclude that they were composed of negatively charged particles, which he called electrons. This discovery was crucial in understanding the structure of the atom and led to the development of the plum pudding model of the atom.\n Cathode ray experiments involved passing an electric current through a gas at low pressure, which produced a stream of particles (cathode rays) that were deflected by magnetic and electric fields, indicating that they were negatively charged and had mass. This discovery challenged the existing atomic models and paved the way for the modern understanding of atomic structure.\n Thomson Concluded that Cathode rays were made up of negatively charged particles, which he called electrons. He also proposed that atoms were composed of a positively charged 'pudding' with negatively charged electrons embedded within it, leading to the plum pudding model of the atom." 
    },
    { 
      q: "Properties of Electrons", 
      a: "Electrons are subatomic particles with a negative electric charge of -1.602 x 10^-19 coulombs. They have a mass of approximately 9.109 x 10^-31 kilograms, which is much smaller than the mass of protons and neutrons. Electrons are found outside the nucleus in electron shells or orbitals and play a crucial role in chemical bonding and electrical conductivity." 
    },
    { 
      q: "Discovery of Protons",
      a: "Protons were discovered by E Goldstein in 1886 through his experiments with canal rays (positive rays). He observed that when a high voltage was applied to a gas discharge tube, positively charged particles were emitted from the anode. These particles were later identified as protons, which are positively charged subatomic particles found in the nucleus of an atom.\nProperties of Anode rays (positive rays) include:\n 1. They are composed of positively charged particles (protons).\n 2. They are produced in a gas discharge tube when a high voltage is applied.\n 3. They have a mass much larger than that of electrons.\n 4. They are deflected by electric and magnetic fields in the opposite direction to cathode rays (electrons)." 
    },
    { 
      q: "Properties of Protons", 
      a: "Protons are subatomic particles with a positive electric charge of +1.602 x 10^-19 coulombs. They have a mass of approximately 1.673 x 10^-27 kilograms, which is much larger than the mass of electrons. Protons are found in the nucleus of an atom and play a crucial role in determining the atomic number and chemical properties of an element." 
    },
     { 
      q: "Plum Pudding Model of the Atom and its limitations", 
      a: "The plum pudding model of the atom, proposed by J.J. Thomson in 1904, suggested that atoms were composed of a positively charged 'pudding' with negatively charged electrons embedded within it. This model was later found to be incorrect because it failed to explain how the positively charged 'pudding' could hold the negatively charged electrons in place and did not account for the existence of a nucleus. The model was eventually replaced by the Rutherford model, which introduced the concept of a dense, positively charged nucleus at the center of the atom." 
    },
    {
        q: "Discovery of Neucleus",
        a: "The nucleus was discovered by Ernest Rutherford in 1911 through his gold foil experiment. In this experiment, Rutherford and his colleagues directed a beam of alpha particles at a thin sheet of gold foil. They observed that while most of the alpha particles passed through the foil, a small fraction were deflected at large angles, and some even bounced back. This led Rutherford to conclude that atoms have a small, dense, positively charged nucleus at their center, which contains most of the atom's mass. The discovery of the nucleus was a significant milestone in understanding atomic structure and led to the development of the nuclear model of the atom."
    },
     { 
      q: "Rutherford's Nuclear Model of the Atom and its limitations", 
      a: "Rutherford's nuclear model of the atom, proposed in 1911, suggested that atoms have a dense, positively charged nucleus at the center with electrons orbiting around it. This model was a significant improvement over the plum pudding model but had limitations:\n 1. It did not explain why electrons do not spiral into the nucleus due to electromagnetic radiation.\n 2. It did not account for the stability of atoms.\n 3. It did not explain the discrete spectral lines observed in atomic spectra.\nThese limitations were later addressed by Niels Bohr's model, which introduced quantized electron orbits."
    },
     { 
      q: "Bohr's Atom Model and its limitations", 
      a: "Bohr's atomic model, proposed by Niels Bohr in 1913, introduced the idea that electrons orbit the nucleus in fixed, quantized energy levels. The model was a significant improvement over Rutherford's model because it explained the stability of atoms and the discrete spectral lines observed in atomic spectra.\n Its properties include:\n 1. Electrons orbit the nucleus in specific energy levels or shells.\n 2. Electrons can only occupy certain allowed energy levels and cannot exist in between them.\n 3. When an electron absorbs energy, it can jump to a higher energy level (excited state), and when it releases energy, it falls back to a lower energy level (ground state), emitting light of specific wavelengths.\n However, Bohr's model had limitations:\n 1. It could not explain the spectra of atoms with more than one electron.\n 2. It did not account for the wave-like nature of electrons.\n 3. It could not explain the fine structure of spectral lines or the Zeeman effect (splitting of spectral lines in a magnetic field).\n These limitations were later addressed by quantum mechanics and the development of the quantum mechanical model of the atom." 
    },
    { 
      q: "Discovery of Neutrons and their properties", 
      a: "Neutrons were discovered by James Chadwick in 1932. Chadwick conducted experiments involving the bombardment of beryllium with alpha particles and observed that the resulting radiation could knock protons out of paraffin wax. He concluded that this radiation consisted of neutral particles with a mass similar to that of protons but no charge. These particles were named neutrons.\n Properties of neutrons:\n 1. Neutrons are subatomic particles with no electric charge (they are neutral).\n 2. They have a mass slightly greater than that of protons (approximately 1.675 x 10^-27 kg).\n 3. Neutrons are found in the nucleus of an atom along with protons.\n 4. The number of neutrons in an atom determines its isotope." 
    },
    { 
      q: "Atomic Number, Mass Number, Isotopes, and Isobars", 
      a: "Atomic Number: The number of protons in the nucleus of an atom. It determines the identity of an element.\n Mass Number: The sum of protons and neutrons in the nucleus of an atom.\n Isotopes: Atoms of the same element with the same atomic number but different mass numbers due to varying numbers of neutrons.\n Isobars: Atoms of different elements with the same mass number but different atomic numbers." 
    },
     { 
      q: "Bohr-Bury Scheme of the Atom", 
      a: "The Bohr-Bury scheme is a model of atomic structure that describes how electrons are arranged in shells around the nucleus. According to this scheme:\n 1. Electrons revolve around the nucleus in fixed circular orbits called shells or energy levels.\n 2. Each shell has a specific energy and is designated by a number (K, L, M, N, etc.) or by principal quantum number (n = 1, 2, 3, 4...).\n 3. The maximum number of electrons in any shell is given by the formula 2n², where n is the shell number.\n 4. Electrons fill shells starting from the innermost shell (K) and move outward.\n 5. The outermost shell can hold a maximum of 8 electrons (except for the first shell which can hold only 2 electrons)." 
    },
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
     
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Atomic Structure and Chemical Bonding</span>
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

export default AtomicStructureCovalentBonding;