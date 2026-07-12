import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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

        {/* Links centrais */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="/solutions" className="hover:text-blue-600 transition">Solutions</Link>
          <Link href="/technology" className="hover:text-blue-600 transition">Technology</Link>
          <Link href="/security" className="hover:text-blue-600 transition">Security</Link>
          <Link href="/partners" className="hover:text-blue-600 transition">Partners</Link>
          <Link href="/investors" className="hover:text-blue-600 transition">Investors</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/insights" className="hover:text-blue-600 transition">Insights</Link>
        </div>

        {/* Botão Contact */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu (placeholder) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}