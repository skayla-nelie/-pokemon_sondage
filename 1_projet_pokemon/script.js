//MODULE 1
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
    setTimeout(Login(), {}, 2000);
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

//MODULE 2

// const pokemonStart = ["1.Charmander", "2.Pikachu", "3.Squirtle", "4.Bulbasaur"];
// let text = "";
// for (let x of pokemonStart) {
//   text += x + "<br>";
// }
// document.getElementById("txt").innerHTML = text;

(() => alert("Bienvenue sur notre site pokemon"))();
//2) une deuxième qui est une fonction d’ordre supérieure

//3) une troisième qui est une fonction de fermeture

//MODULE 3
class Utilisateur {
  constructor(prenom, nom, age, sexe) {
    this.prenom = prenom;
    this.nom = nom;
    this.nom = age;
    this.nom = sexe;
  }
}
//➢ la classe Question qui correspond aux questions de votre sondage. sky(12)
class Question {
  constructor(
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16
  ) {
    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
    this.q4 = q4;
    this.q5 = q5;
    this.q6 = q6;
    this.q7 = q7;
    this.q8 = q8;
    this.q9 = q9;
    this.q10 = q10;
    this.q11 = q11;
    this.q12 = q12;
    this.q13 = q13;
    this.q14 = q14;
    this.q15 = q15;
    this.q16 = q16;
  }
  present() {
    return " Question # " + this.sentence;
  }
}

class answer extends Question {
  constructor(question, rep) {
    super(question);
    this.answer = rep;
  }
  show() {
    return this.present() + ",  " + this.answer;
  }
}

myQuestion1 = new answer(
  "1. Quel pokemon choissiriez vous pour commencer votre aventure?",
  "<br> a.pikachu <br> b.squirtle <br> c.bulbasaur <br> c.chamander"
);
document.getElementById("question").innerHTML = myQuestion1.show();

//question 1:  Quel est votre prénom?
//question 2:  Quel est votre nom?
//question 3:  Quel est votre âge?
//question 4:  Quel est votre sexe?
//question 5:  Quelle pokémon choisiriez-vous pour débuter votre quête en tant que dresseur pokemon?
//question 6:  Quel est la région d'origine du personnage principale (ash ketchum) de la série pokemon: kanto,johto, hoenn ou sinnoh?
//question 7:  Selon vous, quel est le meilleur élément: feu, glace, plante, eau, électricité, ténèbres, wind, dragon, psychique, rock, poison, fée, métal, terre, volant, insecte, combat, fantômes, normal.
//question 8:  Entre ces trois pokemon de type feu, lequel auriez-vous choisi: rapidash, flareon, cinderace.
//question 9:  Entre ces trois pokemon de type eau, lequel auriez-vous choisi: blastoise, vaporeon, poliwhirl.
//question 10: Entre ces trois pokemon de type légendaire, lequel auriez-vous choisi: mewtwo, giratina, zapdos.
//question 11: Entre ces trois pokemon de type légendaire, lequel est le plus fort: mewtwo, giratina, zapdos.
//question 12: Quel est selon toi l'élément de ce pokemon?(xerneas,fée)
//question 13: Quel est selon toi l'élément de ce pokemon?(ninetails, feu)
//question 14: Quel est selon toi l'élément de ce pokemon?(machamp, combat)
//question 15: Si on te donne le choix entre 2 jeux de pokemon qui te sont offert gratuitement, lequel choisirait tu, sachant qu'a la fin du jeux tu finira avec le pokemon qui est en couverture?(pokemon sword and shield.)
//question 16: Si on te donne le choix entre 2 jeux de pokemon qui te sont offert gratuitement, lequel choisirait tu, sachant qu'a la fin du jeux tu finira avec le pokemon qui est en couverture(scarlet and violet.)
fetch("user.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    show(data);
  });

fetch("answer.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    show(data);
  });
//2) Ajouter une sous-classe qui hérite d’une des classes créées. sky

//3) Instancier les objets nécessaires à votre code qui à partir des classes et sous-classe
//correspondantes. xavier

$(document).ready(function () {
  $(".primaryContained").on("click", function () {
    $(".comment").addClass("commentClicked");
  }); //end click
  $("textarea").on("keyup.enter", function () {
    $(".comment").addClass("commentClicked");
  }); //end keyup
}); //End Function

new Vue({
  el: "#commentaire",
  data: {
    title: "Ajouter commentaire",
    newItem: "",
    item: [],
  },
  methods: {
    addItem() {
      this.item.push(this.newItem);
      this.newItem = "";
    },
  },
});
