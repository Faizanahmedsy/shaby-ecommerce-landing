import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer, Navbar } from "@/components/modules";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaby Store",
  description: "Created by Faizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background text-text min-h-screen", inter.className)}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
