import {Inter} from "next/font/google";
import "./globals.css";



const inter = Inter({
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
    className={inter.className}
    >
      <body className="min-h-full flex flex-col bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed">{children}</body>
    </html>
  );
}
