import { Smartphone, Apple, PlayCircle } from 'lucide-react';

export default function DownloadApp() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Smartphone className="w-16 h-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Download the MB Send App</h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
          Send money, track transfers, and manage your account from your smartphone. Available on iOS and Android.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition">
            <Apple className="w-5 h-5" /> App Store
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition">
            <PlayCircle className="w-5 h-5" /> Google Play
          </a>
        </div>
      </div>
    </section>
  );
}