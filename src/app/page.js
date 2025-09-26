import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative flex h-[700px] w-full px-6 pt-48 text-center md:px-12 lg:px-24 xl:px-52">
        {/* leave data-seo-image attribute on this div */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center object-cover brightness-75 bg-[url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/72c42911-7ede-4a73-d6c1-f17cdcb6ff00/public')]"
          data-seo-image=""
          aria-label="The man gently holds the bride's hand with a beautiful golden wedding ring. Enlarged image of newlyweds' hands. Wedding concept. The groom gently touches the bride"
          data-media='{"id":"2090025382","src":"iStock","type":"image"}'
        ></div>
        <div className="z-10 h-full w-full max-w-3xl md:w-3/4 md:pr-12 lg:w-1/2">
          <div className="text-center md:text-left">
            <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl md:pr-36 md:text-6xl">Elevate Your Wedding Experience</h1>
            <p className="mb-8 text-xl text-white">Capture the essence of your special day with stunning photography that tells your unique love story. With an artistic eye and attention to detail, I create breathtaking images that you&apos;ll cherish forever.</p>
            <div>
              <a href="/gallery" className="inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-sm font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]">
                <span>Explore the magic of your wedding day</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6 pt-12 md:mt-2 md:pt-12">
          <div className="flex flex-col items-stretch lg:flex-row">
            <div className="relative lg:w-1/2 xl:w-1/3">
              <div className="absolute -left-24 -top-12 h-full w-full rounded-bl-[115px] rounded-br-[0px] rounded-tl-[0px] rounded-tr-[47px] bg-[var(--light-background-color)]"></div>
              <Image
                className="bl-3xl relative z-10 mx-auto h-full rounded-bl-[40px] rounded-br-[76px] rounded-tl-[104px] rounded-tr-[45px] object-cover lg:h-1/2 xl:h-full"
                src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/32a9d107-03ee-4b73-43b6-6d38e92a4a00/public"
                alt="Ring Ceremony , a Hindu wedding ritual wherein bride and groom hand over their rings to each others as symbol of love"
                width={600}
                height={800}
                unoptimized
              />
            </div>
            <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0 xl:w-2/3">
              <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] md:text-left md:text-5xl md:leading-[64px]">
                Capture Your Wedding Story
              </h2>
              <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] md:text-left">
                Experience the magic of your wedding day through expertly crafted photography that highlights your unique journey. My goal is to encapsulate the love, joy, and emotions in stunning images that will be cherished for a lifetime.
              </p>
              <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] md:text-left">
                With a focus on personalization and artistry, each photograph tells a story that is distinctly yours.
              </p>
              <ul className="mb-12 list-disc pl-6 text-xl">
                <li className="mb-3">Tailored photography packages to fit your needs</li>
                <li className="mb-3">High-quality images that reflect your style</li>
                <li className="mb-3">Professional guidance throughout your experience</li>
                <li>Passionate dedication to capturing every moment</li>
              </ul>
              <div className="flex justify-center md:block">
                <a href="/albums" className="mb-12 btn-primary">Embark on this beautiful journey</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--light-background-color)]">
        <div className="container relative z-10 mx-auto py-24 xl:px-12 2xl:px-36">
          <h3 className="text-center text-base font-medium uppercase tracking-widest">
            Portfolio
          </h3>
          <h2 className="md:text-4x mx-auto mb-10 text-center text-4xl font-bold">
            <span className="border-b-4 border-primary">Discover Our Artistry</span>
          </h2>
          <div className="grid grid-cols-5 gap-x-3 gap-y-3">
            {/* Portfolio Images */}
            {[
              "STW01082.jpg",
              "STW01051.jpg",
              "STW01008.jpg",
              "STW01004.jpg",
              "STW01001.jpg",
              "STW00997.jpg",
              "STW00989.jpg",
              "STW00969.jpg",
              "STW00941.jpg",
              "STW00936.jpg",
              "STW00934.jpg",
              "STW00926.jpg",
              "STW00923.jpg",
              "STW00921.jpg",
              "STW00908.jpg",
            ].map((file, i) => (
              <Image
                key={i}
                className="aspect-square object-cover rounded"
                src={`/images/albums/album1/${file}`}
                alt={`Portfolio image ${i + 1}`}
                width={250}
                height={250}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 md:pt-24">
          <div className="mb-12 text-3xl text-center font-semibold md:text-5xl">
            Our Exquisite Gallery
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 xl:grid-cols-4">
            {/* Gallery Images */}
            {[
              "STW00906.jpg",
              "STW00904.jpg",
              "STW00903.jpg",
              "STW00900.jpg",
              "STW00899.jpg",
              "STW00885.jpg",
              "STW00882.jpg",
              "STW00878.jpg",
            ].map((file, i) => (
              <div className="flex flex-col" key={i}>
                <Image
                  className="h-64 rounded-lg object-cover"
                  src={`/images/albums/album1/${file}`}
                  alt={`Gallery image ${i + 1}`}
                  width={400}
                  height={256}
                />
                <div>
                  <div className="mt-2 font-semibold">
                    Gallery Highlight
                  </div>
                  <div className="text-accent3">
                    A special moment from our collection.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-accent2">
        <div className="container mx-auto mt-8 px-6 pb-12 pt-8 md:mt-20 md:pb-24 md:pt-20">
          <div className="mb-3 text-center text-3xl font-semibold md:text-5xl">Our Satisfied Clients</div>
          <div className="mb-12 text-center text-lg text-gray-500">Discover the experiences of couples we&apos;ve captured</div>
          <div className="flex flex-col items-center justify-center space-y-12 lg:flex-row lg:space-x-20 lg:space-y-0">
            {/* Testimonials */}
            {[
              {
                name: "Emily Davis",
                img: "https://media.gettyimages.com/id/2188060418/photo/young-businessman-smiling-at-camera.jpg?b=1&s=612x612&w=0&k=20&c=_gEBHvNUfO_4Zm3fwhw7Ph6bOVFWjf9OHIJ6s1If9t4=",
                alt: "Customer",
                review:
                  "The artistic vision transformed our engagement and wedding into a breathtaking collection of memories. The outcome exceeded our expectations!",
              },
              {
                name: "David Green",
                img: "https://media.gettyimages.com/id/2156062809/photo/headshot-closeup-portrait-middle-eastern-israel-businesswoman-business-lady-standing-isolated.jpg?b=1&s=612x612&w=0&k=20&c=mPEqaET5s98W_40DmBTRbYY5z0F-_1YkqdC4TCHJeig=",
                alt: "Customer",
                review:
                  "From the initial concept to the final moments, the photographer expertly captured each instance of our special day with creativity and professionalism, bringing our dream wedding to life.",
              },
              {
                name: "Laura Williams",
                img: "https://media.gettyimages.com/id/1408899475/photo/portrait-of-a-happy-businesswoman-smiling-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=w7PTngo2hs688Xrsn7AorGtygCJhPj41ZbMlf2rE1Ps=",
                alt: "Customer",
                review:
                  "The meticulous attention to detail and the outstanding quality of the photographs created an experience I will cherish forever.",
              },
            ].map((testimonial, i) => (
              <div className="max-w-[34rem] relative flex flex-row rounded-2xl bg-[#ffffff] p-6 shadow-[0_0_25px_0_rgba(0,0,0,0.1)] lg:w-96" key={i}>
                <div className="absolute -top-6 right-5">
                  <i className="fa-solid fa-quote-right text-6xl text-[var(--primary-color)]" aria-hidden="true"></i>
                </div>
                <div className="absolute -bottom-6 left-5">
                  <i className="fa-solid fa-quote-left text-6xl text-[var(--primary-color)]" aria-hidden="true"></i>
                </div>
                <div className="h-full w-[70px]">
                  <Image
                    className="h-[70px] w-[70px] rounded-full object-cover"
                    src={testimonial.img}
                    alt={testimonial.alt}
                    width={70}
                    height={70}
                    unoptimized
                  />
                </div>
                <div className="flex-1 p-6 pt-0">
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="mb-4">
                    <i className="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i>
                    <i className="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i>
                    <i className="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i>
                    <i className="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i>
                    <i className="fa-solid fa-star fa-xs text-yellow-500" aria-hidden="true"></i>
                  </div>
                  <div className="text-primary">{testimonial.review}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto px-4 py-20 lg:container sm:px-12 xl:px-32">
          <div className="relative z-10 rounded-3xl bg-[#ffffff] p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="rounded-3xl bg-[var(--primary-color)] p-8 pt-12 text-[var(--light-text-color)]">
                <div className="mb-4 uppercase">Get in Touch</div>
                <div className="mb-6 text-4xl font-semibold [font-family:var(--font-family-heading)]">We&apos;d Love to Capture Your Story</div>
                <div className="hidden py-4 lg:block">
                  <div className="mb-6 flex flex-row space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                      <i className="fa-solid fa-location-dot text-3xl" aria-hidden="true"></i>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-2xl font-semibold">Our Studio</div>
                      <div>Mumbai, India</div>
                    </div>
                  </div>
                  <div className="mb-6 flex flex-row space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                      <i className="fa-solid fa-envelope text-3xl" aria-hidden="true"></i>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-2xl font-semibold">Contact Email</div>
                      <div>hello@storyweavers.co.in</div>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                      <i className="fa-solid fa-phone text-3xl" aria-hidden="true"></i>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-2xl font-semibold">Phone Number</div>
                      <div>(720) 555-6789</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-6">
                <form>
                  <div className="flex flex-col space-y-4 md:space-y-12">
                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                      <div className="w-full">
                        <div>
                          <label htmlFor="first-name" className="font-medium text-primary">First Name</label>
                        </div>
                        <div>
                          <input name="first-name" type="text" className="w-full border border-[#ffffff] outline-none border-b-primary p-2" />
                        </div>
                      </div>
                      <div className="w-full">
                        <div>
                          <label htmlFor="last-name" className="font-medium text-primary">Last Name</label>
                        </div>
                        <div>
                          <input name="last-name" type="text" className="w-full border border-[#ffffff] outline-none border-b-primary p-2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                      <div className="w-full">
                        <div>
                          <label htmlFor="email" className="font-medium text-primary">Your Email</label>
                        </div>
                        <div>
                          <input type="email" name="email" className="w-full border border-[#ffffff] outline-none border-b-primary p-2" />
                        </div>
                      </div>
                      <div className="w-full">
                        <div>
                          <label htmlFor="phone" className="font-medium text-primary">Your Phone</label>
                        </div>
                        <div>
                          <input type="phone" name="phone" className="w-full border border-[#ffffff] outline-none border-b-primary p-2" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div>
                        <label htmlFor="message" className="font-medium text-primary">Your Message</label>
                      </div>
                      <div>
                        <textarea name="message" rows={4} className="w-full border border-[#ffffff] outline-none border-b-primary p-2"></textarea>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="items-center btn-primary">
                        Submit Your Request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
