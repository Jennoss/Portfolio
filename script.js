const fullscreen = document.getElementById("fullscreen");
const fullScreenToggler = document.getElementById("fullScreenToggler");
let cards = document.getElementsByClassName("cards");

var elem = document.getElementById("fullscreen");

const aboutMe = document.getElementById("about-me");
const homePage = document.getElementById("home");
const certification = document.getElementById("certification");
const formation = document.getElementById("formation");
const gaming = document.getElementById("gaming");
const projet = document.getElementById("projet");
const competences = document.getElementById("competences");
const experience = document.getElementById("experience");
const interest = document.getElementById("interest");

interest.classList.add("display-none");
experience.classList.add("display-none");
competences.classList.add("display-none");
projet.classList.add("display-none");
gaming.classList.add("display-none");
homePage.classList.remove("display-none");
aboutMe.classList.add("display-none");
formation.classList.add("display-none");
certification.classList.add("display-none");

const listGroup = document.getElementsByClassName("list-group-item-action");
const homeCards = document.getElementsByClassName("home-cards");

homeCards[0].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  aboutMe.classList.remove("display-none");
  certification.classList.add("display-none");
  homePage.style.display = "none";
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");

  for (let j = 0; j < listGroup.length; j++) {
    listGroup[j].classList.remove("active-menu");
    listGroup[j].classList.add("non-active-menu");
    listGroup[j].children[0].children[0].classList.remove("white-color");
  }

  listGroup[1].children[0].children[0].classList.add("white-color");

  if (listGroup[1].classList.contains("non-active-menu")) {
    listGroup[1].classList.replace("non-active-menu", "active-menu");
  }
  if (
    !listGroup[1].classList.contains("active-menu") &&
    !listGroup[1].classList.contains("non-active-menu")
  ) {
    listGroup[1].classList.add("active-menu");
  }
});

homeCards[1].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  projet.classList.remove("display-none");
  projet.style.display = "block";
  competences.classList.add("display-none");
  homePage.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");

  for (let j = 0; j < listGroup.length; j++) {
    listGroup[j].classList.remove("active-menu");
    listGroup[j].classList.add("non-active-menu");
    listGroup[j].children[0].children[0].classList.remove("white-color");
  }

  listGroup[7].children[0].children[0].classList.add("white-color");

  if (listGroup[7].classList.contains("non-active-menu")) {
    listGroup[7].classList.replace("non-active-menu", "active-menu");
  }
  if (
    !listGroup[7].classList.contains("active-menu") &&
    !listGroup[7].classList.contains("non-active-menu")
  ) {
    listGroup[7].classList.add("active-menu");
  }
});

homeCards[2].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  competences.style.display = "block";
  competences.classList.remove("display-none");
  homePage.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
  projet.classList.add("display-none");

  for (let j = 0; j < listGroup.length; j++) {
    listGroup[j].classList.remove("active-menu");
    listGroup[j].classList.add("non-active-menu");
    listGroup[j].children[0].children[0].classList.remove("white-color");
  }

  listGroup[4].children[0].children[0].classList.add("white-color");

  if (listGroup[4].classList.contains("non-active-menu")) {
    listGroup[4].classList.replace("non-active-menu", "active-menu");
  }
  if (
    !listGroup[4].classList.contains("active-menu") &&
    !listGroup[4].classList.contains("non-active-menu")
  ) {
    listGroup[4].classList.add("active-menu");
  }
});

homeCards[3].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.remove("display-none");
  homePage.style.display = "none";
  competences.classList.add("display-none");
  projet.classList.add("display-none");

  for (let j = 0; j < listGroup.length; j++) {
    listGroup[j].classList.remove("active-menu");
    listGroup[j].classList.add("non-active-menu");
    listGroup[j].children[0].children[0].classList.remove("white-color");
  }

  listGroup[2].children[0].children[0].classList.add("white-color");

  if (listGroup[2].classList.contains("non-active-menu")) {
    listGroup[2].classList.replace("non-active-menu", "active-menu");
  }
  if (
    !listGroup[2].classList.contains("active-menu") &&
    !listGroup[2].classList.contains("non-active-menu")
  ) {
    listGroup[2].classList.add("active-menu");
  }
});

homeCards[4].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.remove("display-none");
  homePage.style.display = "none";
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");

  for (let j = 0; j < listGroup.length; j++) {
    listGroup[j].classList.remove("active-menu");
    listGroup[j].classList.add("non-active-menu");
    listGroup[j].children[0].children[0].classList.remove("white-color");
  }

  listGroup[6].children[0].children[0].classList.add("white-color");

  if (listGroup[6].classList.contains("non-active-menu")) {
    listGroup[6].classList.replace("non-active-menu", "active-menu");
  }
  if (
    !listGroup[6].classList.contains("active-menu") &&
    !listGroup[6].classList.contains("non-active-menu")
  ) {
    listGroup[6].classList.add("active-menu");
  }
});

