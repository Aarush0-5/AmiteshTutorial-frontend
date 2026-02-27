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

const CirculatorySystem = () => {
  const content = [
    { 
      q: "What is the circulatory system?", 
      a: "Cardiovascular system: The cardiovascular system, also known as the circulatory system, is responsible for transporting blood, nutrients, oxygen, and waste products throughout the body. It consists of the heart, blood vessels (arteries, veins, and capillaries), and blood. The heart pumps blood through the vessels, ensuring that oxygen and nutrients reach the tissues while waste products are removed." 
    },
     { 
      q: "What is the lymphatic system?", 
      a: "The lymphatic system is a network of vessels, nodes, and organs that helps maintain fluid balance in the body and plays a crucial role in immune function. It collects excess fluid from tissues and returns it to the bloodstream. The lymphatic system also transports fats from the digestive system and helps fight infections by producing and transporting white blood cells called lymphocytes." 
    },
     { 
      q: "Blood and its components", 
      a: "Blood is a fluid connective tissue that consists of plasma and formed elements (red blood cells, white blood cells, and platelets). Plasma is the liquid component of blood that carries nutrients, hormones, and waste products. Red blood cells (RBCs) carry oxygen to tissues and remove carbon dioxide. White blood cells (WBCs) are involved in immune responses and fight infections. Platelets are small cell fragments that help in blood clotting.\nRBCs are red due to the presence of hemoglobin, a protein that binds oxygen. WBCs are colorless and can be classified into different types, such as neutrophils, lymphocytes, monocytes, eosinophils, and basophils, each with specific functions in the immune system. Platelets are small and irregularly shaped, playing a crucial role in preventing blood loss by forming clots at injury sites." 
    },
    { 
      q: "Blood vessels and their types", 
      a: "Blood vessels are the conduits through which blood flows in the circulatory system. There are three main types of blood vessels:\n1. Arteries: These vessels carry oxygen-rich blood away from the heart to various parts of the body. They have thick, muscular walls to withstand high pressure.\n2. Veins: These vessels carry oxygen-poor blood back to the heart from various parts of the body. They have thinner walls and often contain valves to prevent backflow of blood.\n3. Capillaries: These are the smallest and most numerous blood vessels, connecting arteries and veins. They facilitate the exchange of nutrients, gases, and waste products between blood and tissues.\nPulmonary arteries carry oxygen-poor blood from the heart to the lungs, while pulmonary veins carry oxygen-rich blood from the lungs back to the heart. Systemic arteries carry oxygen-rich blood from the heart to the rest of the body, while systemic veins carry oxygen-poor blood back to the heart." 
    },
    { 
      q: "Human Heart and its structure",
      a: "The human heart is a muscular organ that pumps blood throughout the body. It is divided into four chambers: two atria (upper chambers) and two ventricles (lower chambers). The right atrium receives deoxygenated blood from the body via the superior and inferior vena cavae, while the left atrium receives oxygenated blood from the lungs via the pulmonary veins. The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery, and the left ventricle pumps oxygenated blood to the rest of the body through the aorta. The heart has four valves: tricuspid valve, pulmonary valve, mitral valve, and aortic valve, which ensure unidirectional flow of blood. The coronary arteries supply blood to the heart muscle itself, providing it with oxygen and nutrients necessary for its function. Sinoatrial (SA) node, located in the right atrium, acts as the natural pacemaker of the heart, initiating electrical impulses that regulate the heartbeat.Pericardium is a double-walled sac that surrounds the heart, providing protection and reducing friction during heartbeats. Pericardial fluid, found between the layers of the pericardium, acts as a lubricant to further reduce friction." 
    },
    { 
      q: "Heart beat and its regulation", 
      a: "The heart beats rhythmically to pump blood throughout the body. The heartbeat is regulated by the sinoatrial (SA) node, which acts as the natural pacemaker of the heart. The SA node generates electrical impulses that spread through the heart muscle, causing it to contract and pump blood. The heart rate can be influenced by factors such as physical activity, emotions, hormones, and medications. The autonomic nervous system also plays a role in regulating heart rate by sending signals to the SA node.Systole is the phase of the heartbeat when the heart muscle contracts and pumps blood out of the chambers, while diastole is the phase when the heart muscle relaxes and allows the chambers to fill with blood. The normal resting heart rate for adults ranges from 60 to 100 beats per minute, but it can vary based on individual factors and activity levels." 
    },
     { 
      q: "Conditions related to improper functioning of heart", 
      a: "Several conditions can affect the proper functioning of the heart:\n1. Heart Failure: A condition where the heart cannot pump blood effectively to meet the body's needs.\n2. Arrhythmia: Irregular heartbeat caused by problems in the electrical conduction system of the heart.\n3. Coronary Artery Disease: Narrowing or blockage of coronary arteries due to plaque buildup, leading to reduced blood flow to the heart muscle.\n4. Cardiac Arrest: Sudden loss of heart function, often due to arrhythmias or other serious conditions.\n5. Valvular Heart Disease: Problems with one or more of the heart valves, affecting blood flow through the heart.\nPalpitation is the sensation of an irregular or rapid heartbeat, which can be caused by stress, anxiety, caffeine, or underlying heart conditions. Angina is chest pain or discomfort that occurs when the heart muscle does not receive enough oxygen-rich blood, often due to coronary artery disease." 
    },
     { 
      q: "Blood groups and their importance", 
      a: "Blood groups are determined by the presence or absence of specific antigens on the surface of red blood cells. The main blood groups are A, B, AB, and O. Each group can be either Rh positive or Rh negative, depending on the presence or absence of the Rh factor. Blood group compatibility is crucial for safe blood transfusions. For example, people with type O negative blood are considered universal donors because their blood can be given to people of any blood group. People with type AB positive blood are considered universal recipients because they can receive blood from any other blood group.\nUnderstanding blood groups is also important in pregnancy, as mismatched blood groups between mother and fetus can lead to complications such as hemolytic disease of the newborn.\nUniversal donor: O negative blood can be donated to individuals of any blood group.\nUniversal recipient: AB positive blood can receive blood from any blood group.Clumping of red blood cells (agglutination) occurs when incompatible blood groups are mixed, which can lead to serious complications during blood transfusions." 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Circulatory System</span>
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

export default CirculatorySystem;