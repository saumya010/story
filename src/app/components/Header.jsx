import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header className="relative z-50 border-b border-accent1">
    <nav className="container mx-auto py-4">
      <div className="flex items-center justify-between relative">
        <Link href="/" className="text-xl sm:text-3xl">
          <Image
            src="/images/logo.png"
            alt="Story Weavers"
            width={200}
            height={40}
            className="h-20"
          />
        </Link>
        <button
          id="mobile-menu-button"
          data-collapse-toggle="navigation-menu"
          type="button"
          className="pr-6 text-accent-1 lg:hidden"
          aria-controls="navigation-menu"
          aria-expanded="false"
          aria-label="Navigation Menu"
        >
          <i
            className="fa-regular fa-bars feather feather-menu"
            aria-hidden="true"
          ></i>
        </button>
        <div
          id="navigation-menu"
          className="hidden absolute left-0 top-full mt-4 w-full bg-white pb-4 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:pb-0"
        >
          <ul className="text-lg flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8 uppercase">
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <Link href="/albums" className="text-accent-1">
                Albums
              </Link>
            </li>
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <Link href="/about" className="text-accent-1">
                About
              </Link>
            </li>
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <div className="group relative w-full">
                <button className="uppercase flex w-full cursor-pointer items-center text-accent-1 lg:justify-center">
                  <span>Services</span>
                  <i
                    className="fa-solid fa-chevron-down ml-1 transition-[rotate] lg:group-hover:rotate-[180deg]"
                    aria-hidden="true"
                  ></i>
                </button>
                <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                  <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                    <Link
                      className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                      href="/packages"
                    >
                      Packages
                    </Link>
                    <Link
                      className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                      href="/faqs"
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <Link href="/testimonials" className="text-primary">
                Testimonials
              </Link>
            </li>
          </ul>
          <div>
            <Link
              href="/contact"
              className="text-xl rounded uppercase px-8 py-3 bg-highlight text-bold text-primary font-heading hover:brightness-90"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
