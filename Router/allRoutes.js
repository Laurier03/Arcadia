import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/habitats", "Nos Habitats", "/pages/habitats.html", []),
    new Route("/contact", "Contact", "/pages/contact.html", []),
    new Route("/services", "Nos Services", "/pages/services.html", []),
    new Route("/connexion", "Connexion", "/pages/connexion.html", ["disconnected"], "/js/auth/connexion.js"),
    new Route("/admin", "Admin", "/pages/admin.html", ["admin"], "/js/auth/admin.js"),
    new Route("/employe", "Employé", "/pages/employe", ["employé","admin"]),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";