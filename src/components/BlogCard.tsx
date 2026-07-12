import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <Link href={`/insights/${slug}`} className="group block p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition">
      <p className="text-sm text-blue-600 font-medium">{date}</p>
      <h3 className="text-xl font-semibold text-gray-900 mt-2 group-hover:text-blue-600 transition">{title}</h3>
      <p className="mt-2 text-gray-600">{excerpt}</p>
    </Link>
  );
}