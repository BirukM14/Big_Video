'use client';

import { signOut } from "next-auth/react";

export default function SignOutPage() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/dashboard' }); // After sign out, redirect to home
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Are you sure you want to sign out?</h1>

      <button
        onClick={handleSignOut}
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
      >
        Sign Out
      </button>
    </div>
  );
}
