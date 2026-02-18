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

const Magnetism= () => {
  const content = [
    { 
      q: "Defining magnetism and its origin", 
      a: "Magnetism is a physical phenomenon that arises from the motion of electric charges, resulting in attractive and repulsive forces between objects. It is a fundamental force of nature that is closely related to electricity. The origin of magnetism can be traced back to the movement of electrons within atoms. When electrons spin and orbit around the nucleus, they create tiny magnetic fields. In certain materials, such as iron, cobalt, and nickel, these magnetic fields can align in a way that produces a net magnetic effect, leading to the formation of permanent magnets." 
    },
     { 
      q: "Magnetic field and its representation" ,
      a: "A magnetic field is a field that describes the magnetic influence of electric charges in motion and magnetic materials.\n It is represented by magnetic field lines, which are imaginary lines that show the direction and strength of the magnetic field.\n The direction of the field lines indicates the direction of the magnetic force, and their density indicates the strength of the field.\n It moves from the north pole of a magnet to the south pole outside the magnet, and from the south pole to the north pole inside the magnet." 
    },
     { 
      q: "Properties of a magnet", 
      a: "Attractive and Repulsive Forces: Magnets can attract or repel other magnets and magnetic materials. Like poles repel each other, while opposite poles attract each other.\n Magnetic Poles: Every magnet has two poles, a north pole and a south pole. The magnetic field is strongest at the poles.\n Magnetic Field: Magnets create a magnetic field around them, which can exert forces on other magnetic materials within the field.\n Magnetic Materials: Only certain materials, such as iron, cobalt, and nickel, are attracted to magnets and can become magnetized themselves." 
    },
    { 
      q: "Evidence of Earth's magnetism", 
      a: "Evidence of Earth's magnetism includes the behavior of compass needles, which always point towards the magnetic north pole. Additionally, the Earth's magnetic field protects us from harmful solar radiation and cosmic rays. The phenomenon of auroras (Northern and Southern Lights) is also evidence of Earth's magnetic field interacting with charged particles from the sun." 
    },
    { 
      q: "Properties of Earth's magnetic field lines",
      a: "A magnetic field line is a visual representation of the magnetic field. The properties of Earth's magnetic field lines include: \n1) They emerge from the magnetic north pole and enter the magnetic south pole. \n2) They never intersect each other. \n3) The density of the field lines indicates the strength of the magnetic field; closer lines represent stronger fields. \n4) They form closed loops, meaning they continue through the Earth and back to the surface.\nGeographic North Pole is actually a magnetic south pole, and Geographic South Pole is a magnetic north pole." 
    },
    { 
      q: "Electromagnet vs Permanent Magnet", 
      a: "An electromagnet is a temporary magnet that is created by passing an electric current through a coil of wire wrapped around a core of magnetic material, usually iron. The strength of an electromagnet can be controlled by adjusting the current or the number of turns in the coil. When the current is turned off, the electromagnet loses its magnetism.\n\A permanent magnet, on the other hand, is made from materials that are naturally magnetic and retain their magnetism even when no external magnetic field is applied. Examples include iron, nickel, and cobalt. Permanent magnets are used in applications where a constant magnetic field is required." 
    },
     { 
      q: "Electric bell and its working", 
      a: "An electric bell is a device that produces a ringing sound when an electric current is passed through it. It consists of an electromagnet, a clapper, and a bell. When the current flows through the electromagnet, it attracts the clapper, which strikes the bell. The clapper is then released by a spring mechanism, and the process repeats rapidly, producing a continuous ringing sound. This mechanism is commonly used in doorbells and alarm systems." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Magnetism</span>
          </h1>
          <p className="text-gray-600 italic">Click any card to flip it and reveal the answer.</p>
        </header>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <Flashcard key={index} question={item.q} answer={item.a} />
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2026 Amitesh Tutorials - Master Physics Chapter-wise</p>
        </footer>
      </div>
    </div>
  );
};

export default Magnetism;