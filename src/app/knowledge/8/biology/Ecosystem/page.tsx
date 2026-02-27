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

const Ecosystem = () => {
  const content = [
    { 
      q: "Ecosystem", 
      a: "An ecosystem is self sustaining unit of nature consisting of living organisms (biotic components) and non-living components (abiotic components) interacting with each other. It includes all the organisms in a given area, along with the physical environment they inhabit. Ecosystems can be of various types, such as forests, grasslands, deserts, freshwater, and marine ecosystems. They are characterized by the flow of energy and cycling of nutrients through the interactions between organisms and their environment." 
    },
     { 
      q: "Biotic vs Abiotic components of an ecosystem", 
      a: "Biotic components are the living organisms in an ecosystem, such as plants, animals, and microorganisms. Abiotic components are the non-living physical and chemical factors in an ecosystem, such as sunlight, water, air, soil, and temperature. Both biotic and abiotic components interact with each other to maintain the balance of the ecosystem." 
    },
     { 
      q: "Producers and Consumers in an ecosystem", 
      a: "In an ecosystem, producers are organisms that can make their own food through photosynthesis or chemosynthesis, such as plants and some bacteria. Consumers are organisms that cannot make their own food and must consume other organisms for energy. Consumers are classified into different types based on their diet: herbivores (eat plants) or primary consumers, carnivores (eat other animals) or secondary consumers, omnivores (eat both plants and animals), and decomposers (break down dead organic matter), scavengers (feed on dead animals)." 
    },
    { 
      q: "Decomposers vs Detritivores in an ecosystem", 
      a: "Decomposers are organisms that break down dead organic matter into simpler substances, such as fungi and bacteria. Detritivores are organisms that feed on dead organic matter, such as earthworms, dung beetles, and some insects. While both play important roles in nutrient cycling, decomposers are primarily responsible for breaking down organic matter into inorganic nutrients that can be used by producers." 
    },
    { 
      q: "Food chain and Food web in an ecosystem",
      a: "A food chain is a linear sequence of organisms through which nutrients and energy pass as one organism eats another. A food web is a more complex network of interconnected food chains in an ecosystem. Food chains and food webs show the feeding relationships between different organisms in an ecosystem and help illustrate how energy flows through the ecosystem." 
    },
    { 
      q: "Pyramid of numbers, biomass and energy in an ecosystem", 
      a: "In an ecosystem, the pyramid of numbers shows the number of individuals of each trophic level. The pyramid of biomass shows the total mass of living organisms at each trophic level. The pyramid of energy shows the flow of energy through each trophic level. These pyramids help visualize the structure and functioning of an ecosystem, showing how energy and matter are transferred from one level to another." 
    },
     { 
      q: "Law of conservation of energy in an ecosystem", 
      a: "The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another. In an ecosystem, this law is evident in the flow of energy through different trophic levels. Energy enters an ecosystem primarily from the sun and is converted into chemical energy by producers through photosynthesis. As energy flows through the food chain, it is gradually lost as heat at each trophic level due to metabolic processes, but it is never destroyed.\n Only 10% of the energy is transferred from one trophic level to the next, while the remaining 90% is lost as heat. This is known as the 10% rule in ecology." 
    },
     { 
      q: "Symbiosis vs Parasitism in an ecosystem", 
      a: "Symbiosis is a close, long-term interaction between two different species, which can be mutualistic (both benefit), commensalistic (one benefits, the other is unaffected), or parasitic (one benefits, the other is harmed). Parasitism is a type of symbiosis where one organism (the parasite) benefits at the expense of another organism (the host). Examples of symbiosis include lichens (mutualism between fungi and algae) and mycorrhizae (mutualism between fungi and plant roots). Examples of parasitism include tapeworms in humans and mistletoe on trees.Predation is a biological interaction where one organism (the predator) hunts and kills another organism (the prey) for food. It is not considered a form of symbiosis because it does not involve a long-term relationship between the two species." 
    },
     { 
      q: "Abiotic components and their role in an ecosystem", 
      a: "Abiotic components are the non-living physical and chemical factors in an ecosystem. These include water, sunlight, temperature, soil, air, and minerals. \nOxygen: Essential for respiration in most organisms.\nWater: Vital for all living organisms, involved in various biological processes.\nSunlight: Primary source of energy for photosynthesis in producers.\nTemperature: Influences the metabolic rates of organisms and the distribution of species.\nSoil: Provides nutrients and a medium for plant growth.\nAir: Contains gases like oxygen and carbon dioxide necessary for respiration and photosynthesis.\nMinerals: Essential for various physiological functions in organisms.\nHumidity: Affects the water balance and survival of organisms.\npH: Influences the availability of nutrients and the types of organisms that can thrive in an ecosystem." 
    },
    { 
      q: "Forest and its layers", 
      a: "A forest is a large area covered with trees and undergrowth. Forests are typically divided into several layers:\n1. Canopy: The uppermost layer formed by the tops of tall trees.\n2. Understory: The layer below the canopy, consisting of smaller trees, shrubs, and young trees.\n3. Forest Floor: The lowest layer, covered with fallen leaves, dead wood, and other organic matter.\n4. Moss Layer: A thin layer of mosses and lichens that grow on the forest floor.\nEach layer supports different types of organisms and plays a unique role in the forest ecosystem." 
    },
    { 
      q: "Tropical vs Temperate vs Boreal forests", 
      a: "Tropical forests are characterized by high rainfall, warm temperatures, and high biodiversity. They are typically found near the equator.\nTemperate forests are found in regions with moderate climates, experiencing distinct seasons. They have moderate rainfall and support a variety of deciduous trees.\nBoreal forests, also known as taiga, are found in cold regions and are dominated by coniferous trees. They experience long, cold winters and short, cool summers." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Ecosystem</span>
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

export default Ecosystem;