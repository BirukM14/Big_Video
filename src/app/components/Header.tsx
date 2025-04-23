// src/app/components/Header.tsx

'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Bura Video
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          
          <Link href="/upload" className="hover:text-blue-400">Upload</Link>
          <Link href="/library" className="hover:text-blue-400">Library</Link>
        </nav>

        {/* User Actions (Auth placeholder) */}
        <div className="space-x-4">
          <Link href="/auth/signin" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
