import SectionHeading from '@/components/SectionHeading';
import { ShieldCheck, Fingerprint, FileText, Eye } from 'lucide-react';

export default function SecurityPage() {
  const items = [
    { icon: ShieldCheck, title: 'KYC & AML Compliance', desc: 'Strict identity verification aligned with FATF and local regulations in all operating countries.' },
    { icon: Fingerprint, title: 'Data Protection & Privacy', desc: 'GDPR-compliant, encrypted storage, and strict access controls.' },
    { icon: FileText, title: 'Regulatory Oversight', desc: 'Licensed and authorized in key markets. Transparent reporting and external audits.' },
    { icon: Eye, title: 'Continuous Monitoring', desc: 'Real-time fraud detection and transaction monitoring powered by machine learning.' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Security & Compliance" subtitle="Trust is our foundation. We adhere to the highest industry standards to protect your money and data." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}