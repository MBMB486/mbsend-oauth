import SectionHeading from './SectionHeading';

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title={title} centered={false} />
      <div className="prose prose-gray max-w-none">{children}</div>
    </div>
  );
}