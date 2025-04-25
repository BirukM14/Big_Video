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

    // Input validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
    console.log('Response from server:');
      
      // Make the POST request to sign up the user
      const  {data}  = await axiosInstance.post('/api/signUp', {
        name,
        email,
        password,
      });
   


      
      
      console.log('User signed up successfully:', data);
      // You can add a success handler here (e.g., redirect, display success message)
      setError(''); // Clear error message on successful sign up

    } catch (error: any) {
      // Handle errors from the server
      console.error('Error signing up:', error);
      setError('An error occurred during sign up. Please try again.');


      
      // Enhanced error handling for AxiosError
     
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        setError(error.response.data.message || 'An error occurred during sign up');
      }
      else if (error.request) {
        // Request was made but no response received
        setError('No response from server. Please try again later.');
      }
      else {
        // Something happened in setting up the request
        setError('Error: ' + error.message);
      }
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-black px-4">
      <div className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
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
