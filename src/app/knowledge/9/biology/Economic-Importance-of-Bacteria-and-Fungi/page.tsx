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
        <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white rounded-2xl flex flex-col items-center justify-center p-8 my-rotate-y-180 shadow-inner overflow-y-auto">
          <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2">Answer</span>
          <p className="text-base leading-relaxed text-center">
            {answer}
          </p>
        </div>

      </div>
    </div>
  );
};

const EconomicImportanceofVBacteriaandFungi= () => {
  const content = [
    { 
      q: "Uses of Bacteria in Industry", 
      a: "Preparation of Curd\nCuring of Cheese\nCuring and Ripening of Tea and Tobacco Leaves\nLeather Industry\nRetting of Fibres\nManufacturing of Vinegar" 
    },
     { 
      q: "Uses of Bacteria in Medicine" ,
      a: "Antibiotics\nVaccines\nGenetic Engineering\nSerums" 
    },
     { 
      q: "Uses of Bacteria in Agriculture", 
      a: "Nitrogen Fixation done by Rhizobium\n Nitrification done by Nitrosomonas and Nitrobacter\nDenitrification done by Pseudomonas" 
    },
    { 
      q: "Harmful roles of bacteria",
      a: "Diseases in Humans (e.g., Tuberculosis, Cholera, Typhoid)\nDiseases in Animals (e.g., Anthrax, Brucellosis)\nDiseases in Plants (e.g., Bacterial Blight, Crown Gall)\nFood Spoilage\nWater Contamination\nBioweapons (e.g., Anthrax spores used in bioterrorism)" 
    },
    { 
      q: "Moulds", 
      a: "Moulds are a type of fungi that grow in the form of multicellular filaments called hyphae. They reproduce by producing spores and can be found in various environments, including soil, decaying organic matter, and indoor environments. Moulds play important roles in ecosystems as decomposers, breaking down dead organic material and recycling nutrients. However, some moulds can also be harmful to humans, causing allergies and respiratory issues." 
    },
    { 
      q: "Mucor and Rhizopus", 
      a: "Mucor and Rhizopus are two common genera of moulds that belong to the phylum Zygomycota. They are often found in soil, decaying organic matter, and food products. Mucor species are known for their fast growth and can cause food spoilage, while Rhizopus species are commonly associated with bread mold. Both Mucor and Rhizopus reproduce by producing spores and can be used in various industrial applications, such as the production of enzymes and organic acids.\nStolon is a horizontal, above-ground stem that can give rise to new plants at its nodes. It is a type of vegetative propagation that allows plants to spread and colonize new areas. Stolons are commonly found in plants such as strawberries and grasses.\nRhizodial hyphae are specialized hyphae that grow underground and help anchor the fungus to the substrate. They also play a role in nutrient absorption, allowing the fungus to obtain nutrients from the soil. Rhizodial hyphae are commonly found in fungi such as Mucor and Rhizopus.\nSporongium is a structure produced by certain fungi, including Mucor and Rhizopus, that contains spores. It is typically a spherical or oval-shaped structure that is borne on a stalk called a sporangiophore. The sporangium serves as a protective enclosure for the spores until they are mature and ready to be released into the environment for dispersal." 
    },
    { 
      q: "Yeasts", 
      a: "Yeasts are unicellular fungi that are commonly used in baking, brewing, and winemaking due to their ability to ferment sugars and produce carbon dioxide and alcohol. They reproduce asexually by budding and can also reproduce sexually under certain conditions. Yeasts play important roles in various industries, including food production and biotechnology, and are also used as model organisms in scientific research." 
    },
     { 
      q: "Mushrooms and Cultivation of Mushrooms", 
      a: "Mushrooms are the fruiting bodies of certain types of fungi that grow above ground. They are typically composed of a cap, gills, and a stem. Mushrooms can be edible or poisonous, and they play important roles in ecosystems as decomposers and symbiotic partners with plants. Cultivation of mushrooms involves growing them in controlled environments, such as mushroom farms, where conditions such as temperature, humidity, and substrate composition can be optimized for their growth. Commonly cultivated mushrooms include button mushrooms, oyster mushrooms, and shiitake mushrooms." 
    },
     { 
      q: "Uses of Fungi in Food Industry", 
      a: "Preparation of Bread\nPreparation of Antibiotics\nPreparation of Organic Acids\nPreparation of Enzymes" 
    },
     { 
      q: "Uses of Fungi in Medicine", 
      a: "Production of Antibiotics (e.g., Penicillin from Penicillium)\nProduction of Immunosuppressants (e.g., Cyclosporine from Tolypocladium inflatum)\nProduction of Cholesterol-lowering Drugs (e.g., Lovastatin from Aspergillus terreus)\nProduction of Antifungal Drugs (e.g., Griseofulvin from Penicillium griseofulvum)" 
    },
    { 
      q: "Harmful roles of Fungi", 
      a: "Diseases in Humans (e.g., Athlete's Foot, Ringworm)\nDiseases in Animals (e.g., Aspergillosis in birds)\nDiseases in Plants (e.g., Powdery Mildew, Rusts)\nFood Spoilage\nMycotoxin Production (e.g., Aflatoxins produced by Aspergillus species)\nStructural Damage (e.g., Wood rot caused by fungi)" 
    },
    { 
      q: "Methods of Food Preservation", 
      a: "High Temperature or sterilisation\n Dehydration\n Powder Milk\n Salting\nPasteurization\nIrradiation\nRefrigeration and Freezing\nUse of Preservatives (e.g., Sodium Benzoate, Potassium Sorbate)" 
    },
    { 
      q: "Food produced from preservation", 
      a: "Pickles\nJam and Jellies\nMurabba\nKetchup\nSquash" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Economic Importance of Bacteria and Fugi</span>
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

export default EconomicImportanceofVBacteriaandFungi;