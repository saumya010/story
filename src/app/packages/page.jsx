import Image from "next/image";

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="flex flex-col items-center text-center">
        <Image
          src="/images/albums/album1/STW01051.jpg"
          alt="Packages Hero"
          width={400}
          height={400}
          className="rounded-lg mb-8 object-cover"
        />
        <h1 className="mb-4 text-4xl font-bold [font-family:var(--font-family-heading)]">Packages</h1>
        <p className="mb-6 text-lg text-gray-700 max-w-2xl">
          Choose from our range of thoughtfully crafted photography packages designed to suit every couple's unique needs and preferences.
        </p>
        <ul className="mb-8 list-disc pl-6 text-left text-lg max-w-xl mx-auto">
          <li><span className="font-semibold">Classic Package:</span> 4 hours of coverage, 100+ edited photos, online gallery.</li>
          <li><span className="font-semibold">Premium Package:</span> 8 hours of coverage, 250+ edited photos, photo album, online gallery.</li>
          <li><span className="font-semibold">Luxury Package:</span> Full day coverage, unlimited photos, custom album, engagement shoot, online gallery.</li>
        </ul>
        <div className="flex justify-center">
          <a href="/contact" className="rounded bg-[var(--primary-button-bg-color)] px-6 py-3 text-lg font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]">Book a Package</a>
        </div>
      </section>
    </div>
  );
} 