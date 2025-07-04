# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initialized a new Next.js app with Tailwind CSS (no TypeScript) in the `story` directory.
- Created a global Header component and added it to the layout so it appears on all pages.
- Created a global Footer component and added it to the layout so it appears on all pages.
- Replaced the home page with a new design, converting all `<img>` tags to use the Next.js `<Image>` component for external images.
- Created a new `public/images/albums` directory structure for storing images and albums.
- Added an albums landing page (`/albums`) that displays all albums in a 4-column grid with a thumbnail, title, and description.
- Added dynamic album pages (`/albums/[album]`) that display all images from the selected album in a 4-column grid.
- Added a main Albums link to the header navigation.
- Installed the @fortawesome/fontawesome-free package to resolve a build error related to missing FontAwesome CSS.
- Removed unnecessary id attributes from homepage sections for cleaner markup.
- Created an About Us page with dummy content from the homepage, including hero image, description, and features.
- Created a Packages page with dummy content, including a hero image, description, and sample package list.
- Created a FAQs page with dummy content, including a hero image and a list of frequently asked questions and answers.
- Created a Services page with dummy content, including a hero image, description, and a list of sample services.
- Created a Testimonials page with dummy content, including a hero image and sample testimonials with names and reviews.
- Updated the homepage gallery section to use 8 random images from album1, ensuring no overlap with the portfolio section.

> Note: All types of changes, including minor and cosmetic edits, will be logged in this changelog from now on. 