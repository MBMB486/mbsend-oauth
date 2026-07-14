'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="MB Send"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="/solutions" className="hover:text-blue-600 transition">Solutions</Link>
          <Link href="/technology" className="hover:text-blue-600 transition">Technology</Link>
          <Link href="/security" className="hover:text-blue-600 transition">Security</Link>
          <Link href="/partners" className="hover:text-blue-600 transition">Partners</Link>
          <Link href="/investors" className="hover:text-blue-600 transition">Investors</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/insights" className="hover:text-blue-600 transition">Insights</Link>
        </div>

        {/* Botão Contact (desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Ícone hamburguer (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Abrir menu"
        >
          {isOpen ? (
            // Ícone X (fechar)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone hamburguer
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Painel do menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <Link
            href="/solutions"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={closeMenu}
          >
            Solutions
          </Link>
          <Link
            href="/technology"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={closeMenu}
          >
            Technology
          </Link>
          <Link
            href="/security"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={closeMenu}
          >
            Security
          </Link>
          <Link
            href="/partners"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={closeMenu}
          >
            Partners
          </Link>
          <Link
            href="/investors"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={closeMenu}
          >
            Investors
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/insights"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={closeMenu}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="block w-full text-center bg-blue-600 text-white font-semibold py-2 rounded-full mt-2"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}