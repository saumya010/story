import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="flex flex-col items-center text-center">
        <Image
          src="/images/albums/album1/STW01004.jpg"
          alt="Services Hero"
          width={400}
          height={400}
          className="rounded-lg mb-8 object-cover"
        />
        <h1 className="mb-4 text-4xl font-bold [font-family:var(--font-family-heading)]">Our Services</h1>
        <p className="mb-6 text-lg text-gray-700 max-w-2xl">
          We offer a variety of professional photography services to capture every special moment, tailored to your unique needs.
        </p>
        <ul className="mb-8 list-disc pl-6 text-left text-lg max-w-xl mx-auto">
          <li>Wedding Photography</li>
          <li>Engagement Shoots</li>
          <li>Pre-wedding & Couple Portraits</li>
          <li>Event Coverage</li>
          <li>Custom Albums & Prints</li>
        </ul>
        <div className="flex justify-center">
          <a href="/contact" className="rounded bg-[var(--primary-button-bg-color)] px-6 py-3 text-lg font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]">Enquire Now</a>
        </div>
      </section>
    </div>
  );
} 