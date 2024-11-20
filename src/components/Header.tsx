import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Modern Blog</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-purple-200 transition">Home</a>
            <a href="/about" className="hover:text-purple-200 transition">About</a>
            <a href="/contact" className="hover:text-purple-200 transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}