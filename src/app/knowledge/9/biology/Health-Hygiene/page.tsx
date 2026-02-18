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

const HealthAndHygiene= () => {
  const content = [
    { 
      q: "Defining Health and its Significance", 
      a: "Health is a state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity. It is a dynamic concept that encompasses various aspects of an individual's life, including physical fitness, mental balance, emotional stability, and social integration. The significance of health lies in its impact on an individual's quality of life, productivity, and overall happiness. Good health enables individuals to perform their daily activities effectively and contributes to the development of a healthy society." 
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
      q: "Defining Diseases and their Types", 
      a: "Diseases are abnormal conditions that affect the structure or function of an organism, leading to impaired health. They can be classified into various types based on their causes and characteristics. Some common types of diseases include: \n 1) Infectious Diseases - Caused by pathogens such as bacteria, viruses, fungi, or parasites. Examples include influenza, tuberculosis, and malaria. \n 2) Non-infectious Diseases - Not caused by pathogens and often related to lifestyle factors or genetic predisposition. Examples include diabetes, heart disease, and cancer. \n 3) Genetic Disorders - Caused by abnormalities in an individual's DNA. Examples include cystic fibrosis and sickle cell anemia. \n 4) Autoimmune Diseases - Occur when the immune system mistakenly attacks the body's own tissues. Examples include rheumatoid arthritis and lupus." 
    },
    { 
      q: "Infectious Diseases and their infectious agents", 
      a: "Bacteria - Tuberculosis, Cholera, Tetanus, Syphilis, Diptheria, Typhoid, Whooping Cough, Pneumonia, Gonorrhea, Botulism, Diarrhoea, Anthrax \nViruses- Mumps, Poliomyelitis, Rabies,Chickenpox,SmallPox, Hepatitis B, Common Cold, Influenza, AIDS\n Fungi- Ringworm, Athelete's Foot\n Protozoa- Malaria,Amoeboic Dysentery, Sleeping Sickness, Leishmaniasis,Trypanosomiasis\n Helminths- Ascariasis, Hookworm Infection, Schistosomiasis,Filariasis, Taeniasis." 
    },
    { 
      q: "Infection and Incubation Period", 
      a: "Infection refers to the invasion and multiplication of pathogenic microorganisms in the body, which can lead to illness. The incubation period is the time between exposure to the infectious agent and the onset of symptoms. During this period, the pathogen is multiplying and spreading within the host's body, but the individual may not yet show any signs of illness. The length of the incubation period can vary widely depending on the type of infectious agent and the individual's immune response." 
    },
    { 
      q: "Direct mode of transmission", 
      a: "Direct mode of transmission refers to the spread of infectious agents from one person to another through direct physical contact. This can occur through activities such as touching,  or respiratory droplets from coughing or sneezing. Direct transmission can also occur from an infected mother to her baby during childbirth or breastfeeding. Contact with soild and animal bites are a major way as well"
    },
    { 
      q: "Indirect Mode of Transmission", 
      a: "Indirect mode of transmission refers to the spread of infectious agents through an intermediate object or organism. This can include contact with contaminated surfaces, such as doorknobs or shared utensils, where the infectious agent can survive for a period of time. Indirect transmission can also occur through vectors, which are living organisms that can carry and transmit pathogens, such as mosquitoes transmitting malaria or ticks transmitting Lyme disease." 
    },
    { 
      q: "Houseflies as a vector", 
      a: "Houseflies are vectors that can transmit diseases by carrying pathogens on their bodies or in their digestive systems. They often land on contaminated surfaces such as feces, garbage, or decaying organic matter, picking up pathogens like bacteria and viruses. When they subsequently land on food or surfaces where humans eat, they can transfer these pathogens, leading to diseases such as cholera, typhoid fever, and dysentery. They pour saliva and vomit on the food to liquefy it, which can further facilitate the transfer of pathogens. Deposition of eggs on food can also lead to contamination and the spread of diseases." 
    },
    { 
      q: "Mosquitoes as a vector", 
      a: "Mosquitoes are vectors that transmit diseases such as malaria, dengue fever, and Zika virus. They become infected when they bite an infected person and then transmit the pathogen to other people through their saliva during subsequent bites. Mosquitoes are particularly effective vectors because they can carry multiple pathogens and are widespread in many regions." 
    },
    {
        q: "Cockroaches as a vector", 
        a: "Cockroaches are vectors that can transmit diseases by carrying pathogens on their bodies and in their digestive systems. They often inhabit unsanitary environments such as garbage, sewage, and decaying organic matter, where they pick up bacteria, viruses, and parasites. When they come into contact with food or surfaces in human living spaces, they can transfer these pathogens, leading to diseases such as salmonellosis, dysentery." 
    },
    {
        q: "Cholera", 
        a: "Cholera is an infectious disease caused by the bacterium Vibrio cholerae. It is typically transmitted through contaminated water or food. The main symptoms of cholera include severe diarrhea, vomiting, and dehydration. If left untreated, cholera can lead to death within hours. Treatment involves rehydration therapy to replace lost fluids and electrolytes, and in severe cases, antibiotics may be used to reduce the duration of symptoms." 
    },
    {
        q: "Typhoid",
        a: "Typhoid is an infectious disease caused by the bacterium Salmonella typhi. It is typically transmitted through contaminated food or water. The main symptoms of typhoid include high fever, headache, abdominal pain, and constipation or diarrhea. If left untreated, typhoid can lead to serious complications such as intestinal bleeding or perforation. Treatment involves antibiotics and supportive care to manage symptoms."
    },
      {
        q: "Tuberculosis",
        a: "Tuberculosis (TB) is an infectious disease caused by the bacterium Mycobacterium tuberculosis. It primarily affects the lungs but can also affect other parts of the body. TB is transmitted through the air when an infected person coughs, sneezes, or speaks, releasing droplets containing the bacteria. Symptoms include persistent cough, chest pain, coughing up blood, weight loss, and fatigue. Treatment involves a combination of antibiotics taken over several months."
    },
      {
        q: "Vaccination vs Immunization",
        a: "Vaccination is the process of administering a vaccine to stimulate the immune system to develop immunity against a specific disease. Immunization is the broader term that refers to the process of becoming immune to a disease, either through vaccination or natural infection."
    },
      {
        q: "HIV and AIDS",
        a: "HIV (Human Immunodeficiency Virus) is a virus that attacks the immune system, specifically CD4 cells (T cells). AIDS (Acquired Immunodeficiency Syndrome) is the final stage of HIV infection, where the immune system is severely damaged. HIV is transmitted through contact with infected bodily fluids such as blood, semen, vaginal fluids, and breast milk. Symptoms of HIV may not appear for years but can include fever, fatigue, swollen lymph nodes, and weight loss. AIDS is diagnosed when the immune system is so weakened that it can no longer fight off opportunistic infections and cancers.\n Structute of HIV: HIV is a retrovirus that has a spherical shape with a lipid envelope derived from the host cell membrane. It contains two single strands of RNA as its genetic material, along with enzymes such as reverse transcriptase, integrase, and protease that are essential for the virus's replication cycle."
    },
      {
        q: "ChickenPox",
        a: "Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV). It is characterized by an itchy rash with red spots and blisters that appear all over the body. The disease is most common in children but can occur at any age. Symptoms include fever, fatigue, and loss of appetite. Chickenpox is usually mild in children but can be more severe in adults and people with weakened immune systems. Vaccination is available to prevent chickenpox."
    },
      {
        q: "Hepatitis",
        a: "Hepatitis is an inflammation of the liver, often caused by viral infections. The most common types are Hepatitis A, B, C, D, and E. Hepatitis A is typically transmitted through contaminated food or water. Hepatitis B and C are transmitted through contact with infected blood or bodily fluids. Symptoms may include fatigue, jaundice (yellowing of the skin and eyes), abdominal pain, and nausea. Vaccines are available for Hepatitis A and B."
    },
      {
        q: "Malaria",
        a: "Malaria is a mosquito-borne infectious disease caused by Plasmodium parasites. It is transmitted to humans through the bite of infected female Anopheles mosquitoes. Symptoms include fever, chills, headache, nausea, and vomiting. Malaria is most common in tropical and subtropical regions. Treatment involves antimalarial medications, and prevention includes using insecticide-treated bed nets and antimalarial drugs in high-risk areas."
    },
      {
        q: "Amoebic Dysentery",
        a: "Amoebic dysentery is an intestinal infection caused by the protozoan parasite Entamoeba histolytica. It is transmitted through ingestion of contaminated food or water. Symptoms include bloody diarrhea, abdominal pain, cramping, and fever. The condition can be treated with antiparasitic medications such as metronidazole under physician supervision."
    },
      {
        q: "Sleeping Sickness",
        a: "Sleeping sickness, also known as African trypanosomiasis, is a parasitic disease caused by Trypanosoma brucei parasites. It is transmitted by the bite of infected tsetse flies found in sub-Saharan Africa. Symptoms include fever, headache, joint pain, and fatigue. As the disease progresses, it affects the central nervous system, leading to sleep disturbances and neurological problems. Treatment involves specific antiparasitic medications."
    },
      {
        q: "Ascariasis",
        a: "Ascariasis is a common intestinal worm infection caused by the roundworm Ascaris lumbricoides. It is transmitted through ingestion of eggs from contaminated soil, food, or water. Symptoms may include abdominal pain, diarrhea, weight loss, and malnutrition. Treatment typically involves antiparasitic medications such as albendazole or mebendazole under physician supervision."
    },
      {
        q: "Taeniasis",
        a: "Taeniasis is an intestinal infection caused by tapeworms of the genus Taenia. It is transmitted through ingestion of undercooked meat (pork, beef, or fish) containing tapeworm larvae. Symptoms may include abdominal pain, diarrhea, weight loss, and malnutrition. Treatment typically involves antiparasitic medications."
    },
      {
        q: "Fliariasis",
        a: "Fliariasis is a parasitic disease caused by filarial worms of the genus Wuchereria, Brugia, and Onchocerca. It is transmitted by the bite of infected mosquitoes. Symptoms include swelling of limbs, skin changes, and lymphatic obstruction. Treatment involves antiparasitic medications such as diethylcarbamazine (DEC) or ivermectin."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Health And Hygiene</span>
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