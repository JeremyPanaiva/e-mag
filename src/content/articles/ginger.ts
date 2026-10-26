import type { Article } from "../types";

const article: Article = {
  slug: "ginger",
  rubrique: "portraits",
  kicker: "Portrait",
  title: "Ginger",
  subtitle: "Prélever, analyser, diagnostiquer, recommander, crédo de Ginger CEBTP",
  chapo:
    "Implanté sur le PAAP par le biais de quatre filiales, le groupe Ginger met son expertise au service de tous les acteurs de la construction, de l’aménagement et du développement durable.",
  author: "Martine Debette",
  cover: {
    src: "/n90/ginger-01-ouverture.jpg",
    alt: "Technicien accroupi sur une chaussée fraîchement enrobée, prélevant un échantillon à côté d’un finisseur et d’un camion benne.",
    credit: "© Ginger",
  },
  issue: 90,
  printPages: "18-19",
  blocks: [
    {
      type: "paragraph",
      text: "Si Ginger CEBTP représente le navire amiral de l’entité aixoise, Ginger BURGEAP, spécialisé dans le domaine de l’environnement, Ginger DELEO, déconstruction, démantèlement nucléaire, réemploi des matériaux de construction et désamiantage, et Ginger LECES, mesure d’émission de gaz, complètent l’ancrage régional du groupe. Un groupe qui s’est développé essentiellement par croissance externe à partir du rachat, en 1997, du centre expérimental et d’études du bâtiment et des travaux publics, plus connu sous son acronyme, CEBTP. David Moreau, directeur de l’agence aixoise de Ginger CEBTP détaille les différents métiers de cette ancienne entité de la fédération nationale du bâtiment : « Nous réalisons des études géotechniques, ainsi que des contrôles extérieurs de chantier lors de constructions de chaussées, d’ouvrages en béton armé ou de réalisation de terrassement. Nous prélevons des échantillons de matériaux, béton, ferrailles, sol, enrobés, etc. que nous analysons dans nos propres laboratoires afin de vérifier leur qualité et conformité. Nous réalisons également des diagnostics d’ouvrages d’art existants ou de bâtiments ».",
    },
    {
      type: "paragraph",
      text: "Des spécialités qui s’exercent sur de nombreux sites de la région comme les routes et autoroutes, le parking Krypton à Aix-en-Provence, la corniche Kennedy à Marseille ou actuellement pour la construction de la nouvelle ligne ferroviaire entre Marseille et Nice, le plan écoles de Marseille ou encore la réhabilitation des cités de la Castellane ou de la Bricarde. Si Ginger CEBTP est associé à de grands projets régionaux, il travaille également pour les particuliers : « Nous avons des contrats-cadres avec des assureurs qui nous mandatent pour des expertises de maisons individuelles. Certains particuliers nous contactent directement pour bénéficier de cette expertise ».",
    },
    {
      type: "image",
      layout: "inline",
      src: "/n90/ginger-02.jpg",
      alt: "Foreuse sur chenilles « GEO 305 » en action sur un chantier, avec deux ouvriers en gilet de sécurité.",
      credit: "© Ginger",
    },
    {
      type: "heading",
      text: "Un niveau de qualification élevé",
    },
    {
      type: "paragraph",
      text: "Des études qui nécessitent un haut niveau de qualification pour la bonne cinquantaine de collaborateurs de l’agence aixoise de Ginger CEBTP : « Environ 60% de notre effectif est constitué d’ingénieurs et 30% de techniciens. Les 10% restants travaillent dans les secteurs plus administratifs. Quant à Ginger BURGEAP, elle compte une quinzaine de collaborateurs dont 90% d’ingénieurs. Pour les quatre entités du groupe basées à Aix, cela représente 85 personnes, soit une des plus grosses agences de France. Dans le groupe, toutes activités confondues, nous avons une bonne centaine de métiers différents. Une chaîne de métiers qui se complète avec une synergie entre les entités », indique David Moreau.",
    },
    {
      type: "heading",
      text: "Un groupe en pleine mutation",
    },
    {
      type: "paragraph",
      text: "Si en 2024 le chiffre d’affaires du groupe Ginger était réalisé à 80% en France métropolitaine et outre-mer, aujourd’hui ce pourcentage est tombé à 50%. 2025 a, en effet, vu le rachat de deux grandes sociétés d’environ 800 personnes chacune, ABS au Canada et HPC en Allemagne. Aujourd’hui, Ginger réalise un chiffre d’affaires annuel de 470 millions d’euros avec 4 300 collaborateurs répartis au sein de 160 agences, dont une soixantaine en France. Un maillage serré qui traduit la volonté d’être près des clients et des lieux d’intervention.",
    },
    {
      type: "stats",
      items: [
        { value: "470 millions d’euros", label: "chiffre d’affaires annuel du groupe" },
        { value: "4 300", label: "collaborateurs" },
        { value: "160", label: "agences, dont une soixantaine en France" },
      ],
    },
    {
      type: "paragraph",
      text: "Le groupe ne se repose pas sur ses lauriers et entend poursuivre son développement par le biais de nouvelles spécialités : « En laboratoire, avant de lancer des projets de dépollution des sols en place, nous étudions différents procédés afin de trouver le plus adapté aux besoins. Un sujet qui concerne notamment les décharges ou sites pollués sur le littoral. Le maître d’ouvrage peut ensuite choisir ce qui lui convient le mieux. Nous développons également l’analyse des microplastiques dans les sols. Une recherche qui va s’étendre de plus en plus. Autre axe de développement avec des missions de maîtrise d’œuvre de réparation pour des petites interventions comme la reprise d’une poutre béton par exemple », complète David Moreau avant de conclure : « Tous nos métiers sont des métiers passion ! ».",
    },
    {
      type: "quote",
      text: "Tous nos métiers sont des métiers passion !",
      author: "David Moreau",
    },
    {
      type: "image",
      layout: "inline",
      src: "/n90/ginger-03.jpg",
      alt: "Homme souriant assis à un bureau encombré de dossiers, près d’un ordinateur.",
      credit: "© Ginger",
    },
    {
      type: "callout",
      title: "Ginger CEBTP",
      text: [
        "1030 Rue Jean René Guillibert Gauthier de la Lauzière",
        "Tél : 04 42 99 27 00",
        "Mail : cebtp.aix@groupeginger.com",
      ],
    },
  ],
};

export default article;
