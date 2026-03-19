import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KIEY VERSE — Empowering Businesses with Talent & Digital Growth",
  description:
    "KIEYVERSE is a dynamic company offering Skilled Manpower Resourcing, Digital Marketing, Business Consultation, and Digital Learning services across India.",
  keywords: [
    "KIEYVERSE",
    "digital marketing",
    "manpower resourcing",
    "staffing India",
    "business consultation",
    "digital learning",
    "SEO",
    "SMM",
  ],
  openGraph: {
    title: "KIEY VERSE — Talent & Digital Growth",
    description:
      "Empowering businesses with skilled manpower and strategic digital marketing solutions.",
    url: "https://kieyverse.in",
    siteName: "KIEY VERSE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
