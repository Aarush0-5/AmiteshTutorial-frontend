

const About: React.FC = () => {
 return (
  <div>
   <header className="flex flex-row justify-center lg:justify-between bg-blue-600 items-center">
   <h2 className="text-4xl lg:text-5xl font-bold text-start p-8 whitespace-nowrap text-white mb-4">Our Journey</h2>
   <a  href="https://www.instagram.com/amiteshtutorials/"><img src="/instagramm.png" alt="insta's logo" /></a>
   </header>

   <main>
     <div className="flex justify-center w-full h-auto">
      <img src="/logo.jpg" alt="Logo" />
     </div>
     <h2 className="font-bold text-3xl lg:text-5xl underline underline-offset-4 text-black text-center p-3 bg-yellow-400">Meet The Founder</h2>
     <div className="flex flex-col lg:flex-row text-black bg-yellow-400 p-3">
       <img src="/founder.jpg" alt="founder's image" className="lg:w-1/3 h-auto mb-4" />
       <div className="flex flex-col justify-center items-center lg:w-2/3 ">
        <p className="font-semibold text-xl text-center mb-7">Founded by Amitesh Tripathi, an experienced educator with a passion for teaching, Amitesh Tutorials offers specialized coaching in various subjects, including Mathematics, Science, and English. Our team of qualified instructors brings a wealth of knowledge and experience, ensuring that students receive the best possible support on their academic journey.</p>
        <p className="font-semibold italic text-xl text-center">“As you embark on this educational journey, remember that every   challenge is an opportunity for growth. Keep pushing forward!” <span className="whitespace-nowrap">-Amitesh  Tripathi</span></p>
      </div>
     </div>   
 
     <div className="bg-blue-600 mt-5 mb-5 p-4">
      <h2 className="text-4xl underline underline-offset-4 text-white font-bold text-start p-3 mb-3">Our Philosophy</h2>
      <div className="flex flex-col lg:flex-row gap-5  ">
      <p className="text-2xl text-center font-semibold bg-white text-black  mb-3 p-4 border-black border transition-transform duration-300 ease-in-out transform hover:scale-110">
      At Amitesh Tutorials, we believe in fostering a positive learning environment that encourages curiosity and critical thinking. Our approach emphasizes understanding concepts rather than rote memorization, empowering students to become independent thinkers and problem solvers.</p> 
      <p className="text-2xl text-center font-semibold bg-white text-black  mb-3 p-4 border-black border transition-transform duration-300 ease-in-out transform hover:scale-110">Many of our students have excelled in their academic pursuits and achieved remarkable results in examinations. Testimonials from parents and students highlight the effectiveness of our approach and the passion of our educators</p>
      </div>
     </div>
   
     <div className="bg-blue-600 text-white text-center text-xl lg:text-2xl p-5 mb-5">
        <p className=" font-semibold mb-5">For inquiries about classes, schedules, and fees, please contact us at:</p>
        <ol>
          <li>📞:6393169296</li>
          <li>📧:amiteshtutorials@gmail.com</li>
        </ol>
     </div>
  
   </main>

   <footer>
        <h2 className="p-4 text-2xl font-semibold bg-gray-700 text-white text-center">&copy; Amitesh tutorials 2025</h2>
     </footer>

  </div>
 )
}

export default About;