homeCards[5].addEventListener("click", () => {
  interest.classList.remove("display-none");
  interest.style.display = "block";
  homePage.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");
  experience.classList.add("display-none");

  for (let j = 0; j < listGroup.length; j++) {
    listGroup[j].classList.remove("active-menu");
    listGroup[j].classList.add("non-active-menu");
    listGroup[j].children[0].children[0].classList.remove("white-color");
  }

  listGroup[5].children[0].children[0].classList.add("white-color");

  if (listGroup[5].classList.contains("non-active-menu")) {
    listGroup[5].classList.replace("non-active-menu", "active-menu");
  }
  if (
    !listGroup[5].classList.contains("active-menu") &&
    !listGroup[5].classList.contains("non-active-menu")
  ) {
    listGroup[5].classList.add("active-menu");
  }
});

homeCards[6].addEventListener("click", () => {
  interest.classList.add("display-none");
  homePage.classList.add("display-none");
  experience.style.display = "block";
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");
  experience.classList.remove("display-none");

  for (let j = 0; j < listGroup.length; j++) {
    listGroup[j].classList.remove("active-menu");
    listGroup[j].classList.add("non-active-menu");
    listGroup[j].children[0].children[0].classList.remove("white-color");
  }

  listGroup[3].children[0].children[0].classList.add("white-color");

  if (listGroup[3].classList.contains("non-active-menu")) {
    listGroup[3].classList.replace("non-active-menu", "active-menu");
  }
  if (
    !listGroup[3].classList.contains("active-menu") &&
    !listGroup[3].classList.contains("non-active-menu")
  ) {
    listGroup[3].classList.add("active-menu");
  }
});

for (let i = 0; i < listGroup.length; i++) {
  listGroup[i].addEventListener("click", () => {
    for (let j = 0; j < listGroup.length; j++) {
      listGroup[j].classList.remove("active-menu");
      listGroup[j].classList.add("non-active-menu");
      listGroup[j].children[0].children[0].classList.remove("white-color");
    }

    listGroup[i].children[0].children[0].classList.add("white-color");

    if (listGroup[i].classList.contains("non-active-menu")) {
      listGroup[i].classList.replace("non-active-menu", "active-menu");
    }
    if (
      !listGroup[i].classList.contains("active-menu") &&
      !listGroup[i].classList.contains("non-active-menu")
    ) {
      listGroup[i].classList.add("active-menu");
    }
  });
}

listGroup[5].addEventListener("click", () => {
  interest.classList.remove("display-none");
  interest.style.display = "block";
  homePage.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");
  experience.classList.add("display-none");
});

listGroup[3].addEventListener("click", () => {
  interest.classList.add("display-none");
  homePage.classList.add("display-none");
  experience.style.display = "block";
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");
  experience.classList.remove("display-none");
});

listGroup[0].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  homePage.classList.remove("display-none");
  homePage.style.display = "block";
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");
});

listGroup[1].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  aboutMe.classList.remove("display-none");
  certification.classList.add("display-none");
  homePage.style.display = "none";
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");
});

listGroup[6].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.remove("display-none");
  homePage.style.display = "none";
  formation.classList.add("display-none");
  competences.classList.add("display-none");
  projet.classList.add("display-none");
});

listGroup[2].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.remove("display-none");
  homePage.style.display = "none";
  competences.classList.add("display-none");
  projet.classList.add("display-none");
});

listGroup[4].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  competences.style.display = "block";
  competences.classList.remove("display-none");
  homePage.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
  projet.classList.add("display-none");
});

listGroup[7].addEventListener("click", () => {
  interest.classList.add("display-none");
  experience.classList.add("display-none");
  projet.classList.remove("display-none");
  projet.style.display = "block";
  competences.classList.add("display-none");
  homePage.classList.add("display-none");
  aboutMe.classList.add("display-none");
  certification.classList.add("display-none");
  formation.classList.add("display-none");
});

//Full screen -----------------------------
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

//END ---------------- Full screen

fullScreenToggler.addEventListener("click", () => {
  openFullscreen();
  closeFullscreen();
});

function sendMessage(imageUrl, message, name) {
  let today = new Date();
  let getHours = today.getHours();
  let getMinutes = today.getMinutes();

  const container = document.getElementById("chatContainer");

  const chatContainer = document.createElement("div");
  chatContainer.classList.add("row", "mb-3");
  container.appendChild(chatContainer);

  const chat = document.createElement("div");
  chat.classList.add("pt-3", "ps-3", "d-flex", "align-items-center");
  chatContainer.appendChild(chat);

  const image = document.createElement("img");
  image.classList.add("rounded-pill");
  image.style.height = "35px";
  image.style.width = "35px";
  image.src = imageUrl;

  chat.appendChild(image);

  const chatInfos = document.createElement("div");
  chat.appendChild(chatInfos);
  chatInfos.classList.add("d-flex", "flex-column", "px-2");

  const spanName = document.createElement("span");
  spanName.classList.add("text-secondary", "d-flex", "aujd");
  chatInfos.appendChild(spanName);

  const h5 = document.createElement("h5");
  h5.classList.add("inspi");
  h5.innerHTML = name;
  h5.style.color = "white!important";
  spanName.appendChild(h5);

  spanName.innerHTML += "Aujourd'hui à " + getHours + ":" + getMinutes;

  const messages = document.createElement("span");
  messages.classList.add("text-white", "para");
  messages.innerHTML = message;
  chatInfos.appendChild(messages);
}

