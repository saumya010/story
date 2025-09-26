import Image from "next/image";

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="flex flex-row items-center justify-center gap-12">
        <Image
          src="/images/albums/album1/STW01051.jpg"
          alt="Packages Hero"
          width={400}
          height={400}
          className="rounded-lg mb-8 object-cover"
        />
        <div>
          <h1 className="mb-4 text-4xl font-bold [font-family:var(--font-family-heading)]">
            Packages
          </h1>
          <p className="mb-6 text-lg text-gray-700 max-w-2xl">
            Choose from our range of thoughtfully crafted photography packages
            designed to suit every couple's unique needs and preferences.
          </p>
          <ul className="mb-8 list-disc pl-6 text-left text-lg max-w-xl">
            <li>
              <span className="font-semibold">Classic Package:</span> 4 hours of
              coverage, 100+ edited photos, online gallery.
            </li>
            <li>
              <span className="font-semibold">Premium Package:</span> 8 hours of
              coverage, 250+ edited photos, photo album, online gallery.
            </li>
            <li>
              <span className="font-semibold">Luxury Package:</span> Full day
              coverage, unlimited photos, custom album, engagement shoot, online
              gallery.
            </li>
          </ul>
          <div>
            <a href="/contact" className="btn-primary">
              Book a Package
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
