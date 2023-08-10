import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  other: {
    "facebook-domain-verification": "392w91gx3hs5oih7ct84r308nyjng4",
  },
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
      <Script>
        {`
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','ofsn5');
        `}
      </Script>
    </html>
  );
}
