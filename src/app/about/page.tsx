import SectionHeading from '@/components/SectionHeading';
import Stats from '@/components/Stats';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Story"
          subtitle="MB Send was born from a real corridor problem: people moving between Europe and emerging markets need simpler, more transparent and more reliable ways to move money home."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Why MB Send exists
              </h3>
              <p className="text-gray-600">
                MB Send started in Lisbon after seeing how difficult it can be
                for migrant communities to send money, support family and move
                value across borders using fragmented payment rails.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                What we learned
              </h3>
              <p className="text-gray-600">
                The first Portugal → Mozambique pilot showed that the problem is
                not only about building a transfer app. The real challenge is
                building the infrastructure behind it: compliant partners, local
                payout connectivity, verification, monitoring and corridor-level
                execution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Where we are going
              </h3>
              <p className="text-gray-600">
                MB Send is now preparing a partner-led, compliance-first launch,
                starting with focused corridors and building toward broader
                payment infrastructure for emerging markets.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
              Founder-led execution
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built from lived experience and technical execution
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              MB Send is founder-led and built from direct experience with
              Europe-to-Africa payment challenges. The early product, workflow
              and corridor thinking were shaped by hands-on testing, user
              conversations and real operational constraints.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The company is now focused on turning that validation into a
              regulated, partner-led infrastructure model that can scale
              responsibly corridor by corridor.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <Stats
            stats={[
              { value: 300, suffix: 'K+', label: 'Pilot volume validated' },
              { value: 2, suffix: '', label: 'Initial corridors' },
              { value: 100, suffix: '+', label: 'Early users reached manually' },
            ]}
          />
        </div>

        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Our principles
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What guides MB Send
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Transparency
              </h3>
              <p className="text-sm text-gray-600">
                Clear pricing, clear flows and a simple customer experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Responsibility
              </h3>
              <p className="text-sm text-gray-600">
                Compliance, verification and responsible corridor execution from
                the start.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Infrastructure
              </h3>
              <p className="text-sm text-gray-600">
                The app is the front door; the long-term value is the payment
                infrastructure behind it.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Inclusion
              </h3>
              <p className="text-sm text-gray-600">
                Build for corridors and communities often underserved by
                traditional financial systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}