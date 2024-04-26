import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/themeprovider";
import Header from "@/components/header";
import {Providers} from "./providers";
import Head from "next/head";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
export const metadata = {
  title: "Horizaura : Furniture and Sofas Redefined | Horizaura",
  description: "Horizaura: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.",
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
          <Footer />
          <Analytics />
        </ThemeProvider>
        </Providers>
        </body>
    </html>
  );
}
