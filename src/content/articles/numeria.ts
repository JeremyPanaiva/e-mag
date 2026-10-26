import type { Article } from "../types";

const article: Article = {
  slug: "numeria",
  rubrique: "club-entreprises",
  kicker: "Club entreprises",
  title: "Numer’IA ou comment s’adapter à la transition numérique",
  chapo:
    "Le 9 avril dernier, l’Association des Entreprises du pôle d’activités a organisé la première édition du salon Numer’IA. Un événement dédié à la transition numérique.",
  author: "Martine Debette",
  cover: {
    src: "/n90/numeria-02-cyberattaques.jpg",
    alt: "Intervenante présentant des écrans lors d’une conférence du salon Numer’IA, devant un public assis.",
    credit: "© Média Production",
  },
  issue: 90,
  printPages: "30-34",
  blocks: [
    {
      type: "paragraph",
      text: "C’est la toute nouvelle commission Digipôle, animée par Frédéric Sémanaz, créateur de la société Semi Informatique, et David Marquié, société SI Web, qui a imaginé et mis en œuvre ce salon destiné à informer les chefs d’entreprises des évolutions dans le domaine du numérique. Un vaste sujet que les entreprises ne peuvent éluder tant il est devenu un élément clé de leur fonctionnement et de leur développement. Deux voies d’information du public ont été proposées. La première a permis aux visiteurs d’aller à la rencontre des divers spécialistes afin d’échanger sur leurs propres problématiques, besoins et spécificités. Matériel de visioconférence, maintenance et infogérance informatique, matériel de télécommunication, cybersécurité, intégrateur de systèmes de sécurité ou encore financement, assurances et spécialiste de la propriété intellectuelle, autant de domaines, plus ou moins attrayants, qu’aucune entreprise ne peut, ni ne doit, ignorer sans prendre des risques pour son avenir.",
    },
    {
      type: "paragraph",
      text: "La deuxième voie a pris la forme de conférences traitant, par le biais de professionnels, des sujets d’actualité dont vous trouverez, pages 31 à 34, un résumé. Des conférences qui ont rassemblé un nombreux public et qui, si l’on se réfère aux questions posées, ont rencontré un franc succès.",
    },
    {
      type: "paragraph",
      text: "Si Frédéric Sémanaz regrette que les entrepreneurs et dirigeants ne se soient pas plus mobilisés, la satisfaction affichée par les personnes présentes incite les organisateurs à réfléchir, dès à présent, à la prochaine édition.",
    },
    {
      type: "image",
      layout: "inline",
      src: "/n90/numeria-01-affiche.jpg",
      alt: "Visuel de l’affiche du salon Numer’IA.",
    },
    {
      type: "video",
      title: "Revivez Numer’IA en vidéo",
      poster: "/n90/numeria-04.jpg",
      demo: true,
    },
    {
      type: "heading",
      text: "CONFÉRENCE TÉMOIGNAGES DE CYBER ATTAQUES",
    },
    {
      type: "paragraph",
      text: "Phishing, malware, ransomware, spyware, ou encore supply chain attack, autant de mots anglais que l’on peut classer dans la rubrique des cyberattaques. Derrière ces anglicismes, se cachent des techniques qui ont, pour la majorité d’entre elles, un objectif principal, vous soutirer de l’argent !",
    },
    {
      type: "paragraph",
      text: "Trois conférenciers ont abordé ce sujet sensible sous l’angle des processus d’attaques et de leurs conséquences.",
    },
    {
      type: "paragraph",
      text: "Etienne Brasseur, responsable de la sécurité des systèmes d’information à la Société des eaux de Marseille (SEM) dresse un point de situation de ce qui s’apparente à une course entre entreprises et pirates informatiques : « Depuis la guerre en Ukraine, nous constatons que le risque étatique se développe. Il s’adresse surtout aux grosses sociétés à des fins de déstabilisation, de sabotage, de vol de brevet, de rançonnage, c’est très multiforme. Ils ne s’attaquent pas directement à nous mais à notre supply chain, les petites sociétés qui gravitent autour des grosses. À titre d’exemple, certains pays ont tenté de couper l’eau lors des Jeux Olympiques de 2024 ! ».",
    },
    {
      type: "paragraph",
      text: "Renaud Peuteuil, chargé d’affaires flux et solutions de paiement au CIC, est stupéfait de la technicité employée par certains pirates. « Un directeur administratif et financier (DAF) d’un de nos clients a reçu un mail de son président dont le bureau est à côté du sien. Il évoque, dans le plus grand secret, des règlements à effectuer afin d’acquérir une entreprise concurrente. Le style d’écriture et le langage du président ont été étudiés et imités par les pirates. Comme le DAF avait interdiction d’évoquer cela devant les collaborateurs, ils n’en ont jamais parlé de vive voix et, en trois semaines, 450 000€ ont été virés sur ordre du faux président ».",
    },
    {
      type: "paragraph",
      text: "Il s’avère d’ailleurs, qu’en cas de fraude, la faille est bien souvent humaine. « Nous faisons des campagnes internes en envoyant des mails à tous les collaborateurs, avec promesse de billets gratuits par exemple. Malgré des campagnes de sensibilisation permanente, 20% continuent de cliquer. Il faut avoir en tête que si quelque chose est gratuit, c’est que le produit c’est vous ! »",
    },
    {
      type: "paragraph",
      text: "Même si cela n’empêche pas de faire preuve de vigilance au quotidien, il est bon de savoir que les fraudes peuvent faire l’objet d’un contrat d’assurance spécifique. Fanny Blanchard, des Assurances Blanchard, accompagne ses clients sur l’ensemble des risques dont la cybercriminalité : « En cas d’incident nous avons un numéro d’urgence joignable 24h/24. Des sociétés spécialisées identifient par où sont rentrés les pirates et ferment les portes. Ensuite, ils regardent ce qui a été piraté, s’il y a eu vol de données et si celles-ci sont sur le dark web. Ce qui est très important, c’est que l’entreprise ait une sauvegarde déconnectée du serveur. Ensuite vient l’aspect juridique, communiquer auprès de la CNIL et auprès de ses clients et fournisseurs. Les pertes d’exploitation et le paiement d’une rançon sont également assurables ».",
    },
    {
      type: "heading",
      text: "CONFÉRENCE : COMMENT INTÉGRER L’IA GÉNÉRATIVE DANS VOTRE ENVIRONNEMENT PROFESSIONNEL ?",
    },
    {
      type: "paragraph",
      text: "Un sujet qui a fortement intéressé la quarantaine de participants et qui a mis l’accent sur les avantages de l’IA, avant d’aborder un point très important dont il faut avoir conscience, celui des risques liés à son développement.",
    },
    {
      type: "paragraph",
      text: "Mais avant toute chose, qu’est-ce que l’IA générative ? Cécile Demai, France Talents et Transition, donne la réponse : « Comme son nom l’indique, l’IA générative est celle qui génère une réponse, ou un travail, uniquement si on lui demande. En clair, si on ne demande rien à ChatGTP, à Copilot ou à Mistral, il ne se passe rien. Ceci à l’inverse de l’automatisation, qui fonctionne selon une programmation, ou de l’agentique qui, en fonction des paramètres que vous lui aurez préalablement donnés et des « connaissances » qu’elle aura acquises, pourra elle-même décider ce qu’elle doit faire ».",
    },
    {
      type: "image",
      layout: "inline",
      src: "/n90/numeria-03-ia-generative.jpg",
      alt: "Visiteurs échangeant avec des exposants sous un chapiteau blanc, lors du salon Numer’IA.",
      credit: "© Média Production",
    },
    {
      type: "paragraph",
      text: "Si l’écriture des mails ou des courriers, la réalisation des comptes-rendus de réunion, des synthèses, la correction des fautes d’orthographe, ou la recherche d’informations font partie des utilisations professionnelles les plus courantes, l’IA générative permet d’aller beaucoup plus loin selon Jean-François Dubost, président du PAAP : « Il existe plusieurs niveaux d’abonnement, gratuit ou payant, à ces chatbots et certains permettent de faire des analyses financières très sophistiquées, allant jusqu’à générer des plans de prospectives et même de formaliser des propositions de reprise d’entreprises à un président de TC ». Une utilisation très professionnelle qui n’écarte pas une utilisation plus ludique en demandant à l’IA d’établir le circuit de ses prochaines vacances avec le trajet, les étapes, les hôtels, les restaurants et une foule d’informations qu’il suffira de suivre.",
    },
    {
      type: "paragraph",
      text: "Et c’est justement dans cette facilité, qui consiste à faire « bêtement » ce que dit l’IA, que le bât blesse pour les plus sceptiques. Ils se demandent ce qu’il va se passer dans 20 ou 50 ans, lorsque les nouvelles générations biberonnées à l’IA seront au pouvoir. Que va devenir l’être humain ? Qui fera travailler la machine ? Saurons-nous encore réfléchir ? N’est-on pas en train de jouer aux apprentis sorciers avec le risque que la machine prenne le pouvoir ? Les auteurs de science-fiction se sont déjà largement emparés de ce sujet et il faut reconnaître que, par le passé, ils ont bien souvent anticipé l’avenir !",
    },
    {
      type: "paragraph",
      text: "Alors restons vigilants, continuons à faire fonctionner nos méninges comme c’est le cas pour la rédaction des articles du Pôles Actu garantis sans IA générative !",
    },
    {
      type: "partner",
      partnerId: "semi-informatique",
    },
    {
      type: "heading",
      text: "SENSIBILISATION RGPD",
    },
    {
      type: "paragraph",
      text: "C’est par un petit quizz que Stéphanie Sioën-Gallina, spécialisée en droit de la propriété intellectuelle, droit des nouvelles technologies, de l’information et de la communication, a commencé son intervention. L’occasion de vérifier les connaissances de son public sur le sujet, un peu barbare pour beaucoup d’entre nous, du règlement général sur la protection des données (RGPD). Elle a également rappelé les obligations des entreprises en cas de fuite de données personnelles. Alors que toutes les entreprises sont concernées par les cyberattaques, il ressort que les TPE/PME allouent moins de 2 000€ par an à la cybersécurité !",
    },
    {
      type: "heading",
      text: "Pourquoi les données personnelles sont importantes ?",
    },
    {
      type: "paragraph",
      text: "Parce qu’il s’agit d’un actif stratégique de la société. C’est une information qui permet d’identifier une personne, directement ou indirectement : nom, prénom, numéro de compte bancaire, etc. La violation de sécurité de données personnelles se caractérise par la destruction, la perte, l’altération, la divulgation non autorisée de données à caractère personnel, transmises, conservées ou traitées.",
    },
    {
      type: "paragraph",
      text: "Ces données personnelles intéressent les cybercriminels : pour usurper des identités, constituer et cibler des victimes potentielles, ouvrir des comptes bancaires pour du blanchiment d’argent, pour revendre des données dans le darknet, des forums clandestins, etc., dont les prix varient en fonction de la sensibilité, de la fraîcheur et du volume de ces données.",
    },
    {
      type: "heading",
      text: "Les cybermenaces ont toujours un impact sur la RGPD",
    },
    {
      type: "paragraph",
      text: "« Ransomware/rançongiciels, phishing, attaque via un sous-traitant, fuite massive de données, erreur humaine… Les attaques sont de plus en plus nombreuses et ça va continuer. L’IA amplifie encore les risques. D’où l’importance de faire très attention au choix de l’IA, à son utilisation et, surtout, de sensibiliser son personnel à la vigilance », insiste Me Sioën-Gallina.",
    },
    {
      type: "image",
      layout: "inline",
      src: "/n90/numeria-05-rgpd.jpg",
      alt: "Clavier d’ordinateur dont une touche bleue, frappée du sigle RGPD et de cercle d’étoiles européen, se détache.",
      credit: "© Média Production",
    },
    {
      type: "callout",
      title: "Bon à savoir",
      text: [
        "En cas de violation (perte, perte d’intégrité ou de confidentialité) de données personnelles, accidentelle ou illicite, il est obligatoire d’en informer la CNIL au plus vite, et dans un délai de 72h maximum à compter de la connaissance de cette violation.",
      ],
    },
    {
      type: "heading",
      text: "Quelques chiffres",
    },
    {
      type: "stats",
      items: [
        { value: "24", label: "fuites de données par jour, soit environ une toutes les heures." },
        { value: "8 613", label: "violations de données personnelles notifiées à la CNIL entre septembre 2024 et septembre 2025." },
        { value: "12 millions", label: "de personnes concernées en 2025, à comparer aux 8 millions en 2024." },
        { value: "5 905", label: "attaques extérieures recensées en 2025 (3 739 en 2024)." },
      ],
    },
    {
      type: "paragraph",
      text: "Pour en savoir plus : Me Stéphanie Sioën-Gallina 04 96 11 05 30 - contact@sioen.fr.",
    },
    {
      type: "heading",
      text: "URGENCE CYBER",
    },
    {
      type: "paragraph",
      text: "« Que vous ayez une toute petite entreprise ou un énorme groupe, vous êtes tous une cible potentielle. Et il faut connaître la menace ! ». C’est par ces mots qu’Antoine Hennuy a planté le décor de son intervention. Il a ensuite précisé : « Une fois que vous avez admis cela, vous commencez à prendre en compte les enjeux de la cybersécurité ». Autre point à prendre en compte : l’information numérique, le fichier word®, le fichier excel®, la base de données que vous utilisez via une plateforme SAS, font partie de la chaîne de valeur de votre entreprise »",
    },
    {
      type: "quote",
      text: "Que vous ayez une toute petite entreprise ou un énorme groupe, vous êtes tous une cible potentielle.",
      author: "Antoine Hennuy",
    },
    {
      type: "heading",
      text: "La troisième économie mondiale",
    },
    {
      type: "paragraph",
      text: "Dans le monde, la cybercriminalité représente un marché de quelque 10 500 milliards de dollars par an. En France, en 2024, elle était estimée à plus de 118 milliards d’euros. « C’est désormais la troisième économie mondiale, après les USA et la Chine. C’est plus rentable que le trafic de drogue et du sexe, les deux réunis. Autant dire qu’on ne se retrouve pas face à des gamins. Ce ne sont pas des bénévoles. Il n’y a rien de personnel. Ils ne vous connaissent même pas. Leur finalité est de vous prendre de l’argent », explique Antoine Hennuy.",
    },
    {
      type: "paragraph",
      text: "Différentes études ont été concaténées pour obtenir une moyenne du coût d’une cyberattaque (arrêt de production, perte de clients, remontée du système d’information, temps de travail des prestataires, etc.) pour les entreprises selon leur taille : près de 60 000 € pour les TPE (très petites entreprises), autour des 466 000€ pour les PME (petites et moyennes entreprises), 13 millions d’euros pour les ETI (entreprises de taille intermédiaire) et autour de 135 millions d’euros pour les grands groupes. À cela s’ajoute le paiement de la rançon.",
    },
    {
      type: "heading",
      text: "Des retombées négatives",
    },
    {
      type: "paragraph",
      text: "Si aujourd’hui 50% des PME refusent d’utiliser des solutions de sécurité parce que ça coûte cher, se faire rançonner peut leur coûter encore plus cher. 40% des entreprises touchées par une cyberattaque sont des TPE et des PME et entre 50% et 60% des PME ferment leurs portes dans les dix jours. En effet, outre l’impact financier, l’entreprise « attaquée » doit faire face, le plus souvent, à d’autres problèmes, notamment de réputation : 47% ont des difficultés pour attirer de nouveaux clients.",
    },
    {
      type: "image",
      layout: "inline",
      src: "/n90/numeria-06-urgence-cyber.jpg",
      alt: "Homme souriant, en veste sombre, devant une bannière « Urgence Cyber région Sud ».",
      credit: "© Média Production",
    },
    {
      type: "callout",
      title: "À noter",
      text: [
        "En cas d’incident cyber, contacter au plus vite Urgence Cyber, région Sud, au 0 805 036 083, dont la mission est d’assurer un accompagnement gratuit auprès des entreprises et des collectivités de la région dans la gestion d’une crise d’origine cyber.",
      ],
    },
    {
      type: "gallery",
      images: [
        {
          src: "/n90/numeria-02-cyberattaques.jpg",
          alt: "Intervenante présentant des écrans lors d’une conférence du salon Numer’IA, devant un public assis.",
          credit: "© Média Production",
        },
        {
          src: "/n90/numeria-03-ia-generative.jpg",
          alt: "Visiteurs échangeant avec des exposants sous un chapiteau blanc, lors du salon Numer’IA.",
          credit: "© Média Production",
        },
        {
          src: "/n90/numeria-04.jpg",
          alt: "Caméra de surveillance posée sur un stand, à côté d’une plaquette du salon Numer’IA.",
          credit: "© Média Production",
        },
        {
          src: "/n90/numeria-05-rgpd.jpg",
          alt: "Clavier d’ordinateur dont une touche bleue, frappée du sigle RGPD et de cercle d’étoiles européen, se détache.",
          credit: "© Média Production",
        },
        {
          src: "/n90/numeria-06-urgence-cyber.jpg",
          alt: "Homme souriant, en veste sombre, devant une bannière « Urgence Cyber région Sud ».",
          credit: "© Média Production",
        },
      ],
    },
  ],
};

export default article;
