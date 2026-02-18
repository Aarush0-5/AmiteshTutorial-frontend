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

const Skeleton= () => {
  const content = [
    { 
      q: "Functions of Skeleton", 
      a: "Support\nProtection\nMovement\nMineral Storage\nBlood Cell Production\nEndocrine Regulation\nLocomotion" 
    },
     { 
      q: "Types of Bones" ,
      a: "Long Bones\nShort Bones\nFlat Bones\nIrregular Bones\nSesamoid Bones" 
    },
     { 
      q: "Axial vs Appendicular Skeleton", 
      a: "Axial Skeleton: The axial skeleton consists of the bones that form the central axis of the body, including the skull, vertebral column, ribs, and sternum. It provides support and protection for the brain, spinal cord, and vital organs in the thorax.\n Appendicular Skeleton: The appendicular skeleton consists of the bones of the limbs and girdles (shoulder and pelvic girdles). It is responsible for movement and interaction with the environment, allowing for activities such as walking, running, and grasping objects." 
    },
    { 
      q: "Skull", 
      a: "Skull is the bony structure that forms the head and protects the brain. It is composed of 8 bones that are fused together, including the frontal bone, parietal bones, temporal bones, occipital bone, sphenoid bone, and ethmoid bone. The skull also contains openings for the eyes, nose, and mouth, as well as the ear canals." 
    },
    { 
      q: "Vertebral Column", 
      a: "Vertebral column, also known as the spine, is a bony structure that extends from the base of the skull to the pelvis. It is composed of 33 vertebrae that are stacked on top of each other and separated by intervertebral discs. The vertebral column provides support for the body, protects the spinal cord, and allows for flexibility and movement." 
    },
    { 
      q: "Structure of Vertebra", 
      a: "Centrum, Neural Arch,Neural Canal,Neural Spines, Transverse Processes" 
    },
     { 
      q: "Regions of Vertebral Column", 
      a: "Cervical (7 vertebrae), Thoracic (12 vertebrae), Lumbar (5 vertebrae), Sacral (5 fused vertebrae), Coccygeal (4 fused vertebrae)" 
    },
     { 
      q: "Functions of Vertebral Column", 
      a: "Support and Protection\nMovement and Flexibility\nAttachment for Muscles\nShock Absorption\nBlood Cell Production\nCantilever bridge" 
    },
     { 
      q: "Thorax", 
      a: "Thorax, also known as the chest, is the part of the body that lies between the neck and the abdomen. It is composed of the sternum (breastbone), ribs, and thoracic vertebrae. The thorax protects vital organs such as the heart and lungs and plays a crucial role in respiration by allowing for the expansion and contraction of the lungs. Ribcage has 12 pairs of ribs, with the first 7 pairs being true ribs that attach directly to the sternum, the next 3 pairs being false ribs that attach indirectly to the sternum, and the last 2 pairs being floating ribs that do not attach to the sternum at all." 
    },
    { 
      q: "Pectoral Girdle", 
      a: "Pectoral girdle, also known as the shoulder girdle, is a bony structure that connects the upper limbs to the axial skeleton. It consists of two bones: the clavicle (collarbone) and the scapula (shoulder blade). The pectoral girdle allows for a wide range of motion in the upper limbs and provides attachment points for muscles that control arm movement." 
    },
    { 
      q: "Forelimbs", 
      a: "Forelimbs, also known as upper limbs, are the paired appendages that extend from the pectoral girdle. They consist of the humerus (upper arm bone), radius and ulna (forearm bones), carpals (wrist bones), metacarpals (hand bones), and phalanges (finger bones). The forelimbs are involved in various functions such as grasping, manipulating objects, and locomotion in some animals." 
    },
    { 
      q: "Pelvic Girdle", 
      a: "Pelvic girdle, also known as the hip girdle, is a bony structure that connects the lower limbs to the axial skeleton. It consists of two hip bones (os coxae) that are fused together at the pubic symphysis. The pelvic girdle provides support for the weight of the upper body and allows for movement of the lower limbs." 
    },
    { 
      q: "Hindlimbs", 
      a: "Hindlimbs, also known as lower limbs, are the paired appendages that extend from the pelvic girdle. They consist of the femur (thigh bone), patella (kneecap), tibia and fibula (lower leg bones), tarsals (ankle bones), metatarsals (foot bones), and phalanges (toe bones). The hindlimbs are involved in various functions such as walking, running, jumping, and swimming in some animals." 
    },
    { 
      q: "Joints", 
      a: "Joints are the connections between bones that allow for movement and flexibility. They can be classified into three main types: \n 1) Fibrous Joints - These joints are immovable and are held together by fibrous connective tissue. Examples include sutures in the skull. \n 2) Cartilaginous Joints - These joints allow for limited movement and are connected by cartilage. Examples include the intervertebral discs in the spine. \n 3) Synovial Joints - These joints are freely movable and are characterized by a synovial cavity filled with synovial fluid. Examples include the shoulder, elbow, and knee joints." 
    },
    { 
      q: "Functions of Muscles", 
      a: "Movement\nPosture and Stability\nHeat Production\nJoint Stabilization\nCirculation\nRespiration\nDigestion" 
    },
    { 
      q: "Antagonistic Muscles", 
      a: "Antagonistic muscles are pairs of muscles that work in opposition to each other to produce movement. When one muscle contracts, the other muscle relaxes, allowing for smooth and coordinated movement. For example, the biceps and triceps muscles in the upper arm are antagonistic muscles. When the biceps contract to bend the elbow, the triceps relax. Conversely, when the triceps contract to straighten the elbow, the biceps relax." 
    },
    {
        q: "Movement vs Locomotion", 
        a: "Movement refers to any change in position or posture of an organism or its parts, while locomotion specifically refers to the ability of an organism to move from one place to another. Movement can occur in place (such as waving a hand) or involve changing location (such as walking or swimming). Locomotion is a specific type of movement that allows organisms to navigate their environment and find resources, mates, and shelter." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Skeleton</span>
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

export default Skeleton;