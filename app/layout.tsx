import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anishroy.dev"),

  title: {
    default: "Anish Roy | Pshycodr",
    template: "%s | Anish Roy | Pshycodr",
  },

  description:
    "Software Developer building scalable web systems and AI-powered applications using Next.js, TypeScript, cloud platforms, and modern backend architecture",

  openGraph: {
    siteName: "anishroy.dev",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  icons: {
    icon: "https://avatars.githubusercontent.com/u/115141578?v=4",
    shortcut: "https://avatars.githubusercontent.com/u/115141578?v=4",
    apple: "https://avatars.githubusercontent.com/u/115141578?v=4",
  },
  alternates: {
    canonical: `/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K5GXZHJF" />
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
