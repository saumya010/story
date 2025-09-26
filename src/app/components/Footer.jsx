import React from "react";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-accent1 border-t-8 border-accent2" id="global-footer">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center pt-12 text-left text-xl font-bold md:justify-start lg:pt-20">
        <a
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
        </a>
      </div>
      <div className="grid grid-cols-1 pt-4 md:grid-cols-3 lg:space-x-24">
        <div className="mb-2">
          <p className="text-center text-sm md:text-left">
            Capture the beauty of your special day with our professional wedding
            photography services. We turn your unforgettable moments into
            timeless memories.
          </p>
          <div className="mt-4 flex flex-row justify-center md:justify-start">
            <a href="/" className="mx-2" aria-label="Visit our Facebook">
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="/" className="mx-2" aria-label="Visit our Twitter">
              <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
            </a>
            <a href="/" className="mx-2" aria-label="Visit our LinkedIn">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="mb-2 space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <a href="/about">About</a>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <a href="/faqs">FAQs</a>
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
