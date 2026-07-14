import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import { User, Building2, ArrowRightLeft, Landmark } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: User,
      title: 'Consumer Transfers',
      description:
        'Initial focus: a simple fiat-in / fiat-out experience for migrant communities sending money from Europe to emerging markets, starting with focused corridors such as Portugal → Mozambique.',
    },
    {
      icon: ArrowRightLeft,
      title: 'Local Payout Connectivity',
      description:
        'Designed to connect European pay-ins with local payout options such as bank transfers, mobile money, wallets and instant payment rails through approved partners.',
    },
    {
      icon: Building2,
      title: 'Business Payment Use Cases',
      description:
        'Roadmap: support partner-led business payments, supplier payouts, contractor payments and other corridor-specific business flows as the platform matures.',
    },
    {
      icon: Landmark,
      title: 'Infrastructure Roadmap',
      description:
        'Long-term roadmap: build toward API-led payment infrastructure for fintechs, platforms and ecosystem partners after corridor execution is proven.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Solutions built around real corridor needs"
          subtitle="Starting with consumer transfers, expanding responsibly toward business payments, partner integrations and infrastructure use cases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <FeatureCard key={i} {...s} />
          ))}
        </div>

        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Payout roadmap
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Multiple payout methods, one simple experience
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send is being designed to support different payout methods
            depending on each corridor, market and approved partner. The goal is
            to route payments through suitable local rails while keeping the
            customer experience simple, transparent and compliant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Consumer payouts
              </h3>
              <p className="text-sm text-gray-600">
                Mobile money, local wallets, bank transfers and instant local
                rails where available through approved partners.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Business payouts
              </h3>
              <p className="text-sm text-gray-600">
                Supplier payments, payroll-style flows, contractor payouts and
                merchant settlement use cases as the platform matures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Partner/API payouts
              </h3>
              <p className="text-sm text-gray-600">
                Future API-based payout connectivity for fintechs, platforms and
                ecosystem partners after corridor execution is proven.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Current execution focus
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Partner-led launch, compliance-first approach
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send is currently preparing a regulated, partner-led launch. The
            first stage focuses on validating corridor execution through
            approved partners while building the foundation for secure,
            transparent and compliant cross-border payments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Portugal → Mozambique
              </h3>
              <p className="text-sm text-gray-600">
                Validated corridor being prepared for a compliant relaunch with
                stronger local payout connectivity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Europe → India
              </h3>
              <p className="text-sm text-gray-600">
                Strategic corridor under preparation through regulated partners
                and local payout rails such as IMPS/UPI where applicable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Africa payout layer
              </h3>
              <p className="text-sm text-gray-600">
                Evaluating partners for mobile money, local bank payouts, FX and
                broader pan-African coverage.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            More than a transfer app
          </h2>

          <p className="text-gray-600 text-lg">
            MB Send starts with a customer-facing transfer experience, but the
            long-term vision is infrastructure: partner connectivity, compliant
            workflows, payout routing and scalable corridor logic.
          </p>
        </div>
      </div>
    </div>
  );
}