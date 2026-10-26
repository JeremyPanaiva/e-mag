import type { Rubrique, RubriqueId } from "./types";

// Colors sampled from the print sommaire of Pôles Actu n°90.
export const rubriques: Record<RubriqueId, Rubrique> = {
  "grand-angle": { id: "grand-angle", label: "Grand angle", color: "#A45A5E" },
  environnement: { id: "environnement", label: "Environnement", color: "#4B7B6F" },
  mobilite: { id: "mobilite", label: "Mobilité", color: "#893266" },
  portraits: { id: "portraits", label: "Portraits", color: "#47566B" },
  "club-entreprises": { id: "club-entreprises", label: "Club entreprises", color: "#0098D8" },
  actu: { id: "actu", label: "Actu", color: "#F8961D" },
  cqfd: { id: "cqfd", label: "CQFD", color: "#6E5B89" },
  "quoi-de-neuf": { id: "quoi-de-neuf", label: "Quoi de neuf", color: "#018D9F" },
};
