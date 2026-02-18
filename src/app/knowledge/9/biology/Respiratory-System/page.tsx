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

const Respiration= () => {
  const content = [
    { 
      q: "Anaerobic respiration in man vs plants", 
      a: "In humans, anaerobic respiration occurs in muscle cells during intense exercise when oxygen is insufficient. It produces lactic acid as a byproduct, which can cause muscle fatigue and soreness.No Co2 is produced in this process. In plants, anaerobic respiration occurs in certain tissues (like roots) when oxygen is limited. It produces ethanol and carbon dioxide as byproducts. The ethanol can be toxic to plant cells, so it is usually produced in small amounts.Co2 is produced in this process." 
    },
     { 
      q: "Significance of Respiratory System", 
      a: "The respiratory system is responsible for the exchange of gases (oxygen and carbon dioxide) between the body and the environment. It plays a crucial role in maintaining homeostasis by regulating the levels of oxygen and carbon dioxide in the blood. The respiratory system also helps in the production of sound, filtering out harmful particles from the air, and maintaining acid-base balance in the body." 
    },
     { 
      q: "Nose and Nasal Cavity", 
      a: "The nose is the external part of the respiratory system that serves as the primary entry point for air. It is composed of bone and cartilage and is lined with mucous membranes that help filter, warm, and humidify the air before it enters the lungs. The nasal cavity is the internal space within the nose that is divided into two halves by the nasal septum. It contains structures such as the nasal conchae (turbinates) that increase the surface area for air filtration and olfactory receptors that allow for the sense of smell." 
    },
    { 
      q: "Larynx", 
      a: "The larynx, also known as the voice box, is a cartilaginous structure located in the neck that connects the pharynx to the trachea. It plays a crucial role in respiration by allowing air to pass through while preventing food and liquids from entering the airway. The larynx also contains the vocal cords, which vibrate to produce sound when air passes through them, enabling speech and vocalization." 
    },
    { 
      q: "Trachea", 
      a: "Trachea, also known as the windpipe, is a cylindrical tube that connects the larynx to the bronchi. It is composed of C-shaped rings of cartilage that provide structural support and prevent collapse during breathing. The trachea is lined with ciliated epithelium and mucus-producing cells that help trap and remove foreign particles from the air before it reaches the lungs." 
    },
    { 
      q: "Bronchi and Bronchioles", 
      a: "Bronchi are the main branches of the trachea that lead to the lungs. They are divided into primary, secondary, and tertiary bronchi. Bronchioles are the smaller branches of the bronchi that lead to the alveoli. They are characterized by their lack of cartilage and their ability to constrict and dilate to regulate airflow." 
    },
     { 
      q: "Lining of Respiratory Tract", 
      a: "The respiratory tract is lined with a mucous membrane that contains ciliated epithelial cells and mucus-producing goblet cells. The cilia help move mucus and trapped particles upward toward the throat, where they can be swallowed or expelled. The mucus helps to trap dust, bacteria, and other foreign particles in the air, preventing them from reaching the lungs." 
    },
     { 
      q: "Alveolar Sacs and Alveoli", 
      a: "Alveolar sacs are clusters of alveoli that are the primary sites of gas exchange in the lungs. Alveoli are tiny, balloon-like structures within the alveolar sacs that have extremely thin walls, allowing for efficient diffusion of oxygen and carbon dioxide between the air in the lungs and the blood in the surrounding capillaries. The alveoli are surrounded by a rich network of capillaries, which facilitates rapid gas exchange. The surface area of alveoli is enormous, providing a large area for gas exchange." 
    },
     { 
      q: "Lungs and its surrounding structures", 
      a: "The lungs are a pair of spongy, air-filled organs located in the thoracic cavity. They are surrounded by a double-layered membrane called the pleura, which provides lubrication and reduces friction during breathing. The lungs are divided into lobes (three on the right and two on the left) and contain the bronchi, bronchioles, alveolar sacs, and alveoli. The lungs are responsible for the exchange of gases (oxygen and carbon dioxide) between the air and the blood." 
    },
    { 
      q: "Blood Supply to Lungs", 
      a: "The lungs receive blood supply from two sources: the pulmonary circulation and the bronchial circulation. The pulmonary circulation carries deoxygenated blood from the right ventricle of the heart to the lungs for oxygenation and then returns oxygenated blood to the left atrium of the heart. The bronchial circulation, on the other hand, supplies oxygenated blood to the lung tissues themselves, including the bronchi and connective tissue. This dual blood supply ensures that the lungs receive adequate oxygen and nutrients while also facilitating gas exchange." 
    },
    { 
      q: "Breathing vs Respiration", 
      a: "Breathing, also known as ventilation, is the physical process of inhaling and exhaling air to facilitate gas exchange in the lungs. It involves the movement of air into and out of the respiratory system. \n Respiration, on the other hand, is a broader term that encompasses the entire process of gas exchange and energy production in cells. It includes both external respiration (the exchange of gases between the lungs and the blood) and internal respiration (the exchange of gases between the blood and body tissues). In summary, breathing is a component of respiration that specifically refers to the mechanical aspect of moving air in and out of the lungs." 
    },
    { 
      q: "Breathing Vs Ventilation", 
      a: "Breathing and ventilation are often used interchangeably, but they have slightly different meanings. Breathing refers to the process of inhaling and exhaling air, which is a part of the larger process of respiration. Ventilation, on the other hand, specifically refers to the movement of air in and out of the lungs. While breathing is a component of ventilation, ventilation is more focused on the mechanical process of moving air in and out of the respiratory system." 
    },
    { 
      q: "Changes during inspiration and expiration", 
      a: "During inspiration (inhalation), the diaphragm contracts and moves downward, while the intercostal muscles contract to lift the rib cage. This increases the volume of the thoracic cavity and decreases the pressure inside the lungs, allowing air to flow in. \n During expiration (exhalation), the diaphragm relaxes and moves upward, while the intercostal muscles relax to lower the rib cage. This decreases the volume of the thoracic cavity and increases the pressure inside the lungs, forcing air out." 
    },
    { 
      q: "Composition of inhaled and exhaled air", 
      a: "Inhaled air is composed of approximately 78% nitrogen, 21% oxygen, and trace amounts of other gases such as carbon dioxide and argon. Exhaled air, on the other hand, contains approximately 78% nitrogen, 16% oxygen, 4% carbon dioxide, and trace amounts of other gases. The decrease in oxygen and increase in carbon dioxide in exhaled air is due to the gas exchange that occurs in the alveoli of the lungs, where oxygen is absorbed into the bloodstream and carbon dioxide is released from the bloodstream into the lungs to be exhaled." 
    },
    { 
      q: "Lung Volumes ", 
      a: "Lung volumes refer to the amount of air in the lungs at any given time, while lung capacities are the sum of two or more lung volumes. The main lung volumes are: \n 1) Tidal Volume (TV) - The amount of air inhaled or exhaled during normal breathing. \n 2) Inspiratory Reserve Volume (IRV) - The additional amount of air that can be inhaled after a normal inhalation. \n 3) Expiratory Reserve Volume (ERV) - The additional amount of air that can be exhaled after a normal exhalation. \n 4) Residual Volume (RV) - The amount of air that remains in the lungs even after maximal exhalation." 
    },
    { 
      q: "Lung Capacities", 
      a: "Lung capacities are combinations of lung volumes that represent the total amount of air the lungs can hold. The main lung capacities are: \n 1) Total Lung Capacity (TLC) - The maximum amount of air the lungs can hold, which is the sum of all lung volumes (TV + IRV + ERV + RV). \n 2) Vital Capacity (VC) - The maximum amount of air that can be exhaled after a maximum inhalation, which is the sum of TV, IRV, and ERV. \n 3) Inspiratory Capacity (IC) - The maximum amount of air that can be inhaled after a normal exhalation, which is the sum of TV and IRV. \n 4) Functional Residual Capacity (FRC) - The amount of air remaining in the lungs after a normal exhalation, which is the sum of ERV and RV." 
    },
    {
        q: "Cellular Respiration vs Combustion", 
        a: "Cellular respiration is a biological process that occurs in living organisms, where glucose is broken down in the presence of oxygen to produce energy in the form of ATP (adenosine triphosphate). It involves a series of enzymatic reactions that occur in the mitochondria of cells. Combustion, on the other hand, is a chemical process that occurs when a fuel (such as wood or gasoline) reacts with oxygen to produce heat and light. It is an exothermic reaction that releases energy in the form of heat and light, but it does not produce ATP or involve enzymatic reactions like cellular respiration." 
    },
     {
        q: "Cellular Respiration vs Biological Oxidation", 
        a: "Cellular respiration is a specific type of biological oxidation that occurs in living organisms, where glucose is broken down in the presence of oxygen to produce energy in the form of ATP. Biological oxidation, on the other hand, is a broader term that refers to any chemical reaction in which a molecule loses electrons (is oxidized) and another molecule gains electrons (is reduced). Cellular respiration is a specific example of biological oxidation, but not all biological oxidation reactions are part of cellular respiration." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Respiration</span>
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

export default Respiration;