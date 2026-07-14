import SectionHeading from '@/components/SectionHeading';
import { ShieldCheck, Fingerprint, FileText, Eye } from 'lucide-react';

export default function SecurityPage() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Compliance-First Design',
      desc:
        'MB Send is being designed with KYC, AML, sanctions screening and responsible transaction controls as part of the core operating model.',
    },
    {
      icon: Fingerprint,
      title: 'Data Protection & Privacy',
      desc:
        'The platform roadmap is built around secure data handling, controlled access, encryption and privacy-by-design principles.',
    },
    {
      icon: FileText,
      title: 'Partner-Led Regulatory Path',
      desc:
        'MB Send is preparing a partner-led launch through approved infrastructure providers while evaluating the appropriate licensing path for future operations.',
    },
    {
      icon: Eye,
      title: 'Monitoring & Auditability',
      desc:
        'Transaction visibility, audit trails, risk flags and reporting workflows are being considered from the earliest stages of the product roadmap.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Security & Compliance"
          subtitle="Trust is essential in cross-border payments. MB Send is being built with a compliance-first approach to protect users, partners and the integrity of each corridor."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm"
            >
              <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
            Our approach
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Building responsibly before scaling
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            MB Send is preparing its next stage through approved partners, legal
            guidance and corridor-specific compliance planning. The goal is to
            launch responsibly, validate operations under the right structure and
            strengthen the foundation before expanding into additional markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                User verification
              </h3>
              <p className="text-sm text-gray-600">
                Identity checks and onboarding controls designed to support
                responsible access to cross-border payment services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Transaction controls
              </h3>
              <p className="text-sm text-gray-600">
                Monitoring, limits, risk indicators and review workflows designed
                to support safer corridor operations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Partner accountability
              </h3>
              <p className="text-sm text-gray-600">
                Working toward approved partner relationships with clear roles,
                responsibilities, reporting and compliance expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Compliance is part of the product
          </h2>

          <p className="text-gray-600 text-lg">
            In cross-border payments, trust cannot be added later. MB Send is
            building its product, partner strategy and operating model around
            compliance, transparency and responsible corridor execution from the
            start.
          </p>
        </div>
      </div>
    </div>
  );
}