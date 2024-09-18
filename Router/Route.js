export default function Route(url, title, pathHtml, authorize, pathJS = "") {
    return {
        url: url,
        title: title,
        pathHtml: pathHtml,
        pathJS: pathJS,
        authorize: authorize
    };
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