import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="flex flex-row items-center justify-center gap-12">
        <Image
          src="/images/albums/album1/STW01082.jpg"
          alt="About Us Hero"
          width={400}
          height={400}
          className="rounded-lg mb-8 object-cover"
        />
        <div>
          <h1 className="mb-4 text-4xl font-bold [font-family:var(--font-family-heading)]">
            About Us
          </h1>
          <p className="mb-6 text-lg text-gray-700 max-w-2xl">
            Capture the essence of your special day with stunning photography
            that tells your unique love story. With an artistic eye and
            attention to detail, we create breathtaking images that you'll
            cherish forever.
          </p>
          <p className="mb-6 text-lg text-gray-700 max-w-2xl">
            Our mission is to encapsulate the love, joy, and emotions in
            stunning images that will be cherished for a lifetime. With a focus
            on personalization and artistry, each photograph tells a story that
            is distinctly yours.
          </p>
          <ul className="mb-8 list-disc pl-4 text-left text-lg max-w-xl">
            <li>Tailored photography packages to fit your needs</li>
            <li>High-quality images that reflect your style</li>
            <li>Professional guidance throughout your experience</li>
            <li>Passionate dedication to capturing every moment</li>
          </ul>
          <div>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
