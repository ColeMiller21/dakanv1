import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEFAULT_SEO } from "@/data/seoData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Head from "next/head";

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
