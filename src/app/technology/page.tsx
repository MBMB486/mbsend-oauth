import SectionHeading from '@/components/SectionHeading';
import {
  Server,
  Cpu,
  Lock,
  Globe,
  Layers,
  ShieldCheck,
  BarChart3,
  Workflow,
} from 'lucide-react';

const tech = [
  {
    icon: Globe,
    title: 'API-Ready Architecture',
    desc:
      'MB Send is being designed to connect the customer experience with regulated partners, payout providers and future business integrations.',
  },
  {
    icon: Workflow,
    title: 'Payment Orchestration',
    desc:
      'The platform is being built to support pay-ins, compliance checks, partner routing and local payouts through a controlled operating layer.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-First Design',
    desc:
      'KYC, AML, transaction monitoring, risk controls and auditability are being considered from the earliest stages of the product roadmap.',
  },
  {
    icon: BarChart3,
    title: 'Operational Visibility',
    desc:
      'Designed to support transaction visibility, reporting workflows and corridor-level monitoring as the platform scales.',
  },
  {
    icon: Server,
    title: 'Cloud-Ready Infrastructure',
    desc:
      'The technical roadmap is designed for secure cloud deployment, controlled access, observability and reliable operations as volumes grow.',
  },
  {
    icon: Lock,
    title: 'Security by Design',
    desc:
      'The product roadmap includes secure authentication, data protection, encryption, role-based access and stronger security reviews before production launch.',
  },
  {
    icon: Cpu,
    title: 'Corridor Logic',
    desc:
      'MB Send is being built around corridor-specific requirements, including payout availability, partner routing, compliance rules and market-by-market execution.',
  },
  {
    icon: Layers,
    title: 'B2C First, Infrastructure Next',
    desc:
      'The first user experience is consumer-facing, while the long-term roadmap is built toward business, partner and API-led payment use cases.',
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technology built for regulated payment corridors"
          subtitle="MB Send is building a secure, compliance-first operating layer for cross-border payments between Europe and emerging markets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tech.map((t, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              <t.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t.title}
                </h3>
                <p className="text-gray-600 mt-2">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Payment flow
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Simple experience, structured infrastructure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
            {[
              'Customer request',
              'Verification',
              'Partner routing',
              'Local rail',
              'Recipient payout',
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-blue-100 text-center"
              >
                <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold text-gray-900">{step}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mt-8">
            The customer sees a simple transfer experience. Behind the scenes,
            MB Send is building the infrastructure needed to support regulated
            partner connectivity, compliance workflows, payout routing and
            corridor-level execution.
          </p>
        </div>

        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Infrastructure roadmap
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            From corridor validation to scalable rails
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send starts by validating real corridors and user needs. As the
            platform matures, the same foundation can support additional payout
            methods, business payment flows, partner integrations and API-led
            infrastructure use cases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Corridor-first execution
              </h3>
              <p className="text-sm text-gray-600">
                Start with focused corridors, prove demand and operational
                readiness, then expand responsibly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Partner-led connectivity
              </h3>
              <p className="text-sm text-gray-600">
                Integrate with regulated infrastructure and local payout
                partners where available and compliant.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                API-led expansion
              </h3>
              <p className="text-sm text-gray-600">
                Build toward future partner, business and platform use cases
                once corridor execution is proven.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            More than a transfer app
          </h2>

          <p className="text-gray-600 text-lg">
            MB Send starts with a customer-facing experience, but the long-term
            vision is infrastructure: partner connectivity, compliance-first
            workflows, payout orchestration and scalable corridor logic.
          </p>
        </div>
      </div>
    </div>
  );
}