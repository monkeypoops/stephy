import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ 
  subsets: ["latin"], 
  variable: "--font-handwritten",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Stephy - Actor & Screenwriter",
  description: "For the creators, the dreamers, and the ones who do it their way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}