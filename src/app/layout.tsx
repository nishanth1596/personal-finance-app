import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Personal Finance App",
  description: "A personal finance management application.",
};

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} bg-background antialiased`}>
        <main className="flex min-h-screen flex-col">
          <SideBar />
          {children}
        </main>
      </body>
    </html>
  );
}
