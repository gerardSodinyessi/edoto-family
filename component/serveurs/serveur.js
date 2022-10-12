const UserConnectId = localStorage.getItem("storageName");
if (UserConnectId) {
  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const div = document.getElementById("autorsId");
  const divaHy = document.getElementById("myDropdownIdWhatyY");
  const url = "https://edotofamilyapi.com/medecin/";

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let authors = data.results;
      //console.log('MON CORIS BAS ' + authors);
      return authors.map(function (author) {
        //console.log("MON CORIS BAS " + author);
        let p = createNode("p");
        let a = createNode("a");
        a.innerHTML = `
        <div
        class="wcs_popup_person"
        data-number="${author.tel}"
        data-availability='{ "monday":"08:30-18:30", "tuesday":"08:30-18:30", "wednesday":"08:30-18:30", "thursday":"08:30-18:30", "friday":"08:30-18:30" }'
        style="margin-bottom: 6vh;">
        <div class="wcs_popup_person_img">
        <img src="./assets/images/lesLogosCentre.png" alt="" />
        </div>
        <div class="wcs_popup_person_content">
        <div class="wcs_popup_person_name">${author.username} </div>
        <div class="wcs_popup_person_description"></div>
        <div class="wcs_popup_person_status">I'm Online</div>
        </div>
      </div>
        `;

        p.innerHTML = `
        <ul class="tilesWrap">
        <li>
          
          <h3> ${author.username}</h3>
          
            <img src="assets/images/lesLogosCentre.png" alt="" class="child bounce">
          
          <button class="Payooner" id="${author.id}">Payer</button> <button class="consultingId" id="${author.id}" onclick="consultingIdClass(this.id)">consulter</button> 
        </li>
      </ul>
    
        `;

        append(div, p);
        append(divaHy, a);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  // function hospital data

  {
    /** *  fetch(`https://edotofamilyapi.com/patient/${UserConnectId}/`, {
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
    });**/
  }
}

var a = parent.document.URL.substring(
  parent.document.URL.indexOf("?"),
  parent.document.URL.length
);
var lastC = a.charAt(a.length - 1);
//console.log("vovovovovovov " + lastC);
window.onload = localStorage.getItem("storageName");
// c'est id de la personne connecté
function postDataProfil() {
  var last_name = document.getElementById("recipient-last_name").value;
  var first_name = document.getElementById("recipient-first_name").value;
  //var myInputId = document.getElementById("recipient-file");
  //var email = document.getElementById("recipient-email").value;

  //Create new formData object then append file

  fetch(`https://edotofamilyapi.com/patient/${UserConnectId}/`, {
    method: "PATCH",
    mode: "no-cors",
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
        //console.log(result);
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
  //console.log("alert alert " + clicked);
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
        //console.log(response);
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
