import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CorridorCardProps {
  from: string;
  to: string;
  flagFrom?: string; // emoji ou código de país
  flagTo?: string;
  fee: string;
  speed: string;
}

export default function CorridorCard({ from, to, fee, speed, flagFrom = '🇵🇹', flagTo = '🇲🇿' }: CorridorCardProps) {
  return (
    <Link href="/corridors" className="block p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{flagFrom}</span>
          <ArrowRight className="w-4 h-4 text-gray-400" />
          <span className="text-2xl">{flagTo}</span>
        </div>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{speed}</span>
      </div>
      <h3 className="font-semibold text-gray-900">{from} → {to}</h3>
      <p className="text-sm text-gray-600 mt-1">From {fee} fee</p>
    </Link>
  );
}