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

const Motionin1Dimension= () => {
  const content = [
    { 
      q: "Defining Imporantant Terms", 
      a: "1) Motion: The change in position of an object with respect to time. \n 2) Rest: The state of an object when it is not in motion. \n 3) Distance: The total length of the path traveled by an object, regardless of direction. \n 4) Displacement: The straight-line distance from the initial position to the final position of an object, along with the direction. \n 5) Speed: The rate at which an object covers distance, calculated as distance divided by time. \n 6) Velocity: The rate at which an object changes its displacement, calculated as displacement divided by time, and includes direction. \n 7) Acceleration: The rate at which an object changes its velocity, calculated as change in velocity divided by time.\nScalar Quantity: A physical quantity that has only magnitude (e.g., distance, speed).\nVector Quantity: A physical quantity that has both magnitude and direction (e.g., displacement, velocity).\n Uniform Motion: Motion at a constant speed in a straight line.\n Non-uniform Motion: Motion that involves changes in speed or direction." 
    },
     { 
      q: "Basic Formulas along with their SI Units" ,
      a: "Speed (v) = Distance (d) / Time (t) [SI Unit: m/s]\nVelocity (v) = Displacement (s) / Time (t) [SI Unit: m/s]\nAcceleration (a) = Change in Velocity (Δv)(v-u) / Time (t) [SI Unit: m/s²]\nDistance traveled in uniform motion: d = v x t\nDisplacement in uniform motion: s = v x t.\n Instantaneous Speed: The speed of an object at a specific moment in time.\n Average Speed: Total distance traveled divided by total time taken.\n Instantaneous Velocity: The velocity of an object at a specific moment in time.\n Average Velocity: Total displacement divided by total time taken." 
    },
     { 
      q: "Derivation of First Equation of Motion", 
      a: "The first equation of motion relates the final velocity (v) of an object to its initial velocity (u), acceleration (a), and time (t). It can be derived as follows:\n\nStarting with the definition of acceleration:\na = (v - u) / t\nRearranging this equation gives:\nv = u + at\nThis is the first equation of motion, which states that the final velocity of an object is equal to its initial velocity plus the product of its acceleration and time." 
    },
    { 
      q: "Derivation of Second Equation of Motion", 
      a: "The second equation of motion relates the displacement (s) of an object to its initial velocity (u), acceleration (a), and time (t). It can be derived as follows:\n\nStarting with the definition of average velocity:\nAverage velocity = (u + v) / 2\nSince v = u + at, we can substitute:\nAverage velocity = (u + u + at) / 2 = u + at/2\nDisplacement = Average velocity x Time\nTherefore: s = (u + at/2) x t = ut + 1/2at²\nThis is the second equation of motion, which states that the displacement of an object is equal to the product of its initial velocity and time, plus half the product of its acceleration and the square of time." 
    },
    { 
      q: "Derivation of Third Equation of Motion",
      a: "The third equation of motion relates the final velocity (v), initial velocity (u), acceleration (a), and displacement (s) of an object. It can be derived as follows:\n\nStarting with the first equation of motion: v = u + at\nSquaring both sides: v² = (u + at)² = u² + 2uat + a²t²\nRearranging and substituting s = ut + 1/2at²:\nv² = u² + 2as\nThis is the third equation of motion, which states that the square of the final velocity is equal to the square of the initial velocity plus twice the product of acceleration and displacement." 
    },
    { 
      q: "Implementations of displacement time graph cases", 
      a: "1) Object at Rest: The graph is a horizontal line parallel to the time axis, indicating that displacement does not change over time. \n 2) Object in Uniform Motion: The graph is a straight line with a constant positive slope, indicating that displacement increases at a constant rate over time. \n 3) Object in Non-uniform Motion: The graph is a curve, indicating that the rate of change of displacement varies over time. The slope of the curve at any point gives the instantaneous velocity of the object.\n 4) Object Returning to Initial Position: The graph starts at the origin, rises to a maximum displacement, and then returns back to the origin, indicating that the object has returned to its initial position.\n Slope of the displacement-time graph gives the velocity of the object. A steeper slope indicates a higher velocity, while a flatter slope indicates a lower velocity." 
    },
     { 
      q: "Implementation of Velocity Time Graph Cases", 
      a: "1) Object at Rest: The graph is a horizontal line at zero velocity, indicating that the object is not moving. \n 2) Object in Uniform Motion: The graph is a horizontal line above or below the time axis, indicating that the object is moving at a constant velocity. \n 3) Object in Non-uniform Motion: The graph is a curve, indicating that the velocity of the object is changing over time. The slope of the curve at any point gives the acceleration of the object.\n 4) Object Accelerating: The graph shows a positive slope, indicating that the velocity is increasing over time. \n 5) Object Decelerating: The graph shows a negative slope, indicating that the velocity is decreasing over time.\n Slope of the velocity-time graph gives the acceleration of the object. A steeper slope indicates a higher acceleration, while a flatter slope indicates a lower acceleration." 
    },
     { 
      q: "Calculations in Displacement time and Velocity time graph", 
      a: "In a displacement-time graph, the slope (y2-y1/x2-x1) at any point gives the instantaneous velocity of the object. \nThe area under the velocity-time graph gives the displacement of the object over a given time interval. \nIn a velocity-time graph, the slope at any point gives the instantaneous acceleration of the object. \nThe area under the velocity-time graph gives the total displacement of the object over a given time interval." 
    },
     { 
      q: "Acceleration due to gravity and its value", 
      a: "Acceleration due to gravity is the acceleration experienced by an object in free fall near the surface of the Earth. It is denoted by 'g' and has a standard value of approximately 9.8 m/s². This value can vary slightly depending on location and altitude. The acceleration due to gravity is responsible for the downward pull of objects towards the center of the Earth. It is different at poles and equator due to the Earth's rotation and shape, with a slightly higher value at the poles (approximately 9.83 m/s²) and a slightly lower value at the equator (approximately 9.78 m/s²)." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Motion in One Dimension</span>
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

export default Motionin1Dimension;