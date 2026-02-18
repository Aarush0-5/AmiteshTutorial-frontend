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

const DigestiveSystem = () => {
  const content = [
    { 
      q: "Digestive Glands vs Alimentary Canal", 
      a: "Digestive Glands: These are specialized organs that produce and secrete digestive enzymes and other substances necessary for breaking down food. Examples include the salivary glands, liver, pancreas, and gastric glands.\nAlimentary Canal: This is the 9 m long continuous tube that extends from the mouth to the anus through which food passes during digestion. It includes the mouth, pharynx, esophagus, stomach, small intestine, large intestine, and anus." 
    },
     { 
      q: "Buccal Cavity", 
      a: "The buccal cavity, also known as the mouth or oral cavity, is the initial part of the digestive system where food enters the body. It is bounded by the lips, cheeks, palate, and tongue. The buccal cavity contains teeth for chewing and saliva glands that secrete saliva to moisten food and begin the process of digestion." 
    },
     { 
      q: "Pharynx", 
      a: "The pharynx is a muscular tube that connects the buccal cavity to the esophagus. It serves as a passageway for both food and air.  During swallowing, the pharynx helps to propel food from the mouth to the esophagus while preventing food from entering the respiratory tract.Gullet is the opening of the esophagus in the pharynx and glottis is the opening of the larynx in the pharynx. Epiglottis is a flap of cartilage that covers the glottis during swallowing to prevent food from entering the respiratory tract.Uvula is a small fleshy projection that hangs down from the soft palate in the back of the mouth. It helps to prevent food from entering the nasal cavity during swallowing." 
    },
    { 
      q: "Oesophagus", 
      a: "The oesophagus, also known as the food pipe, is a muscular tube that connects the pharynx to the stomach. It is approximately 25 cm long and is responsible for transporting food from the mouth to the stomach through a series of coordinated muscle contractions called peristalsis." 
    },
    { 
      q: "Stomach", 
      a: "The stomach is a J-shaped organ located in the upper abdomen that serves as a temporary storage and mixing chamber for food. It secretes gastric juices containing hydrochloric acid and digestive enzymes that help break down food into a semi-liquid form called chyme. The stomach also plays a role in the absorption of certain substances, such as alcohol and some medications. Functions of stomach include: Storage of food, Mechanical digestion through muscular contractions\nChemical digestion through secretion of gastric juices\n Absorption of certain substances\n Protection against pathogens through acidic environment." 
    },
    { 
      q: "Small Intestine", 
      a: "The small intestine is a long, coiled tube that extends from the stomach to the large intestine. It is the primary site of digestion and absorption of nutrients. The small intestine is divided into three parts: the duodenum, jejunum, and ileum. The duodenum receives digestive enzymes from the pancreas and bile from the liver to aid in digestion. The jejunum and ileum are responsible for the absorption of nutrients into the bloodstream. Lacteals are specialized lymphatic vessels in the small intestine that absorb dietary fats and transport them to the bloodstream.Bunner's glands are mucus-secreting glands located in the submucosa of the duodenum that help to protect the intestinal lining from acidic chyme and provide lubrication for the passage of food. Crypts of Lieberkuhn are glandular structures located in the lining of the small intestine that secrete digestive enzymes and provide a site for the renewal of intestinal epithelial cells." 
    },
     { 
      q: "Large Intestine", 
      a: "The large intestine, also known as the colon, is the final part of the digestive system that extends from the small intestine to the anus. It is responsible for absorbing water and electrolytes from indigestible food matter and forming solid waste (feces) for elimination. Ileocecal valve is a sphincter muscle that controls the flow of chyme from the small intestine into the large intestine and prevents backflow. Caecum is a pouch-like structure at the beginning of the large intestine that receives chyme from the ileum. Appendix is a small, finger-like projection that extends from the cecum and is thought to play a role in immune function. Colon is the main part of the large intestine that absorbs water and electrolytes and forms feces. Rectum is the final section of the large intestine that stores feces until they are eliminated through the anus." 
    },
     { 
      q: "Salivary Glands", 
      a: "Salivary glands are exocrine glands that produce and secrete saliva into the buccal cavity. There are three pairs of salivary glands: \nthe parotid glands located near the ears, \nthe submandibular glands located beneath the jaw, \nthe sublingual glands located under the tongue. \nSaliva contains enzymes such as amylase that begin the process of carbohydrate digestion, as well as mucus that helps to lubricate food for easier swallowing." 
    },
     { 
      q: "Liver", 
      a: "The liver is a large, reddish-brown organ located in the upper right abdomen that performs a wide range of functions, including detoxification, metabolism, and production of bile. Bile is a digestive fluid that helps to emulsify fats and facilitate their digestion and absorption in the small intestine. The liver also plays a crucial role in regulating blood sugar levels, storing vitamins and minerals, and producing important proteins such as albumin and clotting factors." 
    },
    { 
      q: "Pancreas", 
      a: "The pancreas is a glandular organ located behind the stomach that serves both endocrine and exocrine functions. As an exocrine gland, the pancreas produces digestive enzymes such as amylase, lipase, and proteases that are secreted into the duodenum to aid in the digestion of carbohydrates, fats, and proteins from islets of Langerhans. As an endocrine gland, the pancreas produces hormones such as insulin and glucagon that regulate blood sugar levels." 
    },
    { 
      q: "Physical vs Chemical Digestion", 
      a: "Physical Digestion: This refers to the mechanical breakdown of food into smaller pieces without changing its chemical composition. It includes processes such as chewing in the mouth, churning in the stomach, and segmentation in the small intestine.\nChemical Digestion: This refers to the breakdown of food into its chemical components through the action of enzymes and other digestive secretions. It occurs throughout the digestive tract, starting in the mouth with salivary amylase and continuing in the stomach and small intestine with various enzymes that break down carbohydrates, proteins, and fats." 
    },
    { 
      q: "Digestive Enzymes", 
      a: "Mouth - Salivary Amylase (breaks down carbohydrates)\nStomach - Pepsin (breaks down proteins), Prorenins (inactive precursors of pepsin),Gastric Lipase (breaks down fats),Mucin (protects stomach lining)\nSmall Intestine - Pancreatic Amylase (breaks down carbohydrates), Trypsin and Chymotrypsin (break down proteins), Pancreatic Lipase (breaks down fats), Nucleases (break down nucleic acids), Carboxypeptidase (breaks down proteins), Enterokinase (activates trypsinogen to trypsin)\nBrush Border Enzymes - Maltase, Sucrase, Lactase (break down disaccharides into monosaccharides), Peptidases (break down peptides into amino acids),Nucleosidases (break down nucleotides into nitrogenous bases and sugars)and Nucleotidases (break down nucleotides into nitrogenous bases, sugars, and phosphate groups)." 
    },
    { 
      q: "Assimilation vs Absorption", 
      a: "Assimilation: This refers to the process by which absorbed nutrients are taken up by cells and used for various metabolic activities, such as energy production, growth, and repair. It involves the incorporation of nutrients into the body's tissues and the synthesis of new molecules.\nAbsorption: This refers to the process by which digested nutrients are taken up from the lumen of the digestive tract into the bloodstream or lymphatic system. It primarily occurs in the small intestine, where nutrients such as amino acids, monosaccharides, fatty acids, vitamins, and minerals are absorbed through the intestinal lining and transported to cells throughout the body." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Digestive Sysem</span>
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

export default DigestiveSystem;