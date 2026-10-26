import type { Metadata } from "next";
import { AdminApp } from "@/components/AdminApp";
import { getSummaries } from "@/lib/summaries";

export const metadata: Metadata = {
  title: "Composer le numéro (démo) — Pôles Actu n°90",
  description: "Démo du back-office : réorganiser les articles du numéro 90.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main>
      <AdminApp summaries={getSummaries()} />
    </main>
  );
}
