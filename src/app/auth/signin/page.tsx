'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      // Handle error (e.g., show a message)
      console.log('Sign-in failed:', res.error);
    } else {
      // Redirect user on success or show a success message
      console.log('Sign-in successful');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
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
          onClick={handleSignIn}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </div>
    </main>
  );
};

export default Signin;
