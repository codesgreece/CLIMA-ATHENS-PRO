import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { SiteHeader } from "@/components/site-header";
import { jsonLd, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#05070A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="el" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-text">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <SiteHeader />
        <div id="content" tabIndex={-1} className="flex flex-1 flex-col pb-28 outline-none md:pb-0">
          {children}
        </div>
        <MobileCallBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
