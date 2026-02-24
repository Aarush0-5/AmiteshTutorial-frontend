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

const AtmosphericPollution = () => {
  const content = [
    { 
      q: "Atmospheric pollution", 
      a: "Atmospheric pollution refers to the presence of substances in the Earth's atmosphere that are harmful to human health, animals, plants, and the environment. These pollutants can be in the form of gases, particles, or biological molecules. Common sources of atmospheric pollution include industrial emissions, vehicle exhaust, burning of fossil fuels, and natural events like volcanic eruptions. The main pollutants include carbon monoxide (CO), nitrogen oxides (NOx), sulfur dioxide (SO2), particulate matter (PM), and volatile organic compounds (VOCs)." 
    },
     { 
      q: "AQI (Air Quality Index)", 
      a: "The Air Quality Index (AQI) is a numerical scale used to communicate the level of air pollution in a specific area. It is designed to help people understand the health risks associated with air quality and take appropriate precautions. The AQI typically ranges from 0 to 500, with lower values indicating better air quality and higher values indicating more serious pollution levels. The index considers pollutants such as particulate matter (PM2.5 and PM10), ozone (O3), carbon monoxide (CO), sulfur dioxide (SO2), and nitrogen dioxide (NO2)." 
    },
     { 
      q: "Natural vs Man-made sources of atmospheric pollution", 
      a: "Natural sources of atmospheric pollution include volcanic eruptions, dust storms, wildfires, and biological processes like plant respiration.\n Man-made sources are primarily due to human activities such as industrial emissions, vehicle exhaust, burning of fossil fuels (coal, oil, natural gas), deforestation, and agricultural practices. While natural sources can cause temporary spikes in pollution levels, man-made sources are generally more persistent and contribute significantly to long-term air quality issues." 
    },
    { 
      q: "Oxides of carbon and their effects", 
      a: "Carbon monoxide (CO) is a colorless, odorless gas produced by incomplete combustion of carbon-containing fuels. It is highly toxic and can cause carbon monoxide poisoning.\n Carbon dioxide (CO2) is a greenhouse gas that contributes to global warming. It is also essential for photosynthesis in plants.\nThey can be controlled by using cleaner fuels, improving combustion efficiency, and implementing emission control technologies such as catalytic converters in vehicles and scrubbers in industrial processes." 
    },
    { 
      q: "Oxides of nitrogen and their effects",
      a: "Nitrogen oxides (NOx) are a group of gases that include nitric oxide (NO) and nitrogen dioxide (NO2). They are primarily produced by high-temperature combustion processes such as those in vehicle engines and power plants. NOx contributes to the formation of smog and acid rain, and can cause respiratory problems in humans. They can be controlled by using cleaner fuels, improving combustion efficiency, and implementing emission control technologies such as selective catalytic reduction (SCR) systems in vehicles and industrial processes." 
    },
    { 
      q: "Compounds of sulfur and their effects", 
      a: "Sulfur compounds, particularly sulfur dioxide (SO2), are major air pollutants. SO2 is produced by burning fossil fuels containing sulfur, such as coal and oil. It contributes to the formation of acid rain, which can damage forests, crops, and aquatic ecosystems. SO2 also causes respiratory problems in humans and animals. These compounds can be controlled by using cleaner fuels, installing scrubbers in industrial processes, and implementing emission control technologies." 
    },
     { 
      q: "Chlorofluorocarbons (CFCs) and their effects", 
      a: "Chlorofluorocarbons (CFCs) are synthetic compounds that were widely used in refrigeration, air conditioning, and as propellants in aerosol cans. They are potent greenhouse gases and are also responsible for the depletion of the ozone layer in the stratosphere. When released into the atmosphere, CFCs rise to the stratosphere where they are broken down by ultraviolet radiation, releasing chlorine atoms that catalyze the destruction of ozone molecules. The effects of CFCs include increased UV radiation reaching Earth's surface, which can cause skin cancer and cataracts in humans, and harm to marine ecosystems and agricultural productivity." 
    },
     { 
      q: "Suspended particulate matter and its effects", 
      a: "Suspended particulate matter (SPM) refers to solid and liquid particles suspended in the air. These particles can be natural (e.g., dust, pollen) or anthropogenic (e.g., soot, industrial emissions). SPM can cause respiratory problems, reduce visibility, and contribute to the formation of smog. Long-term exposure to high levels of particulate matter can lead to serious health issues such as asthma, bronchitis, and cardiovascular diseases. SPM also affects climate by scattering and absorbing sunlight.\nSmog is a type of air pollution characterized by a mixture of smoke and fog, often resulting from the interaction of sunlight with pollutants such as nitrogen oxides and volatile organic compounds. It can cause respiratory problems, reduce visibility, and harm the environment.\nAcid rain is precipitation that has a pH lower than 5.6, caused by the presence of sulfur dioxide and nitrogen oxides in the atmosphere. It can damage forests, crops, aquatic ecosystems, and manmade structures."
    },
     { 
      q: "Formation of Nitric acid and Sulfuric acid in the atmosphere", 
      a: "Nitric acid (HNO3) is formed in the atmosphere when nitrogen oxides (NOx) react with water vapor in the presence of sunlight. The reaction involves the conversion of nitrogen dioxide (NO2) to nitric acid through a series of chemical reactions involving ozone and water.\nSulfuric acid (H2SO4) is formed when sulfur dioxide (SO2) is oxidized in the atmosphere to form sulfur trioxide (SO3), which then reacts with water vapor to form sulfuric acid. This process is a major contributor to acid rain, which can cause significant environmental damage." 
    },
    { 
      q: "Impacts of acid rain and its control measures", 
      a: "Acid rain has several impacts on the environment and human health:\n 1. It damages forests by leaching essential nutrients from the soil and weakening trees.\n 2. It acidifies lakes and streams, harming aquatic life.\n 3. It corrodes buildings, monuments, and infrastructure made of stone or metal.\n 4. It can cause respiratory problems in humans due to the presence of acidic particles in the air.\nControl measures for acid rain include:\n 1. Reducing emissions of sulfur dioxide (SO2) and nitrogen oxides (NOx) by using cleaner fuels and installing scrubbers in industrial processes.\n 2. Implementing stricter emission standards for vehicles and power plants.\n 3. Promoting renewable energy sources to reduce dependence on fossil fuels." 
    },
    { 
      q: "Greenhouse gases and their effects", 
      a: "Greenhouse gases are gases in the Earth's atmosphere that trap heat and contribute to global warming. The main greenhouse gases include carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and water vapor. The effects of greenhouse gases include:\n 1. Global warming: Increased concentrations of greenhouse gases lead to higher global temperatures.\n 2. Climate change: Changes in temperature and precipitation patterns affect ecosystems and agriculture.\n 3. Sea level rise: Melting ice caps and thermal expansion of seawater contribute to rising sea levels.\n 4. Ocean acidification: Increased CO2 absorption by oceans lowers pH levels, affecting marine life.\n 5. Extreme weather events: More frequent and intense heat waves, droughts, floods, and storms." 
    },
     { 
      q: "Ozone", 
      a: "Ozone (O3) is a molecule composed of three oxygen atoms. It exists in two layers of the Earth's atmosphere: the stratosphere and the troposphere. In the stratosphere, ozone forms the ozone layer, which protects life on Earth by absorbing harmful ultraviolet (UV) radiation from the sun. In the troposphere, ozone is a secondary pollutant formed by the reaction of sunlight with pollutants such as nitrogen oxides and volatile organic compounds. Tropospheric ozone can cause respiratory problems and contribute to smog formation.\n Its depletion is primarily caused by chlorofluorocarbons (CFCs) and other ozone-depleting substances, which release chlorine and bromine atoms that catalyze the destruction of ozone molecules in the stratosphere. The effects of ozone depletion include increased UV radiation reaching Earth's surface, which can lead to skin cancer, cataracts, and harm to marine ecosystems and agricultural productivity." 
    },
     { 
      q: "Montreal Protocol and its significance", 
      a: "The Montreal Protocol is an international treaty designed to protect the ozone layer by phasing out the production and consumption of ozone-depleting substances (ODS), such as chlorofluorocarbons (CFCs) and halons. It was signed in 1987 and has been widely regarded as one of the most successful environmental treaties in history. The protocol has led to a significant reduction in the production and use of ODS, contributing to the recovery of the ozone layer. Its significance lies in its role in preventing further depletion of the ozone layer, which protects life on Earth from harmful ultraviolet (UV) radiation." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Atmospheric Pollution</span>
          </h1>
          <p className="text-gray-600 italic">Click any card to flip it and reveal the answer.</p>
        </header>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <Flashcard key={index} question={item.q} answer={item.a} />
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2026 Amitesh Tutorials - Master Chemistry Chapter-wise</p>
        </footer>
      </div>
    </div>
  );
};

export default AtmosphericPollution;