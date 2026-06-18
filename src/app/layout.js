import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Auth App",
    template: "%s | Auth App",
    
  },
  description:
    "Secure authentication application built with Next.js and Better Auth.",
  keywords: [
    "Next.js",
    "Authentication",
    "Better Auth",
    "MongoDB",
    "React",
  ],
   metadataBase: new URL('http://localhost:3000'),
   openGraph: {
    title: "Auth App",
    description: "Secure authentication application built with Next.js and Better Auth.",
     images: [
      {
        url: "/Z.png",
        width: 1200,
        height: 630,
        alt: "ZA Auth Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
