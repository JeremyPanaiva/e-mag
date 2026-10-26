import type { Article } from "../types";

const article: Article = {
  slug: "garden-party",
  rubrique: "actu",
  kicker: "Actu",
  title: "La Garden Party arrive !",
  chapo:
    "La 22e édition de la Garden Party du PAAP se déroulera le 25 juin, à partir de 18h30, à la Maison des Entreprises. Au fil des ans, cette rencontre est devenue la marque de fabrique d’un pôle d’activités qui veut associer business et convivialité. Pôles Actu est allé à la rencontre de Philippe De Saintdo, responsable de la commission Club Entreprises, en charge de cette manifestation.",
  author: "Martine Debette",
  cover: {
    src: "/n90/garden-01.jpg",
    alt: "Homme en veste bleue et pantalon blanc, lunettes sur le nez, qui joue au golf sur un tapis vert devant une cible gonflable bleue.",
  },
  issue: 90,
  printPages: "36",
  blocks: [
    {
      type: "image",
      layout: "inline",
      src: "/n90/garden-02-affiche.jpg",
      alt: "Affiche de la Garden Party : lettrage orangé et violet sur fond de fleurs stylisées, mention « Jeudi 25 juin 2026 à partir de 18h30 ».",
    },
    {
      type: "callout",
      title: "Pratique",
      text: [
        "25 juin, à partir de 18h30",
        "Maison des Entreprises, 45, rue Frédéric Joliot",
        "04 42 24 40 26",
      ],
    },
    {
      type: "qa",
      question: "Quand et comment a débuté la Garden Party du pôle devenue depuis une tradition ?",
      answer: [
        "L’origine de la Garden Party remonte à 2003. On parlait alors d’un pique-nique avec une paëlla ou un bœuf à la broche. Les premières années, il se déroulait à la Duranne et ensuite sur les terrains de l’Ensosp. Le principe originel était de créer un réseau entre les entreprises locales, afin de favoriser les échanges informels, valoriser les partenaires et acteurs économiques du territoire, et renforcer le sentiment d’appartenance au PAAP. Dès l’origine, c’était un événement business basé sur la convivialité et l’échange.",
      ],
    },
    {
      type: "qa",
      question: "Comment a-t-il évolué jusqu’à la version que l’on connaît aujourd’hui ?",
      answer: [
        "En 2010, l’Association des Entreprises a pris ses quartiers dans les locaux actuels au 45, rue Frédéric Joliot. C’est à ce moment que la Garden a pris la forme d’une soirée sur le site de la Maison des Entreprises. Aujourd’hui, elle est devenue un événement majeur dans la vie du pôle d’activités. En 2022, après une interruption de deux ans, due aux restrictions sanitaires pendant la pandémie de covid, tout a repris avec encore plus de sens et plus d’envie. Se retrouver, partager, collaborer, jamais cela n’a été aussi essentiel.",
      ],
    },
    {
      type: "stats",
      items: [
        { value: "22e", label: "édition de la Garden Party du PAAP" },
        { value: "2003", label: "année de l’origine de la Garden Party" },
        { value: "2010", label: "installation de l’Association des Entreprises au 45, rue Frédéric Joliot" },
        { value: "20e", label: "anniversaire de la Garden Party, en 2024" },
      ],
    },
    {
      type: "qa",
      question: "Et qu’en est-il aujourd’hui ?",
      answer: [
        "Aujourd’hui, la Garden Party du PAAP est bien plus qu’un événement. C’est un symbole de rencontre, d’énergie collective et d’ambition partagée. Ici, au cœur du Pôle d’Activités d’Aix-en-Provence, des milliers de femmes et d’hommes entreprennent, innovent et construisent chaque jour pour l’économie de demain. Une fois par an, ils se retrouvent, non pas pour échanger des cartes de visite, mais pour créer un vrai lien. La Garden Party a grandi avec le territoire, a accompagné son développement, ses mutations, ses réussites, et est devenue un rendez-vous attendu et un moment à part où le réseau prend vie. En 2024, le 20e anniversaire a marqué une étape forte. Vingt ans d’histoire, de connexion, d’opportunité, vingt ans à faire vivre un esprit unique. Et aujourd’hui, cette histoire continue car la Garden, ce n’est pas seulement un événement annuel, c’est le reflet d’un territoire qui avance, d’un réseau qui se soutient, une communauté qui se reconnaît.",
      ],
    },
    {
      type: "quote",
      text: "C’est un symbole de rencontre, d’énergie collective et d’ambition partagée.",
    },
  ],
};

export default article;
