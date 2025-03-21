// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">SimpleCloud</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/login">
            <span className="text-gray-600 hover:text-gray-800">Login</span>
          </Link>
          <Link href="/dashboard">
            <span className="text-gray-600 hover:text-gray-800">Dashboard</span>
          </Link>
          <Link href="/features">
            <span className="text-gray-600 hover:text-gray-800">Features</span>
          </Link>
          <Link href="/pricing">
            <span className="text-gray-600 hover:text-gray-800">Pricing</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
