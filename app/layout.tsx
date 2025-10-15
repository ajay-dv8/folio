import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { NavbarSection } from "./components/ui/Navbar";

import ChatbotIframe from "./utils/bot";
import Providers from "./providers";

import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajay Dives",
  description: "Ajay Dives | Web developer portfolio | Website Developer in Ghana",
  other: {
    "google-adsense-account": "ca-pub-8136692572862471"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode ;
}) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <main className="dark text-foreground bg-background min-h-screen">
          <NavbarSection />
          <Providers>{children}</Providers>
           <div className="hidden md:block">
            <ChatbotIframe />
          </div> 
          <Analytics />
        </main>
      </body>
    </html>
  );
}
