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

const ControlAndCoordination = () => {
  const content = [
    { 
      q: "Terminologies", 
      a: "Nerve Impulses: Electrical signals that transmit information along nerves.\nHormones: Chemical messengers produced by glands that regulate various physiological processes.\nReceptors: Specialized structures that receive and respond to specific stimuli, such as hormones or nerve impulses.\nNerves: Bundles of fibers that transmit nerve impulses between the brain, spinal cord, and other parts of the body.\nGlands: Organs that produce and secrete hormones into the bloodstream to regulate bodily functions.\nNerve Cell: Also known as a neuron, it is a specialized cell that transmits nerve impulses. It consists of a cell body, dendrites (which receive signals), and an axon (which transmits signals to other cells)." 
    },
     { 
      q: "Structure of a nerve cell", 
      a: "A nerve cell (neuron) has three main parts: the cell body (soma), dendrites, and an axon. The cell body contains the nucleus and most organelles. Dendrites are branched extensions that receive signals from other neurons or sensory receptors. The axon is a long projection that carries nerve impulses away from the cell body to other neurons, muscles, or glands." 
    },
     { 
      q: "Types of neurons", 
      a: "There are three main types of neurons in the nervous system:\n1. Sensory Neurons: These neurons carry signals from sensory receptors to the central nervous system (brain and spinal cord).\n2. Motor Neurons: These neurons carry signals from the central nervous system to muscles or glands, causing them to respond.\n3. Interneurons: These neurons connect sensory and motor neurons within the central nervous system, facilitating communication between them." 
    },
    { 
      q: "Synapses", 
      a: "Synapses are the junctions between two nerve cells (neurons) where signals are transmitted from one neuron to another. At a synapse, the axon terminal of one neuron comes into close contact with the dendrites or cell body of another neuron. The transmission of signals across a synapse involves the release of neurotransmitters from the presynaptic neuron, which then bind to receptors on the postsynaptic neuron, allowing the signal to be passed on." 
    },
    { 
      q: "Central vs Peripheral Nervous System",
      a: "The central nervous system (CNS) consists of the brain and spinal cord, which are responsible for processing and integrating information. The peripheral nervous system (PNS) consists of all the nerves outside the CNS that connect the brain and spinal cord to the rest of the body. The PNS is further divided into somatic nervous system (controls voluntary movements) and autonomic nervous system (controls involuntary functions like heart rate, digestion, etc.)." 
    },
    { 
      q: "Brain and its parts", 
      a: "The brain is divided into several parts, each with specific functions:\n1. Cerebrum: The largest part of the brain, responsible for higher mental functions like thinking, memory, and voluntary movements.\n2. Cerebellum: Located below the cerebrum, it coordinates voluntary movements and maintains balance and posture.\n3. Brainstem: Connects the brain to the spinal cord and controls vital functions like breathing, heart rate, and consciousness.\nMeninges: Protective membranes that cover the brain and spinal cord, providing cushioning and support.\nCerebrospinal Fluid: A clear fluid that circulates around the brain and spinal cord, providing protection and nourishment." 
    },
    { 
      q: "Spinal Cord and Reflex Actions and Reflex Arc", 
      a: "The spinal cord is a long, thin, tubular structure that extends from the brainstem to the lumbar region of the spine. It serves as a pathway for nerve signals between the brain and the rest of the body. Reflex actions are automatic, involuntary responses to stimuli that do not involve the brain. They are controlled by reflex arcs in the spinal cord, which consist of sensory neurons, interneurons, and motor neurons. Examples of reflex actions include knee-jerk reflex and withdrawal reflex.Reflex arc is the neural pathway that mediates a reflex action. It typically involves a sensory receptor that detects a stimulus, a sensory neuron that transmits the signal to the spinal cord, an interneuron that processes the signal, and a motor neuron that carries the response back to the effector (muscle or gland) to produce a reaction." 
    },
     { 
      q: "Cranial vs Spinal Nerves", 
      a: "Cranial nerves are 12 pairs of nerves that originate from the brain and control various functions in the head and neck region. Examples include the optic nerve, auditory nerve, and facial nerve.\nSpinal nerves are 31 pairs of nerves that originate from the spinal cord and control functions in the rest of the body. They are divided into cervical, thoracic, lumbar, sacral, and coccygeal regions based on their location along the spine." 
    },
     { 
      q: "Autonomic Nervous System", 
      a: "The autonomic nervous system (ANS) is a division of the peripheral nervous system that controls involuntary physiological functions such as heart rate, digestion, respiratory rate, pupillary response, and other homeostatic processes. It is further divided into the sympathetic nervous system (which prepares the body for stress or emergency situations) and the parasympathetic nervous system (which promotes rest and digestion). The ANS operates without conscious control and helps maintain internal balance in the body." 
    },
     { 
      q: "Endocrine vs Exocrine Glands", 
      a: "Endocrine glands are ductless glands that secrete hormones directly into the bloodstream. Examples include the pituitary gland, thyroid gland, and adrenal glands.\nExocrine glands are glands that secrete substances through ducts to specific locations in the body. Examples include sweat glands, salivary glands, and oil glands in the skin." 
    },
    { 
      q: "Pituitary gland and its hormones", 
      a: "The pituitary gland is a small, pea-shaped gland located at the base of the brain. It is often called the 'master gland' because it controls other endocrine glands in the body. The pituitary gland produces several important hormones, including:\n1. Growth hormone (GH): Stimulates growth and cell reproduction.\n2. Thyroid-stimulating hormone (TSH): Stimulates the thyroid gland to produce thyroid hormones.\n3. Adrenocorticotropic hormone (ACTH): Stimulates the adrenal glands to produce cortisol.\n4. Follicle-stimulating hormone (FSH) and Luteinizing hormone (LH): Regulate reproductive functions in both males and females.\n5. Prolactin: Stimulates milk production in females.\n6. Oxytocin: Involved in childbirth and milk ejection during breastfeeding.\n7. Antidiuretic hormone (ADH): Regulates water balance in the body.\nGigantism is a condition caused by excessive secretion of growth hormone during childhood, leading to abnormal growth and height. Dwarfism is a condition caused by insufficient secretion of growth hormone during childhood, resulting in short stature and other physical abnormalities.Diabetes insipidus is a condition caused by insufficient secretion of antidiuretic hormone (ADH), leading to excessive thirst and urination." 
    },
    { 
      q: "Thyroid gland and its significance", 
      a: "The thyroid gland is a butterfly-shaped gland located in the neck region. It produces hormones like thyroxine (T4) and triiodothyronine (T3), which regulate metabolism, growth, and development. The thyroid gland also produces calcitonin, which helps regulate calcium levels in the blood. Disorders of the thyroid gland include goiter (enlarged thyroid), hypothyroidism (underactive thyroid), and hyperthyroidism (overactive thyroid).Cretenism is a condition caused by severe hypothyroidism during infancy or early childhood, leading to stunted physical and mental growth. Myxedema is a condition caused by severe hypothyroidism in adults, characterized by swelling of the skin and underlying tissues." 
    },
      { 
      q: "Adrenal glands and their hormones", 
      a: "The adrenal glands are small, triangular-shaped glands located on top of each kidney. They produce several important hormones, including:\n1. Adrenaline (epinephrine): Helps the body respond to stress and emergencies by increasing heart rate, blood pressure, and energy levels.\n2. Noradrenaline (norepinephrine): Similar to adrenaline but more potent in increasing blood pressure and alertness.\n3. Cortisol: Regulates metabolism, immune response, and stress management.\n4. Aldosterone: Regulates blood pressure and electrolyte balance by increasing sodium reabsorption in the kidneys." 
    },
    {
        q: "Adolescence and Puberty",
        a: "Adolescence is the transitional stage between childhood and adulthood, typically occurring between the ages of 10 and 19. It is characterized by significant physical, emotional, and psychological changes. Puberty is the biological process that triggers these changes. During puberty, the body undergoes several transformations due to hormonal changes:\n1. Growth spurts: Rapid increase in height and weight.\n2. Development of secondary sexual characteristics: In males, this includes deepening of the voice, growth of facial and body hair, and increased muscle mass. In females, it includes breast development, widening of hips, and growth of body hair.\n3. Hormonal changes: The release of hormones like growth hormone (GH), sex hormones (testosterone in males and estrogen in females), and others from the pituitary gland and gonads (testes in males and ovaries in females) regulate these changes.\nEmotional and psychological changes during adolescence can include mood swings, increased independence, and the development of identity. It is important for adolescents to receive proper guidance and support during this period to navigate these changes successfully."
    },
    {
        q: "Stress Management",
        a: "Stress management involves techniques and strategies to reduce or cope with stress. Common methods include:\n1. Regular exercise: Helps reduce stress hormones and releases endorphins, which are natural mood elevators.\n2. Meditation and mindfulness: These practices help calm the mind and reduce anxiety.\n3. Deep breathing exercises: Can activate the body's relaxation response.\n4. Time management: Organizing tasks and setting priorities can help reduce stress.\n5. Social support: Talking to friends, family, or a counselor can provide emotional support and coping strategies.\n6. Healthy lifestyle choices: Maintaining a balanced diet, getting enough sleep, and avoiding excessive caffeine or alcohol can help manage stress."
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Control and Coordination
             <span className="text-blue-600">Nervous System</span>
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

export default ControlAndCoordination;