import SectionHeading from '@/components/SectionHeading';
import { TrendingUp, MapPin, Calendar, Mail } from 'lucide-react';

export default function InvestorsPage() {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Large cross-border opportunity',
      desc:
        'Emerging-market corridors remain underserved by traditional remittance and payment infrastructure, especially where local payout rails are fragmented.',
    },
    {
      icon: MapPin,
      title: 'Corridor-first execution',
      desc:
        'MB Send is focused on validating and scaling corridor-by-corridor, starting with Portugal → Mozambique and preparing Europe → India through approved partners.',
    },
    {
      icon: Calendar,
      title: 'Disciplined roadmap',
      desc:
        'The plan is to relaunch through partner-led infrastructure, prove corridor economics, strengthen compliance foundations and expand responsibly.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Investor Relations"
          subtitle="MB Send is building cross-border payments infrastructure for underserved emerging-market corridors."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((h, i) => (
            <div key={i} className="text-center p-6">
              <h.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {h.title}
              </h3>

              <p className="text-gray-600">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10 mb-12">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Current stage
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            From validated pilot to regulated relaunch
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send has validated demand through an early Portugal → Mozambique
            pilot and is now preparing the next execution stage: partner-led
            infrastructure, compliance foundations, corridor relaunch and
            investor-ready operating discipline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Pilot validation
              </h3>
              <p className="text-sm text-gray-600">
                Early real-world corridor testing with manual operations and
                user demand validation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Partner-led launch
              </h3>
              <p className="text-sm text-gray-600">
                Preparing to work through approved infrastructure and payout
                partners before pursuing broader licensing milestones.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Infrastructure roadmap
              </h3>
              <p className="text-sm text-gray-600">
                B2C first to prove corridor economics, with a longer-term path
                toward business, partner and API-led use cases.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 mb-12">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Investor materials
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Materials available for qualified investors
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send maintains investor materials covering the company overview,
            traction story, corridor strategy, financial model, use of funds,
            regulatory thinking and execution roadmap. Access is shared
            selectively with relevant investors and strategic partners.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Investor inquiries
          </h2>

          <p className="text-gray-600 mb-6">
            For investor inquiries or access to materials, please contact the
            founder.
          </p>

          <a
            href="mailto:jonassembaki@mbsend.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
          >
            <Mail className="w-5 h-5" />
            geralinfo@mbsend.com
          </a>
        </div>
      </div>
    </div>
  );
}