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

const LawsofMotion= () => {
  const content = [
    { 
      q: "Defining Force and Its need", 
      a: "Force is a push or pull that acts on an object, causing it to accelerate or change its state of motion. The need for force arises when an object is at rest and needs to be set in motion, or when an object in motion needs to be stopped or its direction changed. Without force, objects would continue moving in a straight line at constant speed (Newton's First Law of Motion). Forces are essential for changing the velocity of an object, whether by increasing or decreasing its speed or by altering its direction." 
    },
     { 
      q: "Contact vs Non Contact Force" ,
      a: "Contact forces are forces that act on an object only when it is in physical contact with another object. Examples include friction, tension, and normal force. Non-contact forces, also known as field forces, act on an object without any physical contact. Examples include gravitational force, magnetic force, and electrostatic force." 
    },
     { 
      q: "Inertia of Rest and Inertia of Motion", 
      a: "Inertia is the tendency of an object to resist changes in its state of motion. Inertia of Rest refers to the tendency of an object at rest to remain at rest unless acted upon by an external force. Inertia of Motion refers to the tendency of an object in motion to continue moving in a straight line at constant speed unless acted upon by an external force. Both types of inertia are related to the mass of the object; the greater the mass, the greater the inertia." 
    },
    { 
      q: "Newtons First Law of Motion and its examples", 
      a: "Newton's First Law of Motion states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force. Examples include a book lying on a table remaining at rest until a force is applied to move it, or a ball rolling on the ground eventually stopping due to friction (an external force). This law is also known as the law of inertia.\nCommon A person feels a jerk when a car suddenly starts or stops because their body tends to remain in its current state of motion, demonstrating inertia." 
    },
    { 
      q: "Newtons Second Law of Motion and its derivation",
      a: "Newton's Second Law of Motion states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. Mathematically, it is expressed as F = ma, where F is the net force, m is the mass of the object, and a is the acceleration. \n Momentum refers to the quantity of motion an object has and is calculated as the product of mass and velocity (p = mv). The change in momentum is equal to the impulse applied to the object.\n Change in momentum (Δp) = mass(Vfinal - Vinitial) \n Dividing it by time (t) gives us the force: F = Δp / t = m(Vfinal - Vinitial) / t \n Since acceleration (a) is defined as the change in velocity over time (a = (Vfinal - Vinitial) / t), we can substitute this into the equation to derive Newton's Second Law: F = ma.\n thus force = change in momentum / time = mass * change in velocity / time = mass * acceleration" 
    },
    { 
      q: "Newtons third law of motion", 
      a: "Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction. This means that if object A exerts a force on object B, then object B simultaneously exerts a force of equal magnitude but in the opposite direction on object A. For example, when you push against a wall, the wall pushes back with an equal and opposite force. Similarly, when a rocket expels gas downwards, it experiences an equal and opposite force that propels it upwards. Remember the forces are equal in magnitude and opposite in direction, but they act on different objects." 
    },
     { 
      q: "Gravitation", 
      a: "Gravitation is the force of attraction between any two objects in the universe. It is a fundamental force that governs the motion of celestial bodies like planets, stars, and galaxies. The gravitational force between two objects depends on their masses and the distance between them. Newton's Law of Universal Gravitation states that every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them. Mathematically, it is expressed as F = G * (m1 * m2) / r^2, where F is the gravitational force, G is the gravitational constant, m1 and m2 are the masses of the two objects, and r is the distance between their centers. Gravitation is responsible for keeping planets in orbit around the sun and for the phenomenon of weight on Earth." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Laws of Motion</span>
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

export default LawsofMotion;