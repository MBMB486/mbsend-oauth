import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import PartnerCard from '@/components/PartnerCard';

const partners = [
  {
    name: 'Regulated Infrastructure Partners',
    description:
      'Payment institutions, EMIs, banks and licensed providers that can support compliant pay-ins, accounts, local rails and cross-border payment flows.',
  },
  {
    name: 'Local Payout Partners',
    description:
      'Providers with access to local bank transfers, mobile money, wallets and instant payment rails in priority emerging-market corridors.',
  },
  {
    name: 'FX & Settlement Partners',
    description:
      'Infrastructure providers that can support transparent FX, liquidity access, settlement workflows and corridor-specific pricing.',
  },
  {
    name: 'Compliance & Risk Partners',
    description:
      'KYC, KYB, AML, sanctions screening, transaction monitoring and auditability partners that support responsible financial operations.',
  },
];

export default function PartnersPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Partner-led infrastructure"
          subtitle="MB Send is preparing a partner-led model with approved infrastructure providers, local payout partners and compliance-first workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, i) => (
            <PartnerCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Who we want to work with
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Building corridor-by-corridor with the right partners
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send is currently evaluating partners that can help connect
            European pay-ins to local payout options across Africa, South Asia
            and other emerging-market corridors. The focus is on compliant
            infrastructure, reliable local rails, transparent pricing and strong
            operational support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Europe-side infrastructure
              </h3>
              <p className="text-sm text-gray-600">
                Pay-in rails, accounts, EMI/PI infrastructure, SEPA/SEPA Instant,
                cards and regulated payment services where applicable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Emerging-market payouts
              </h3>
              <p className="text-sm text-gray-600">
                Local bank payouts, mobile money, wallets, instant rails and
                corridor-specific payout coverage through approved partners.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Compliance & operations
              </h3>
              <p className="text-sm text-gray-600">
                KYC/KYB, AML, transaction monitoring, reporting, auditability and
                responsible operating workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Current partner focus
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Priority corridors and capabilities
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our current priority is to evaluate partners for Portugal →
            Mozambique, Europe → India and broader Africa payout connectivity.
            We are especially interested in partners with strong local coverage,
            clear regulatory posture, API readiness and realistic commercial
            terms for an early-stage fintech preparing a regulated launch.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Interested in partnering with MB Send?
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact MB Send
          </Link>
        </div>
      </div>
    </div>
  );
}