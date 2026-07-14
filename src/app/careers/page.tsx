import SectionHeading from '@/components/SectionHeading';

export default function CareersPage() {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Build with MB Send"
        subtitle="We are not actively hiring yet, but we are always open to meeting exceptional people who care about fintech infrastructure, emerging markets and financial access."
      />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            What we are building
          </h3>

          <p className="text-gray-600">
            MB Send is building cross-border payments infrastructure connecting
            Europe with emerging markets. We are starting with focused corridors
            and preparing a partner-led, compliance-first launch.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            Who we want to meet
          </h3>

          <p className="text-gray-600">
            We are interested in people with experience in payments, fintech,
            product, engineering, compliance, operations, partnerships and
            emerging-market corridors.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
        <h3 className="text-xl font-bold mb-3 text-gray-900">
          Future opportunities
        </h3>

        <p className="text-gray-600 mb-4">
          We are still early, so there may not be formal roles open today.
          However, if you believe you can contribute to MB Send’s mission, we
          would be happy to hear from you.
        </p>

        <p className="text-gray-600">
          Send a short introduction, your profile/CV, and the area where you
          believe you can contribute to{' '}
          <a
            href="mailto:geralinfo@mbsend.com"
            className="text-blue-600 underline"
          >
            geralinfo@mbsend.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}