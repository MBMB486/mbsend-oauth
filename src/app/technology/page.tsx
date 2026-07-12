import SectionHeading from '@/components/SectionHeading';
import { Server, Cpu, Lock, Globe } from 'lucide-react';

const tech = [
  { icon: Server, title: 'Cloud-Native Infrastructure', desc: 'Built on AWS with auto-scaling, multi-region deployment for high availability.' },
  { icon: Cpu, title: 'Real-time Processing Engine', desc: 'Proprietary routing ensures the fastest, most cost-effective path for every transaction.' },
  { icon: Lock, title: 'Security by Design', desc: 'End-to-end encryption, hardware security modules, and continuous penetration testing.' },
  { icon: Globe, title: 'API-First Architecture', desc: 'Designed for seamless integration with banks, mobile money providers, and fintechs.' },
];

export default function TechnologyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built for Scale & Security" subtitle="Our technology stack is engineered to process millions of transactions while maintaining the highest standards of reliability." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tech.map((t, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <t.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{t.title}</h3>
                <p className="text-gray-600 mt-2">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}