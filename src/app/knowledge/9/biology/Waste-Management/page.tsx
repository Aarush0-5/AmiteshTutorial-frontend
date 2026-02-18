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

const WasteManagement = () => {
  const content = [
    { 
      q: "Defining Waste and waste generation", 
      a: "Waste refers to any material or substance that is discarded, unwanted, or no longer useful. It can be generated from various sources such as households, industries, agriculture, and commercial activities. Waste generation is the process of producing waste as a result of human activities. It includes the collection, transportation, and disposal of waste materials. The amount of waste generated can vary based on factors such as population size, economic development, and consumption patterns." 
    },
     { 
      q: "Classification of Waste",
      a: "Non Toxic , Toxic , Pathogenic \n Biodegradable, Non-Biodegradable \n Recyclable, Non-Recyclable \n Solid, Liquid, Gaseous \n Domestic, Industrial, Agricultural, Biomedical" 
    },
     { 
      q: "Non Toxic, Toxic, Pathogenic Waste", 
      a: "Non-toxic waste refers to waste that does not contain harmful substances and is generally safe for disposal. Toxic waste contains substances that are harmful to human health or the environment, such as heavy metals, chemicals, or radioactive materials. Pathogenic waste includes biological materials that contain pathogens (disease-causing microorganisms) such as blood, tissues, or cultures of infectious agents. Proper handling and disposal of each type of waste is essential to protect public health and the environment." 
    },
    { 
      q: "Biodegradable and Non-Biodegradable Waste", 
      a: "Biodegradable waste refers to waste that can be broken down naturally by microorganisms into simpler substances, such as food scraps, paper, and garden waste. Non-biodegradable waste, on the other hand, cannot be easily broken down and persists in the environment for a long time, such as plastics, metals, and glass. Proper management of both types of waste is crucial to minimize environmental impact and promote sustainability." 
    },
    { 
      q: "Solids Liquid and Gaseous Waste",
      a: "Solid waste refers to waste materials that are in a solid state, such as paper, plastic, and glass. Liquid waste includes waste materials that are in a liquid state, such as wastewater and oil. Gaseous waste refers to waste materials that are in a gaseous state, such as carbon dioxide and methane. Proper management of each type of waste is essential to minimize environmental impact and ensure public health." 
    },
    { 
      q: "Sources of waste", 
      a: "Waste is generated from various sources including domestic (household), industrial, agricultural, and biomedical. \nDomestic waste comes from households and includes food scraps, packaging materials, and other everyday items. \nIndustrial waste is produced by manufacturing processes and may include chemicals, metals, and other materials. \nAgricultural waste includes crop residues, animal waste, and pesticides.\n Biomedical waste is generated in healthcare settings and includes infectious materials such as used syringes, blood-soaked bandages, and expired medications." 
    },
     { 
      q: "Methods of Safe Disposal of Waste", 
      a: "Segration- Separating waste into different categories (biodegradable, non-biodegradable, recyclable) to facilitate proper disposal and recycling. \n Recycling- Processing waste materials to create new products, reducing the need for raw materials and minimizing environmental impact. \n Composting- A natural process of decomposing organic waste (such as food scraps and garden waste) into nutrient-rich compost that can be used as fertilizer. \n Landfilling- Disposing of waste in designated landfill sites, where it is buried and managed to minimize environmental impact. \n Incineration- Burning waste at high temperatures to reduce its volume and generate energy, although it can produce harmful emissions if not properly managed." 
    },
     { 
      q: "Methods to remove air pollutants", 
      a: "To remove air pollutants, various methods can be employed, including: \n 1) Filtration - Using filters to capture particulate matter and pollutants from the air. \n 2) Scrubbing - Using liquid solutions to wash out pollutants from industrial emissions. \n 3) Electrostatic Precipitation - Using electrical charges to attract and remove particles from the air. \n 4) Catalytic Converters - Using catalysts to convert harmful gases from vehicle emissions into less harmful substances. \n 5) Green Spaces - Planting trees and vegetation to absorb carbon dioxide and other pollutants, improving air quality." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Waste Management</span>
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

export default WasteManagement;