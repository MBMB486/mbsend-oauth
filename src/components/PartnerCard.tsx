interface PartnerCardProps {
  name: string;
  description: string;
}

export default function PartnerCard({ name, description }: PartnerCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-semibold mb-4">
        {name.charAt(0)}
      </div>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}