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

const DiversityinLivingOrganims= () => {
  const content = [
    { 
      q: "Categories of classification", 
      a: "Species - The basic unit of classification, representing a group of organisms that can interbreed and produce fertile offspring. \n Genus - A group of closely related species that share common characteristics. \n Family - A group of related genera that share certain traits. \n Order - A group of related families that share similar features. \n Class - A group of related orders that share common characteristics. \n Phylum - A group of related classes that share certain traits. \n Kingdom - The highest level of classification, grouping together all forms of life based on fundamental characteristics." 
    },
     { 
      q: "Who gave the 2 kingdom classification?" ,
      a: "Carl von Linnaeus, is credited with giving the 2 kingdom classification system. In his system, he classified all living organisms into two kingdoms: Plantae (plants) and Animalia (animals). This classification was based on the fundamental differences in the characteristics and modes of nutrition between plants and animals." 
    },
     { 
      q: "Who gave the 5 kingdom classification?", 
      a: "The 5 kingdom classification system was proposed by Robert Whittaker in 1969. He classified all living organisms into five kingdoms: Monera (prokaryotes), Protista (unicellular eukaryotes), Fungi, Plantae, and Animalia. This classification was based on differences in cell structure, mode of nutrition, and other fundamental characteristics of organisms." 
    },
    { 
      q: "Monera", 
      a: "Monera is a kingdom that includes all prokaryotic organisms, which are unicellular and lack a true nucleus. This kingdom is further divided into two groups: Bacteria and Archaea. Bacteria are found in various environments and can be beneficial or harmful to humans, while Archaea are often found in extreme environments such as hot springs and salt lakes. They can be autotrophic (producing their own food) or heterotrophic (obtaining food from other sources)." 
    },
    { 
      q: "Protista", 
      a: "Protista is a kingdom that includes a diverse group of eukaryotic organisms that are mostly unicellular, although some can be multicellular. This kingdom includes organisms such as algae, protozoa, and slime molds. Protists can be autotrophic (like algae that perform photosynthesis) or heterotrophic (like protozoa that consume other organisms). They can be found in various environments, including freshwater, marine, and terrestrial habitats." 
    },
    { 
      q: "Fungi", 
      a: "Fungi is a kingdom that includes a diverse group of eukaryotic organisms that are mostly multicellular, although some can be unicellular (like yeast). Fungi are heterotrophic organisms that obtain their food by absorbing nutrients from other organic matter. They play important roles in ecosystems as decomposers, breaking down dead organic material and recycling nutrients. Fungi can also form symbiotic relationships with plants (mycorrhizae) and animals (lichens). Saprophytic fungi feed on dead organic matter, while parasitic fungi feed on living organisms, often causing diseases." 
    },
     { 
      q: "Plantae", 
      a: "Plantae is a kingdom that includes all multicellular, photosynthetic organisms commonly known as plants. They are autotrophic organisms that produce their own food through the process of photosynthesis, using sunlight, carbon dioxide, and water to create glucose and oxygen. Plants play a crucial role in ecosystems by providing oxygen, food, and habitat for other organisms. They can be classified into various groups based on their characteristics, such as flowering plants (angiosperms), non-flowering plants (gymnosperms), ferns, mosses, and algae." 
    },
     { 
      q: "Animalia", 
      a: "Animalia is a kingdom that includes all multicellular, heterotrophic organisms commonly known as animals. They are characterized by their ability to move, consume organic material for energy, and reproduce sexually. Animals can be found in a wide range of habitats, from terrestrial to aquatic environments. They are classified into various groups based on their characteristics, such as invertebrates (animals without a backbone) and vertebrates (animals with a backbone). Vertebrates include classes such as mammals, birds, reptiles, amphibians, and fish." 
    },
     { 
      q: "Cryptogame and Phanerogame", 
      a: "Cryptogams are a group of plants that reproduce through spores and do not produce flowers or seeds. They include groups such as algae, mosses, ferns, and fungi. Phanerogams, on the other hand, are a group of plants that reproduce through seeds and produce flowers. They include groups such as angiosperms (flowering plants) and gymnosperms (non-flowering seed plants). The main difference between cryptogams and phanerogams is their mode of reproduction, with cryptogams relying on spores and phanerogams relying on seeds." 
    },
    { 
      q: "ALgae vs Bryophyta vs Pteridophyta", 
      a: "Algae are a diverse group of photosynthetic organisms that can be unicellular or multicellular and are found in aquatic environments. They can be classified into various groups based on their pigmentation, cell structure, and other characteristics.\n Bryophyta, also known as mosses, are non-vascular plants that lack true roots, stems, and leaves. They reproduce through spores and are typically found in moist environments.\n Pteridophyta, also known as ferns, are vascular plants that have true roots, stems, and leaves. They reproduce through spores and are commonly found in shaded, moist environments. The main differences between these groups lie in their structure, mode of reproduction, and habitat preferences." 
    },
    { 
      q: "Gymnosperms vs Angiosperms", 
      a: "Gymnosperms are a group of seed-producing plants that do not produce flowers. They have naked seeds that are not enclosed within a fruit. Examples of gymnosperms include conifers (like pine trees), cycads, and ginkgoes. \n Angiospermsare a group of seed-producing plants that produce flowers and have seeds enclosed within a fruit. They are the most diverse group of plants and include a wide variety of species such as grasses, shrubs, and trees. The main difference between gymnosperms and angiosperms is the presence of flowers and the way their seeds are produced and protected." 
    },
    { 
      q: "Chordates vs Non-chordates", 
      a: "Chordates are a group of animals that possess a notochord (a flexible rod-like structure) at some stage of their development. They also have a dorsal hollow nerve cord, pharyngeal slits, and a post-anal tail. Examples of chordates include mammals, birds, reptiles, amphibians, and fish. \n Non-chordates are animals that do not possess a notochord at any stage of their development. They include a wide variety of invertebrates such as insects, mollusks, annelids, and cnidarians. The main difference between chordates and non-chordates is the presence or absence of a notochord and other related structures during their development." 
    },
    { 
      q: "Porifera", 
      a: "Porifera, also known as sponges, are a group of simple, multicellular animals that are characterized by their porous bodies and lack of true tissues and organs. They are sessile organisms that filter feed by drawing water through their pores and extracting nutrients. Porifera are found in marine environments and play an important role in aquatic ecosystems as filter feeders and habitat providers for other organisms." 
    },
    { 
      q: "Cnidaria/Coelenterata", 
      a: "Cnidaria, also known as Coelenterata, is a group of aquatic animals that includes jellyfish, corals, sea anemones, and hydras. They are characterized by their radial symmetry, a body structure that consists of two layers of cells (ectoderm and endoderm), and the presence of specialized stinging cells called cnidocytes. Cnidarians have a simple digestive system and can reproduce both sexually and asexually. They play important roles in marine ecosystems as predators, prey, and habitat providers." 
    },
    { 
      q: "Platyhelminthes", 
      a: "Platyhelminthes, also known as flatworms, are a group of simple, bilaterally symmetrical animals that have a flattened body shape. They lack a true body cavity (coelom) and have a simple digestive system with only one opening. Platyhelminthes can be free-living or parasitic and are found in various environments, including freshwater, marine, and terrestrial habitats. Examples of platyhelminthes include planarians (free-living) and tapeworms (parasitic)." 
    },
    { 
      q: "Nematoda", 
      a: "Nematoda, also known as roundworms, are a group of unsegmented, cylindrical animals that have a complete digestive system with a separate mouth and anus. They are found in a wide range of environments, including soil, freshwater, and marine habitats. Nematodes can be free-living or parasitic and play important roles in ecosystems as decomposers, predators, and parasites. Examples of nematodes include Caenorhabditis elegans (a model organism) and Ascaris lumbricoides (a parasitic roundworm)." 
    },
    { 
      q: "Annelida", 
      a: "Annelida, also known as segmented worms, are a group of animals that have a segmented body structure. They possess a true coelom (body cavity) and a complete digestive system. Annelids can be found in various environments, including marine, freshwater, and terrestrial habitats. Examples of annelids include earthworms (which play important roles in soil aeration and nutrient cycling) and leeches (some of which are parasitic)." 
    },
    {
        q: "Arthropoda", 
        a: "Arthropoda is the largest phylum of animals that includes insects, arachnids, crustaceans, and myriapods. They are characterized by their exoskeleton made of chitin, segmented bodies, and jointed appendages. Arthropods have a wide range of adaptations that allow them to thrive in various environments, from terrestrial to aquatic habitats. They play important roles in ecosystems as pollinators, decomposers, predators, and prey." 
    },
     { 
      q: "Echinodermata", 
      a: "Echinodermata is a phylum of marine animals that includes starfish, sea urchins, sand dollars, and sea cucumbers. They are characterized by their radial symmetry (usually five-point), a calcareous endoskeleton, and a water vascular system that aids in movement and feeding. Echinoderms are found in various marine environments and play important roles in ecosystems as predators, scavengers, and habitat providers for other organisms." 
    },
    { 
      q: "Mollusca", 
      a: "Mollusca is a diverse phylum of invertebrate animals that includes snails, clams, squids, and octopuses. They are characterized by their soft bodies, which are often protected by a hard shell made of calcium carbonate. Mollusks have a muscular foot for movement, a visceral mass that contains internal organs, and a mantle that secretes the shell. They can be found in various environments, including marine, freshwater, and terrestrial habitats. Mollusks play important roles in ecosystems as grazers, filter feeders, and predators."             
    },
    {
        q: "Protochordates",
        a: "Protochordates are a group of animals that are considered to be the closest relatives of vertebrates. They include three subphyla: Cephalochordata (lancelets), Urochordata (tunicates), and Hemichordata (acorn worms). Protochordates possess some of the key characteristics of chordates, such as a notochord, a dorsal hollow nerve cord, and pharyngeal slits, but they lack a true backbone. They are found in marine environments and provide important insights into the evolutionary history of vertebrates."
    },
    {
        q: "Vertebrates",
        a: "Vertebrates are a group of animals that possess a backbone or spinal column. They include classes such as mammals, birds, reptiles, amphibians, and fish. Vertebrates are characterized by their complex body structure, which includes a well-developed nervous system, a closed circulatory system, and an endoskeleton made of bone or cartilage. They are found in a wide range of habitats, from terrestrial to aquatic environments, and play important roles in ecosystems as predators, prey, and habitat providers for other organisms."
    },
    {
        q: "Pices and their types",
        a: "Pisces, also known as fish, are a diverse group of aquatic vertebrates that are characterized by their gills, fins, and scales. They can be classified into three main types: \n 1) Agnatha (jawless fish) - These are primitive fish that lack jaws and paired fins. Examples include lampreys and hagfish. \n 2) Chondrichthyes (cartilaginous fish) - These fish have a skeleton made of cartilage instead of bone. Examples include sharks, rays, and skates. \n 3) Osteichthyes (bony fish) - These fish have a skeleton made of bone and are the most diverse group of fish. They can be further divided into two subclasses: Actinopterygii (ray-finned fish) and Sarcopterygii (lobe-finned fish). Examples of bony fish include salmon, trout, and goldfish."
    },
    {
        q: "Amphibians",
        a: "Amphibians are a group of vertebrates that include frogs, toads, salamanders, and newts. They are characterized by their ability to live both in water and on land. Amphibians have moist skin that allows for gas exchange, and they typically undergo metamorphosis from a larval stage (tadpole) to an adult stage. They are found in various habitats, including freshwater, terrestrial, and arboreal environments. Amphibians play important roles in ecosystems as predators of insects and other small organisms, as well as prey for larger animals."
     },
     {
        q: "Reptiles",
        a: "Reptiles are a group of vertebrates that include snakes, lizards, turtles, crocodiles, and alligators. They are characterized by their scaly skin, which helps prevent water loss, and their ability to lay eggs on land. Reptiles are ectothermic (cold-blooded), meaning they rely on external sources of heat to regulate their body temperature. They are found in a wide range of habitats, from deserts to rainforests, and play important roles in ecosystems as predators and prey for other animals."
     },
     {
        q: "Birds",
        a: "Birds are a group of vertebrates that are characterized by their feathers, beaks, and the ability to fly (although some birds are flightless). They have a high metabolic rate, a four-chambered heart, and a lightweight skeleton that aids in flight. Birds are found in various habitats around the world, from forests to deserts to aquatic environments. They play important roles in ecosystems as pollinators, seed dispersers, and predators of insects and other small animals."
     },
     {
        q: "Mammals",
        a: "Mammals are a group of vertebrates that are characterized by their ability to produce milk to feed their young, the presence of hair or fur, and a neocortex region in the brain. They are endothermic (warm-blooded) and have a four-chambered heart. Mammals can be found in a wide range of habitats, from terrestrial to aquatic environments, and include species such as humans, dogs, cats, whales, and bats. They play important roles in ecosystems as predators, prey, and habitat providers for other organisms."
     },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Diversity in Living Organisms</span>
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

export default DiversityinLivingOrganims;