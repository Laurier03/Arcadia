export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconectés
["employé"] -> Réserver aux utilisateurs employé
["vétérinaire"] -> Réserver aux utilisateurs vétérinaire
["admin"] -> Réserver aux utilisateurs admins
["admin","employé"] -> Reserver aux admins et employés
["admin","vétérinaire"] -> Reserver aux admins et vétérinaire
*/