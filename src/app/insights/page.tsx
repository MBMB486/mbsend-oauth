import SectionHeading from '@/components/SectionHeading';
import BlogCard from '@/components/BlogCard';

const posts = [
  {
    title: 'Why MB Send is not just a transfer app',
    excerpt:
      'The app is the front door. The real work is the infrastructure behind it: partners, compliance, payout connectivity and corridor execution.',
    date: 'Founder Note',
    slug: 'not-just-a-transfer-app',
  },
  {
    title: 'Why Portugal → Mozambique matters',
    excerpt:
      'A real corridor problem shaped MB Send’s first validation: migrant communities need simpler, more transparent ways to move money home.',
    date: 'Corridor Insight',
    slug: 'portugal-mozambique-corridor',
  },
  {
    title: 'Building for emerging-market payouts',
    excerpt:
      'Mobile money, local bank transfers, wallets and instant payment rails are changing how cross-border payments should be designed.',
    date: 'Market Insight',
    slug: 'emerging-market-payouts',
  },
];

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Insights"
          subtitle="Thoughts on cross-border payments, emerging-market corridors, financial infrastructure and responsible fintech execution."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <BlogCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Core thesis
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Payments infrastructure, not just another app
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send starts with a simple customer-facing experience, but the
            long-term value is the infrastructure behind it: partner
            connectivity, compliance-first workflows, local payout access and
            corridor-by-corridor execution.
          </p>
        </div>

        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            What we write about
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Corridor strategy
              </h3>
              <p className="text-sm text-gray-600">
                Why focused corridors matter more than launching everywhere at
                once.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Local payout rails
              </h3>
              <p className="text-sm text-gray-600">
                How mobile money, bank transfers, wallets and instant rails
                shape emerging-market payments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Responsible fintech
              </h3>
              <p className="text-sm text-gray-600">
                Why compliance, partner selection and operational discipline are
                part of the product from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}