import Image from "next/image";

export default function FaqsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="flex flex-row items-center gap-12 justify-center">
        <Image
          src="/images/albums/album1/STW01008.jpg"
          alt="FAQs Hero"
          width={400}
          height={400}
          className="rounded-lg mb-8 object-cover"
        />
        <div>
          <h1 className="mb-4 text-4xl font-bold [font-family:var(--font-family-heading)]">
            Frequently Asked Questions
          </h1>
          <div className="max-w-2xl w-full text-left mx-auto">
            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-2">
                How do I book a session?
              </h2>
              <p>
                Simply contact us through our website or email, and we'll guide
                you through the booking process.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-2">
                What is included in your packages?
              </h2>
              <p>
                Each package includes a set number of hours, edited photos, and
                an online gallery. Premium packages offer albums and engagement
                shoots.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-2">
                How long does it take to receive our photos?
              </h2>
              <p>
                Typically, you will receive your edited photos within 2-4 weeks
                after your event.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-2">
                Can we request specific shots?
              </h2>
              <p>
                Absolutely! We encourage you to share your vision and any
                must-have shots before the event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
