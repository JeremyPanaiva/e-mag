import type { Metadata, Viewport } from "next";
import { Bree_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SommaireProvider } from "@/components/SommaireProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getSummaries } from "@/lib/summaries";

const bree = Bree_Serif({ weight: "400", subsets: ["latin"], variable: "--font-bree" });
const source = Source_Sans_3({ subsets: ["latin"], variable: "--font-source" });

export const metadata: Metadata = {
  title: "Pôles Actu n°90 — Le magazine du Pôle d'Activités d'Aix-en-Provence",
  description:
    "Le magazine de l'Association des Entreprises du Pôle d'Activités d'Aix-en-Provence, à lire sur tous vos écrans. Numéro 90, juin 2026.",
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  const summaries = getSummaries();
  return (
    <html lang="fr" className={`${bree.variable} ${source.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SommaireProvider summaries={summaries}>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </SommaireProvider>
      </body>
    </html>
  );
}
