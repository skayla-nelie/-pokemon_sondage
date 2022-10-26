function connexion() {
  let user = document.login.username.value;
  let password = document.login.password.value;

  if (user == "username" && password == "password") {
    document.location.href = "accueil.html";
  } else {
    alert("Erreur: Nom d'utilisateur ne fonctionne pas");
  }
}

function inscrire() {
  let inputCourriel = document.inscription2.email.value;
  let inputUsername = document.inscription2.user.value;
  let inputPassword = document.inscription2.pw.value;
  let inputConfirmation = document.inscription2.confirm.value;

  if (
    inputCourriel == "" ||
    inputUsername == "" ||
    inputPassword == "" ||
    inputConfirmation == ""
  ) {
    alert("Remplissez tout les champs du formulaire");
    return;
  }

  if (inputConfirmation != inputPassword) {
    alert("La confirmation du mot de passe est invalide.");
    return;
  }

  let utilisateur = {
    username: inputUsername,
    password: inputPassword,
    courriel: inputCourriel,
  };

  let utilisateurJson = JSON.stringify(utilisateur);

  if (typeof localStorage == "undefined") {
    alert(
      "Ce navigateur ne supporte pas de cookies, veuillez y activer les cookies"
    );
    return;
  }

  localStorage.setItem("cookie", utilisateurJson);
  alert("Utilisateur sauvegardé");

  document.getElementById("inscription").style.display = "none";
  document.getElementById("log").style.display = "block";
}

function Login() {
  let userJSON = localStorage.getItem("cookie");
  let utilisateur = JSON.parse(userJSON);

  let inputUsername = document.login.user.value;
  let inputPassword = document.login.pw.value;

  if (
    inputUsername == utilisateur.username &&
    inputPassword == utilisateur.password
  ) {
    document.location.href = "pokemonAccueil.html";
  } else {
    alert("Utilisateur invalide");
  }
}
function afficherInscription() {
  document.getElementById("inscription").style.display = "block";
  document.getElementById("log").style.display = "none";
}
function afficherContact() {
  document.getElementById("Contact").style.display = "block";
  document.getElementById("carrousel").style.display = "none";
  document.getElementById("zoneContenuItem").style.display = "none";
  document.getElementById("zoneContenuFacture").style.display = "none";
  document.getElementById("construction").style.display = "none";
}

//tableau + "for in" ou "for of"
const pokemonStart = ["1.Charmander", "2.Pikachu", "3.Squirtle", "4.Bulbasaur"];
let text = "";
for (let x of pokemonStart) {
  text += x + "<br>";
}
document.getElementById("txt").innerHTML = text;
//ajout 3 fonction dans le code"
(() => alert("Veuillez répondre à ce sondage"))();
//2) une deuxième qui est une fonction d’ordre supérieure

//3) une troisième qui est une fonction de fermeture
let a = 1;
myFunction();

function myFunction() {
  document.getElementById("choix").innerHTML = a * a;
}

//1) Ajoutez 2 classes à votre code :

//➢ la classe Utilisateur : qui correspond aux utilisateurs de votre site web. xavier
//➢ la classe Question qui correspond aux questions de votre sondage. sky(12)
//question 1:  pokemon de debuut
//question 2:  élément du dresseur
//question 3:  région du dresseur
//question 4:  meilleur élément
//question 5:  élément du dresseur
//question 6:  élément du dresseur
//question 7:  élément du dresseur
//question 8:  élément du dresseur
//question 9:  élément du dresseur
//question 10: élément du dresseur
//question 11: élément du dresseur
//question 12: élément du dresseur

//2) Ajouter une sous-classe qui hérite d’une des classes créées. sky

//3) Instancier les objets nécessaires à votre code qui à partir des classes et sous-classe
//correspondantes. xavier
