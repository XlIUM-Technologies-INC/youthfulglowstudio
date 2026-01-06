import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youthful Glow Studio | Skincare & Beauty Treatments",
  description: "Professional skincare and beauty treatments including facial massage, hair therapy, under-eye treatments, and hand massage. Book your glow session today.",
  keywords: "skincare, beauty, facial massage, treatments, wellness",
  authors: [{ name: "Youthful Glow Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors />
        <Script src="https://assets.calendly.com/assets/external/widget.js" async />
      </body>
    </html>
  );
}
