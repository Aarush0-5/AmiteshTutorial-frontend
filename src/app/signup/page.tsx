"use client";
 
import React, { useState} from "react";


const handleSubmit= async (e:React.FormEvent,  username: string, password:string ) =>{
  e.preventDefault();

  const response= await fetch('/api/auth/[...nextauth]?action=signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
})
   const data= await response.json();
   alert(data.message);
};

const SignUp: React.FC = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

  return  (
        <div className="text-black">
        <h1>SignUp</h1>
        <form onSubmit={(e)=> handleSubmit(e, username, password)} className='flex flex-col mt-5 '>
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
          <button type="submit">SignUp</button>
        </form>
        </div>
        ) 
};

export default SignUp