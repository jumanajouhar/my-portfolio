import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jumana Jouhar",
  description:
    "A Computer Science graduate looking to build a career in technology and take on new challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}