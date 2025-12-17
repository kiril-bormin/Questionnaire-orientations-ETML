# Questionnaire Orientations ETML

Ce projet permet de gérer le questionnaire d'orientation pour l'ETML. Il est construit avec **Node.js** et le framework **AdonisJS**.

<img width="510" height="287" alt="image" src="https://github.com/user-attachments/assets/f6d971fd-aa59-432e-bbce-39a0ac09b7a3" />

##  Prérequis

Les outils suivants sont requis pour fonctionner le programme :

* **Node.js** (version 18 ou supérieure)
* **Docker**

##  Installation

### 1. Base de données
Vous devez aller sur votre **phpMyAdmin** (ou vous pouvez utiliser un conteneur MySQL via Docker).

1.  Cliquer sur **Une nouvelle base de données**, en haut à gauche de la fênetre:
   
    <img width="214" height="72" alt="image" src="https://github.com/user-attachments/assets/6e32aa58-5ace-4689-8311-897bf6e400cd" />

2.  Dans le champ "Nom de la base de données" vous mettez :
     ```bash
    db_questionnaire_etml
    ```

### 2. Configurer le projet
Ouvrez votre terminal **bash** à la racine du projet et exécutez les commandes suivantes étape par étape :

1.  Installer les dépendances
    ```bash
    npm install
    ```

2.  Copiez le fichier d'exemple pour créer votre fichier de configuration local :
    ```bash
    cp .env.example .env
    ```
    * *Note: ou vous pouvez copier-coller et renommer le fichier via l'explorateur de fichiers.*


3.  Générer la clé unique
    ```bash
    node ace generate:key
    ```

4.  Effectuer la migration avec les seeders
    ```bash
    node ace migration:fresh --seed
    ```
5.  Lancement du projet
    ```bash
    npm run dev
    ```
