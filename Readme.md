# Zoo ARCADIA
L’objectif du sujet est de développer un site web pour un zoo nommé Arcadia qui
permettra aux visiteurs de pouvoir se renseigner sur le zoo concernant ses habitats et ses
animaux ainsi que leur état de santé. En effet, en plus d’être un site vitrine pour le zoo, le
site doit également permettre aux employés et aux vétérinaires travaillant pour/avec le
zoo et qui sont donc déjà inscrit par l’admin. Ce dernier quant à lui, qui sera le propriétaire,
aura accès à toutes les options de modification du site notamment concernant les
modifications, les ajouts ou les suppression des animaux ou des habitats ainsi que des
images et des textes du site. Les employés auront la possibilité d’inscrire la quantité et le
type de nourriture donné à chaque animal et l’heure de repas, il pourra également valider
ou invalider les avis laissés par les visiteurs sur le site. Les vétérinaires auront la possibilité
de laisser un compte rendu sous la forme de formulaire dans lequel ils pourront inscrire
des informations concernant les animaux (leur état de santé, les détails de l’animal, un avis
du médecin) ainsi que sur les habitat (état, avis). Les visiteurs quant à eux pourront laisser
un avis sur le site à condition de laisser un pseudo, en revanche s’ils souhait utiliser la page
contact ils devront y laisser leur mail afin de recevoir une réponse.

On devra construire plusieurs pages, une page d’accueil, une page habitat, une page
contact, une page de services et une page de connexion. La page d’accueil doit résumer 
toutes les informations du site en présentant brièvement les habitats, les services, les avis.
La page habitat doit présenter non seulement chaque habitat mais aussi chaque animal
qu’il contient, on devra donc utiliser une base de données relationnelle pour établir les
liens entre chaque entité. De plus, il faudra intégrer un compteur de clics pour déterminer
la popularité des animaux, pour ce faire on fera appel à une base de données NoSQL.

Identifiants et Mots de passe

Admin
Identifiant: admin
mot de passe: Arcadia2024

Technologies utilisées :

Front : 
J’ai décidé d’utiliser HTML, CSS, Javascript ainsi que le framework Bootstrap pour pouvoir mettre en place des pages web dynamiques et responsives. Ainsi notre application pourra s’adapter aux différents appareils peu importe la taille de l’écran ou la configuration.

Back:
Pour le back j’ai décidé d’utiliser le framework symfony ainsi que php pour construire une API dédiée à notre projet

Base de données relationnelle:
Pour la base de données, j’ai utilisé MySQL avec Xampp donc avec MariaDB.

Base de données NoSQL:
Concernant la base de données NoSQL j’ai décidé d’utiliser MongoDB car il me permet de stocker les statistiques de consultation des animaux dans un format JSON.

Déploiement:
Pour le déploiement j’ai décidé d’utiliser Heroku car plus simple à utiliser pour le déploiement.

Git-hub: https://github.com/Laurier03/Arcadia.git

Le projet n'étant pas complétement abouti et donc non déployé, je vous invite à utiliser l'extension PHP Server sur VSCode pour pouvoir visualiser les pages du site.