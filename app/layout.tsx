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
    default: "Manpower and Digital Services India | KIEY VERSE",
    template: "%s | KIEY VERSE",
  },
  description:
    "Top manpower agency in Madurai | Best Digital marketing agency in South India. KIEY VERSE provides skilled manpower resourcing, digital marketing, recruitment, SEO, lead generation, and business consultation services across India.",
  keywords: [
    "KIEYVERSE",
    "KIEY VERSE",
    "kieyverse.in",
    "manpower consultancy in Madurai",
    "recruitment agency Tamil Nadu",
    "digital marketing agency India",
    "lead generation services India",
    "hiring solutions for startups",
    "HR consultancy services",
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
    "manpower agency Madurai",
    "best digital marketing South India",
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Manpower and Digital Services India | KIEY VERSE",
    description:
      "Top manpower agency in Madurai | Best Digital marketing agency in South India. Empowering businesses with skilled manpower resourcing, digital marketing, SEO, SMM, business consultation, and digital learning.",
    url: "https://kieyverse.in",
    siteName: "KIEY VERSE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "KIEY VERSE – Empowering Businesses with Manpower & Digital Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manpower and Digital Services India | KIEY VERSE",
    description:
      "Top manpower agency in Madurai | Best Digital marketing agency in South India.",
    images: ["/logo.png"],
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
        "Top manpower agency in Madurai and best digital marketing agency in South India. Offering skilled manpower resourcing, digital marketing, business consultation, and skill development services.",
      foundingDate: "2024",
      founders: [
        { "@type": "Person", name: "Vijayalakshmi", jobTitle: "Co-Founder" },
        { "@type": "Person", name: "Easwary", jobTitle: "Co-Founder" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/kiey-verse/",
        "https://www.instagram.com/kieyverse.hq/",
      ],
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Manpower Consultancy",
        "Recruitment Services",
        "Digital Marketing",
        "SEO",
        "Social Media Marketing",
        "Lead Generation",
        "Business Consultation",
        "Skill Development",
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
      name: "Manpower and Digital Services India | KIEY VERSE",
      isPartOf: { "@id": "https://kieyverse.in/#website" },
      about: { "@id": "https://kieyverse.in/#organization" },
      description:
        "Top manpower agency in Madurai | Best Digital marketing agency in South India.",
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
              name: "Recruitment Services",
              description:
                "Fast hiring for IT & Non-IT roles with pre-screened, ready-to-work candidates. Cost-effective hiring solutions with bulk hiring support.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing Services",
              description:
                "Lead generation campaigns, social media marketing, performance ads (Meta, Google), SEO optimization, and website development.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Skill Development Programs",
              description:
                "Industry-ready training, placement-focused courses, and practical learning approach.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Consultation Services",
              description:
                "Expert guidance to grow your business step by step. Help in hiring, marketing, and overall planning.",
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
            text: "KIEY VERSE offers four core services: Recruitment Services (fast hiring for IT & Non-IT roles), Digital Marketing Services (lead generation, SMM, performance ads, SEO, web development), Skill Development Programs (industry-ready training), and Business Consultation Services (expert guidance for business growth).",
          },
        },
        {
          "@type": "Question",
          name: "Which industries does KIEY VERSE serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KIEY VERSE serves Startups (IT & Non-IT), Manufacturing, Automobile industries, EdTech companies, Retail businesses, and Real Estate businesses across India.",
          },
        },
        {
          "@type": "Question",
          name: "Who founded KIEY VERSE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KIEY VERSE was founded by Vijayalakshmi and Easwary – two passionate women entrepreneurs from different states of India with close to 10 years of combined experience in Social Media Marketing, SEO, HR, and Legal expertise.",
          },
        },
        {
          "@type": "Question",
          name: "Why choose KIEYVERSE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KIEYVERSE offers a faster hiring process, affordable pricing, proven lead generation strategies, and end-to-end business growth support.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact KIEY VERSE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach KIEY VERSE via email at kieyverse@gmail.com, visit their website at kieyverse.in, connect on LinkedIn at KIEY VERSE HQ, or follow on Instagram @kieyverse.hq.",
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
        {/* JSON-LD structured data – static trusted content, safe to inject */}
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
