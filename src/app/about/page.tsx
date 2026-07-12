import SectionHeading from '@/components/SectionHeading';
import Stats from '@/components/Stats';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Story" subtitle="MB Send was founded to make cross-border money transfers fast, transparent, and accessible for everyone, especially in underserved corridors." />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
            <p className="text-gray-600">To provide a seamless financial bridge between people and businesses across the globe, starting with the corridors that matter most to diaspora communities and SMEs.</p>
            <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
            <p className="text-gray-600">To become the leading digital payment infrastructure for emerging markets, powering inclusive economic growth.</p>
            <h3 className="text-2xl font-bold text-gray-900">Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Transparency in fees and rates</li>
              <li>Security without compromise</li>
              <li>Customer obsession</li>
              <li>Innovation for impact</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center text-gray-400">
            Team Image / Illustration
          </div>
        </div>
        
        <div className="mt-20">
          <Stats stats={[
            { value: 2022, suffix: '', label: 'Founded' },
            { value: 100, suffix: '+', label: 'Team Members' },
            { value: 3, suffix: '', label: 'Offices Worldwide' },
          ]} />
        </div>
      </div>
    </div>
  );
}