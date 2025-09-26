import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="flex flex-row items-center justify-center gap-12">
        <Image
          src="/images/albums/album1/STW01004.jpg"
          alt="Services Hero"
          width={400}
          height={400}
          className="rounded-lg mb-8 object-cover"
        />
        <div>
          <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
          <p className="mb-6 text-lg text-gray-700 max-w-2xl">
            We offer a variety of professional photography services to capture
            every special moment, tailored to your unique needs.
          </p>
          <ul className="mb-8 list-disc pl-6 text-left text-lg max-w-xl">
            <li>Wedding Photography</li>
            <li>Engagement Shoots</li>
            <li>Pre-wedding & Couple Portraits</li>
            <li>Event Coverage</li>
            <li>Custom Albums & Prints</li>
          </ul>
          <div>
            <a href="/contact" className="btn-primary">
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
