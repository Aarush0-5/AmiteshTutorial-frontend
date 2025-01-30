"use client";

import React, {useState} from "react";
import Link from "next/link";
import HorizontalScrollCarousel from "./components/imageslider";
import HorizontalScrollCarouselAnnoucement from "./components/announcementslider";
import Form from "./components/form";
import LogIn from "./components/login";
import Image from "next/image";

const Home: React.FC = () => {
  const [showForm, setShowForm]= useState(false);
   
   const handleOnCLick = () => {
    setShowForm(!showForm)
   };

  

   const handleOnClose= () => {
    setShowForm(false);
   };



 return (
  <div>
    <header className="bg-blue-800 text-white flex flex-col items-center p-3 text-xl lg:flex-row lg:text-3xl lg:justify-between">
  <div className="w-full flex justify-center lg:justify-between items-center">
    <Image src="/logo.jpg" alt="logo" className="hidden lg:block lg:w-1/6 h-auto" width={100} height={100} />
    <div className="flex flex-row justify-end items-center">
      <Link href="/gallery" className="mr-4 hover:text-yellow-400 hover:underline hover:underline-offset-8">Gallery</Link>
      <Link href="/about" className="mr-4 hover:text-yellow-400 hover:underline hover:underline-offset-8 whitespace-nowrap">Our Journey</Link>
      <div >
       <button > LogIn </button>
      </div>
      <a href="https://www.instagram.com/amiteshtutorials/">
        <Image src="/instagramm.png" alt="instas logo" width={50} height={50} className="ml-2"/>
      </a>
    </div>
  </div>
</header>


     <main > 

       <Image src="/logo.jpg" alt="logo" className="lg:hidden w-full" width={100} height={100} />

      <div className="mt-5 mb-5"> <HorizontalScrollCarousel/> </div>

      <h2 className="text-center bg-blue-600 text-white lg:text-black p-3 font-bold text-3xl ">Welcome to Amitesh Tutorials
      </h2>

      <p className="text-center bg-blue-600 text-white lg:text-black p-3 font-semibold text-2xl">A dedicated coaching center committed to nurturing the minds of young learners. Our mission is to provide high-quality educational guidance tailored to meet each students unique needs and aspirations.</p>
      
      <div className="p-5 text-white bg-blue-600 flex flex-col mt-5 ">
           <h2 className="font-bold text-4xl underline underline-offset-4 text-black text-center mb-3">Programs Offered</h2>
           <div className="flex flex-col text-center gap-x-3 p-5 h-1/3 lg:flex-row ">
            <div className="border border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black hover:bg-black hover:text-white">
              <h2 className="text-3xl mb-4 hover:underline hover:underline-offset-4" >Individual Tutoring</h2>
              <p className="text-2xl">Tailored one-on-one sessions to address specific learning needs.</p>
            </div>
            <div  className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
              <h2 className="text-3xl mb-4 hover:underline hover:underline-offset-4" >Group Classes</h2>
              <p className="text-2xl">Interactive classes encouraging peer learning and collaboration.</p>
            </div>
            <div  className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
              <h2 className="text-3xl mb-4 hover:underline hover:underline-offset-4" >Exam Preparation</h2>
              <p className="text-2xl">Focused coaching for competitive exams and school assessments</p>
            </div>
           </div>
          </div>

          <div className="p-5 text-white bg-blue-600 flex flex-col mb-5">
           <h2 className="font-bold text-4xl underline underline-offset-4 text-black text-center mb-3">Key features</h2>
           <div className="flex flex-col text-center gap-x-3 p-5 lg:flex-row ">
            <div className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black hover:bg-black hover:text-white">
              <h2 className="text-3xl mb-4 hover:underline hover:underline-offset-4" >Personalized Learning Plans</h2>
              <p className="text-2xl">Customized programs based on individual assessments.</p>
            </div>
            <div  className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
              <h2 className="text-3xl mb-4 hover:underline hover:underline-offset-4" >Regular Progress Tracking</h2>
              <p className="text-2xl">Frequent evaluations to monitor student development.</p>
            </div>
            <div  className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
              <h2 className="text-3xl mb-4 hover:underline hover:underline-offset-4" >Interactive Learning Environment</h2>
              <p className="text-2xl">Utilizing modern teaching methods and technology</p>
            </div>
           </div>
          </div>
          
          <div className="bg-blue-600 ">
            <h2 className="text-center underline underline-offset-4 text-4xl font-bold">Announcements! </h2>
            <div className=" p-4 ">  
              <HorizontalScrollCarouselAnnoucement />
            </div>
          </div>
          

      <div className="  flex justify-center text-3xl p-10">
       <button onClick={handleOnCLick} className="p-3 bg-red-600 lg:w-1/6 hover:underline hover:text-white"> ENROLL NOW </button>
       {showForm && <Form showForm={showForm} onClose={handleOnClose} />}
      </div>

     </main>

     <footer className="text-black font-semibold text-xl">
      <div className="flex flex-col lg:flex-row justify-between p-3 bg-gray-600">
        <div className="text-center"> 
          <h2>REGISTERED BRANCH:</h2> 
          <p>BRANCH 1- MANAS GARDEN,</p> 
          <p> Near BBD UNIVERSITY,</p> 
          <p>LUCKNOW</p>
        </div>

        <div className="flex flex-col justify-center items-center"> 
          <p>📞: 6393169296</p>
          <p>📧: amiteshtutorials@gmail.com</p>

        </div> 
      </div>
        <h2 className="text-center bg-gray-800 text-white p-4">&copy; Amitesh tutorials 2025</h2> 
      
     </footer>
  </div>
 )
}

export default Home;


