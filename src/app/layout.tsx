import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/scss/globals.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollToTop } from "@/components/ScrollButton";
import { appleIcon } from "@/model";
import Navbar from "@/components/StickyNavbar";
import { titleFont, bodyFont, bricolageFont, poppinsFont } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
      ${titleFont.variable}
      ${bodyFont.variable}
      ${bricolageFont.variable}
      ${poppinsFont.variable}
    `}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {appleIcon.map((icon) => (
          <link
            key={icon.id}
            rel="icon"
            type="image/svg"
            sizes={icon.dimension}
            href={`/img/favicons/favicon-${icon.dimension}.svg`}
          />
        ))}

        <link rel="manifest" href="/img/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/img/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#fff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main className="main">
          <Header />
          {children}
          <Footer />
        </main>
        <ScrollToTop />
        <ScrollToTop showDots />
      </body>
    </html>
  );
}
