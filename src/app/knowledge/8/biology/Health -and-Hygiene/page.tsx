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

const HealthAndHygiene = () => {
  const content = [
    { 
      q: "Defining Health and Disease", 
      a: "Health is defined as a state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity.\n Disease refers to any abnormal condition that affects the structure or function of an organism. Health is influenced by various factors including genetics, environment, lifestyle choices, and access to healthcare. \nMaintaining good health involves adopting healthy habits such as regular exercise, balanced nutrition, adequate sleep, and avoiding harmful substances like tobacco and excessive alcohol." 
    },
     { 
      q: "Communicable and Non-communicable diseases", 
      a: "Communicable diseases are those that can be transmitted from one person to another through direct or indirect contact, such as influenza, tuberculosis, and malaria. Non-communicable diseases are not transmissible from person to person and are often caused by genetic factors, lifestyle choices, or environmental conditions. Examples include diabetes, heart disease, and cancer." 
    },
     { 
      q: "Pathogen vs Vector vs Infection", 
      a: "A pathogen is a microorganism that causes disease, such as bacteria, viruses, fungi, or parasites. \nA vector is an organism that transmits pathogens from one host to another, such as mosquitoes transmitting malaria.\n An infection occurs when a pathogen enters the body and multiplies, causing illness." 
    },
    { 
      q: "Ways to spread communicable diseases", 
      a: "Communicable diseases can be spread through various means:\n1. Airborne transmission: Through respiratory droplets, such as in the case of influenza or tuberculosis.\n2. Waterborne transmission: Through contaminated water sources, such as cholera or typhoid fever.\n3. Foodborne transmission: Through contaminated food, such as salmonella or E. coli infections.\n4. Vector-borne transmission: Through insects or animals that carry pathogens, such as mosquitoes transmitting malaria or dengue fever.\n5. Direct contact: Through physical contact with an infected person, such as in the case of skin infections like impetigo." 
    },
     { 
      q: "Hygiene and its Importance" ,
      a: "Hygiene refers to practices that help maintain health and prevent the spread of diseases. It includes personal hygiene (such as washing hands, brushing teeth, and bathing) and environmental hygiene (such as keeping surroundings clean and disposing of waste properly). The importance of hygiene lies in its ability to prevent infections, reduce the risk of diseases, promote overall well-being, and contribute to a healthier community." 
    },
     { 
      q: "Taking Care of Skin", 
      a: "Taking care of skin involves maintaining cleanliness\n protecting it from harmful UV rays\n keeping it moisturized, and adopting a healthy lifestyle. \n Regular cleansing helps remove dirt and impurities, while using sunscreen protects the skin from sun damage. Moisturizing keeps the skin hydrated and prevents dryness. A healthy diet rich in vitamins and antioxidants can also promote skin health.\n Do not share towels, clothes, or personal items to prevent the spread of infections." 
    },
    { 
      q: "Taking care of Hair", 
      a: "Taking care of hair involves regular washing, conditioning, and protecting it from damage. It is important to use a mild shampoo suitable for your hair type and to avoid excessive heat styling or chemical treatments that can weaken the hair. Keeping the scalp clean and well-moisturized can also promote healthy hair growth. Additionally, maintaining a balanced diet rich in nutrients can contribute to overall hair health." 
    },
    { 
      q: "Taking care of Teeth",
      a: "Taking care of teeth involves regular brushing, flossing, and dental check-ups. It is important to brush your teeth at least twice a day using fluoride toothpaste and to floss daily to remove plaque and food particles from between the teeth. Regular dental visits can help identify and address any oral health issues early on. Additionally, maintaining a healthy diet low in sugary foods and drinks can help prevent tooth decay and promote overall oral health." 
    },
    { 
      q: "Taking care of Nails", 
      a: "Taking care of nails involves keeping them clean, trimmed, and moisturized. It is important to avoid biting or picking at your nails, as this can lead to infections. Regularly trimming your nails helps prevent breakage and promotes healthy growth. Keeping your hands and nails moisturized can also prevent dryness and cracking. Additionally, maintaining good hygiene by washing your hands regularly can help prevent the spread of germs and infections." 
    },
     { 
      q: "Taking care of eyes", 
      a: "Taking care of eyes involves maintaining good hygiene, avoiding rubbing the eyes, and protecting them from bright light and harmful substances. It is important to wear sunglasses when outdoors to protect the eyes from UV rays. Regular eye check-ups can help detect and address any vision problems early on. Additionally, maintaining a healthy diet rich in vitamins A, C, and E can promote good eye health." 
    },
     { 
      q: "Taking care of Ears", 
      a: "Taking care of ears involves keeping them clean and dry, avoiding the use of cotton swabs or other objects that can damage the ear canal, and protecting them from loud noises. It is important to gently clean the outer ear with a soft cloth and to avoid inserting anything into the ear canal. If you experience any discomfort or hearing problems, it is advisable to consult a healthcare professional." 
    },
     { 
      q: "Importance of Sleep", 
      a: "Sleep is essential for overall health and well-being. It allows the body to rest and repair itself, supports cognitive function, and helps regulate mood. Adequate sleep is crucial for maintaining a strong immune system, improving memory and concentration, and reducing the risk of chronic diseases such as obesity, diabetes, and heart disease. Establishing a regular sleep schedule and creating a comfortable sleep environment can help promote better sleep quality." 
    },
    { 
      q: "Immunisation vs Vaccination",
      a: "Immunisation refers to the process of making a person immune to a disease, while vaccination is a method used to achieve immunisation. Vaccination involves introducing a weakened or dead pathogen into the body to stimulate the immune system and produce antibodies. Immunisation is the result of this process, where the body becomes resistant to a specific disease." 
    },
    { 
      q: "Harmful effects of Alcohol", 
      a: "Alcohol consumption can have several harmful effects on the body. It can damage the liver, leading to conditions such as fatty liver, hepatitis, and cirrhosis. Alcohol also affects the brain, impairing judgment, coordination, and memory. Long-term alcohol use can increase the risk of heart disease, stroke, and certain cancers. It can also weaken the immune system, making individuals more susceptible to infections. Additionally, alcohol abuse can lead to addiction and mental health disorders." 
    },
     { 
      q: "Harmful effects of Tobacco", 
      a: "Tobacco use can have several harmful effects on the body. It can damage the lungs, leading to conditions such as chronic bronchitis, emphysema, and lung cancer. Tobacco also affects the cardiovascular system, increasing the risk of heart disease and stroke. It can cause various cancers, including throat, mouth, and bladder cancer. Tobacco use can also lead to addiction and respiratory problems such as asthma and chronic obstructive pulmonary disease (COPD). Additionally, it can affect fertility and increase the risk of premature birth in pregnant women." 
    },
     { 
      q: "Harmful effects of Drugs", 
      a: "Drug abuse can have several harmful effects on the body. It can damage vital organs such as the liver, kidneys, and heart. Drugs can also affect the brain, leading to impaired judgment, memory loss, and mental health disorders. Long-term drug use can result in addiction, which is a chronic disease characterized by compulsive drug-seeking behavior despite negative consequences. Drug abuse can also increase the risk of infectious diseases such as HIV and hepatitis due to unsafe practices like sharing needles." 
    },
     { 
      q: "First aid for cuts and wounds", 
      a: "First aid for cuts and wounds involves: \n1. Cleaning the wound with clean water or saline solution\n2. Applying gentle pressure with a clean cloth or bandage to stop bleeding\n3. Covering the wound with a sterile bandage\n4. Elevating the injured area above the heart level if possible\n5. Seeking medical attention if the wound is deep, bleeding heavily, or shows signs of infection such as redness, swelling, or pus." 
    },
    { 
      q: "First aid for burns", 
      a: "First aid for burns involves: \n1. Cooling the burn with cool (not cold) running water for at least 10-20 minutes\n2. Removing any jewelry or tight clothing near the burn area before swelling occurs\n3. Covering the burn with a sterile, non-adhesive bandage or clean cloth\n4. Avoiding ice, butter, or ointments on burns\n6. Seeking medical attention for severe burns, burns covering a large area, or burns on sensitive areas like face, hands, feet, or joints." 
    },
    { 
      q: "First aid for fractures", 
      a: "First aid for fractures involves: \n1. Immobilizing the injured area to prevent further damage\n2. Applying ice wrapped in a cloth to reduce swelling\n3. Elevating the injured limb above the heart level if possible\n4. Avoiding moving the person unnecessarily\n5. Seeking immediate medical attention for suspected fractures, especially if there is severe pain, deformity, or inability to move the affected limb.Slings or splints may be used to immobilize the fracture until professional medical care is available." 
    },
      { 
      q: "First aid for objects in eyes", 
      a: "First aid for objects in eyes involves: \n1. Do not rub the eye\n2. Do not try to remove the object with fingers or tools\n3. Rinse the eye gently with clean water \n4. Blink several times to encourage natural tearing\n5. Seek immediate medical attention if the object is sharp, deeply embedded, or if vision is affected." 
    },
    {
        q: "First ad for unconscious person",
        a: "An unconscious person is someone who is not awake and does not respond to stimuli. First aid for an unconscious person involves: \n1. Checking for responsiveness by gently shaking the person and calling their name\n2. If there is no response, call for emergency medical help immediately\n3. Check for breathing and pulse\n4. If the person is not breathing, begin CPR (cardiopulmonary resuscitation) if you are trained to do so\n5. If the person is breathing but unconscious, place them in the recovery position to keep their airway clear and prevent choking\n6. Monitor the person's condition until professional help arrives." 
    },
    {
        q: "First aid for swallowing poison",
        a: "First aid for swallowing poison involves: \n1. Do not induce vomiting unless instructed by a medical professional\n2. Call emergency services immediately\n3. If the person is conscious and alert, give them small sips of water if they are able to swallow\n4. Do not give anything else to eat or drink unless directed by a medical professional\n5. Keep the person calm and still while waiting for emergency help\n6. If the poison is on the skin or in the eyes, flush with clean water for at least 15 minutes."
    },
    {
        q: "First aids for snake bites",
        a: "First aid for snake bites involves: \n1. Keep the person calm and still to slow the spread of venom\n2. Remove any tight clothing or jewelry near the bite area\n3. Immobilize the bitten limb and keep it lower than the heart if possible\n4. Do not attempt to suck out the venom or apply a tourniquet\n5. Do not cut the bite area or apply ice\n6. Seek immediate medical attention, especially if symptoms like difficulty breathing, swelling, or severe pain occur."
    
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Health and Hygiene</span>
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

export default HealthAndHygiene;