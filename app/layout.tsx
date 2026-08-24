import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Dust Front RTS Wiki — Guides, Units & Build Orders", template: "%s | Dust Front RTS Wiki" },
  description: siteConfig.description,
  keywords: ["Dust Front RTS", "RTS guides", "units", "build orders", "economy", "base building", "demo"],
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: { type: "website", siteName: siteConfig.name, title: "Dust Front RTS Wiki", description: siteConfig.description },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
  alternates: { languages: { "en": "/", "de": "/lang/de", "es": "/lang/es", "fr": "/lang/fr", "zh-CN": "/lang/zh" } }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
