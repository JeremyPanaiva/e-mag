import type { Article } from "../types";

const article: Article = {
  slug: "quoi-de-neuf",
  rubrique: "quoi-de-neuf",
  kicker: "Quoi de neuf",
  title: "Quoi de neuf sur le pôle ?",
  chapo:
    "Agenda, arrivées, déménagements, départs, fusions : toute l'actualité des entreprises du Pôle d'Activités d'Aix-en-Provence.",
  author: "La rédaction",
  cover: {
    src: "/n90/qdn-fond.jpg",
    alt: "Silhouettes de professionnels en discussion, superposées à une façade de verre aux tons bleutés.",
  },
  issue: 90,
  printPages: "50-51",
  blocks: [
    {
      type: "heading",
      text: "Agenda",
    },
    {
      type: "agenda",
      events: [
        {
          date: "2026-06-25",
          time: "18h30",
          title: "La Garden Party du PAAP !",
          place: "Maison des Entreprises, 45, rue Frédéric Joliot 13290 Aix-en-Provence",
        },
        {
          date: "2026-09-15",
          time: "10h30 – 16h",
          title: "MobiGreen",
          place: "Maison des Entreprises 45, rue Frédéric Joliot 13290 Aix-en-Provence",
        },
        {
          date: "2026-09-22",
          time: "18h",
          title: "Visite de l’entreprise EVA",
          place: "1140, rue André Ampère, Actimart 13290 Aix-en-Provence",
        },
        {
          date: "2026-10-13",
          time: "17h45",
          title: "Reprendre & Transmettre",
          place: "Maison des Entreprises, 45, rue Frédéric Joliot 13290 Aix-en-Provence",
        },
        {
          date: "2026-11-19",
          time: "8h30",
          title: "Le petit déjeuner d’accueil des nouvelles entreprises",
          place: "Maison des Entreprises, 45, rue Frédéric Joliot 13290 Aix-en-Provence",
        },
      ],
    },
    {
      type: "partner",
      partnerId: "media-production",
    },
    {
      type: "heading",
      text: "Sur le pôle ?",
    },
    {
      type: "directory",
      groups: [
        {
          title: "Arrivées",
          entries: [
            {
              name: "AIRDATECH",
              address: "415, rue Claude Nicolas Ledoux – Eiffel Park A",
              phone: "06 23 49 69 23",
              activity: "Plateforme régionale de conseils et de prêts en compensation techniques et numériques à destination des personnes en situation de handicap.",
            },
            {
              name: "BAYARD AVOCAT",
              address: "320, rue Emilien Gautier - Espace Lumina B",
              phone: "06 76 26 76 08",
              activity: "Cabinet d’Avocats",
            },
            {
              name: "FICOREC ADVISORY",
              address: "320, rue Emilien Gautier – Espace Lumina B",
              phone: "04 42 50 01 00",
              activity: "Cabinet comptable",
            },
            {
              name: "GROUPE EROS SECURITE",
              address: "1040, rue Jean Perrin",
              phone: "04 65 07 05 83",
              activity: "Sécurité - Surveillance et protection - Formation",
            },
            {
              name: "GROUPE LANG & ASSOCIES",
              address: "Parc du Golf 7",
              phone: "04 75 80 18 09",
              activity: "Expert en sinistres - Évaluation des risques et dommages",
            },
            {
              name: "HQ - IWG FRANCE SARL",
              address: "655, rue René Descartes",
              phone: "0805 54 38 31",
              activity: "Centre d’Affaires – location bureaux et salle de réunion",
            },
            {
              name: "HEXANA",
              address: "135, rue Emilien Gautier",
              phone: "04 58 28 01 47",
              activity: "Système nucléaire modulaire et flexible de 4e génération",
            },
            {
              name: "HYGIENE MODERNE",
              address: "485, rue Marcellin Berthelot",
              phone: "04 91 37 39 40",
              activity: "Distribution de produits d’hygiène et tenues de travail personnalisées",
            },
            {
              name: "M AUTO 13",
              address: "95, rue Louis Armand",
              phone: "06 17 86 76 67",
              activity: "Vendeur de voitures",
            },
            {
              name: "PERSUADERS RH",
              address: "290, rue Pierre Duhem",
              phone: "01 40 68 04 00",
              activity: "Cabinet de recrutement",
            },
            {
              name: "RESTAURANT POKAWA",
              address: "1175, rue Guillaume du Vair",
              phone: "04 65 07 65 69",
              activity: "Restauration rapide sur place ou Livraison",
            },
            {
              name: "RESTAURANT LA PETITE TABLE",
              address: "565, rue Marcellin Berthelot -Mercure A",
              phone: "06 50 00 18 59",
              activity: "Restauration rapide sur place ou Livraison",
            },
            {
              name: "RETRAITEXPERTISE",
              address: "1140, rue André Ampère – Actimart",
              phone: "04 91 67 59 16",
              activity: "Conseils stratégiques pour la retraite",
            },
            {
              name: "OCARGO FOOD COURT",
              address: "610, rue Georges Claude",
              phone: "04 42 52 36 65",
              activity: "Restaurant - Événements – Tous publics",
            },
            {
              name: "PER",
              address: "235, rue Léon Foucault",
              phone: "04 42 52 22 19",
              activity: "Système de sécurité électronique-détection intrusion - vidéosurveillance",
            },
            {
              name: "PROVENCE ELEC BATIMENT",
              address: "Tech’Indus - 645, rue Mayor de Montricher",
              phone: "04 86 91 48 66",
              activity: "Installation électrique",
            },
            {
              name: "RUTILE BIKE",
              address: "20, rue Georges Claude",
              phone: "04 89 41 70 70",
              activity: "Distributeur de vélos électriques reconditionnés",
            },
            {
              name: "TIVOLI NOTAIRES",
              address: "Rue du Vallon de la Vierge",
              phone: "04 65 40 06 62",
              activity: "Notaires",
            },
            {
              name: "WERIZ",
              address: "1165, rue JRGG de la Lauzière",
              phone: "07 82 81 16 81",
              activity: "Agence Immobilière",
            },
          ],
        },
        {
          title: "Fusions",
          entries: [
            { name: "CD SUD", detail: "→ Sonepar Climate" },
            { name: "HOTEL DE L’ARBOIS", detail: "→ Hôtel Mercure Aix Duranne" },
            { name: "TIL TECHNOLOGIES", detail: "→ HIRSCH" },
          ],
        },
        {
          title: "Déménagements",
          entries: [
            { name: "ASAP BATIMENT", detail: "1070, RUE DU LIEUTENANT PARAYRE" },
            { name: "DENTAIXEL", detail: "ACTIMART U1B" },
            { name: "GRAFTYS", detail: "EIFFEL PARK C" },
            { name: "HYDRALIANS", detail: "130, RUE CLAUDE NICOLAS LEDOUX" },
            { name: "IRISLEX", detail: "ACTIMART U1B" },
            { name: "LMSP", detail: "EIFFEL PARK C" },
          ],
        },
        {
          title: "Départs",
          entries: [
            { name: "A PRINT" },
            { name: "ALTAIX" },
            { name: "ARMAND TRAITEUR" },
            { name: "LA COMPAGNIE DE PROVENCE" },
            { name: "RESTAURANT LEO LE COMPTOIR" },
            { name: "SUPERSONIC" },
          ],
        },
      ],
    },
    {
      type: "partner",
      partnerId: "safe",
    },
  ],
};

export default article;
