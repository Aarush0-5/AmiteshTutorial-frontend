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

const SoundWaves = () => {
  const content = [
    { 
      q: "Defining Sound", 
      a: "Sound is a form of energy that is produced by vibrations and travels through a medium (such as air, water, or solids) as longitudinal waves. These waves are characterized by properties such as frequency, amplitude, wavelength, and speed. The human ear can detect sound waves with frequencies ranging from 20 Hz to 20,000 Hz. Sound requires a medium to travel through and cannot propagate in a vacuum." 
    },
    {
        q: "Light waves vs Sound waves",
        a: "Light waves are electromagnetic waves that can travel through a vacuum, while sound waves are mechanical waves that require a medium to propagate. \nLight waves have much higher frequencies and shorter wavelengths compared to sound waves. \nAdditionally, light waves can exhibit properties such as reflection, refraction, and diffraction, while sound waves primarily exhibit reflection and diffraction."
    },
     { 
      q: "Defining Frequency, Amplitude, Wavelength and Speed of Sound" ,
      a: "Frequency is the number of vibrations per second, measured in Hertz (Hz). \nAmplitude is the maximum displacement of particles from their equilibrium position, which determines the loudness of sound.\n Wavelength is the distance between two consecutive points in phase on a wave, and speed is the rate at which sound waves travel through a medium.\n The speed of sound depends on the properties of the medium, such as density and elasticity." 
    },
     { 
      q: "Echo vs Reverberation", 
      a: "An echo is a reflected sound that is heard after the original sound has stopped. It occurs when sound waves bounce off a hard surface and return to the listener. \n Reverberation, on the other hand, is the persistence of sound in a space after the original sound has stopped due to multiple reflections from surfaces. While echoes are distinct and easily distinguishable, reverberation is a continuous prolongation of sound that can affect the clarity and quality of speech or music in enclosed spaces. \n For example, shouting in a canyon may produce a clear echo, while speaking in a large hall may result in reverberation because the sound waves reflect off the walls, ceiling, and floor multiple times before reaching the listener." 
    },
    { 
      q: "Transversal vs Longitudinal Waves", 
      a: "In transversal waves, the particles of the medium vibrate perpendicular to the direction of wave propagation. \nExamples include light waves and waves on a string.\n In longitudinal waves, the particles of the medium vibrate parallel to the direction of wave propagation. \nSound waves in air are an example of longitudinal waves." 
    },
    { 
      q: "Speed of Sound in different mediums",
      a: "The speed of sound varies in different mediums. In general, sound travels fastest in solids, followed by liquids, and slowest in gases. This is because the particles in solids are closer together and more tightly bound, allowing sound waves to propagate more quickly. For example, the speed of sound in air is approximately 343 m/s at room temperature, while in water it is about 1482 m/s, and in steel it is around 5960 m/s." 
    },
    { 
      q: "Formula for speed of sound ", 
      a: "Speed = frequency x wavelength \n The speed of sound can be calculated using the formula v = fλ, where v is the speed of sound, f is the frequency of the sound wave, and λ is the wavelength. This relationship shows that for a given frequency, the speed of sound is directly proportional to its wavelength. Conversely, for a given wavelength, the speed of sound is directly proportional to its frequency." 
    },
     { 
      q: "Speed of sound in relation to density",
      a: "Speed  is inversely proportional to the square root of density. This means that as the density of a medium increases, the speed of sound decreases. The relationship can be expressed mathematically as v = √(1/rho), where v is the speed of sound, and rho is the density of the medium. Therefore, in denser mediums, sound waves encounter more resistance, resulting in a slower speed." 
    },
     { 
      q: "Types of Sounds and its uses", 
      a: "Sounds can be classified into different types based on their frequency and characteristics. The main types include: \n1) Audible Sounds - These are sounds that can be heard by the human ear, typically ranging from 20 Hz to 20,000 Hz. \n2) Infrasonic Sounds - These are sounds with frequencies below 20 Hz and are not audible to humans. They are often produced by natural phenomena like earthquakes or ocean waves. \n3) Ultrasonic Sounds - These are sounds with frequencies above 20,000 Hz and are also not audible to humans. They have various applications in technology such as sonar systems, medical imaging (ultrasound), and cleaning processes." 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
             <span className="text-blue-600">Sound Waves</span>
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

export default SoundWaves;