"use client";
 
import React, { useState} from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

interface LogInProps {
    showLogIn: boolean,
    onClose: ()=> void;
}


const LogIn: React.FC<LogInProps> = ({showLogIn, onClose}) => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const router= useRouter();

  
    const handleLogIn = async(e: React.FormEvent, endpoint: string, username:string, password:string) => {
      e.preventDefault();

      const response = await fetch(endpoint, {
         method: 'POST',
         headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      const data= await response.json();
      alert(data.message);
      
      if (response.ok) {
        router.push('/dashboard')
      }
}
  
  return  showLogIn ? (
   <div>
     {
       showLogIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white">
        <div className="popup-form">
        <h1>LogIn</h1>
        <button type="button" onClick={onClose}>Close</button>
        <form onSubmit={(e) => handleLogIn(e, "api/auth/login", username, password)} className='flex flex-col mt-5 '>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='flex flex-col mb-5'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='flex flex-col mb-5'
          />
          
          <button type="submit">LogIn</button>
        </form>
        </div>
        
      </div>) 
     }
  </div>
     
    
  ) : null ;
};

export default LogIn