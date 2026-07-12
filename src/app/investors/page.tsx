import SectionHeading from '@/components/SectionHeading';
import { TrendingUp, MapPin, Calendar, Mail } from 'lucide-react';

export default function InvestorsPage() {
  const highlights = [
    { icon: TrendingUp, title: 'Market Opportunity', desc: '$800B+ remittance flows to emerging markets annually, with Africa and Asia leading growth.' },
    { icon: MapPin, title: 'Strategic Corridors', desc: 'Focused on high-growth corridors: Portugal→Mozambique, UK→India, UAE→Africa.' },
    { icon: Calendar, title: 'Roadmap', desc: 'Q4 2026: Launch API platform. Q2 2027: Expansion to 5 new African countries.' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Investor Relations" subtitle="Building the infrastructure for cross-border payments in emerging markets." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((h, i) => (
            <div key={i} className="text-center p-6">
              <h.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{h.title}</h3>
              <p className="text-gray-600">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">For investor inquiries, please email our team.</p>
          <a href="mailto:investors@mbsend.com" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">
            <Mail className="w-5 h-5" /> investors@mbsend.com
          </a>
        </div>
      </div>
    </div>
  );
}