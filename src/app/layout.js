import { Italiana, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
});

const workSans = Work_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata = {
  title: "StoryWeavers",
  description: "Weaving your next memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${italiana.variable} ${workSans.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
