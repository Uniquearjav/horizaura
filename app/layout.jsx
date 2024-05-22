import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/themeprovider";
import Header from "@/components/header";
import {Providers} from "./providers";
import Head from "next/head";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
export const metadata = {
  title: "Horizaura : Furniture and Sofas Redefined | Horizaura",
  description: "Horizaura: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.",
  keywords: "Horizaura, furnitures, Enhancing homes, Sofas, Home decor, Resin plates, Artistic craftsmanship, Refined style, Horizaura home decor, Crafted elegance for homes, Stunning selection of sofas, Captivating resin plates, Artistic craftsmanship in furniture, Blend of creativity and comfort, Refined style in home furnishings, Experience elegance with Horizaura, Explore creativity in home decor, Horizaura: Where craftsmanship meets comfort",
  verification: { google: `${process.env.VERIFICAION}`},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head><link rel="icon" href="/favicon.ico" sizes="any" /></Head>
       <body className={cn("min-h-screen dark:bg-gray-900 bg-background font-sans antialiased ", poppins?.className || '')}>
        <Providers>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <Header />
          <div>{children}</div>
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9405103571986725"
     crossorigin="anonymous" lazyOnload></Script>
          <Footer />
          <Analytics />
        </ThemeProvider>
        </Providers>
        </body>
    </html>
  );
}
