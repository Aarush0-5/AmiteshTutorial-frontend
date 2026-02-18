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

const PollinationandFertilisation= () => {
  const content = [
    { 
      q: "What is pollination?", 
      a: "Pollination is the process of transfer of pollen grains from the anther (male reproductive organ) to the stigma (female reproductive organ) of a flower. It is a crucial step in the reproductive cycle of flowering plants, leading to fertilization and the production of seeds.\n Autogamy is a type of pollination where pollen from the same flower or another flower on the same plant fertilizes the ovules. It can occur through self-pollination (pollen from the same flower) or geitonogamy (pollen from another flower on the same plant). \n Allogamy is a type of pollination where pollen from one plant fertilizes the ovules of another plant of the same species. It can occur through cross-pollination (pollen from a different plant) or xenogamy (pollen from a different species).\n Geitonogamy is a type of pollination where pollen from one flower fertilizes the ovules of another flower on the same plant. It is a form of autogamy and can occur in plants that have multiple flowers, allowing for genetic diversity while still utilizing the same plant for reproduction." 
    },
     { 
      q: "Self Pollination ", 
      a: "Self pollination is a type of pollination where pollen from the same flower or another flower on the same plant fertilizes the ovules.\n Homogamy is a form of self-pollination where pollen from the same flower fertilizes the ovules. It can occur in plants that have both stamens and carpels in the same flower, allowing for direct transfer of pollen to the stigma. \n Cleistogamy is a form of self-pollination where flowers do not open and pollination occurs within the closed flower. This can be an adaptation to ensure reproduction in environments where pollinators are scarce or unreliable." 
    },
     { 
      q: "Cross Pollination", 
      a: "Cross pollination is a type of pollination where pollen from one plant fertilizes the ovules of another plant of the same species. It can occur through various mechanisms, including wind, water, and animal pollinators such as bees, butterflies, birds, and bats. Cross pollination promotes genetic diversity within a population of plants, which can enhance their adaptability and survival in changing environments." 
    },
    { 
      q: "Advantages and Disadvantages of Self Pollination", 
      a: "Advantages of self-pollination include: \n 1) It ensures reproduction even in the absence of pollinators, making it a reliable method of reproduction for plants in isolated or unfavorable environments. \n 2) It can lead to the production of pure lines, which can be beneficial for certain agricultural practices. \n 3) It allows for the preservation of specific traits within a population. \n Disadvantages of self-pollination include: \n 1) It can lead to inbreeding depression, where the accumulation of harmful recessive alleles can reduce the fitness and vigor of offspring. \n 2) It limits genetic diversity, which can make populations more susceptible to diseases and environmental changes. \n 3) It may reduce the potential for adaptation and evolution in changing environments." 
    },
    { 
      q: "Why does nature prefer cross pollination?", 
      a: "Nature prefers cross pollination because it promotes genetic diversity within plant populations. Genetic diversity is crucial for the adaptability and survival of species in changing environments. Cross pollination allows for the exchange of genetic material between different plants, leading to offspring with a wider range of traits and increased resilience to diseases, pests, and environmental stresses. This diversity can enhance the overall fitness of a population and contribute to the long-term success of a species. \n Dichogamy is a mechanism that promotes cross pollination by ensuring that the male and female reproductive organs of a flower mature at different times, reducing the chances of self-pollination and encouraging cross pollination. \n Herkogamy is another mechanism that promotes cross pollination by spatially separating the male and female reproductive organs within a flower, making it more difficult for pollen to transfer from the anther to the stigma of the same flower and encouraging cross pollination.\n  Heterostyly is a mechanism that promotes cross pollination by producing two or more different forms of flowers within the same species, with varying lengths of stamens and styles. This variation in floral morphology encourages cross pollination between different forms of flowers, enhancing genetic diversity within the population." 
    },
    { 
      q: "Agents of Cross Pollination", 
      a: "Anemophily is a type of cross pollination where pollen is transferred by wind. It is common in plants that produce large amounts of lightweight pollen, such as grasses and conifers. \n Hydrophily is a type of cross pollination where pollen is transferred by water. It occurs in aquatic plants, where pollen can float on the water surface to reach the stigma of another flower. \n Entomophily is a type of cross pollination where pollen is transferred by insects. It is the most common form of cross pollination and involves a wide variety of insect pollinators, including bees, butterflies, moths, beetles, and flies. \n Ornithophily is a type of cross pollination where pollen is transferred by birds. It occurs in plants that produce large, colorful flowers with abundant nectar to attract bird pollinators, such as hummingbirds and sunbirds. \n Zoophily is a general term for cross pollination where pollen is transferred by animals, including insects and birds. It encompasses both entomophily and ornithophily, as well as pollination by other animals such as bats and small mammals." 
    },
     { 
      q: "Pollen Grains and its structure", 
      a: "Pollen grains are the male reproductive structures in flowering plants, produced by the anthers of the stamens. They contain the male gametes (sperm cells) and are responsible for fertilizing the ovules. Pollen grains are typically small, lightweight, and can be transported by various agents of pollination. Exine is the outer layer of the pollen grain, which is often sculptured and can have various patterns and structures that aid in identification and protection. Intine is the inner layer of the pollen grain, which is thin and contains the cytoplasm and nucleus of the pollen grain. Generative nucleus is a nucleus within the pollen grain that divides to form two sperm cells, which are involved in the fertilization process. Tube nucleus is another nucleus within the pollen grain that controls the growth of the pollen tube, which is essential for delivering the sperm cells to the ovules for fertilization." 
    },
     { 
      q: "Ovule and its charteristics", 
      a: "Ovules are the female reproductive structures in flowering plants, located within the ovary of the gynoecium. They contain the female gametes (egg cells) and are responsible for developing into seeds after fertilization. Ovules are typically larger than pollen grains and are not designed for dispersal, as they remain within the ovary until fertilization occurs. Nucellus is the central part of the ovule that contains the embryo sac, which houses the egg cell and other supporting cells. Integuments are the protective layers that surround the nucellus and eventually develop into the seed coat after fertilization. Micropyle is a small opening in the integuments of the ovule that allows for the entry of the pollen tube during fertilization, facilitating the delivery of sperm cells to the egg cell. The embryo sac contains the egg cell, two synergids (which assist in guiding the pollen tube), three antipodal cells (which have a supportive role), and two polar nuclei (which fuse with one of the sperm cells to form the endosperm, providing nourishment to the developing embryo)." 
    },
     { 
      q: "Events that lead to fertilization", 
      a: "Fertilization in flowering plants involves several key events: \n 1) Pollination: The transfer of pollen grains from the anther to the stigma of a flower. \n 2) Pollen Germination: Once on the stigma, the pollen grain absorbs moisture and nutrients, leading to the germination of the pollen grain and the growth of a pollen tube down through the style towards the ovary. \n 3) Pollen Tube Growth: The pollen tube grows through the style, guided by chemical signals, until it reaches the ovary and enters an ovule through the micropyle. \n 4) Double Fertilization: Inside the ovule, one sperm cell from the pollen grain fertilizes the egg cell to form a zygote (which will develop into the embryo), while the other sperm cell fuses with the two polar nuclei to form a triploid cell that will develop into the endosperm (which provides nourishment to the developing embryo)." 
    },
     { 
      q: "Fruit vs Seed", 
      a: "Fruit is the mature ovary of a flowering plant, often containing seeds. It serves to protect the seeds and aid in their dispersal. Fruits can be fleshy (like apples and berries) or dry (like nuts and grains). Seeds are the reproductive units of flowering plants, containing the embryo and stored nutrients necessary for germination and growth. Seeds are typically enclosed within fruits, but some plants produce seeds without developing a fruit (e.g., gymnosperms). The main function of seeds is to ensure the survival and propagation of the plant species by allowing for dispersal and providing a protective environment for the developing embryo." 
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Pollination and Fertilisation</span>
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

export default PollinationandFertilisation;