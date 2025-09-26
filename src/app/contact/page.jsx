import Image from "next/image";

export default function Contact() {
  return (
    <section>
      <div className="mx-auto px-4 py-20 lg:container sm:px-12 xl:px-32">
        <div className="relative z-10 rounded-3xl bg-[#ffffff] p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="rounded-3xl p-8 pt-12">
              <div className="mb-4 uppercase">Get in Touch</div>
              <div className="mb-6 text-4xl font-semibold">
                We&apos;d Love to Capture Your Story
              </div>
              <div className="hidden py-4 lg:block">
                <div className="mb-6 flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                    <i
                      className="fa-solid fa-location-dot text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">Our Studio</div>
                    <div>Mumbai, India</div>
                  </div>
                </div>
                <div className="mb-6 flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                    <i
                      className="fa-solid fa-envelope text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">Contact Email</div>
                    <div>hello@storyweavers.co.in</div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                    <i
                      className="fa-solid fa-phone text-3xl"
                      aria-hidden="true"
                    ></i>
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
                        <label
                          htmlFor="first-name"
                          className="font-medium text-primary"
                        >
                          First Name
                        </label>
                      </div>
                      <div>
                        <input
                          name="first-name"
                          type="text"
                          className="w-full border border-[#ffffff] outline-none border-b-primary p-2"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="last-name"
                          className="font-medium text-primary"
                        >
                          Last Name
                        </label>
                      </div>
                      <div>
                        <input
                          name="last-name"
                          type="text"
                          className="w-full border border-[#ffffff] outline-none border-b-primary p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="email"
                          className="font-medium text-primary"
                        >
                          Your Email
                        </label>
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          className="w-full border border-[#ffffff] outline-none border-b-primary p-2"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="phone"
                          className="font-medium text-primary"
                        >
                          Your Phone
                        </label>
                      </div>
                      <div>
                        <input
                          type="phone"
                          name="phone"
                          className="w-full border border-[#ffffff] outline-none border-b-primary p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <label
                        htmlFor="message"
                        className="font-medium text-primary"
                      >
                        Your Message
                      </label>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full border border-[#ffffff] outline-none border-b-primary p-2"
                      ></textarea>
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
  );
}
