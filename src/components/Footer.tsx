import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="/insights" className="hover:text-white transition">Insights</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/solutions" className="hover:text-white transition">Personal</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition">Business</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/technology" className="hover:text-white transition">Technology</Link></li>
            <li><Link href="/security" className="hover:text-white transition">Security</Link></li>
            <li><Link href="/partners" className="hover:text-white transition">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
            <li><Link href="/cookies" className="hover:text-white transition">Cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} MB Send. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/mb.send/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            <a href="https://www.linkedin.com/company/mb-send/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}