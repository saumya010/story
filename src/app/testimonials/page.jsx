import Image from "next/image";

const testimonials = [
  {
    name: "Emily Davis",
    img: "/images/albums/album1/STW00997.jpg",
    review: "The artistic vision transformed our engagement and wedding into a breathtaking collection of memories. The outcome exceeded our expectations!",
  },
  {
    name: "David Green",
    img: "/images/albums/album1/STW00989.jpg",
    review: "From the initial concept to the final moments, the photographer expertly captured each instance of our special day with creativity and professionalism, bringing our dream wedding to life.",
  },
  {
    name: "Laura Williams",
    img: "/images/albums/album1/STW00969.jpg",
    review: "The meticulous attention to detail and the outstanding quality of the photographs created an experience I will cherish forever.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="flex flex-col items-center text-center">
        <Image
          src="/images/albums/album1/STW00941.jpg"
          alt="Testimonials Hero"
          width={400}
          height={400}
          className="rounded-lg mb-8 object-cover"
        />
        <h1 className="mb-8 text-4xl font-bold [font-family:var(--font-family-heading)]">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <Image
                src={t.img}
                alt={t.name}
                width={100}
                height={100}
                className="rounded-full mb-4 object-cover"
              />
              <div className="font-semibold text-lg mb-2">{t.name}</div>
              <div className="text-gray-700">{t.review}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 