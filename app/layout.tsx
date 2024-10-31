import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import ChatbotIframe from "./utils/bot";

export const metadata: Metadata = {
  title: "Ajay Dives",
  description: "Ajay Dives | Web developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark text-foreground bg-background min-h-screen">
          <NavbarSection />
          <Providers>{children}</Providers>
          <div className="hidden lg:block">
            <ChatbotIframe />
          </div>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
