import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetalCraft Florist Co. | Fresh Flowers, Custom Bouquets & Event Florals",
  description: "Portland's premier florist — wedding florals, daily flower delivery, custom bouquets, corporate arrangements, and plant rentals. Crafting beauty, one petal at a time.",
  keywords: ["florist", "flowers", "wedding flowers", "flower delivery", "bouquet", "Portland florist", "event florals", "corporate flowers"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
