import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center md:text-left md:flex md:items-center md:gap-16">
      <div className="md:w-1/2 space-y-6">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          Fintech for Emerging Markets
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Fast, secure cross‑border payments for everyone
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          MB Send connects individuals and businesses to key corridors with transparent fees and real‑time exchange rates. Download the app to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-center transition">
            Download App
          </Link>
          <Link href="/solutions" className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-full text-center transition">
            View Solutions
          </Link>
        </div>
      </div>
      <div className="mt-12 md:mt-0 md:w-1/2">
        {/* Placeholder para imagem/ilustração */}
        <div className="bg-gray-100 rounded-3xl h-80 w-full flex items-center justify-center text-gray-400">
          App Mockup or Illustration
        </div>
      </div>
    </section>
  );
}