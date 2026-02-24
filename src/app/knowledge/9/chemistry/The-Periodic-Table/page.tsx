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

const ThePeriodicTable= () => {
  const content = [
    { 
      q: "Who gave the periodic table?", 
      a: "The periodic table was developed by Dmitri Mendeleev in 1869. He organized the known elements based on their atomic weights and chemical properties, leaving gaps for elements that had not yet been discovered. His work laid the foundation for the modern periodic table we use today. Later, Antoine Lavoisier and John Newlands also contributed to the development of the periodic table, but Mendeleev's version was the most comprehensive and widely accepted." 
    },
     { 
      q: "Why do we need to classify elements?", 
      a: "Classifying elements helps us understand their properties and behavior. It allows us to predict how elements will react with each other, identify patterns in their physical and chemical properties, and organize the vast number of known elements in a logical and systematic way. This classification system makes it easier to study and apply knowledge about elements in various scientific and industrial applications." 
    },
     { 
      q: "Lavoiser's classification of elements", 
      a: "Antoine Lavoisier classified elements into four categories in the late 18th century:\n 1. **Metals**: Elements that are typically hard, shiny, and good conductors of heat and electricity (e.g., iron, copper).\n 2. **Non-metals**: Elements that are generally soft, dull, and poor conductors of heat and electricity (e.g., sulfur, phosphorus).\n 3. **Gases**: Elements that exist as gases under normal conditions (e.g., hydrogen, oxygen).\n 4. **Earth-like elements**: Elements that are found in the Earth's crust and are often combined with oxygen to form oxides (e.g., calcium, magnesium)." 
    },
    { 
      q: "Dobereiner's triads", 
      a: "Johann Dobereiner, a German chemist, proposed that elements could be grouped into sets of three (called triads) based on their similar properties and atomic weights. In each triad, the atomic weight of the middle element was approximately the average of the atomic weights of the first and third elements. For example, the triad of chlorine, bromine, and iodine showed this pattern. This was an early attempt to identify periodic patterns in elements.\nTriad 1 - Lithium (Li), Sodium (Na), Potassium (K)\nTriad 2 - Calcium (Ca), Strontium (Sr), Barium (Ba)\nTriad 3 - Chlorine (Cl), Bromine (Br), Iodine (I)\n Triad 4 - Sulfur (S), Selenium (Se), Tellurium (Te) \n Triad 5 - Oxygen (O), Sulfur (S), Selenium (Se)" 
    },
    { 
      q: "Newlands' octaves",
      a: "John Newlands, an English chemist, proposed the law of octaves in 1864. He arranged the known elements in order of increasing atomic weights and observed that every eighth element had similar properties to the first element in the group. This was an early attempt to identify periodic patterns in elements. However, his system had limitations and was not widely accepted until later improvements were made by Mendeleev.\n Its advantages were:\n 1. It was the first attempt to classify elements based on their properties.\n 2. It highlighted the periodicity of elements, showing that properties repeat at regular intervals.\n 3. It provided a framework for predicting the properties of undiscovered elements.\n Its disadvantages were:\n 1. It only worked well for the first 16 elements and failed to accommodate heavier elements.\n 2. It did not account for the existence of noble gases, which were discovered later.\n 3. The arrangement was based solely on atomic weights, which led to inconsistencies in some cases." 
    },
    { 
      q: "Mendeleev's periodic law and periodic table", 
      a: "Dmitri Mendeleev proposed the periodic law in 1869, which states that the properties of elements are a periodic function of their atomic masses. He arranged the known elements in order of increasing atomic weights and grouped them based on their similar properties. Mendeleev's periodic table was more comprehensive than previous attempts and even predicted the existence and properties of undiscovered elements. His table became the foundation for the modern periodic table we use today." 
    },
     { 
      q: "Characteristics of Mendeleev's periodic table", 
      a: "Mendeleev's periodic table had several key characteristics:\n 1. It arranged elements in order of increasing atomic weights.\n 2. Elements with similar properties were grouped together in vertical columns (groups).\n 3. It predicted the existence and properties of undiscovered elements by leaving gaps in the table.\n 4. It showed that properties of elements repeat periodically as atomic weights increase.\n 5. It was more comprehensive than previous attempts at classifying elements and laid the foundation for the modern periodic table." 
    },
     { 
      q: "Merits and Demerits of Mendeleev's periodic table", 
      a: "Merits of Mendeleev's periodic table:\n 1. It arranged elements in a logical and systematic way based on atomic weights.\n 2. It predicted the existence and properties of undiscovered elements with remarkable accuracy.\n 3. It showed periodicity in the properties of elements.\n 4. It was more comprehensive than previous attempts at classifying elements.\n\nDemerits of Mendeleev's periodic table:\n 1. It did not account for isotopes, which are atoms of the same element with different atomic masses.\n 2. Some elements were placed in incorrect positions due to incorrect atomic weights at that time.\n 3. The arrangement was based on atomic weights rather than atomic numbers, which led to inconsistencies in some cases."
    },
     { 
      q: "Modern periodic law and periodic table", 
      a: "The modern periodic law, proposed by Henry Moseley in 1913, states that the properties of elements are a periodic function of their atomic numbers (the number of protons in the nucleus). This law replaced Mendeleev's periodic law, which was based on atomic weights. The modern periodic table is organized in order of increasing atomic numbers, which provides a more accurate representation of the periodicity of elements and accounts for isotopes. The modern periodic table is more comprehensive and accurate than Mendeleev's table." 
    },
    { 
      q: "Groups and periods in the periodic table", 
      a: "In the periodic table, groups are vertical columns (18 in total) that contain elements with similar chemical properties. Periods are horizontal rows (7 in total) that represent the number of electron shells in an atom. Elements in the same group have the same number of valence electrons and thus similar chemical behavior. Elements in the same period have the same number of electron shells but different numbers of valence electrons." 
    },
    { 
      q: "Groups and their properties", 
      a: "The periodic table is divided into groups (vertical columns) and periods (horizontal rows). There are 18 groups and 7 periods in the periodic table.\n\nGroup 1 (alkali metals): These elements are highly reactive, soft metals that readily lose one electron to form +1 ions. They react vigorously with water.\nGroup 2 (alkaline earth metals): These elements are less reactive than Group 1 elements but still form +2 ions. They are harder and denser than Group 1 elements.Group 13 (boron group): These elements have three valence electrons and can form +3 ions. They include metals and metalloids.\nGroup 14 (carbon group): These elements have four valence electrons and can form +4 or -4 ions. They include nonmetals, metalloids, and metals.\nGroup 15 (nitrogen group): These elements have five valence electrons and can form -3 ions. They include nonmetals and metalloids.\nGroup 16 (chalcogens): These elements have six valence electrons and can form -2 ions. They include nonmetals and metalloids.\nGroup 17 (halogens): These elements are highly reactive nonmetals that readily gain one electron to form -1 ions. They react vigorously with metals to form salts.\nGroup 18 (noble gases): These elements are inert gases that do not readily react with other elements due to their full valence electron shells. Transition metals (Groups 3-12): These elements have variable oxidation states and form colored compounds. They are good conductors of heat and electricity and are often used as catalysts. Lanthanides and actinides: These are two rows of elements that are typically placed below the main body of the periodic table. They have unique properties and are often used in specialized applications such as electronics and nuclear energy." 
    },
     { 
      q: "Types of elements in the periodic table", 
      a: "The elements in the periodic table are classified into several types based on their properties:\n 1. Metals: These are typically good conductors of heat and electricity, have a shiny appearance, and are malleable and ductile. Examples include iron, copper, and aluminum.\n 2. Nonmetals: These are typically poor conductors of heat and electricity, have a dull appearance, and are brittle. Examples include oxygen, sulfur, and carbon.\n 3. Metalloids: These elements have properties intermediate between metals and nonmetals. They are semiconductors of electricity and heat. Examples include silicon and germanium.\n 4. Noble gases: These are chemically inert gases that do not readily react with other elements due to their full valence electron shells. Examples include helium, neon, and argon.\nTransition metals: These elements have variable oxidation states and form colored compounds. They are good conductors of heat and electricity and are often used as catalysts. Examples include iron, copper, and gold.\nLanthanides and actinides: These are two rows of elements that are typically placed below the main body of the periodic table. They have unique properties and are often used in specialized applications such as electronics and nuclear energy. Examples include cerium (lanthanide) and uranium (actinide)." 
    },
     { 
      q: "Merits and demerits of the modern periodic table", 
      a: "Merits of the modern periodic table:\n 1. It is more accurate and comprehensive than Mendeleev's periodic table.\n 2. It accounts for isotopes and provides a better understanding of atomic structure.\n 3. It helps in predicting the properties of elements based on their position in the table.\n 4. It is organized in order of increasing atomic numbers, which is more logical than atomic weights.\n\nDemerits of the modern periodic table:\n 1. It does not show the electronic configuration of elements clearly.\n 2. Some elements are placed in groups that do not have similar properties (e.g., hydrogen is placed with alkali metals but behaves differently).\n 3. The lanthanides and actinides are placed separately below the main body, which makes it less convenient to study their properties." 
    },
     { 
      q: "Atomic size vs Metallic character vs Chemical reactivity across groups", 
      a: "Down a group in the periodic table, atomic size increases due to the addition of electron shells. Metallic character also increases down a group because atoms are more likely to lose electrons and form positive ions. Chemical reactivity of metals increases down a group as it becomes easier for atoms to lose electrons. For nonmetals, chemical reactivity decreases down a group because it becomes harder for atoms to gain electrons." 
    },
     { 
      q: "Atomic size vs Metallic character vs Chemical reactivity across periods", 
      a: "Across a period from left to right in the periodic table, atomic size decreases due to the increasing nuclear charge pulling electrons closer. Metallic character decreases and nonmetallic character increases across a period. Chemical reactivity of metals decreases across a period as it becomes harder for atoms to lose electrons, while chemical reactivity of nonmetals increases as it becomes easier for atoms to gain electrons." 
    },
     { 
      q: "Alkali Metals and their properties", 
      a: "The alkali metals are the elements in Group 1 of the periodic table (lithium, sodium, potassium, rubidium, cesium, and francium). They are highly reactive metals with the following properties:\n 1. They have one electron in their outermost shell, which they readily lose to form +1 ions.\n 2. They are soft metals that can be cut with a knife.\n 3. They have low melting and boiling points compared to other metals.\n 4. They react vigorously with water to produce hydrogen gas and alkaline solutions (hydroxides).\n 5. They are good conductors of heat and electricity.\n 6. They are stored under oil or in an inert atmosphere to prevent reaction with moisture in the air.\n Alkali metals + O2 -> Alkali metal oxides (e.g., 4Na + O2 -> 2Na2O)\n Alkali metals + H2O -> Alkali metal hydroxides + Hydrogen gas (e.g., 2K + 2H2O -> 2KOH + H2)\n Alkali metals + Acids -> Alkali metal salts + Hydrogen gas (e.g., 2Na + 2HCl -> 2NaCl + H2)\n Color of flame test for alkali metals:\n Lithium (Li) - Crimson red\n Sodium (Na) - Bright yellow\n Potassium (K) - Lilac or light purple\n Rubidium (Rb) - Red-violet\n Cesium (Cs) - Blue-violet" 
    },
     { 
      q: "Alkaline Earth Metals and their properties", 
      a: "The alkaline earth metals are the elements in Group 2 of the periodic table (beryllium, magnesium, calcium, strontium, barium, and radium). They are less reactive than alkali metals but still form +2 ions. Their properties include:\n 1. They have two electrons in their outermost shell, which they readily lose to form +2 ions.\n 2. They are harder and denser than alkali metals.\n 3. They have higher melting and boiling points compared to alkali metals.\n 4. They react with water but less vigorously than alkali metals.\n 5. They are good conductors of heat and electricity.\n Alkaline earth metals + O2 -> Alkaline earth metal oxides (e.g., 2Mg + O2 -> 2MgO)\n Alkaline earth metals + H2O -> Alkaline earth metal hydroxides + Hydrogen gas (e.g., Ca + 2H2O -> Ca(OH)2 + H2)\n Alkaline earth metals + Acids -> Alkaline earth metal salts + Hydrogen gas (e.g., Mg + 2HCl -> MgCl2 + H2)\n Flame test colors for alkaline earth metals:\n Beryllium (Be) - No color\n Magnesium (Mg) - Bright white\n Calcium (Ca) - Brick red\n Strontium (Sr) - Crimson red\n Barium (Ba) - Pale green\n Radium (Ra) - Red" 
    },
     { 
      q: "Halogens and their properties", 
      a: "The halogens are the elements in Group 17 of the periodic table (fluorine, chlorine, bromine, iodine, and astatine). They are highly reactive nonmetals with the following properties:\n 1. They have seven electrons in their outermost shell, which they readily gain to form -1 ions.\n 2. They are diatomic molecules in their elemental form (e.g., F₂, Cl₂).\n 3. They are highly reactive and readily form compounds with other elements.\n 4. Their reactivity decreases down the group due to increasing atomic size and decreasing electronegativity.\n 5. They are good oxidizing agents.\n Halogens + Metals -> Metal halides (e.g., Cl₂ + Na -> NaCl)\n Halogens + Hydrogen -> Hydrogen halides (e.g., Cl₂ + H₂ -> 2HCl)\n Halogens + Water -> Hypohalous acids (e.g., Cl₂ + H₂O -> HClO + HCl)\n Color of halogens:\n Fluorine (F) - Pale yellow gas\n Chlorine (Cl) - Greenish-yellow gas\n Bromine (Br) - Reddish-brown liquid\n Iodine (I) - Shiny gray-black solid\n Astatine (At) - Radioactive and rare, properties not well-known\nOdor of halogens:\n Fluorine (F) - Pungent and irritating\n Chlorine (Cl) - Pungent and irritating\n Bromine (Br) - Pungent and irritating\n Iodine (I) - Mildly antiseptic smell\n Astatine (At) - Radioactive and rare, properties not well-known" 
    },
     { 
      q: "Inert gases and their properties", 
      a: "The inert gases (also known as noble gases) are the elements in Group 18 of the periodic table (helium, neon, argon, krypton, xenon, and radon). They are characterized by their full outer electron shells, making them chemically unreactive. Their properties include:\n 1. They are colorless, odorless gases at room temperature.\n 2. They have very low boiling and melting points.\n 3. They are generally non-reactive due to their complete outer electron shells.\n 4. They are used in various applications such as lighting (neon signs), welding (argon atmosphere), and as protective atmospheres in industrial processes.\n 5. Some inert gases like xenon and krypton are used in specialized applications such as lasers and high-intensity discharge lamps." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">The Periodic Table</span>
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

export default ThePeriodicTable;