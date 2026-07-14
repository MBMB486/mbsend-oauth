import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import Stats from '@/components/Stats';
import FeatureCard from '@/components/FeatureCard';
import DownloadApp from '@/components/DownloadApp';
import { Shield, Globe, Zap, Users } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: 'Europe-to-Emerging-Market Corridors',
      description:
        'Designed for corridors where migrant communities need faster, simpler and more transparent ways to move money home.',
    },
    {
      icon: Zap,
      title: 'Partner-Led Local Payouts',
      description:
        'Built to connect European pay-ins with local payout options such as bank transfers, wallets and mobile money through approved partners.',
    },
    {
      icon: Shield,
      title: 'Compliance-First Approach',
      description:
        'Verification, monitoring, auditability and responsible corridor execution are considered from the earliest stages.',
    },
    {
      icon: Users,
      title: 'B2C First, Infrastructure Next',
      description:
        'Starting with consumer transfers, then expanding responsibly toward business payments, partner integrations and API-led use cases.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center md:text-left md:flex md:items-center md:gap-16">
        <div className="md:w-1/2 space-y-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Fintech infrastructure for emerging-market corridors
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Building the payment layer between Europe and emerging markets
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            MB Send is developing cross-border payments infrastructure connecting
            European pay-ins to local payouts in high-growth emerging markets,
            starting with Africa and South Asia.
          </p>

          <p className="text-sm text-gray-500 max-w-xl">
            We are currently preparing a partner-led launch around approved
            infrastructure, compliance workflows and local payout connectivity.
            The customer experience is designed to remain simple, transparent
            and fiat-in / fiat-out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-center transition"
            >
              Contact MB Send
            </Link>

            <Link
              href="/solutions"
              className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-full text-center transition"
            >
              Explore the Model
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2">
          <img
            src="/images/app-mockup.svg"
            alt="MB Send app interface preview"
            className="rounded-3xl w-full h-auto max-h-96 object-contain"
          />
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 bg-gray-50">
        <Stats
          stats={[
            { value: 300, suffix: 'K+', label: 'Pilot volume validated' },
            { value: 2, suffix: '', label: 'Initial corridors' },
            { value: 100, suffix: '+', label: 'Early users reached manually' },
          ]}
        />
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What MB Send is building"
            subtitle="A compliance-first payment infrastructure model for underserved cross-border corridors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Current focus"
            subtitle="Preparing the next stage of execution with partner-led infrastructure, legal guidance and corridor-specific payout connectivity."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Portugal → Mozambique
              </h3>
              <p className="text-gray-600 text-sm">
                Validated corridor being prepared for a compliant relaunch with
                stronger local payout connectivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Europe → India
              </h3>
              <p className="text-gray-600 text-sm">
                Strategic corridor under preparation through approved partners
                and local payout rails such as IMPS/UPI where applicable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Africa payout layer
              </h3>
              <p className="text-gray-600 text-sm">
                Evaluating partners for mobile money, local bank payouts, FX and
                broader pan-African coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* App Download */}
         <DownloadApp />


      {/* CTA Final */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner with MB Send
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            We are speaking with infrastructure providers, payout partners,
            fintech lawyers and investors as we prepare the next stage of MB Send.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition"
          >
            Contact the Founder
          </Link>
        </div>
      </section>
    </>
  );
}