# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## A faire pour le fonctionnement du projet

Ajouter un fichier .env à la racine du projet en ajoutant les variables comme dans le fichier .env.example. La variable VUE_APP_API_BASE_URL doit contenir l'url de l'api, soit 'http://localhost:3000' pour ce test.

## Notes

J'ai pris le choix de réaliser ce test technique en Javascript, avec l'aide du framework VueJS (Vue 3).

Le projet se découpe de la manière suivante:
- api : contient les appels vers l'api
- components: contient les différents composants utilisés dans les pages
- i18n: contient les chaînes de traduction
- router: contient le router de l'application
- store: contient le store de l'application
- views: contient les pages de l'application (SFC)

Pour différencier la vue 'Mobile' du 'Desktop', j'ai pris le choix d'utiliser les media queries, et notamment le fait que la séparation mobile/desktop se fait à 480px. Les pages adopteront l'affichage mobile si l'écran fait 480 px ou moins, et desktop si 480px ou plus.

Côté intégration, j'ai utilisé le helper CSS Tailwind afin de pouvoir intégrer les éléments de la maquette de la manière la plus fidèle possible, ainsi de manipuler les éléments customs (couleur, texte) de manière plus simple.

J'ai ajouté un champ texte sur la page de listing des produits pour pouvoir filtrer sur les noms des produits. Le filtre s'effectue automatiquement selon le texte entré.

Sur la page du panier, le bouton 'Procéder au paiement' ouvre une modale qui simule le paiement réussi. Elle permet ensuite le retour sur la page de listing des produits.

Dans le header, j'ai mis en place un choix de langues Français/Anglais qui permet d'afficher le site selon la langue sélectionnée. Les fichiers de traduction sont dans le dossier i18n.