var a = parent.document.URL.substring(
  parent.document.URL.indexOf("?"),
  parent.document.URL.length
);
var lastC = a.charAt(a.length - 1);
console.log("vovovovovovov " + lastC);
window.onload = console.log(
  "je suis le id de ce lui qui est connecté " +
    localStorage.getItem("storageName")
);
// c'est id de la personne connecté
const UserConnectId = localStorage.getItem("storageName");
function postDataProfil() {
  var last_name = document.getElementById("recipient-last_name").value;
  var first_name = document.getElementById("recipient-first_name").value;
  //var myInputId = document.getElementById("recipient-file");
  //var email = document.getElementById("recipient-email").value;

  //Create new formData object then append file

  fetch(`https://edotofamilyapi.com/patient/${UserConnectId}/`, {
    method: "PATCH",
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      //photo_profil: myInputId,
      //email: email,
      //user: 5,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        document.getElementById("recipient-last_name").value = "";
        document.getElementById("recipient-first_name").value = "";
        console.log(last_name, first_name, lastC);
      } else {
        var result = response.json();
        console.log(result);
        console.log("PAS DE ERROR");
        document.getElementById("recipient-last_name").value = "";
        document.getElementById("recipient-first_name").value = "";
        //document.getElementById("recipient-email").value = "";
      }
    })
    .catch(console.error);
  $("#exampleModalCreate").modal("hide");
  setTimeout(() => {
    location.reload();
  }, 2000);
}

// upDate Profil hospital
// send consultation message
function consultingIdClass(clicked) {
  console.log("alert alert " + clicked);
  $("#modalConfirmMessageSend").modal({
    show: true,
    backdrop: false,
    keyboard: false,
  });
  var displayBlackVidConfirmez = document.getElementById(
    "displayBlackVidConfirmez"
  );
  displayBlackVidConfirmez.addEventListener("click", function () {
    var now = new Date();
    fetch("https://edotofamilyapi.com/api/messages/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        subject: "Pré-consultation",
        content: "Demande d'une pré-consultation via une visioconférence !",
        sender: UserConnectId,
        created_date: now,
        receiver: clicked,
      }),
    }).then(function (response) {
      if (response.ok) {
        console.log(response);
        setTimeout(() => {
          window.location.reload();
          $("#modalConfirmMessageSendConfirm").modal({
            show: true,
            backdrop: false,
            keyboard: true,
          });
        }, 5000);
      } else {
        alert(`Quelque chose s'est mal passé`);
      }
    });
  });
}

// function hospital data

fetch(`https://edotofamilyapi.com/patient/${UserConnectId}/`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((resp) => resp.json())
  .then(function (data) {
    let msgGet = data.messages_received;
    //console.log("nos msgGet " + msgGet);
    return msgGet.map(function (msgGet) {
      //console.log("nos msgGet " + msgGet.content);
      let p = createNode("p");
      p.innerHTML = `
    <ul class="tilesWrap">
    <li>
      
      <h3> ${msgGet.content}</h3>
      
        <img src="assets/images/lesLogosCentre.png" alt="" class="child bounce">
      
      <button class="Payooner">Payer</button> <button class="consultingId" id="${author.id}" onclick="consultingIdClass(this.id)">consulter</button> 
    </li>
  </ul>

    `;

      append(div, p);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

/* On récupère les éléments form et message */
const form = document.getElementById("form");
const message = document.getElementById("message");

/* Lors de la soumission du formulaire on previent
       le comportement par défaut */
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  /* L'astuce pour IE, si vous n'utilisez pas de polyfill, consiste
    à inviter l'utilisateur à utiliser un autre navigateur */
  if (!window.fetch || !window.FormData) {
    alert(
      "Tu crois que c'est du respect mon garçon ? Est ce que tu crois que c'est du respect d'utiliser un navigateur archaïque ?"
    );
    return;
  }

  /* Lorsque l'on instancie FormData on peut lui passer un élément
    form en paramètre. De cette façon, FormData peut detecter chaque
    input du formulaire et leur valeur.
    Ici, this fait référence à form */
  const formData = new FormData(this);

  try {
    /* fetch() prend en 1er paramètre l'url et en second paramètre
      les options. Ici, nous indiquons que notre requête sera en POST
      et que le corps de la requête sera constitué de nos formData. */

    await fetch(`https://edotofamilyapi.com/patient/${UserConnectId}/`, {
      method: "PATCH",
      body: formData,
    });

    // On affiche un message suivant le résultat de la requête
    message.innerText = "Fichier uploadé avec succès \\o/";
  } catch (error) {
    message.innerText =
      "C'est la cata, c'est la cata, c'est la catastrophe /o\\";
  }

  // On réinitialise le formulaire
  this.reset();

  // On efface le message après deux secondes
  setTimeout(() => {
    message.innerText = "";
  }, 2000);
});
