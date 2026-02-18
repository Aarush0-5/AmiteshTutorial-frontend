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

const Nutrition= () => {
  const content = [
    { 
      q: "Importance of Food", 
      a: "Food is essential for the survival and growth of all living organisms. It provides the necessary nutrients and energy required for various physiological processes, including metabolism, growth, repair, and reproduction. Food also plays a crucial role in maintaining the overall health and well-being of organisms by supplying essential vitamins, minerals, and other nutrients that support immune function and prevent diseases." 
    },
     { 
      q: "Types of Nutrients" ,
      a: "Energy-giving nutrients include carbohydrates, proteins, and fats, which provide the body with energy for various activities.\n Body-building nutrients include proteins, which are essential for growth and repair of tissues. \n Protective nutrients include vitamins and minerals, which help maintain overall health and prevent diseases. Each type of nutrient plays a specific role in supporting the body's functions and maintaining optimal health." 
    },
     { 
      q: "Carbohydrates and their types", 
      a: "Carbohydrates are organic compounds made up of carbon, hydrogen, and oxygen atoms. They are a major source of energy for living organisms. Carbohydrates can be classified into three main types: \n 1) Monosaccharides: These are the simplest form of carbohydrates and consist of a single sugar unit. Examples include glucose, fructose, and galactose. \n 2) Disaccharides: These are formed by the combination of two monosaccharide units. Examples include sucrose (table sugar), lactose (milk sugar), and maltose (malt sugar). \n 3) Polysaccharides: These are complex carbohydrates made up of many monosaccharide units linked together. Examples include starch (found in plants), glycogen (found in animals), and cellulose (found in plant cell walls)." 
    },
    { 
      q: "Importance of Cellulose", 
      a: "Cellulose is a complex carbohydrate that is a major component of plant cell walls. It provides structural support to plants, allowing them to maintain their shape and resist external forces. Cellulose is also an important source of dietary fiber for humans and other animals, aiding in digestion and promoting gut health. Additionally, cellulose can be used in various industrial applications, such as the production of paper, textiles, and biofuels." 
    },
    { 
      q: "Fats", 
      a: "Fats, also known as lipids, are a group of organic compounds that are insoluble in water but soluble in organic solvents. They are an important source of energy for the body and play a crucial role in various physiological processes. Uses of fats include: \n 1) Energy storage: Fats provide a concentrated source of energy, with 9 calories per gram, compared to carbohydrates and proteins which provide 4 calories per gram. \n 2) Insulation and protection: Fats help insulate the body and protect vital organs from physical shock. \n 3) Cell membrane structure: Fats are a key component of cell membranes, providing structural integrity and regulating the movement of substances in and out of cells. \n 4) Absorption of fat-soluble vitamins: Fats aid in the absorption of vitamins A, D, E, and K, which are essential for various bodily functions." 
    },
    { 
      q: "Proteins", 
      a: "Proteins are large, complex molecules made up of amino acids. They play a crucial role in the structure and function of living organisms. Uses of proteins include: \n 1) Enzymes: Proteins act as enzymes, which are biological catalysts that speed up chemical reactions in the body. \n 2) Structural support: Proteins provide structural support to cells and tissues, such as collagen in connective tissues and keratin in hair and nails. \n 3) Transport: Proteins help transport molecules across cell membranes and throughout the body, such as hemoglobin transporting oxygen in the blood. \n 4) Immune function: Proteins are essential for the immune system, with antibodies being a type of protein that helps fight off infections." 
    },
     { 
      q: "Vitamins and their types", 
      a: "Vitamins are organic compounds that are essential for normal growth and metabolism. They are required in small amounts and cannot be synthesized by the body, so they must be obtained through the diet. Vitamins can be classified into two main types: \n 1) Fat-soluble vitamins: These vitamins dissolve in fat and can be stored in the body's fatty tissues. Examples include vitamins A, D, E, and K. \n 2) Water-soluble vitamins: These vitamins dissolve in water and are not stored in the body, so they need to be consumed regularly. Examples include vitamin C and the B-complex vitamins (such as B1, B2, B3, B6, B12, folic acid)." 
    },
     { 
      q: "Hypervitaminosis", 
      a: "Hypervitaminosis is a condition that occurs when there is an excessive intake of vitamins, leading to toxic levels in the body. This can result in various symptoms depending on the specific vitamin involved. For example, hypervitaminosis A can cause symptoms such as nausea, dizziness, and even liver damage, while hypervitaminosis D can lead to symptoms like nausea, vomiting, and kidney damage. It is important to consume vitamins in appropriate amounts to avoid the risk of hypervitaminosis and its associated health complications." 
    },
     { 
      q: "Minerals and water", 
      a: "Minerals are inorganic nutrients that are essential for various physiological functions in the body. They play important roles in maintaining fluid balance, nerve function, muscle contraction, and bone health. Examples of essential minerals include calcium, potassium, sodium, magnesium, and iron. \n Water is a vital nutrient that is essential for life. It makes up a significant portion of the human body and is involved in various physiological processes, including temperature regulation, waste elimination, and nutrient transport. Water also helps maintain the structure of cells and tissues and is necessary for the proper functioning of enzymes and other biochemical reactions in the body." 
    },
    { 
      q: "What is a balanced diet?", 
      a: "A balanced diet is a diet that provides all the essential nutrients in the right proportions to maintain good health and well-being. It includes a variety of foods from different food groups, such as fruits, vegetables, grains, proteins, and dairy products. A balanced diet ensures that the body receives adequate amounts of carbohydrates, proteins, fats, vitamins, minerals, and water to support growth, repair, and overall functioning. It also helps prevent nutritional deficiencies and reduces the risk of chronic diseases." 
    },
    { 
      q: "Malnutrition vs Undernutrition", 
      a: "Malnutrition is a condition that occurs when there is an imbalance in the intake of nutrients, which can lead to both undernutrition and overnutrition. Undernutrition specifically refers to a deficiency in the intake of essential nutrients, leading to weight loss, stunted growth, and increased susceptibility to infections. Overnutrition, on the other hand, refers to an excessive intake of nutrients, which can lead to obesity and related health problems such as diabetes and cardiovascular diseases. Both malnutrition and undernutrition can have serious consequences for health and development." 
    },
    { 
      q: "Symptopms of malnutrition", 
      a: "Symptoms of malnutrition can vary depending on the specific nutrient deficiencies and the severity of the condition. Common symptoms include: \n 1) Weight loss or failure to gain weight in children \n 2) Fatigue and weakness \n 3) Stunted growth in children \n 4) Dry skin and hair \n 5) Swelling or edema \n 6) Increased susceptibility to infections \n 7) Delayed wound healing \n 8) Cognitive impairment and developmental delays in children. It is important to address malnutrition promptly to prevent long-term health consequences." 
    },
    { 
      q: "Symptoms of undernutrition", 
      a: "Symptoms of undernutrition can include: \n 1) Weight loss or failure to gain weight in children \n 2) Fatigue and weakness \n 3) Stunted growth in children \n 4) Dry skin and hair \n 5) Swelling or edema \n 6) Increased susceptibility to infections \n 7) Delayed wound healing \n 8) Cognitive impairment and developmental delays in children. It is important to address undernutrition promptly to prevent long-term health consequences." 
    },
    { 
      q: "Protien Energy Malnutrition", 
      a: "Protein Energy Malnutrition (PEM) is a condition that occurs when there is a deficiency of both protein and energy in the diet. It is commonly seen in children and can lead to severe health consequences if left untreated. PEM can manifest in two main forms: \n 1) Marasmus: This form of PEM is characterized by severe wasting of muscle and fat tissue, leading to extreme thinness and weakness. It typically occurs due to a lack of both protein and calories in the diet. \n 2) Kwashiorkor: This form of PEM is characterized by edema (swelling) due to fluid retention, as well as an enlarged liver and skin changes. It typically occurs due to a deficiency of protein in the diet, even if calorie intake is adequate. Both forms of PEM require immediate medical attention and nutritional intervention to prevent further complications." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Nutrition</span>
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

export default Nutrition;