import SectionHeading from '@/components/SectionHeading';
import PartnerCard from '@/components/PartnerCard';

const partners = [
  { name: 'Banco ABC', description: 'Local payout partner in Mozambique' },
  { name: 'M-Pesa', description: 'Mobile money integration for East Africa' },
  { name: 'Paystack', description: 'Collection partner in Nigeria' },
  { name: 'Wise Platform', description: 'Global FX and infrastructure' },
];

export default function PartnersPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Strategic Partners" subtitle="We work with leading banks, mobile money operators, and fintechs to expand our reach." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, i) => <PartnerCard key={i} {...p} />)}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Interested in partnering with MB Send?</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">Become a Partner</a>
        </div>
      </div>
    </div>
  );
}