'use client';

import Link from "next/link";
import { SessionProvider, useSession } from "next-auth/react";

function HeaderContent() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

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

          {isAuthenticated && (
            <Link href="/videos" className="hover:text-blue-400">Videos</Link>
          )}

          {!isAuthenticated && (
            <Link href="/auth/signin" className="hover:text-blue-400">Sign in</Link>
          )}

          {isAuthenticated && (
            <Link href="/auth/signout" className="hover:text-blue-400">Sign out</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <SessionProvider>
      <HeaderContent />
    </SessionProvider>
  );
}
