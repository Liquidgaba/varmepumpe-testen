import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "VarmepumpeTesten – Uavhengige tester av varmepumper i Norge", template: "%s | VarmepumpeTesten" },
  description: "Vi har testet de 26 beste varmepumpene for norske forhold. Finn den som passer ditt hus – etter pris, effekt og støynivå.",
  metadataBase: new URL("https://varmepumpe-testen.no"),
  openGraph: { type: "website", locale: "nb_NO", siteName: "VarmepumpeTesten" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
