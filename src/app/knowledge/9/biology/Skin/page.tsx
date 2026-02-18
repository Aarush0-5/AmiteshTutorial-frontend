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

const Skin= () => {
  const content = [
    { 
      q: "What is Skin?", 
      a: "Skin is the largest organ of the human body and serves as a protective barrier against external factors such as pathogens, UV radiation, and physical injuries. It also plays a crucial role in regulating body temperature, sensing touch and pain, and producing vitamin D. The skin is composed of three main layers: the epidermis (outer layer), dermis (middle layer), and hypodermis (inner layer). Each layer has specific functions and contains various cells and structures that contribute to the overall health and function of the skin." 
    },
     { 
      q: "Epidermis" ,
       a: "The epidermis is the outermost layer of the skin and is primarily responsible for providing a protective barrier. It is composed of three layers - the stratum corneum (outermost layer), stratum granulosum (middle layer), and stratum malpighii (innermost layer). The epidermis contains specialized cells such as keratinocytes, melanocytes. Keratinocytes produce keratin, a protein that strengthens the skin. Melanocytes produce melanin, which gives skin its color and protects against UV radiation.Granular layer contains keratohyalin granules that help in the formation of the stratum corneum. The epidermis is avascular, meaning it does not contain blood vessels, and relies on diffusion from the underlying dermis for nutrients and oxygen."
    },
     { 
      q: "Dermis", 
      a: "The dermis is the middle layer of the skin, located beneath the epidermis. It is composed of connective tissue and contains blood vessels, nerves, hair follicles, sweat glands, and sebaceous glands. The dermis provides strength and elasticity to the skin and plays a crucial role in regulating body temperature through blood vessel dilation and constriction. It also contains sensory receptors that detect touch, pressure, pain, and temperature changes. Adipose tissue in the dermis provides insulation and cushioning for the body.Recticular layer contains collagen and elastin fibers that provide strength and elasticity to the skin. The dermis also contains fibroblasts, which are responsible for producing collagen and other extracellular matrix components that maintain the structure of the skin." 
    },
    { 
      q: "Hair: Derivative of Skin", 
      a: "Hair is a filamentous structure that grows from hair follicles located in the dermis layer of the skin. It is composed primarily of keratin, a fibrous protein that provides strength and durability. Hair serves various functions, including protection from UV radiation, insulation, sensory perception, and social communication. The color of hair is determined by the amount and type of melanin produced by melanocytes in the hair follicle. Hair has three main parts: the shaft (the visible part of the hair), the root (the part embedded in the skin), and the bulb (the base of the hair follicle where hair growth occurs)." 
    },
    { 
      q: "Nail:Derivative of Skin", 
      a: "Nails are hard, keratinous structures that grow from the nail matrix located at the base of the nail bed. They serve to protect the tips of fingers and toes, enhance fine motor skills, and provide a counterforce for gripping objects. Nails are composed primarily of keratin, a fibrous protein that gives them strength and durability. The color of nails is influenced by the underlying blood vessels and can indicate overall health. The growth of nails is continuous, with fingernails growing faster than toenails." 
    },
    { 
      q: "Sweat Glands: Derivative of Skin", 
      a: "Sweat glands are specialized structures located in the dermis layer of the skin that produce sweat, a watery secretion that helps regulate body temperature and maintain homeostasis.Sweat glands play a crucial role in thermoregulation by allowing the body to cool down through the evaporation of sweat from the skin's surface. Functions of sweat glands include thermoregulation, excretion of waste products, and maintaining skin hydration." 
    },
     { 
      q: "Sebaceous Glands: Derivative of Skin", 
      a: "Sebaceous glands are specialized structures located in the dermis layer of the skin that produce sebum, an oily substance that lubricates and waterproofs the skin and hair. Sebaceous glands are associated with hair follicles and play a crucial role in maintaining skin health by preventing dryness and protecting against bacterial infections. They are most abundant on the face, scalp, and chest.Two main types of sebaceous glands include: \n 1) Meibomian Glands - These glands are located in the eyelids and produce a type of sebum that helps prevent the evaporation of tears and maintains eye health. \n 2) Ceruminous Glands - These glands are located in the ear canal and produce earwax (cerumen), which helps protect the ear from dust, debris, and microorganisms." 
    },
     { 
      q: "Cold Day vs Hot Day", 
      a: "On a cold day, the body responds by constricting blood vessels near the skin's surface (vasoconstriction) to reduce heat loss and preserve core body temperature. This can lead to pale or bluish skin and a sensation of coldness. Additionally, muscles may contract involuntarily (shivering) to generate heat. \nOn a hot day, the body responds by dilating blood vessels near the skin's surface (vasodilation) to increase heat loss through radiation and convection. This can lead to flushed or reddened skin and a sensation of warmth. The body also activates sweat glands to produce sweat, which cools the skin as it evaporates." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Skin</span>
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

export default Skin;