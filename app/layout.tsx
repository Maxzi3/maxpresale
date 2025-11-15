import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://maxpresale.vercel.app/"),
  title: {
    default: "$MAX Token — Web3 Presale",
    template: "%s | $MAX Token Presale",
  },
  description:
    "Join the $MAX Token presale — futuristic Web3 utility token powering cross-chain interactions, staking, and governance.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "$MAX Token — Web3 Presale",
    description:
      "Secure early access to $MAX Token. Limited presale with bonuses and exclusive allocations.",
    url: "https://maxpresale.vercel.app/",
    siteName: "$MAX Token",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "$MAX Token Presale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$MAX Token — Web3 Presale",
    description:
      "Be an early holder of $MAX Token — the next generation Web3 utility token.",
    images: ["/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
