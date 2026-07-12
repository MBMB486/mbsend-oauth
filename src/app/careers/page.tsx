import SectionHeading from '@/components/SectionHeading';

export default function CareersPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Join Our Team" subtitle="We're not actively hiring, but we're always looking for exceptional people." />
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-blue-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Our Culture</h3>
          <p className="text-gray-600">We're builders who care about financial inclusion, transparency, and moving fast. Remote-first, diverse, and purpose-driven.</p>
        </div>
        <div className="bg-blue-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Future Opportunities</h3>
          <p className="text-gray-600">Send your CV to <a href="mailto:careers@mbsend.com" className="text-blue-600 underline">careers@mbsend.com</a> and tell us why you'd like to be part of our mission.</p>
        </div>
      </div>
    </div>
  );
}