'use client';

import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
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
      const backendPost= process.env.NEXT_PUBLIC_BACKEND_POST
      const response = await axios.post( `${backendPost}`, {
        username,
        password,
      });
      if (response.status === 201) {
        alert("Welcome")
        const accessToken = response.data.accessToken;
        
        localStorage.setItem('accessToken', accessToken);

        const backendGet = process.env.NEXT_PUBLIC_BACKEND_GET;
        const userResponse = await axios.get(`${backendGet}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      const role = userResponse.data.role
      if (role === "STUDENT") {
        router.push('/dashboard');
      } else  {
        router.push('/dashboardteacher');
      }
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loggingIn}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          {loggingIn ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
