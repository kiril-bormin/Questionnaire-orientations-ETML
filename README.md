Il faut avoir Node js installé (version 18 ou supérieure)

Créer un container db dans Docker, avec MySQL

Créer une base de données nommé 'db_questionnaire_etml'

Dans le dossier de ce projet (ex.: "/c/Users/.../Questionnaire-orientations-ETML") utilisant un terminal (bash de préférence) suivre ces étapes:
1. npm i package
2. Créer un fichier .env (faire une copie du fichier .env.example , et le renommer en .env)
3. node ace generate:key
4. node ace migration:fresh --seed
5. npm run dev
