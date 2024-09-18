const galeriImage = document.getElementById("allImage");
let monImage = getImage("nom", "description", "urlImage");

galeriImage.innerHTML = monImage;

function getHabiat(nom, description, urlImage) {
    nom = sanitizeHtml(nom);
    description = sanitizeHtml(description);
    urlImage = sanitizeHtml(urlImage);
    return `<h2 id="savane" class="text-center text-primary">${nom}</h2>
    <div class="image-card text-center">
        <img src="${urlImage}" class="text-center rounded w-100" alt="Eléphant dans la savane">
        <div class="action-image-buttons" data-show="admin">
            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#ModifHabitatModal"><i class="bi bi-pencil-square"></i></button>
            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeleteAnimalModal"><i class="bi bi-x-circle"></i></button>
        </div>
    </div>
    <p class="text-justify pt-4">${description}</p>
    <div class="text-center">
      <button class="btn btn-secondary" data-show="admin">Modifier texte</button>
    </div>`;
}