
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { QueryProvider } from "@/components/providers/query-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LocalBazaar",
  description: "Created by Ayushman Gohain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryProvider>
          <Header />
          {children}
          <Footer />
      </QueryProvider>
      </body>
    </html>
  );
}
