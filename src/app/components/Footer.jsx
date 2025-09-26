import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-accent1 border-t-8 border-accent2" id="global-footer">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center pt-12 text-left text-xl font-bold md:justify-start lg:pt-20">
        <Link
          href="/"
          className="text-xl [font-family:var(--font-family-heading)]"
          data-logo=""
        >
          <Image
            src="/images/logo.png"
            alt="Story Weavers"
            width={200}
            height={40}
            className="h-20 mb-4"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 pt-4 md:grid-cols-3 lg:space-x-24">
        <div className="mb-2">
          <p className="text-center text-sm md:text-left">
            Capture the beauty of your special day with our professional wedding
            photography services. We turn your unforgettable moments into
            timeless memories.
          </p>
          <div className="mt-4 flex flex-row justify-center md:justify-start">
            <Link href="/" className="mx-2" aria-label="Visit our Facebook">
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </Link>
            <Link href="/" className="mx-2" aria-label="Visit our Twitter">
              <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
            </Link>
            <Link href="/" className="mx-2" aria-label="Visit our LinkedIn">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <div className="mb-2 space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/about">About</Link>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/faqs">FAQs</Link>
          </div>
        </div>
        <div className="mb-2 space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <p>Mumbai, India</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <p>(720) 555-4321</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <p>hello@storyweavers.co.in</p>
          </div>
        </div>
      </div>
    </div>
    <p className="py-4 text-center text-sm">
      &copy; 2025 Story Weavers, All Rights Reserved
    </p>
  </footer>
);

export default Footer;
