import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthy Expressions",
  description:
    "A collaborative cross-sector healing and creating arts community, committed to uplifting teaching artist of color to share trauma-informed workshops designed to build resilience in marginalized communities.",
  openGraph: {
    title: "Healthy Expressions",
    description:
      "A collaborative cross-sector healing and creating arts community, committed to uplifting teaching artist of color to share trauma-informed workshops designed to build resilience in marginalized communities.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
