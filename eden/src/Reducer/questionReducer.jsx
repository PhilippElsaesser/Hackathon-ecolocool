const initialState = {
  popUpContent: [
    {
      id: 1,
      question: 'As-tu utlisé un autre moteur de recherche que Google cette semaine ?',
      answer: 'oui', 
      trivia: "Le savais-tu ? Bien que leur fonctionnement ne soit pas pas moins énergivore, certains moteurs de recherche mettent tes recherches au service de l'humanité. Avec <a href=\"https://www.ecosia.org/\" target=\"blank\">Ecosia</a> par exemple, tu pourras récolter des « arbres » que l'entreprise s'engage à planter pour lutter contre la déforestation et pour améliorer l'empreinte environnementale de ses utilisateurs ! <a href=\"https://ecogine.org/\" target=\"blank\">Ecogine</a> est un moteur de recherche français, écolo et éthique qui soutient des associations qui agissent concrètement pour l'environnement ! Avec le moteur de recherche <a href=\"https://www.lilo.org\" target=\"blank\">Lilo</a>, tes recherches financent gratuitement des projets sociaux et environnementaux !"
    },
    {
      id: 2,
      question: 'As-tu des appareils en veille à la maison ? Un chargeur branché à vide ?',
      answer: 'non', 
      trivia: "Le savais-tu ? La consommation de l'ensemble des veilles « conventionnelles », incluant les chargeurs branchés, engendrerait un coût pouvant atteindre 80 euros par foyer par an selon l’Ademe. Deux milliards d'euros est gâchée chaque année en France ! <a href=\"https://selectra.info/energie/guides/conso/appareils-electriques\" target=\"blank\">Plus d'infos.</a>"
    },
    {
      id: 3,
      question: 'As-tu nettoyé ta boîte mail récemment ?',
      answer: 'oui',
      trivia: "Le savais-tu ? Une entreprise de 100 personnes génère chaque année rien qu’avec son courrier électronique 13,6 tonnes d’équivalent CO2, soit l’équivalent de 14 allers-retours Paris et New York.(ADEME). Le nombre de mails envoyés par jour en France s'élève à 1,4 milliard (hors spam). Dans le monde ? 281 milliards (hors spam) ! Pour nettoyer ta boîte mail tu peux utiliser des outils comme <a href=\"Cleanfox.io\" target=\"blank\">Cleanfox.io</a> !"
    },
    {
      id: 4,
      question: "As-tu utilisé google pour aller sur l'un de tes sites favoris cette semaine ?",
      answer: 'non', 
      trivia: "Le savais-tu ? L’impact d’une requête web dépend du temps de recherche et du nombre de pages consultées. On divise par 4 les émissions de gaz à effet de serre en allant directement à l’adresse du site. <a href=\"https://www.lilo.org/fr/comment-epingler-mes-sites-favoris-mon-navigateur/\">Crée des favoris</a> dans ton navigateur pour tes sites internet préférés !"
    },
    {
      id: 5,
      question: 'As-tu envoyé un message ou un fichier par internet à une personne présente dans la même salle que toi cette semaine ?',
      answer: 'non', 
      trivia: "Le savais-tu ? Envoyer une donnée sur Internet consomme 2 fois plus d’énergie que la stocker sur disque dur pendant un an ! Utilise plutôt un support amovible comme une clé USB !"
    },
    {
      id: 6,
      question: 'As-tu regardé une vidéo via un service de Streaming cette semaine ?',
      answer: 'non',
      trivia: "Le savais-tu ? Le streaming représente aujourd'hui 82% du traffic Internet. Il est le principal facteur d'inflation énergétique ! L'empreinte écologique d'une vidéo sera moins élevée en téléchargement plutôt qu'en streaming."
    },
    {
      id: 7,
      question: 'Penses-tu passer plus de deux heures par jour sur ton téléphone ?',
      answer: 'non', 
      trivia: "Le savais-tu ? Les français passent 1h30 par jour sur internet via leur smartphone... Les moins de 25 ans 2h30 ! Certains outils comme <a href=\"https://inthemoment.io\" target=\"blank\">Moment</a> ou <a href=\"https://offtime.es/\" target=\"blank\">Offtime</a> permettant de mesurer le temps passé sur ton téléphone ainsi qu'un aperçu du temps par application. En diminuant le temps passé sur ton smartphone, tu diminueras ton empreinte énergétique !"
    },
  ]
}

export function questionReducer(state = initialState, action) {
  return state
}

export default questionReducer