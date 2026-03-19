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
  metadataBase: new URL("https://kieyverse.in"),
  title: {
    default:
      "KIEY VERSE — Skilled Manpower Resourcing & Digital Marketing Services in India",
    template: "%s | KIEY VERSE",
  },
  description:
    "KIEY VERSE provides skilled manpower resourcing, digital marketing, SEO, social media marketing, business consultation, and digital learning services across India. Women-founded company empowering businesses with talent and digital growth solutions.",
  keywords: [
    "KIEYVERSE",
    "KIEY VERSE",
    "kieyverse.in",
    "digital marketing company India",
    "digital marketing services",
    "manpower resourcing India",
    "staffing agency India",
    "skilled talent supply",
    "IT staffing India",
    "business consultation India",
    "SEO services India",
    "social media marketing",
    "SMM services",
    "digital learning courses",
    "brand growth strategy",
    "content writing services",
    "copywriting services India",
    "web development India",
    "women-founded startup India",
    "HR consulting India",
    "recruitment agency India",
    "paid ads management",
    "SEM services",
    "online marketing India",
  ],
  authors: [
    { name: "Vijayalakshmi", url: "https://kieyverse.in" },
    { name: "Easwary", url: "https://kieyverse.in" },
  ],
  creator: "KIEY VERSE",
  publisher: "KIEY VERSE",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "https://kieyverse.in",
  },
  openGraph: {
    title:
      "KIEY VERSE — Skilled Manpower Resourcing & Digital Marketing in India",
    description:
      "Empowering businesses with skilled manpower resourcing, digital marketing, SEO, SMM, business consultation, and digital learning. Women-founded company serving IT, Finance, EdTech, and more across India.",
    url: "https://kieyverse.in",
    siteName: "KIEY VERSE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KIEY VERSE — Empowering Businesses with Talent & Digital Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KIEY VERSE — Talent & Digital Growth Partner",
    description:
      "Skilled manpower resourcing, digital marketing, business consultation & digital learning services across India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "business",
};

// Structured data is a static object with trusted content only (no user input)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kieyverse.in/#organization",
      name: "KIEY VERSE",
      alternateName: "KIEYVERSE",
      url: "https://kieyverse.in",
      email: "kieyverse@gmail.com",
      description:
        "A dynamic company offering Skilled Manpower Resourcing, Digital Marketing, Business Consultation, and Digital Learning services across India.",
      foundingDate: "2024",
      founders: [
        { "@type": "Person", name: "Vijayalakshmi", jobTitle: "Co-Founder" },
        { "@type": "Person", name: "Easwary", jobTitle: "Co-Founder" },
      ],
      sameAs: ["https://www.linkedin.com/company/kiey-verse/"],
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Digital Marketing",
        "SEO",
        "Social Media Marketing",
        "Manpower Resourcing",
        "Business Consultation",
        "Content Writing",
        "Web Development",
        "Brand Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kieyverse.in/#website",
      url: "https://kieyverse.in",
      name: "KIEY VERSE",
      publisher: { "@id": "https://kieyverse.in/#organization" },
      description:
        "Empowering businesses with skilled manpower and digital growth solutions.",
    },
    {
      "@type": "WebPage",
      "@id": "https://kieyverse.in/#webpage",
      url: "https://kieyverse.in",
      name: "KIEY VERSE — Skilled Manpower Resourcing & Digital Marketing Services in India",
      isPartOf: { "@id": "https://kieyverse.in/#website" },
      about: { "@id": "https://kieyverse.in/#organization" },
      description:
        "KIEY VERSE provides skilled manpower resourcing, digital marketing, SEO, social media marketing, business consultation, and digital learning services across India.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://kieyverse.in/#service",
      name: "KIEY VERSE",
      url: "https://kieyverse.in",
      email: "kieyverse@gmail.com",
      description:
        "Skilled Manpower Resourcing and Digital Marketing Services",
      priceRange: "$$",
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Our Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Skilled Talent Supply",
              description:
                "Pre-vetted talent across IT, Non-IT, and creative roles to help companies scale smoothly.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing",
              description:
                "Complete digital marketing including SMM, paid ads, SEO, content writing, copywriting, and brand growth strategies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Consultation",
              description:
                "Strategy, recruitment, branding, and digital transformation support.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Learning",
              description:
                "Practical digital courses that enhance skills and industry-ready knowledge.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://kieyverse.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does KIEY VERSE offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KIEY VERSE offers four core services: Skilled Talent Supply (pre-vetted IT, Non-IT, and creative talent), Digital Marketing (SMM, paid ads, SEO, content writing, copywriting, brand growth), Business Consultation (strategy, recruitment, branding, digital transformation), and Digital Learning (practical digital courses for skill enhancement).",
          },
        },
        {
          "@type": "Question",
          name: "Which industries does KIEY VERSE serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KIEY VERSE serves clients across IT Sector, Financial Sector, EdTech, Professional Services, and Startups & SMEs across multiple regions in India.",
          },
        },
        {
          "@type": "Question",
          name: "Who founded KIEY VERSE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KIEY VERSE was founded by Vijayalakshmi and Easwary — two passionate women entrepreneurs from different states of India with close to 10 years of combined experience in Social Media Marketing, SEO, HR, and Legal expertise.",
          },
        },
        {
          "@type": "Question",
          name: "Does KIEY VERSE offer barter services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, KIEY VERSE offers a barter services model that allows service exchange instead of payments, providing limited manpower and digital marketing support for mutual growth — ideal for early-stage startups and collaborative ventures.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact KIEY VERSE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach KIEY VERSE via email at kieyverse@gmail.com, visit their website at kieyverse.in, or connect on LinkedIn at KIEY VERSE HQ.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data — static trusted content, safe to inject */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
