import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purly",
  description:
    "Sme Slovenská spoločnosť, ktrorá pôsobí v oblasti potravinárstva, kvality, testovania, a optimalizácií procesov.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
