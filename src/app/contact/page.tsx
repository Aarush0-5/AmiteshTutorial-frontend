import type { NextPage } from 'next';
import Link from "next/link"
import Head from "next/head"
const Contact: NextPage = () => {
  return (
    <>
    <Head>
       <title>Contact us</title>
       <meta name="description" content="The about page of amitesh tutorials: coaching/tutorials in lucknow"/>
       <meta name="keywords" content="Coaching, coaching, Tutorials, tutorials, study , amitesh tutorials, AmiteshTutorials, Amitesh tutorials, contact us , our journey"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="min-h-screen bg-blue-500 flex items-center justify-center px-4 py-16">
      <div className="bg-yellow-400 shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us </h1>
        <p className="text-black underline underline-offset-8 text-xl font-semi-bold font-serif">We would love to hear from you! Reach out via any of the options below:</p>

        <div className="space-y-4 text-left">
          <div>
            <p className="text-sm text-black font-bold">Email 📧</p>
            <p className="text-lg text-gray-700 font-semi-bold">amiteshtutorials@gmail.com</p>
          </div>

          <div>
            <p className="text-sm text-black font-bold">Call 📞</p>
            <p className="text-lg text-gray-700 font-semi-bold">+91 6393169296</p>
          </div>

          <div>
            <p className="text-sm text-black font-bold">Registered Branch 1 📍</p>
            <p className="text-lg text-gray-700 font-semi-bold">
              Manas Garden,<br />
              Near BBD university,<br />
              Lucknow
            </p>
          </div>

          <Link className="flex justify-center hover:text-red-600" href="/">HOME</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
