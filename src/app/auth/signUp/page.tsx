// /src/app/signup/page.tsx

'use client';

import { useState } from 'react';

import axiosInstance from '@/app/lib/axios';
const SignUp = () => {
   const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;   
    }

    try {
        const data = await axiosInstance.post('/auth/signup', {
          name,
          email,
          password,
        });
      console.log('User signed up successfully:', data);
      // Handle successful signup (e.g., redirect to login page or show success message)        

    }catch (error: any) {
      console.error('Error signing up:', error);
      setError(error.response?.data?.message || 'An error occurred during signup');
    }

  

    
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-black px-4">
      <div className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
            <input
            type='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 rounded p-2 mb-6 w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
