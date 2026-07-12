import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import { User, Building2, ArrowRightLeft, Landmark } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    { icon: User, title: 'Personal Remittances', description: 'Send money to family and friends with the best exchange rates and low fees. Track every transfer in real time.' },
    { icon: Building2, title: 'Business Payments', description: 'Pay suppliers, freelancers, and employees across borders. Bulk upload, multi-currency wallets, and integration options.' },
    { icon: ArrowRightLeft, title: 'Cross-Border Collections', description: 'Collect payments from clients in different countries, instantly converted to your preferred currency.' },
    { icon: Landmark, title: 'Future Financial Platform', description: 'We’re building APIs and infrastructure to power the next generation of African and Asian fintechs.' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Solutions for Everyone" subtitle="From personal remittances to enterprise payments, MB Send simplifies cross-border money movement." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((s, i) => <FeatureCard key={i} {...s} />)}
        </div>
      </div>
    </div>
  );
}