import type { Partner } from "./types";

// Print ads of issue 90, turned into clickable web partner slots.
export const partners: Record<string, Partner> = {
  figuiere: {
    id: "figuiere",
    name: "Figuière Immobilier d'entreprise",
    tagline: "Bureaux, locaux d'activités, commerces ou terrains : valorisez, vendez, louez ou faites gérer vos locaux professionnels.",
    image: "/partners/figuiere.jpg",
    url: "https://www.figuiere.com",
  },
  safe: {
    id: "safe",
    name: "Pôle SAFE",
    tagline: "Sécurité, aéronautique, spatial, défense : le rendez-vous business de la Région Sud, le 17 septembre 2026 à l'aérodrome d'Aix-les Milles.",
    image: "/partners/safe.jpg",
    url: "https://www.safecluster.com",
  },
  "semi-informatique": {
    id: "semi-informatique",
    name: "Semi Informatique",
    tagline: "Cybersécurité, infogérance, cloud & mobilité : des solutions intelligentes pour entreprises exigeantes, au cœur du Pôle d'activités.",
    image: "/partners/informatique.jpg",
    url: "mailto:Semi@semi-informatique.com",
  },
  "media-production": {
    id: "media-production",
    name: "Média Production",
    tagline: "Média Production se déplace pour vos mariages, anniversaires, fêtes et bien plus encore !",
    image: "/partners/media-production.jpg",
    url: "tel:+33652977947",
  },
};
