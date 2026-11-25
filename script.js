const boutonTheme = document.querySelector("#bouton-theme");

boutonTheme.addEventListener("click", function () {
  document.body.classList.toggle("sombre");

  if (document.body.classList.contains("sombre")) {
    boutonTheme.textContent = "Mode clair";
  } else {
    boutonTheme.textContent = "Mode sombre";
  }
});

const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");

curseur.addEventListener("input", function () {
  document.body.style.fontSize = curseur.value + "%";
  valeurTaille.textContent = curseur.value + "%";
});

const heure = new Date().getHours();
const salutation = document.querySelector("#salutation");

if (heure < 12) {
  salutation.textContent = "Bonjour, bonne lecture !";
} else if (heure < 18) {
  salutation.textContent = "Bon après-midi, bonne lecture !";
} else {
  salutation.textContent = "Bonsoir, bonne lecture !";
}

const POIDS_PAGE_MO = 2;
const champPages = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");

document.querySelector("#bouton-calculer").addEventListener("click", function () {
  const pagesParJour = Number(champPages.value);
  const goParAn = Math.round((pagesParJour * POIDS_PAGE_MO * 365) / 1000);

  let message = "Environ " + goParAn + " Go par an.";

  if (goParAn < 10) {
    message = message + " C'est une consommation légère.";
  } else if (goParAn < 100) {
    message = message + " C'est une consommation modérée.";
  } else {
    message = message + " C'est une consommation importante.";
  }

  resultat.textContent = message;
});