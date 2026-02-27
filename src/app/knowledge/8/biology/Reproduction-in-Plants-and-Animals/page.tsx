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

const plantAnimalReproduction= () => {
  const content = [
    { 
      q: "Reproduction", 
      a: "Reproduction is the biological process by which organisms produce offspring. In plants, reproduction can be sexual (involving the fusion of gametes) or asexual (without gametes). Sexual reproduction involves the formation of seeds through pollination and fertilization. Asexual reproduction in plants occurs through vegetative propagation, such as budding, fragmentation, and spore formation. In animals, reproduction can also be sexual or asexual. Sexual reproduction involves the fusion of male and female gametes to form a zygote, while asexual reproduction produces genetically identical offspring without gamete fusion." 
    },
     { 
      q: "Asexual mode of reproduction in plants", 
      a: "Asexual reproduction in plants occurs through\n vegetative propagation, such as budding, fragmentation, and spore formation. \nIn budding, new individuals develop from outgrowths of the parent plant. \nFragmentation occurs when a part of the plant breaks off and develops into a new individual. \nSpore formation involves the production of spores that can develop into new plants under suitable conditions. These methods allow plants to reproduce without the need for gametes or fertilization." 
    },
     { 
      q: "Spore formation in plants", 
      a: "Spore formation in plants is a form of asexual reproduction where spores are produced in specialized structures called sporangia. These spores are haploid and can develop into new plants under suitable environmental conditions. Spores are often produced in large numbers and are dispersed by wind, water, or animals. Examples of plants that reproduce via spores include ferns, mosses, and some algae." 
    },
    { 
      q: "Fragmentation in plants", 
      a: "Fragmentation in plants is a form of asexual reproduction where a part of the plant breaks off and develops into a new individual. This process is common in plants like Bryophytes and some ferns. The fragmented parts can regenerate into complete new plants under suitable environmental conditions." 
    },
    { 
      q: "Vegetative propagation in plants",
      a: "Vegetative propagation in plants is a form of asexual reproduction where new plants are produced from vegetative parts of the parent plant, such as roots, stems, and leaves. Examples include the formation of new plants from runners (stolons), bulbs (like onions), tubers (like potatoes), and cuttings. This method allows plants to reproduce quickly and efficiently without the need for seeds or fertilization." 
    },
    { 
      q: "Vegetative propagation by root", 
      a: "Vegetative propagation by root occurs when new plants are formed from root parts of the parent plant. Examples include the formation of new plants from roots of sweet potato, carrot, and some other plants. This method allows plants to reproduce without the need for seeds or fertilization." 
    },
     { 
      q: "Vegetative propagation by stem", 
      a: "Vegetative propagation by stem occurs when new plants are formed from stem parts of the parent plant. Examples include the formation of new plants from stems of mint, jasmine, and some other plants. This method allows plants to reproduce without the need for seeds or fertilization.\nSub-aerial stems which means stems that grow above the ground can also be involved in vegetative propagation, such as runners (stolons) in strawberry plants and rhizomes in ginger.\n Underground stems, such as tubers in potatoes and bulbs in onions, are also common structures for vegetative propagation. \nCorms, which are swollen underground stems, can also give rise to new plants, as seen in gladiolus and crocus. \nRhizomes, which are horizontal underground stems, can also produce new plants, as seen in ginger and turmeric.\n Bulbs, which are short underground stems surrounded by fleshy leaves, can also give rise to new plants, as seen in onions and lilies. \nTubers, which are swollen underground stems, can also produce new plants, as seen in potatoes and dahlias." 
    },
     { 
      q: "Leaves", 
      a: "Vegetative propagation by leaves occurs when new plants are formed from leaf parts of the parent plant. Examples include the formation of new plants from leaves of Bryophyllum and some other plants. This method allows plants to reproduce without the need for seeds or fertilization." 
    },
     { 
      q: "Advantages and Disadvantages of Vegetative Propagation", 
      a: "Advantages of vegetative propagation include: \n1. Rapid reproduction\n2. Production of genetically identical plants\n3. No need for seeds or fertilization\n4. Ability to reproduce plants that do not produce seeds\n5. Faster growth and maturity compared to seed propagation.\nDisadvantages include: \n1. Lack of genetic variation\n2. Susceptibility to diseases and pests (since all plants are genetically identical)\n3. Limited by the availability of vegetative parts\n4. Some plants may not be suitable for vegetative propagation." 
    },
    { 
      q: "Budding in other organisms", 
      a: "Budding is a form of asexual reproduction in which a new organism develops from an outgrowth of the parent organism. It is commonly seen in organisms like Hydra, where a bud forms on the body wall and eventually detaches to become a new individual. In some plants, budding occurs in the formation of new shoots from existing plant parts." 
    },
    { 
      q: "Binary fission in other organisms", 
      a: "Binary fission is a form of asexual reproduction in which a single organism divides into two identical daughter cells. It is commonly seen in organisms like bacteria, where the parent cell replicates its genetic material and then splits into two equal parts. In some protists, such as Amoeba, binary fission occurs when the nucleus divides first, followed by the division of the cytoplasm." 
    },
      { 
      q: "Multiple fission in other organisms", 
      a: "Multiple fission is a form of asexual reproduction in which a single organism divides into many daughter cells. It is commonly seen in organisms like Plasmodium (malaria parasite), where the parent cell undergoes multiple divisions to produce many identical daughter cells. In some protists, such as Amoeba, multiple fission occurs when the nucleus divides multiple times before the cytoplasm splits." 
    },
    {
        q: "Flower and its parts",
        a: "A flower is the reproductive structure of angiosperms (flowering plants). It consists of several parts: \n1. Calyx or Sepals: The outermost whorl of the flower, usually green and leaf-like, that protects the developing bud.\n2. Corolla or Petals: The colorful and often fragrant parts of the flower that attract pollinators.\n3. Androecium or Stamens: The male reproductive organs of the flower, consisting of anthers (which produce pollen) and filaments (which support the anthers).\n4. Gynoecium or Carpels (or pistils): The female reproductive organs of the flower, consisting of the stigma (which receives pollen), style (which connects the stigma to the ovary), and ovary (which contains ovules that develop into seeds after fertilization)." 
    },
    {
        q: "Pollination and Fertilization",
        a: "Pollination is the transfer of pollen from the anther of a flower to the stigma of the same or another flower. It can occur through various agents such as wind, water, insects, birds, and animals. Fertilization is the process that occurs after pollination, where the male gamete (sperm) from the pollen grain fuses with the female gamete (egg) in the ovule to form a zygote. The zygote then develops into an embryo, which is enclosed within a seed. Pollination and fertilization are essential for sexual reproduction in plants, leading to the production of seeds and the continuation of the plant species.\n Self-pollination occurs when pollen from the same flower or another flower on the same plant fertilizes the ovules, while cross-pollination occurs when pollen from a different plant fertilizes the ovules. Cross-pollination promotes genetic diversity, while self-pollination can lead to inbreeding."
    },
    {
        q: "Artificial pollination and Agents of pollination",
        a: "Artificial pollination is the process of manually transferring pollen from the anther to the stigma of a flower to achieve fertilization. This technique is often used in agriculture and horticulture to improve crop yields and produce hybrid plants. \nAgents of pollination include\n wind (anemophily)\n water (hydrophily)\n insects (entomophily)\n birds (ornithophily)\n animals (zoophily). \nEach agent has specific adaptations that facilitate the transfer of pollen, such as the shape and color of flowers, the production of nectar, and the timing of flowering."
    
    },
    {
        q: "Uniqueness of each agent of pollination",
        a: "Each agent of pollination has unique characteristics that facilitate the transfer of pollen. \nWind-pollinated plants typically have small, inconspicuous flowers with large amounts of lightweight pollen. \nWater-pollinated plants have flowers that are adapted to float on water and release pollen into the water. \nInsect-pollinated plants often have brightly colored flowers with nectar to attract insects. \nBird-pollinated plants have tubular flowers that accommodate the beaks of birds and produce nectar. \nAnimal-pollinated plants may have various adaptations to attract specific animals, such as scent, color, and nectar production."
    },
    {
        q: "Sexual Reproduction in humans",
        a: "Sexual reproduction in humans involves the fusion of male and female gametes to form a zygote. The  male gametes are sperm cells produced in the testes, while the female gametes are egg cells (ova) produced in the ovaries. "
    },
    {
        q: "Ovary , Oviducts, Uterus",
        a: "The ovary  is the female reproductive organ that produces egg cells (ova) and hormones such as estrogen and progesterone. The oviducts, also known as fallopian tubes, are the tubes that connect the ovaries to the uterus. They are the site of fertilization, where the sperm meets the egg. The uterus is a muscular organ where the fertilized egg implants and develops into a fetus during pregnancy.The cervix is the lower part of the uterus that opens into the vagina."
    },
    {
        q: "Testes, Vas Deferens, Urethra",
        a: "The testes are the male reproductive organs that produce sperm cells and the hormone testosterone. The vas deferens is a muscular tube that carries sperm from the testes to the urethra during ejaculation. The urethra is a tube that carries both urine and sperm out of the body."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Reproduction in Plants and Animals</span>
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

export default plantAnimalReproduction;