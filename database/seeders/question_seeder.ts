import { BaseSeeder } from '@adonisjs/lucid/seeders'
// 1. Mise à jour des imports pour correspondre aux noms de fichiers TQuestionVisiteurs et TQuestionEtudiant
import TQuestionVisiteur from '#models/question_visiteur'
import TQuestionEtudiant from '#models/question_etudiant'

export default class QuestionSeeder extends BaseSeeder {

  // La méthode 'run' est exécutée lors de l'appel à 'node ace db:seed'
  async run() {

    // --- 1. QUESTIONS VISITEUR (Profilage Dev vs Infra) ---

    // Suppression des anciennes données de la table pour éviter les doublons à chaque exécution du seeder
    await TQuestionVisiteur.query().delete()

    const questionsVisiteur = [
      {
        question: 'Tu préfères passer ta journée à...',
        optionAText: '...déboguer un code qui refuse de compiler.',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: '...diagnostiquer un serveur qui refuse de redémarrer.',
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: 'Ton défi idéal :',
        optionAText: 'Construire une application web complexe de A à Z.',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: "Blinder un réseau d'entreprise contre les cyberattaques.",
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: 'Quelle victoire te procure le plus de satisfaction ?',
        optionAText: "Voir ton programme s'exécuter parfaitement après 100 tests ratés.",
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: 'Voir ton infrastructure résister sans panne à une attaque DDoS.',
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: 'Tu préfères passer 3 heures à chercher...',
        optionAText: '...le point-virgule manquant qui bloque tout le code.',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: '...le câble réseau débranché dans une salle serveur.',
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: "Ton type d'optimisation préféré :",
        optionAText: 'Rendre une application 50% plus rapide (optimisation logicielle).',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText:
          "Permettre à une infrastructure de gérer 50% d'utilisateurs en plus (scalabilité).",
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: 'Ton environnement de travail principal :',
        optionAText: 'Un IDE moderne comme Visual Studio Code.',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: 'Un terminal Linux en ligne de commande (CLI).',
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: 'Tu préfères...',
        optionAText: "...construire l'application mobile que tout le monde s'arrache.",
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: "...bâtir l'infrastructure cloud qui lui permet de tourner sans latence.",
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: 'Urgence à 2h du matin. Tu préfères...',
        optionAText: '...déboguer un bug critique en production (avec du café).',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: '...rétablir un serveur critique en panne (avec de la pizza).',
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: "Comment préfères-tu être le 'héros' du jour ?",
        optionAText: 'En livrant la nouvelle fonctionnalité que tout le monde attendait.',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: 'En rétablissant la connexion ou le service quand tout était en panne.',
        optionBSection: 'infra',
        optionBPoids: 3,
      },
      {
        question: 'Quelle tâche te semble la plus gratifiante ?',
        optionAText: 'Écrire le CSS parfait pour une interface utilisateur (UI).',
        optionASection: 'dev',
        optionAPoids: 3,
        optionBText: 'Configurer un pare-feu (firewall) pour bloquer une menace.',
        optionBSection: 'infra',
        optionBPoids: 3,
      },
    ]

    // Insertion dans la base de données
    await TQuestionVisiteur.createMany(questionsVisiteur)


    // --- 2. QUESTIONS ÉTUDIANT (Score pondéré) ---

    // Suppression des anciennes données de la table
    await TQuestionEtudiant.query().delete()

    const questionsEtudiant = [
      // --- Culture Dév / Général ---
      // --- PARTIE DEV ---
      {
        question: "Dans un algorithme, à quoi sert une 'boucle' (loop) ?",
        reponse1Text: "À vérifier une seule fois si une variable est vraie ou fausse.",
        reponse1Poids: 0,
        reponse1Section: null, 

        reponse2Text: "À répéter un bloc d'instructions tant qu'une condition est respectée.",
        reponse2Poids: 10,
        reponse2Section: 'dev', // ✅ DEV

        reponse3Text: "À parcourir les éléments d'une liste un par un.",
        reponse3Poids: 5,
        reponse3Section: 'dev', // ✅ DEV

        reponse4Text: "À fermer le programme proprement.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
      {
        question: "Quelle est la fonction principale d'un IDE (ex: Visual Studio Code) ?",
        reponse1Text: "C'est un simple éditeur de texte coloré.",
        reponse1Poids: 5,
        reponse1Section: 'dev', // ✅ DEV

        reponse2Text: "Logiciel tout-en-un (éditeur, débogueur, compilation).",
        reponse2Poids: 10,
        reponse2Section: 'dev', // ✅ DEV

        reponse3Text: "Le nom technique du langage.",
        reponse3Poids: 0,
        reponse3Section: null,

        reponse4Text: "Un outil de gestion de projet.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
      {
        question: "Qu'est-ce qu'une 'Clé Primaire' dans une BDD ?",
        reponse1Text: "Le mot de passe principal.",
        reponse1Poids: 0,
        reponse1Section: null,

        reponse2Text: "Un numéro pour faire joli.",
        reponse2Poids: 0,
        reponse2Section: null,

        reponse3Text: "Un identifiant pour retrouver une ligne.",
        reponse3Poids: 5,
        reponse3Section: 'dev', // ✅ DEV

        reponse4Text: "Un champ garantissant l'identification unique.",
        reponse4Poids: 10,
        reponse4Section: 'dev', // ✅ DEV
      },
      {
        question: "Pourquoi évite-t-on la redondance dans les données ?",
        reponse1Text: "Pour garantir la cohérence et éviter les contradictions.",
        reponse1Poids: 10,
        reponse1Section: 'dev', // ✅ DEV

        reponse2Text: "Pour éviter que la BDD plante.",
        reponse2Poids: 0,
        reponse2Section: null,

        reponse3Text: "Pour économiser de l'espace disque.",
        reponse3Poids: 5,
        reponse3Section: 'dev', // ✅ DEV

        reponse4Text: "Pour l'impression papier.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
      {
        question: "Que signifie une cardinalité '1,n' ?",
        reponse1Text: "Reliée à une seule autre entité max.",
        reponse1Poids: 0,
        reponse1Section: null,

        reponse2Text: "Relation obligatoire.",
        reponse2Poids: 5,
        reponse2Section: 'dev', // ✅ DEV

        reponse3Text: "Erreur de syntaxe.",
        reponse3Poids: 0,
        reponse3Section: null,

        reponse4Text: "Reliée à au moins une, et potentiellement plusieurs.",
        reponse4Poids: 10,
        reponse4Section: 'dev', // ✅ DEV
      },

      // --- PARTIE INFRA ---
      {
        question: "Qu'est-ce qu'un 'Pilote' (Driver) ?",
        reponse1Text: "Programme traducteur entre OS et matériel.",
        reponse1Poids: 10,
        reponse1Section: 'infra', // 🟧 INFRA

        reponse2Text: "L'administrateur du PC.",
        reponse2Poids: 0,
        reponse2Section: null,

        reponse3Text: "Le logiciel de l'imprimante pour l'encre.",
        reponse3Poids: 5,
        reponse3Section: 'infra', // 🟧 INFRA

        reponse4Text: "Le ventilateur.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
      {
        question: "Pourquoi partitionner un disque dur (C: et D:) ?",
        reponse1Text: "Pour doubler la vitesse.",
        reponse1Poids: 0,
        reponse1Section: null,

        reponse2Text: "Séparer le système des données (maintenance).",
        reponse2Poids: 10,
        reponse2Section: 'infra', // 🟧 INFRA

        reponse3Text: "Mieux organiser les dossiers.",
        reponse3Poids: 5,
        reponse3Section: 'infra', // 🟧 INFRA

        reponse4Text: "Cacher des fichiers.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
      {
        question: "À quoi sert un onduleur (UPS) ?",
        reponse1Text: "Stabiliser la tension électrique.",
        reponse1Poids: 5,
        reponse1Section: 'infra', // 🟧 INFRA

        reponse2Text: "Fournir une alimentation de secours.",
        reponse2Poids: 10,
        reponse2Section: 'infra', // 🟧 INFRA

        reponse3Text: "Améliorer le Wi-Fi.",
        reponse3Poids: 0,
        reponse3Section: null,

        reponse4Text: "Bloquer les sites dangereux.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
      {
        question: "Différence majeure entre Switch et Hub ?",
        reponse1Text: "Le Switch cible le destinataire, le Hub diffuse à tous.",
        reponse1Poids: 10,
        reponse1Section: 'infra', // 🟧 INFRA

        reponse2Text: "Le Switch est le standard actuel.",
        reponse2Poids: 5,
        reponse2Section: 'infra', // 🟧 INFRA

        reponse3Text: "Switch = Wi-Fi, Hub = Câble.",
        reponse3Poids: 0,
        reponse3Section: null,

        reponse4Text: "C'est pareil.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
      {
        question: "Qu'est-ce que le RAID 1 (Mirroring) ?",
        reponse1Text: "Copier sur le Cloud.",
        reponse1Poids: 0,
        reponse1Section: null,

        reponse2Text: "Écrire les mêmes données sur deux disques (Panne).",
        reponse2Poids: 10,
        reponse2Section: 'infra', // 🟧 INFRA

        reponse3Text: "Sauvegarde automatique.",
        reponse3Poids: 5,
        reponse3Section: 'infra', // 🟧 INFRA

        reponse4Text: "Doubler la vitesse.",
        reponse4Poids: 0,
        reponse4Section: null,
      },
    ]

    await TQuestionEtudiant.createMany(questionsEtudiant)
  }
}