# Tpsyn
# Projet final du cours 420-345 



# Les étapes de développement du projet certificatif



1. Créer le projet

  ng n NOM_PROJET --routing



2. Lancer le VSC (visual studio code)



3. Installer les librairies

   * npm i bootstrap --save

   * npm i jquery  --save

   * npm i @fortawesome/fontawesome-free --save

   * npm i json-server --save

   

 4. Configuration des librairies dans le fichier angular.json en ajustant les balises Style et Scripts comme suit:

 

            "styles": [

              "node_modules/bootstrap/dist/css/bootstrap.min.css",

              "node_modules/@fortawesome/fontawesome-free/css/all.min.css"

            ],

            "scripts": [

              "node_modules/jquery/dist/jquery.min.js",           

              "node_modules/bootstrap/dist/js/bootstrap.min.js"

            ]

   

   5. Changer (supprimer) le code HTML du fichier app.component.html

   

   6. Ajouter dans le fichier app.module.ts les objets suivants :

      * HttpClientModule  (importer de @angular/common/http)

      * FormsModule (importer de '@angular/forms')



   7. Lancer l'application (package.json)

     

     ng serve  ==> cela lance l'application 

                ==> En option on pourra changer le port dans le fichier package.json comme suit : ng serve --port XXXX

     ng lint  ==> 

     ng test ==>

     ng e2e ==>

========================================
Fix pour l'insertion d'image afin que clea soit deployer sur githubpages
[src]="['Chemin vers l'image']"

Syntaxe pour la balise RouterLink
[routerLink]="['/formulaire']"
=====================================
Utilisation de Github => Pousser le code et déployer l'application

1)- Connecter mon projet à mon repertoire Github distant (remote)
 git remote add origin

2)- Preparer le paquet de fichier a envoyer (Stage)
 git add .

3)- Commit les fichiers
 git commit -m "Le message"

4)- Pousser le code
 git push -u origin master 

 ==========Déployer l'application dans GithubPages==========
 1) - Modifier le fichier angular.json comme suit:
 la balise "outputPath": "dist/nomDuProjet"/ deviendra "outputPath":"docs/
 En gros changer dit/nomDuProjet/ par docs/

 2)- Builder le projet (Creer une image de votre application a l'instant T qui sera deployee)
 ng build --prod --base-href="https://anxs07.github.io/repositoryName/"

 3)- Pousser le code (git add . && git commit -)

 4)- Aller dans Github/Settings  de ton repository

 5)- Dans l'option source: choisir la branche Master / docs et cliquer sur save

 6)- Attendre un petit moment (laisser le temps de deploiement au serveur distant) 
 https://anxs07.github.io/final

 ======================

 Commande pour creer un module
 ng generate module nom_MODULE --route NOM_MODULE
