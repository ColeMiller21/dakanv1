import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEFAULT_SEO } from "@/data/seoData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Head from "next/head";

export const metadata = {
  title: {
    default: "Dakan",
    template: `%s | Dakan`,
  },
  alternates: {
    canonical: "https://dakan.io",
  },
  description:
    "Dakan is the first phygital collectible marketplace using blockchain technology to transact verified collectibles and memorabilia. Browse the exchange. Join the community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="facebook-domain-verification"
          content="392w91gx3hs5oih7ct84r308nyjng4"
        />
      </Head>
      <GoogleAnalytics GA_TRACKING_ID={"G-HMSY0D00HX"} />
      <body className="font-dino">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
