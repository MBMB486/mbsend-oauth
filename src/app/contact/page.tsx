import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { Mail, MessageCircle, Building } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact Us" subtitle="We're here to help. Choose the right channel below." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Customer Support */}
          <div className="text-center p-8 border rounded-xl">
            <MessageCircle className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
            <a href="mailto:support.ia@mbsend.com" className="text-blue-600 hover:underline text-sm">support.ia@mbsend.com</a>
          </div>
          
          {/* Partnerships */}
          <div className="text-center p-8 border rounded-xl">
            <Building className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Partnerships</h3>
            <a href="mailto:geralinfo@mbsend.com" className="text-blue-600 hover:underline text-sm">geralinfo@mbsend.com</a>
          </div>
          
          {/* Media & Investors */}
          <div className="text-center p-8 border rounded-xl">
            <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Media & Investors</h3>
            <a href="mailto:geralinfo@mbsend.com" className="text-blue-600 hover:underline text-sm">geralinfo@mbsend.com</a>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}