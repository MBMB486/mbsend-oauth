import SectionHeading from '@/components/SectionHeading';
import BlogCard from '@/components/BlogCard';

const posts = [
  { title: 'The Future of Cross-Border Payments in Africa', excerpt: 'How mobile money and stablecoins are reshaping remittances...', date: 'Jul 1, 2026', slug: 'future-africa-payments' },
  { title: 'Why the Portugal-Mozambique Corridor is Booming', excerpt: 'A deep dive into the diaspora trends and economic ties...', date: 'Jun 15, 2026', slug: 'portugal-mozambique' },
  { title: 'MB Send Platform Update: Multi-Currency Wallets', excerpt: 'Introducing our latest feature for business users...', date: 'May 20, 2026', slug: 'platform-update' },
];

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Insights & Blog" subtitle="Thoughts on fintech, emerging markets, and financial inclusion." />
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => <BlogCard key={i} {...p} />)}
        </div>
      </div>
    </div>
  );
}