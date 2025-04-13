"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HorizontalScrollCarousel from "./components/imageslider";
import HorizontalScrollCarouselAnnoucement from "./components/announcementslider";
import Image from "next/image";
import Head from "next/head";
import {MoreVertical , X} from "lucide-react"

const Home: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [showroutes, setShowRoutes] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const routes = [
    {name: "Gallery", href: "/gallery"},
    {name: "Study Material", href: "/knowledge"},
    {name: "Our Journey", href: "/about"},
    {name: "Contact", href: "/contact"},
  ]

  const toggleRoutes = () => {
    setShowRoutes(!showroutes);
  };


  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setShowPopUp(false);
    }
  };

  useEffect(() => {
    
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
    <Head>
      <title>Amitesh Tutorials</title>
      <meta name="description" content="The home page of amitesh tutorials: coaching/tutorials in lucknow"/>
      <meta name="keywords" content="Coaching, coaching, Tutorials, tutorials, study , amitesh tutorials, AmiteshTutorials, Amitesh tutorials"/>
      <meta name="google-site-verification" content="Qi0A94H9ZZKhlBdkyDOaWK-wS8sKffBC2kV4iEmN3nw" />
    </Head>
    <div>
      {showPopUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-white border border-black p-2 rounded-lg shadow-lg overflow-auto"
          >
            <Image
              src="/popUpp1.jpg"
              alt="Popup Image"
              width={450}
              height={400}
              className="w-auto h-auto max-h-[85vh] max-w-[90vw]"
            />
          </div>
        </div>
      )}

      <div>
        <header className="bg-blue-800 text-white flex flex-col items-center p-3 text-xl lg:flex-row lg:text-xl ">
          <div className="w-full flex justify-center items-center lg:justify-between">
            <Image
              src="/logo.jpg"
              alt="logo"
              className="hidden lg:block lg:w-1/6 h-auto"
              width={100}
              height={100}
            />
            <div className="flex flex-row justify-center items-center">
              <Link
                href="/login"
                className="mr-4 hover:text-yellow-400 hover:underline hover:underline-offset-8 font-serif whitespace-nowrap"
              >
                Student Portal
              </Link>

              <a href="https://www.instagram.com/amiteshtutorials/">
                <Image
                  src="/instagramm.png"
                  alt="instas logo"
                  width={50}
                  height={50}
                  className="mr-2 lg:hidden"
                />
              </a>
        <nav className= "hidden lg:flex gap-3">
        {routes.map(route => (
          <Link key={route.href} href={route.href} className="text-white hover:text-yellow-400 hover:underline hover:underline-offset-8">
            {route.name}
          </Link>
        ))}
      </nav>

      <div className= "lg:hidden" >
        <button onClick={toggleRoutes} className="p-2">
          {showroutes ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
        </button>

        {showroutes && (
          <div className="absolute right-4 top-14 bg-blue-700 shadow-lg rounded-lg p-4 w-48 z-50 flex flex-col gap-2">
            {routes.map(route => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setShowRoutes(false)}
                className="text-white hover:text-yellow-500 px-2 py-1 rounded"
              >
                {route.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <a href="https://www.instagram.com/amiteshtutorials/">
          <Image
            src="/instagramm.png"
            alt="instas logo"
            width={50}
            height={50}
            className="lg:ml-2 hidden lg:block"
          />
      </a>
    </div>
          </div>
        </header>

        <main>
          <Image
            src="/logo.jpg"
            alt="logo"
            className="lg:hidden w-full"
            width={100}
            height={100}
          />

       <div className="mt-5">
       <Image
        src="/images/pic7.jpg"
        alt="Centre Display"
        layout="responsive"
        width={100}
        height={50}
        />
      </div>


          <div className="mt-5 mb-5">
            <HorizontalScrollCarousel />
          </div>

          <h2 className="text-center bg-blue-600 text-white font-serif lg:text-black p-3 font-bold text-3xl">
            Welcome to Amitesh Tutorials
          </h2>

          <p className="text-center bg-blue-600 text-white font-mono lg:text-black p-3 font-semibold text-2xl">
            A dedicated coaching center committed to nurturing the minds of
            young learners. Our mission is to provide high-quality educational
            guidance tailored to meet each students unique needs and
            aspirations.
          </p>

          <div className="p-5 text-white bg-blue-600 flex flex-col mt-5">
            <h2 className="font-bold text-3xl lg:text-4xl underline underline-offset-4 font-serif text-black text-center mb-3">
              Programs Offered
            </h2>
            <div className="flex flex-col text-center gap-x-3 p-5 h-1/3 lg:flex-row ">
              <div className="border border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black hover:bg-black hover:text-white">
                <h2 className="text-2xl lg:text-3xl mb-4 hover:underline hover:underline-offset-4 font-serif">
                  Individual Tutoring
                </h2>
                <p className=" text-xl lg:text-2xl">
                  Tailored one-on-one sessions to address specific learning
                  needs.
                </p>
              </div>
              <div className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
                <h2 className="text-2xl lg:text-3xl mb-4 hover:underline hover:underline-offset-4 font-serif">
                  Group Classes
                </h2>
                <p className="text-xl lg:text-2xl">
                  Interactive classes encouraging peer learning and
                  collaboration.
                </p>
              </div>
              <div className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
                <h2 className="text-2xl lg:text-3xl mb-4 hover:underline hover:underline-offset-4 font-serif">
                  Exam Preparation
                </h2>
                <p className="text-xl lg:text-2xl">
                  Focused coaching for competitive exams and school assessments
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 text-white bg-blue-600 flex flex-col mb-5">
            <h2 className="font-bold text-3xl lg:text-4xl underline underline-offset-4 text-black text-center mb-3 font-serif">
              Key features
            </h2>
            <div className="flex flex-col text-center gap-x-3 p-5 lg:flex-row ">
              <div className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black hover:bg-black hover:text-white">
                <h2 className="text-2xl lg:text-3xl mb-4 hover:underline hover:underline-offset-4 font-serif">
                  Personalized Learning Plans
                </h2>
                <p className="text-xl lg:text-2xl">
                  Customized programs based on individual assessments.
                </p>
              </div>
              <div className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
                <h2 className="text-2xl lg:text-3xl mb-4 hover:underline hover:underline-offset-4 font-serif">
                  Regular Progress Tracking
                </h2>
                <p className="text-xl lg:text-2xl">
                  Frequent evaluations to monitor student development.
                </p>
              </div>
              <div className="border  border-black transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-white border-r-4 p-5 bg-white text-black  hover:bg-black hover:text-white">
                <h2 className="text-2xl lg:text-3xl mb-4 hover:underline hover:underline-offset-4 font-serif">
                  Interactive Learning Environment
                </h2>
                <p className="text-xl lg:text-2xl">
                  Utilizing modern teaching methods and technology
                </p>
              </div>
            </div>
          </div> 
          <div className="bg-blue-600 ">
            <h2 className="text-center underline underline-offset-4 text-4xl font-bold font-serif">
              Announcements!{" "}
            </h2>
            <div className=" p-4 ">
              <HorizontalScrollCarouselAnnoucement />
            </div>
          </div>

          <div className="  flex justify-center text-2xl p-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfUrEphFuLz7JLLdcnKIjPHhG2eoH7qzCRKg7A848MJgkfuXg/viewform"
              className=" flex justify-center p-3 bg-red-600 lg:w-1/6 hover:underline hover:text-white"
            >
              ENROLL NOW
            </a>
          </div>
        </main>

        <footer className="text-black font-semibold text-xl">
          <div className="flex flex-col lg:flex-row justify-between p-3 bg-gray-600">
            <div className="text-center">
              <h2>REGISTERED BRANCH:</h2>
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
        </div> 
       </> ) }

  export default Home;