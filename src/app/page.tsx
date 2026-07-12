import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import Stats from '@/components/Stats';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import DownloadApp from '@/components/DownloadApp';
import { Shield, Globe, Zap, Users } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: Globe, title: 'Multi-Corridor Coverage', description: 'Send to 20+ countries across Africa, Asia, and Europe with local payout options.' },
    { icon: Zap, title: 'Instant Settlement', description: 'Over 80% of transfers are delivered in under 3 minutes with real-time tracking.' },
    { icon: Shield, title: 'Bank-Grade Security', description: 'KYC, AML, and end-to-end encryption ensure your money stays protected.' },
    { icon: Users, title: 'For Individuals & Businesses', description: 'Personal remittances or bulk business payments — one platform, zero complexity.' },
  ];

  return (
    <>
      {/* Hero Section incorporada (não depende de ficheiro externo) */}
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
              Contact
            </Link>
            <Link href="/solutions" className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-full text-center transition">
              View Solutions
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-1/2">
          <img
            src="/images/app-mockup.svg"
            alt="MB Send App"
            className="rounded-3xl w-full h-auto max-h-96 object-contain"
          />
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 bg-gray-50">
        <Stats stats={[
          { value: 500000, suffix: '+', label: 'Active Users' },
          { value: 20, suffix: '+', label: 'Supported Countries' },
          { value: 150, suffix: 'M+', label: 'Processed Volume (USD)' },
        ]} />
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why MB Send?" subtitle="Built for speed, security, and seamless cross-border payments." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Trusted by Thousands" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard quote="MB Send cut our payroll processing time from 5 days to minutes. It's a game-changer for our operations in Mozambique." name="Carla M." role="CFO" company="TechMaputo" />
            <TestimonialCard quote="Finally a fintech that understands the Africa corridor. Transparent rates, no hidden fees, and always fast." name="Ravi K." role="Diaspora User" company="London" />
          </div>
        </div>
      </section>

      {/* App Download */}
      <DownloadApp />

      {/* CTA Final */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to experience modern money transfer?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands who trust MB Send for their cross-border payments.</p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition">Get Started</a>
        </div>
      </section>
    </>
  );
}