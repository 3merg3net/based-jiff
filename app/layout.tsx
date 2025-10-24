import "./globals.css";
import FloatingPaws from "./components/FloatingPaws"; 
import StickyCTA from "./components/StickyCTA";

export const metadata = {
  title: "Based Jiff — The goodest dog on Base",
  description:
    "Community fan token inspired by Jiffpom — cute vibes, big community, built on Base.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#0b1226",
  openGraph: {
    title: "Based Jiff — The goodest dog on Base",
    description: "Community fan token built on Base.",
    images: ["/images/og-based-jiff.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Based Jiff — The goodest dog on Base",
    description: "Community fan token built on Base.",
    images: ["/images/og-based-jiff.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white/95 selection:bg-base/30">
        {/* animated glow background */}
        <div className="bg-orbs" />
        <FloatingPaws />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
