'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // useRouter from next/navigation for app router

const Signin = () => {
  const router = useRouter(); // Initialize router
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false, // IMPORTANT: set to false
      email,
      password,
    });

    if (res?.error) {
      setError('Invalid email or password.');
      console.log('Sign-in failed:', res.error);
    } else {
      console.log('Sign-in successful');
      router.push('/dashboard'); // Redirect manually
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-900 rounded p-2 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-900 rounded p-2 mb-6 w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signin;
