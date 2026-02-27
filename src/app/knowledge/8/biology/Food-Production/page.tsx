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

const FoodProduction = () => {
  const content = [
    { 
      q: "Defining Agriculture and its Importance", 
      a: "Agriculture is the practice of cultivating plants and raising animals for food, fiber, and other products. It is essential for human survival as it provides the food and raw materials needed for sustenance and economic development. Agriculture supports the global population by producing crops like wheat, rice, and corn, as well as livestock products such as meat, milk, and eggs. It also plays a crucial role in employment, rural development, and environmental sustainability." 
    },
     { 
      q: "Types of Crops", 
      a: "Crops are broadly classified into two types:\n1. Food Crops: These are grown primarily for human consumption, such as cereals (wheat, rice, maize), pulses (lentils, chickpeas), fruits, and vegetables.\n2. Cash Crops: These are grown for commercial purposes and are not primarily consumed by humans. Examples include cotton, sugarcane, coffee, and tea.\nKharif crops are sown in the rainy season and harvested in autumn, while Rabi crops are sown in winter and harvested in spring.\nExamples of Kharif crops include rice, maize, and cotton, while Rabi crops include wheat, barley, and mustard." 
    },
     { 
      q: "Horticulture and its Types", 
      a: "Horticulture is the science and art of cultivating fruits, vegetables, flowers, and ornamental plants. It is a branch of agriculture that focuses on growing plants for food, beauty, and medicinal purposes.\nTypes of horticulture include:\n1. Fruit Horticulture: Growing fruits like apples, oranges, and mangoes.\n2. Vegetable Horticulture: Cultivating vegetables such as tomatoes, potatoes, and leafy greens.\n3. Flower Horticulture: Growing ornamental flowers like roses, tulips, and lilies.\n4. Ornamental Horticulture: Cultivating plants for decorative purposes in gardens and landscapes." 
    },
    { 
      q: "Cultivation of horticultural crops and their management", 
      a: "Horticultural crops are cultivated using specific techniques and management practices to ensure healthy growth and high yields. These practices include:\n1. Soil preparation: Ensuring the soil is fertile, well-drained, and free from weeds.\n2. Planting: Using appropriate planting methods such as direct seeding or transplanting seedlings.\n3. Irrigation: Providing adequate water through drip irrigation, sprinklers, or furrow irrigation.\n4. Fertilization: Applying organic or inorganic fertilizers to provide essential nutrients.\n5. Pest and disease control: Using integrated pest management (IPM) techniques to prevent and control pests and diseases.\n6. Pruning and training: Regular pruning of trees and vines to promote healthy growth and fruit production." 
    },
     { 
      q: "Organic Farming" ,
      a: "Organic farming is a method of farming that avoids the use of synthetic chemicals such as pesticides, fertilizers, and genetically modified organisms (GMOs). Instead, it relies on natural processes and materials to maintain soil fertility, control pests, and promote plant growth. Organic farming emphasizes sustainability, biodiversity, and the health of both consumers and the environment. It often involves crop rotation, composting, and the use of natural pest control methods.\nCrop rotation is a practice in organic farming where different crops are planted in a specific sequence on the same land to improve soil health and reduce pest and disease buildup. For example, a farmer might plant legumes (which fix nitrogen) one season, followed by leafy greens (which require nitrogen) the next season, and then root vegetables (which help break up the soil) in the following season.\nGreen manure is a type of organic fertilizer made from growing plants that are plowed back into the soil to improve its fertility and structure. Common green manure crops include clover, alfalfa, and ryegrass. These plants help add organic matter to the soil, increase nutrient content, and enhance water retention.\nComposting and vermicomposting are methods of recycling organic waste into nutrient-rich soil amendments. Composting involves the decomposition of organic materials such as food scraps, yard waste, and manure by microorganisms, resulting in a dark, crumbly substance that can be used to enrich garden soil. Vermicomposting, on the other hand, uses earthworms to break down organic waste, producing a nutrient-rich cast that is particularly beneficial for plant growth." 
    },
     { 
      q: "Uses of biopesticides and biofertilizers", 
      a: "Biopesticides are natural substances or organisms used to control pests and diseases in crops. They are safer for the environment and human health compared to synthetic pesticides. Examples include neem oil, Bacillus thuringiensis (Bt), and beneficial insects like ladybugs.\nBiofertilizers are living microorganisms that enhance soil fertility and plant growth. They include nitrogen-fixing bacteria like Rhizobium, phosphate-solubilizing bacteria, and mycorrhizal fungi. These organisms help plants absorb nutrients more efficiently, reduce the need for chemical fertilizers, and improve soil health." 
    },
    { 
      q: "Green revolution and its impact", 
      a: "The Green Revolution refers to a period of significant agricultural development in the mid-20th century, characterized by the introduction of high-yielding varieties of crops, chemical fertilizers, and irrigation techniques. It led to increased food production and helped address food shortages in many developing countries. However, it also had some negative impacts such as environmental degradation, soil depletion, and increased dependence on chemical inputs. The Green Revolution played a crucial role in improving food security globally but also highlighted the need for sustainable farming practices.In India, the Green Revolution was initiated in the 1960s and led to a significant increase in the production of wheat and rice. It helped India achieve self-sufficiency in food production and reduced the risk of famine. However, it also resulted in environmental issues such as water pollution from chemical fertilizers and pesticides, soil degradation, and loss of biodiversity. The Green Revolution in India highlighted the importance of balancing increased agricultural productivity with sustainable farming practices to ensure long-term food security and environmental health.Noble prizes related to the Green Revolution include the Nobel Peace Prize awarded to Norman Borlaug in 1970 for his contributions to increasing food production and combating hunger worldwide. Borlaug's work in developing high-yielding crop varieties and promoting modern agricultural techniques played a crucial role in the success of the Green Revolution and its impact on global food security." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Food Production</span>
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

export default FoodProduction;