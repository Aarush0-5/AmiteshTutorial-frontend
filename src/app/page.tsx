"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import HorizontalScrollCarousel from "./components/imageslider";
import HorizontalScrollCarouselAnnoucement from "./components/announcementslider";

const Home: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [showroutes, setShowRoutes] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const routes = [
    { name: "Innovation Lab", href: "/innovation_lab" },
    { name: "Gallery", href: "/gallery" },
    { name: "Shop", href: "/shop" },
    { name: "Study Material", href: "/knowledge" },
    { name: "Our Journey", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

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
        <meta
          name="description"
          content="A dedicated coaching center committed to nurturing the minds of young learners."
        />
        <meta
          name="keywords"
          content="Coaching, Tutorials, Study, Amitesh Tutorials, Lucknow, Education"
        />
      </Head>

      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 min-h-screen text-white font-sans overflow-x-hidden">
        

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
        {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-xl sticky top-0 z-40">
  {/* Main Container - Adjusted for mobile grid layout */}
  <div className="max-w-7xl mx-auto p-4 grid grid-cols-3 items-center lg:flex lg:justify-between">

    {/* Left-aligned content: Logo */}
    <div className="flex items-center justify-start">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.jpg" alt="Amitesh Tutorials Logo" width={70} height={70} />
      </Link>
    </div>

    {/* Center-aligned content: Title */}
    <div className="flex items-center justify-center">
      <span className="font-bold ml-5 lg:ml-0 text-3xl lg:text-3xl text-yellow-300">
        AMITESH TUTORIALS
      </span>
    </div>

    {/* Right-aligned content: Mobile Menu Button and Desktop Nav */}
    <div className="flex items-center justify-end"> {/* Use flexbox to align items to the right */}
      {/* Navigation - Desktop (remains the same) */}
      <nav className="hidden lg:flex items-center gap-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-white hover:text-yellow-400 font-medium text-lg transition duration-300 relative group"
          >
            {route.name}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
        <Link
          href="/login"
          className="bg-white text-blue-800 px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Student Portal
        </Link>
        <a
          href="https://www.instagram.com/amiteshtutorials/"
          className="hidden lg:block"
        >
          <Image
            src="/instagramm.png"
            alt="Instagram"
            width={32}
            height={32}
            className="rounded-full hover:scale-110 transition duration-300"
          />
        </a>
        <a
              href="https://www.youtube.com/@Amiteshtutorialslive/videos"
              className="hidden lg:block"
            >
              <Image
                src="/youtube.png"
                alt="youtube"
                width={32}
                height={32}
                className="rounded-full hover:scale-110 transition duration-300"
              />
            </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden relative">
        <button
          onClick={toggleRoutes}
          className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition"
        >
          {showroutes ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        {showroutes && (
          <div className="absolute right-0 top-12 bg-blue-800 bg-opacity-95 shadow-2xl rounded-xl p-4 w-48 z-50 flex flex-col gap-3 animate-fade-in-down">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setShowRoutes(false)}
                className="text-white hover:text-yellow-400 font-semibold px-2 py-1 rounded-lg transition"
              >
                {route.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-white text-blue-800 px-3 py-2 rounded-full font-bold text-center mt-2"
            >
              Student Portal
            </Link>
            <a
              href="https://www.instagram.com/amiteshtutorials/"
              className="flex justify-center mt-2"
            >
              <Image
                src="/instagramm.png"
                alt="Instagram"
                width={32}
                height={32}
                className="rounded-full"
              />
            </a>
            <a
              href="https://www.youtube.com/@Amiteshtutorialslive/videos"
              className="flex justify-center mt-2"
            >
              <Image
                src="/youtube.png"
                alt="youtube"
                width={32}
                height={32}
                className="rounded-full"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
</header>
        
        {/* Main Content Sections */}
        <main className="max-w-7xl mx-auto px-4 py-12 space-y-16 lg:space-y-24">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white animate-fade-in-up">
              <span className="text-yellow-300">Nurturing Minds</span> for a Brighter Future
            </h1>
            <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-blue-200 animate-fade-in-up delay-100">
              A dedicated coaching center committed to providing high-quality educational guidance tailored to meet each students unique needs and aspirations.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfUrEphFuLz7JLLdcnKIjPHhG2eoH7qzCRKg7A848MJgkfuXg/viewform"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                ENROLL NOW
              </a>
              <a
                href="/prospectus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Download Prospectus
              </a>
            </div>
          </section>
          <section className="mb-0 rounded-3xl shadow-2xl p-6 bg-white transform translate-y-2 animate-fade-in-up">
            <Image
              src="/images/pic9.jpg"
              alt="Classroom"
              width={1200}
              height={100}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </section>

          {/* Carousel Section */}
          <section className="rounded-3xl shadow-2xl p-6 bg-white transform translate-y-2 animate-fade-in-up">
            <HorizontalScrollCarousel />
          </section>

          {/* Programs Offered */}
          <section className="space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Individual Tutoring",
                  desc: "Tailored one-on-one sessions to address specific learning needs.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <circle cx="12" cy="8" r="5"></circle>
                      <path d="M20 21a8 8 0 0 0-16 0"></path>
                    </svg>
                  ),
                },
                {
                  title: "Group Classes",
                  desc: "Interactive classes encouraging peer learning and collaboration.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                },
                {
                  title: "Exam Preparation",
                  desc: "Focused coaching for competitive exams and school assessments.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                      <path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
                      <path d="M12 12v6"></path>
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Learning Plans",
                  desc: "Customized programs based on individual assessments.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                },
                {
                  title: "Regular Progress Tracking",
                  desc: "Frequent evaluations to monitor student development.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                },
                 {
                  title: "Air Conditioned Classroom",
                  desc: "Providing a comfortable learning atmosphere.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                      <path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
                      <path d="M12 12v6"></path>
                    </svg>
                  ),
                },
                {
                  title: "Interactive Learning Environment",
                  desc: "Utilizing modern teaching methods and technology.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  ),
                },
                 {
                  title: "Practical Experiments",
                  desc: "Hands-on learning to reinforce theoretical concepts.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  ),
                },
                 {
                  title: "Experiential Learning",
                  desc: "Learning through real-world experiences and activities.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Announcements */}
          <section className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-center text-yellow-300">Latest Announcements</h2>
            <div className="bg-white rounded-3xl shadow-2xl p-6">
              <HorizontalScrollCarouselAnnoucement />
            </div>
          </section>

          {/* Swastic Trust Section */}
          <section className="bg-blue-800 rounded-3xl p-8 shadow-2xl space-y-6 animate-fade-in-up">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Image
                src="/trust.jpg"
                alt="Swastic Charitable Trust Logo"
                height={200}
                width={200}
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <div className="text-white text-center lg:text-left space-y-4">
                <h2 className="text-3xl font-semibold">
                  We are proud to partner with <span className="font-extrabold text-yellow-300">Swastic Charitable Trust</span>
                </h2>
                <p className="text-lg font-light text-blue-100">
                  Swastic Charitable Trust is a registered NGO focused on child development, education, rural upliftment, and women empowerment. Our partnership strengthens our commitment to community well-being.
                </p>
                <Link
                  href="https://www.instagram.com/ngo_swastic/?igsh=MWlzZmE0MGJ3bXd0eA%3D%3D#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Timeschedule */}
          <div className="text-center animate-fade-in-up">
            <a
              href="/timeschedule.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Download Timeschedule
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-16 p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Logo & Slogan */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <Image src="/logo.jpg" alt="Amitesh Tutorials Logo" width={80} height={80} className="rounded-full" />
              <p className="text-blue-200 text-sm">Empowering students, one lesson at a time.</p>
            </div>
            {/* Contact Info */}
            <div className="space-y-2">
              <h3 className="font-semibold text-white text-lg mb-2">Contact Us</h3>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2 2A18.06 18.06 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 11.23 11.23 0 0 0 5 10c-.79.79-1.58 1.58-2.37 2.37a2 2 0 0 0-.29 2.11z"></path>
                </svg>
                6393169296
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                amiteshtutorials@gmail.com
              </p>
            </div>
            {/* Location & Social */}
            <div className="space-y-2">
              <h3 className="font-semibold text-white text-lg mb-2">Location</h3>
              <a
                href="https://maps.app.goo.gl/8F73q8mDTj3Zktcz5"
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-blue-400 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Near BBD University, Lucknow
              </a>
            </div>
          </div>
          <div className="mt-8 pt-4 flex justify-between border-t border-gray-700 text-center text-sm text-gray-500">
            © Amitesh Tutorials 2026. All Rights Reserved.
            <Link href="/privacy_page">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;