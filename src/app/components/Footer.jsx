import React from "react";

const Footer = () => (
  <footer className="mt-8 bg-[var(--light-background-color)] code-section" id="global-footer">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center pt-12 text-left text-xl font-bold md:justify-start lg:pt-20">
        <a href="/" className="text-xl [font-family:var(--font-family-heading)]" data-logo="">
          <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7f4d9f63-48d1-43ba-2e8f-1a46684b3300/publicContain" alt="story Logo" className="h-20" />
        </a>
      </div>
      <div className="grid grid-cols-1 pt-4 md:grid-cols-3 lg:grid-cols-4 lg:space-x-24">
        <div className="mb-8">
          <p className="text-center text-xs md:text-left">Capture the beauty of your special day with our professional wedding photography services. We turn your unforgettable moments into timeless memories.</p>
          <div className="my-8 flex flex-row justify-center md:justify-start">
            <a href="/" className="mx-2" aria-label="Visit our Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
            <a href="/" className="mx-2" aria-label="Visit our Twitter"><i className="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
            <a href="/" className="mx-2" aria-label="Visit our LinkedIn"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm"><a href="/about">About</a></div>
          <div className="flex items-center justify-center space-x-2 text-sm"><a href="/faqs">FAQs</a></div>
        </div>
        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <p>123 Wedding Blvd, Denver, CO, 80203</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <p>(720) 555-4321</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <p>contact@story.com</p>
          </div>
        </div>
      </div>
    </div>
    <p className="py-12 text-center text-sm">© 2025 story, All Rights Reserved</p>
  </footer>
);

export default Footer; 