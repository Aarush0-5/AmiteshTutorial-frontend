'use client';

import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import Head from "next/head"
import Image from 'next/image'

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [whereto, setWhereTo]= useState<boolean>(false); 
  const [role, setRole] = useState<string | null>(null); 
  const router = useRouter();
  

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
   
    const handleError = (error: AxiosError) => {
      if (error.response) {
        console.error (`Login Failed : status = ${error.response.status}` )
      }
      else {
        console.error ("Unexpected error occured, contact the owner")
      }
    }

    try {
      setLoggingIn(true);
      const backendPost= process.env.NEXT_PUBLIC_LOGIN_POST
      const response = await axios.post( `${backendPost}`, {
        username,
        password,
      });
      if (response.status === 201) {
        alert("Welcome")
        const accessToken = response.data.accessToken;
        
        localStorage.setItem('accessToken', accessToken);

        const backendGet = process.env.NEXT_PUBLIC_GET_ON_LOGIN ;
        const userResponse = await axios.get(`${backendGet}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const roleFetched = userResponse.data.role;
        setRole(roleFetched);
        setWhereTo(true);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          alert("Invalid credentials!");
        } else {
          handleError(error);
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }     
    setLoggingIn(false);
  };

  const goTo = (destination: "dashboard" | "quizform") => {
    if (!role) return;

    if (destination === "quizform") {
      router.push("/quizform"); 
    } else {
      if (role === "STUDENT") {
        router.push("/dashboard");
      } else {
        router.push("/dashboardteacher");
      }
    }
  };

return (
    <>
      <Head>
        <title>Login | Amitesh Tutorials</title>
        <meta name="description" content="The login page of Amitesh Tutorials: coaching/tutorials in Lucknow" />
        <meta name="keywords" content="Coaching, tutorials, study, Amitesh Tutorials, login" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-blue-900 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500 ease-in-out transform hover:scale-105 border border-blue-100 animate-fade-in-up"
        >
          <div className="text-center mb-8">
         
             <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="mx-auto mb-4" /> 
            <h2 className="text-4xl font-extrabold text-gray-900">Welcome Back!</h2>
            <p className="text-gray-600 mt-2">Sign in to continue</p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loggingIn}
            className={`w-full py-3 px-4 rounded-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out
              ${loggingIn
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              }`}
          >
            {loggingIn ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {whereto && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-sm w-full animate-scale-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Where do you want to go?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => goTo("dashboard")}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => goTo("quizform")}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md"
                >
                  Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
