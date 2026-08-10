import type { Metadata } from "next";
import "./globals.css";
import InteractiveBackground from "./components/InteractiveBackground";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Jumana Jouhar | Portfolio",
  description: "Interactive site portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="relative min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <InteractiveBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}