const writing = document.getElementsByClassName("writing")[0];
const writingContainer = document.getElementById("spinner");
const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * seconds));
const input = document.getElementById("input");
input.value = "";
let istrue = false;

function firstMessage() {
  const remove = document.getElementById("remove");

  let today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  const container = document.getElementById("chatContainer");
  container.innerHTML = "";
  const firstMessage = document.getElementById("firstMessage");
  const bot = document.getElementById("bot");
  const dateConv = document.getElementById("dateConv");
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  dateConv.innerHTML =
    dd + " " + monthNames[today.getMonth()] + " " + today.getFullYear();

  firstMessage.addEventListener("click", async () => {
    remove.style.display = "block";
    const delay = (seconds) =>
      new Promise((resolve) => setTimeout(resolve, 1000 * seconds));
    bot.style.display = "none";
    sendMessage(
      "./img/jhon.png",
      "Bonjour Issam ! Comment allez-vous ?",
      "John Doe"
    );

    setTimeout(function () {
      writing.innerHTML = "Inspi est en train d'écrire...";
      writingContainer.style.visibility = "visible";
    }, 2000);

    setTimeout(function () {
      writing.innerHTML = "Inspi est en train d'écrire...";
      writingContainer.style.visibility = "hidden";
      setTimeout(function () {
        sendMessage(
          "./img/sung.png",
          "Je vais très bien et vous ? &#128512",
          "Inspi"
        );
      }, 550);
    }, 4000);

    setTimeout(async function () {
      let text = "Je vais bien merci ! Pouvez vous m'en dire plus sur vous ?";
      for (let i = 0; i < text.length; i++) {
        await delay(0.05);
        input.value += text[i];
      }
      await delay(0.1);
      input.value = "";
      sendMessage(
        "./img/jhon.png",
        "Je vais bien merci ! Pouvez vous m'en dire plus sur vous ?",
        "John Doe"
      );

      await delay(2);
      writing.innerHTML = "Inspi est en train d'écrire...";
      writingContainer.style.visibility = "visible";

      await delay(0.5);
      writing.innerHTML = "Inspi est en train d'écrire...";
      writingContainer.style.visibility = "hidden";
      await delay(0.5);
      sendMessage("./img/sung.png", "Bien sûr &#128526", "Inspi");

      await delay(1);
      writing.innerHTML = "Inspi est en train d'écrire...";
      writingContainer.style.visibility = "visible";

      await delay(2);
      writingContainer.style.visibility = "hidden";
      await delay(0.5);
      sendMessage(
        "./img/sung.png",
        "Je m'appelle Issam AZARKANE, j'ai 25 ans et je suis actuellement en 2e année d'étude en alternance à l'ESGI",
        "Inspi"
      );
      await delay(2);
      writingContainer.style.visibility = "visible";
      await delay(3);
      writingContainer.style.visibility = "hidden";
      await delay(0.5);
      sendMessage(
        "./img/sung.png",
        "Mon but est d'obtenir un Master en Ingénierie du Web pour devenir, dans un premier temps, développeur FullStack !",
        "Inspi"
      );
      await delay(3);
      let text2 = "Merci ! Êtes-vous actuellement disponible ?";
      for (let i = 0; i < text2.length; i++) {
        await delay(0.05);
        input.value += text2[i];
      }
      await delay(0.1);
      input.value = "";
      sendMessage(
        "./img/jhon.png",
        "Merci ! Êtes-vous actuellement disponible ?",
        "John Doe"
      );
      await delay(2);
      writingContainer.style.visibility = "visible";
      await delay(2);
      writingContainer.style.visibility = "hidden";
      await delay(0.5);
      sendMessage(
        "./img/sung.png",
        "Je suis effectivement à la recherche d'une alternance dans le développement Web !",
        "Inspi"
      );
      await delay(2);
      writingContainer.style.visibility = "visible";
      await delay(2);
      writingContainer.style.visibility = "hidden";
      await delay(0.5);
      sendMessage(
        "./img/sung.png",
        "Si mon profil vous intéresse et que vous voulez en savoir plus sur moi, je vous invite à consulter les autres sections ! Bonne visite &#128526",
        "Inspi"
      );
    }, 6000);

    // setTimeout(function() {
    //     setTimeout(function() {
    //         sendMessage("./img/jhon.png", "Je vais bien merci &#128077, j'aimerais en apprendre plus sur vous, pouvez vous m'en dire plus ? &#128513 ", "John Doe")
    //     }, 550)
    // }, 6000)
  });
}

firstMessage();
