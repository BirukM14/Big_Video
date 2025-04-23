'use client';

import { signIn } from 'next-auth/react';

const Signin = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-900 rounded p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-900 rounded p-2 mb-6 w-full"
        />
        <button
          onClick={() => signIn()}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </div>
    </main>
  );
};

export default Signin;
