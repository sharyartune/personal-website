import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front-End Developer",
  description: "Hello, my name is Sharyar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
