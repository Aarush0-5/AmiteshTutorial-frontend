"use client"

import Image from "next/image";
import Head from "next/head"
import Link from "next/link"


const About: React.FC = () => {
 return (
  <>
    <Head>
      <title>Amitesh Tutorials | About Us</title>
      <meta name="description" content="The about page of Amitesh Tutorials: a dedicated coaching center in Lucknow." />
      <meta name="keywords" content="Coaching, Tutorials, Study, Amitesh Tutorials, Lucknow, About Us, Our Journey, Our Philosophy" />
    </Head>

    {/* Main Container with Gradient Background */}
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 min-h-screen text-white font-sans overflow-x-hidden">

      {/* Header - Consistent with Homepage */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Amitesh Tutorials Logo" width={75} height={75}  />
            <span className="font-bold text-2xl lg:text-3xl text-yellow-300">AMITESH TUTORIALS</span>
          </Link>
          <nav>
            <Link href="/" className="bg-white text-blue-800 px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16 lg:space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Journey: Committed to Excellence
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-blue-200">
            A look into our history, our values, and the people who make Amitesh Tutorials a beacon of education.
          </p>
        </section>

        {/* Meet The Founder */}
        <section className="bg-white text-gray-800 rounded-3xl shadow-2xl p-8 animate-fade-in-up delay-100">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Meet The Founder</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8 bg-yellow-400">
            <Image src="/founder.jpg" alt="Photo of Amitesh Tripathi, the founder" width={400} height={400} className="w-full lg:w-1/3 h-auto rounded-2xl shadow-lg" />
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <p className="font-semibold text-lg md:text-xl leading-relaxed">
                Founded by Amitesh Tripathi, an experienced educator with a passion for teaching, Amitesh Tutorials offers specialized coaching in various subjects, including Mathematics, Science, and English. Our team of qualified instructors brings a wealth of knowledge and experience, ensuring that students receive the best possible support on their academic journey.
              </p>
              <blockquote className="italic text-lg md:text-xl font-medium text-blue-800 border-l-4 border-blue-500 pl-4">
                “As you embark on this educational journey, remember that every challenge is an opportunity for growth. Keep pushing forward!”
                <footer className="mt-2 text-sm font-bold not-italic text-gray-500">
                  — Amitesh Tripathi
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="space-y-8 animate-fade-in-up delay-200">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Our Philosophy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold mb-3">Holistic Learning</h3>
              <p className="text-base font-semibold text-gray-600 leading-relaxed">
                At Amitesh Tutorials, we believe in fostering a positive learning environment that encourages curiosity and critical thinking. Our approach emphasizes understanding concepts rather than rote memorization, empowering students to become independent thinkers and problem solvers.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold mb-3">Proven Success</h3>
              <p className="text-base font-semibold text-gray-600 leading-relaxed">
                Many of our students have excelled in their academic pursuits and achieved remarkable results in examinations. Testimonials from parents and students highlight the effectiveness of our approach and the passion of our educators.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-800 rounded-3xl p-8 text-center shadow-2xl animate-fade-in-up delay-300">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="font-light text-lg mb-6">For inquiries about classes, schedules, and fees, please reach out to us:</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg">
            <a href="tel:6393169296" className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold shadow-lg transition-all hover:scale-105">
              Call: 6393169296
            </a>
            <a href="mailto:amiteshtutorials@gmail.com" className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold shadow-lg transition-all hover:scale-105">
              Email: amiteshtutorials@gmail.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer - Consistent with Homepage */}
      <footer className="bg-gray-900 text-gray-300 mt-16 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/logo.jpg" alt="Amitesh Tutorials Logo" width={80} height={80} className="rounded-full" />
            <p className="text-blue-200 text-sm">Empowering students, one lesson at a time.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg mb-2">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2 2A18.06 18.06 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 11.23 11.23 0 0 0 5 10c-.79.79-1.58 1.58-2.37 2.37a2 2 0 0 0-.29 2.11z"></path></svg>
              6393169296
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              amiteshtutorials@gmail.com
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg mb-2">Location</h3>
            <a href="https://maps.app.goo.gl/8F73q8mDTj3Zktcz5" className="flex items-center justify-center md:justify-start gap-2 text-sm text-blue-400 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Near BBD University, Lucknow
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
          © Amitesh Tutorials 2025. All Rights Reserved.
        </div>
      </footer>
    </div>
  </>
);
}

export default About;