import type { Metadata } from "next";
import { josefinSans } from "./fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Sunreal Photography",
  description: "This is Sunreal Photography official website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={josefinSans.className}>{children}</body>
    </html>
  );
}
