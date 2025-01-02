import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy-It",
  description: "Ecommerce Website for Milestone 3- API data fetching, Shippment Tracking and Google auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <CartProvider>
            <Navbar />

            {children}
          
          <Footer />
      </CartProvider>
        </div>
      </body>
    </html>
  );
}