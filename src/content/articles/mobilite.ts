import type { Article } from "../types";

const article: Article = {
  slug: "mobilite",
  rubrique: "mobilite",
  kicker: "Dossier mobilité",
  title: "La mobilité",
  subtitle: "au centre des préoccupations du PAAP",
  chapo:
    "Commençons ce dossier mobilité par un petit rappel. Depuis 2019, la Loi d’Orientation des Mobilités (LOM) oblige les entreprises de plus de 50 salariés à discuter de la mobilité dans le cadre des Négociations Annuelles Obligatoires (NAO). L’objectif principal est de réduire l’usage de la voiture individuelle dans l’espoir d’améliorer la qualité de l’air, fluidifier le trafic routier et réduire le stress lié aux trajets domicile/travail.",
  author: "Martine Debette",
  cover: {
    src: "/n90/mobilite-01-ouverture.jpg",
    alt: "Trafic de nuit sur une autoroute : traînées lumineuses blanches et rouges sous un ciel bleu sombre.",
  },
  issue: 90,
  printPages: "14-15",
  blocks: [
    {
      type: "callout",
      title: "Dossier mobilité",
      text: [
        "Vous trouverez en cahier central de ce magazine, la carte de toutes les lignes de transports en commun qui desservent le Pôle d’Activités d’Aix-en-Provence. À garder sous le coude !",
      ],
    },
    {
      type: "heading",
      text: "PDMEC : qui est concerné ?",
    },
    {
      type: "paragraph",
      text: "Si un accord est signé dans le cadre de la NAO, les entreprises sont dispensées de Plan De Mobilité Employeur (PDME). Si aucun accord n’est signé, elles doivent le construire ou intégrer un PDMEC (Plan De Mobilité Employeur Commun) qui, lui aussi, les dispense de PDME.",
    },
    {
      type: "paragraph",
      text: "En 2025, l’Association des Entreprises du pôle a lancé l’élaboration d’un PDMEC, actuellement en cours de finalisation, avec une trentaine d’entreprises qui ont profité de l’opportunité. Un document réalisé avec le concours du conseil Mobipro, service gratuit de la métropole Aix-Marseille-Provence qui aide les entreprises à créer leur PDME. Toutes les entreprises qui souhaitent établir leur PDME peuvent les contacter : mobipro@mpmetropole.fr",
    },
    {
      type: "heading",
      text: "Augmentation de la taxe transport",
    },
    {
      type: "paragraph",
      text: "Face au « trou » de 123 M€ dans le budget de la métropole Aix-Marseille-Provence, de nombreux élus métropolitains ont évoqué l’idée d’une augmentation du versement mobilité, appelé souvent taxe transport, versé par les entreprises, et qui passerait de 2 à 3% de la masse salariale.",
    },
    {
      type: "paragraph",
      text: "Stéphan Guérin, responsable de la commission MobiPôle, a profité de la visite du préfet de région sur le PAAP pour affirmer la position des entreprises : « On ne peut que s’offusquer de ce dispositif car, en face de cette augmentation, on ne parle pas d’économie dans le budget de fonctionnement de la métropole. Chaque année, les entreprises du PAAP versent 170 M€ sans avoir de retour suffisant en termes de transport. C’est inacceptable ».",
    },
    {
      type: "quote",
      text: "Chaque année, les entreprises du PAAP versent 170 M€ sans avoir de retour suffisant en termes de transport.",
      author: "Stéphan Guérin",
    },
    {
      type: "heading",
      text: "Liaison avec le Relais de Saint-Pons",
    },
    {
      type: "paragraph",
      text: "Revenant sur le projet de Tech Valley, Stéphan Guérin a complété : « Tech Valley, c’est 2 500 salariés en plus, près de l’Ensosp. Il faudra bien solutionner la liaison routière avec le Relais de Saint-Pons et, peut-être, une sortie d’autoroute à Eguilles ». Des propos renforcés par Jean-François Dubost : « Après avoir agrégé une première aide européenne sur le projet BHNS, nous souhaitons agréger une deuxième ligne d’aide, connectée directement à Réarm Europe, qui permettrait de compléter l’investissement en infrastructure de sécurité et également la liaison avec le relais de Saint-Pons ».",
    },
    {
      type: "image",
      layout: "inline",
      src: "/n90/mobilite-02-relais-saint-pons.jpg",
      alt: "Route étroite bordée de murs en pierre, devant une bâtisse ancienne couverte de lierre ; une barrière bleue barre la chaussée.",
    },
  ],
};

export default article;
