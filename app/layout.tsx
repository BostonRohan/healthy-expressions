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
    images: ["/og.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main"
          className="absolute left-[-9999px] z-[999] p-4 bg-black text-white opacity-0 focus:left-1/2 translate-[-50%] focus:opacity-100"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
