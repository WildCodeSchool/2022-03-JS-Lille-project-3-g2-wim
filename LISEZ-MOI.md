# WIM - Work In Music

## Table of Contents

1. [Informations Générales](#informations-generales)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Auteurs](#auteurs)

## Informations Générales

Cette WebApp est une plateforme d’écoute musicale dédiée à l’éducation. Elle donne accès à des cours chantés par matière (philosophie, chimie, espagnol...) et par niveaux (collèg et lycée) après connexion.
Cet site web comporte une interface d'administration des cours et des utilisateurs sur React Admin.

### Statut du projet et état d'avancement

Ce projet a été développé par 6 développeurs en formation à la Wild Code School de Lille (React Javascript) comme projet de fin de formation. L’objectif de cette application pour le client est de donner à voir et à tester une application proche de ce que sera le produit final, pour rendre concret le projet et donner à voir aux réseaux de sponsors et clients potentiels de WIM.

## Technologies

### Template

- `Template` : Application développée sur React, Node Express à partir d'un [template](https://github.com/WildCodeSchool/js-template-fullstack) développé par la Wild Code School.

**Outils utilisés dans ce template:**

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

### Autres librairies

- `MySQL` : Une base de donnée a été développée sur mysql grâce à WorkBench
- `ReactAdmin` : La gestion des cours et des utilisateurs a été développée sur React Admin
- `Redux` : Redux a été utilisé pour gérer les informations liées aux utilisateurs au moment de la connexion ou de l'inscription puis tout au long de la navigation
- `Passport` : Passeport a été utilisé en Back pour gérer l'authentification
- `Autres librairies diverses` :
  - Material UI a été utilisé pour gérer le formulaire d'inscription.
  - Styled Component a été utilisé pour gérer le style de l'application.
  - React Router pour gérer les liens entre les page.
  - Swiper pour gérer le carroussel de d'accueil sur l'application.
  - React-toastify pour gérer les messages d'erreur (si l'utilisateur n'a pas mis un mail...).
  - Prop-types pour typer les props.
  - Axios pour les appels API.

## Installation

### Pour commencer un projet

    Sur VSCode, installer les plugins Prettier - Code formatter et ESLint et les configurer
    Cloner ce dépôt, se rendre à l'intérieur
    Lancer la commande npm run setup
    NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans backend/.env.sample

### Liste des commandes et signification

    setup : Initialisation du frontend et du backend ainsi que des outils
    dev : Démarrage des trois serveurs (frontend + backend + admin) dans un même terminal
    dev-front : Démarrage d'un serveur React pour le frontend
    dev-back : Démarrage d'un serveur Express pour le backend
    dev-admin : Démarrage d'un serveur React pour l'admin
    lint : Exécute des outils de validation de code (sera exécutée automatiquement à chaque commit)
    fix : Fixe les erreurs de formatage (à lancer si lint ne passe pas)

## Equipe

Une équipe de développeurs en formation de mars à juin 2022 à la Wild Code School de Lille

- [Amar](https://github.com/Dash293)
- [Faycel](https://github.com/n-faycel)
- [Rémi](https://github.com/remi59800)
- [Jérémy](https://github.com/jeremyjorand)
- [Juliane](https://github.com/ilalande)
- [Thomas](https://github.com/ThomasDCW)
