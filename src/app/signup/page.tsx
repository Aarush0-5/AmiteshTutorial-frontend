'use client';

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const signUp = () => {
    const [username, setUsername] = useState<string>("");
    const [classNumber, setClassNumber] = useState<number>(0);
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [signingUp, setSigningUp] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setSigningUp(true);
        const backendPost = process.env.NEXT_PUBLIC_BACKEND_POST_SIGN;
        try {
            const response = await axios.post(`${backendPost}`, {
                username,
                class: classNumber,
                role,
                password,
            });
            if (response.status === 201) {
                alert("Sign Up Successful");
                router.push("/login");
            }
        } catch (error) {
            console.error("Error during sign up:", error);
            alert("Sign Up Failed. Please try again.");
        } finally {
            setSigningUp(false);
        }
    }

    return (
        <div className="flex h-screen w-full bg-black items-center justify-center">
        <div className="w-full max-w-md p-6 bg-blue-600 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">Only to be accessed by the owner!</h2>
            <h2 className="text-l italic font-semibold mb-6">your ip address will be stored</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="username">Class</label>
                <input
                type="number"
                id="class"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Class"
                value={classNumber}
                required
                onChange={(e) => setClassNumber(Number(e.target.value))}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="username">Role</label>
                <input
                type="text"
                id="role"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Role"
                value={role}
                required
                onChange={(e) => setRole(e.target.value)}
                />
            </div>
    
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
                disabled={signingUp}
            >
                Sign Up
            </button>
            </form>
        </div>
        </div>
    );
 
}

export default signUp;