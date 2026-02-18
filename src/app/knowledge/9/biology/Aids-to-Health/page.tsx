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

const AidstoHealth= () => {
  const content = [
    { 
      q: "Mechanical barriers to health", 
      a: "Mechanical barriers to health are physical structures or devices that help prevent the entry of harmful agents into the body. Examples include skin, which acts as a protective barrier against pathogens; mucous membranes, which trap and expel foreign particles; and cilia in the respiratory tract, which help move mucus and trapped particles out of the lungs. These barriers play a crucial role in maintaining health by preventing infections and protecting against environmental hazards." 
    },
     { 
      q: "Chemical Barriers to health", 
      a: "Chemical barriers to health are substances produced by the body that help protect against harmful agents. Examples include stomach acid, which kills many pathogens that enter through the digestive system; enzymes in saliva and tears that break down bacterial cell walls; and antimicrobial peptides produced by the skin that inhibit the growth of microbes. These chemical barriers work in conjunction with mechanical barriers to provide a comprehensive defense against infections and maintain overall health." 
    },
     { 
      q: "White Blood Cells as a barrier to health", 
      a: "White blood cells (WBCs) are a crucial component of the immune system and serve as a barrier to health by defending the body against infections and foreign invaders. They identify and destroy pathogens such as bacteria, viruses, and parasites. WBCs also play a role in inflammation, which helps to isolate and eliminate harmful agents. There are different types of white blood cells, including neutrophils, lymphocytes, monocytes, eosinophils, and basophils, each with specific functions in the immune response.Macrophages, a type of white blood cell, engulf and digest pathogens and cellular debris, while lymphocytes (B cells and T cells) are responsible for adaptive immunity, producing antibodies and attacking infected cells. Overall, white blood cells are essential for maintaining health by protecting the body from infections and supporting the immune system." 
    },
    { 
      q: "Interferons", 
      a: "Interferons are a group of signaling proteins produced by the body's cells in response to viral infections. They play a crucial role in the immune response by interfering with viral replication and activating immune cells. When a cell is infected by a virus, it releases interferons, which bind to receptors on neighboring cells, triggering a cascade of events that leads to the production of antiviral proteins. These proteins help to inhibit viral replication and spread, while also enhancing the ability of immune cells to recognize and destroy infected cells. Interferons are an important part of the body's defense mechanism against viral infections and have been used therapeutically to treat certain diseases." 
    },
    { 
      q: "Innate vs Adaptive Immunity",
      a: "Innate immunity is the body's first line of defense against pathogens and is present from birth. It provides a rapid, non-specific response to a wide range of pathogens. Innate immunity includes physical barriers (such as skin and mucous membranes), chemical barriers (such as stomach acid), and cellular defenses (such as white blood cells). \n Adaptive immunity, on the other hand, is a specific immune response that develops over time after exposure to a particular pathogen. It involves the activation of lymphocytes (B cells and T cells) that recognize specific antigens on the pathogen. Adaptive immunity has memory, meaning that it can provide long-lasting protection against future infections by the same pathogen." 
    },
    { 
      q: "Active Immunity vs Passive Immunity", 
      a: "Active immunity occurs when the body produces its own antibodies in response to an infection or vaccination. It can be long-lasting and provides protection against future infections by the same pathogen. Passive immunity, on the other hand, is acquired when a person receives antibodies from another source, such as through maternal antibodies passed from mother to child during pregnancy or through antibody-containing blood products. Passive immunity provides immediate but temporary protection, as the body does not produce its own antibodies." 
    },
     { 
      q: "Antibodies", 
      a: "Antibodies, also known as immunoglobulins, are proteins produced by B cells in response to the presence of antigens, which are foreign substances such as pathogens. Antibodies recognize and bind to specific antigens, neutralizing them or marking them for destruction by other immune cells. There are different classes of antibodies (IgG, IgA, IgM, IgE, and IgD) that play various roles in the immune response. Antibodies are essential for protecting the body against infections and are also used in medical diagnostics and treatments." 
    },
     { 
      q: "Antiseptics Vs Disinfectants", 
      a: "Antiseptics are substances that are applied to living tissues, such as skin or mucous membranes, to reduce the risk of infection by killing or inhibiting the growth of microorganisms. Examples include alcohol, iodine, and hydrogen peroxide.\n Disinfectants, on the other hand, are chemicals used to clean and sanitize inanimate objects and surfaces, such as floors, countertops, and medical equipment. They are typically stronger than antiseptics and can be harmful to living tissues. Examples of disinfectants include bleach and phenol." 
    },
     { 
      q: "Antibiotics", 
      a: "Antibiotics are a class of drugs that are used to treat bacterial infections by killing or inhibiting the growth of bacteria. They work by targeting specific structures or processes in bacterial cells, such as cell wall synthesis, protein synthesis, or DNA replication. Antibiotics are not effective against viral infections. It is important to use antibiotics responsibly to prevent the development of antibiotic resistance, which occurs when bacteria evolve mechanisms to survive exposure to antibiotics. Discoverd by Alexander Fleming in 1928, antibiotics have revolutionized medicine and have saved countless lives by effectively treating bacterial infections." 
    },
    { 
      q: "Some Antibiotics and their sources", 
      a: "Pencillin - Penicillium mold\n Streptomycin - Streptomyces griseus\n Tetracycline - Streptomyces aureofaciens\n Erythromycin - Saccharopolyspora erythraea\n Chloramphenicol - Streptomyces venezuelae\n Ciprofloxacin - Synthetic antibiotic derived from quinolones\nNeomycin - Streptomyces fradiae\n Rifampicin - Streptomyces rifamycinica\n Vancomycin - Amycolatopsis orientalis\n Clindamycin - Streptomyces lincolnensis" 
    },
    { 
      q: "Broad vs Narrow Spectrum Antibiotics", 
      a: "Broad-spectrum antibiotics are effective against a wide range of bacteria, including both Gram-positive and Gram-negative bacteria. They are often used when the specific bacterial cause of an infection is unknown. Examples include tetracycline and ciprofloxacin.\n Narrow-spectrum antibiotics, on the other hand, are effective against a specific group of bacteria. They are typically used when the causative agent of an infection has been identified. Examples include penicillin (effective primarily against Gram-positive bacteria) and isoniazid (used specifically for tuberculosis)." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Aids to Health</span>
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

export default AidstoHealth;