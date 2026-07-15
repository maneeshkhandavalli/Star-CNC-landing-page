import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import RevealObserver from "@/components/ui/RevealObserver";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Star CNC Engineering Works | Laser Cutting & CNC Bending Hyderabad",
  description:
    "Precision laser cutting and CNC bending services in Hyderabad. MS 0.5–15mm, AL 1–10mm, SS 0.5–10mm. Custom prototypes to bulk production. Est. 2009. ISO 9001:2015 certified group.",
  keywords: [
    "laser cutting hyderabad",
    "cnc bending hyderabad",
    "sheet metal cutting hyderabad",
    "ms laser cutting",
    "stainless steel laser cutting",
    "cnc press brake bending hyderabad",
  ],
  openGraph: {
    title: "Star CNC Engineering Works",
    description:
      "20+ years of precision laser cutting & CNC bending in Hyderabad.",
    url: "https://starcnc.in",
    siteName: "Star CNC Engineering Works",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body className="font-sans antialiased bg-white text-navy">
        <SmoothScrollProvider>
          <LoadingScreen />
          <RevealObserver />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
