// function quitter mci modal
function quit() {
  $("#createGroup").modal("hide");
}
// function mettre à jour
document.getElementById("btn-primaryc").onclick = function () {
  setTimeout(() => {
    document.getElementById("update").style.display = "block";
    document.getElementById("btn-primaryc").style.display = "none";
    document.getElementById("createGroupTitle").style.display = "none";
    document.getElementById("createGroupTitleup").style.display = "block";
    $("#createGroup").modal("hide");
  }, 5000);
};

document.getElementById("btn-primaryquittergroup").onclick = function () {
  $("#createGrouppatiento").modal("hide");
};
// functin  voice call end
function voicecaleend() {
  document.getElementById("toutChatdoctorhide").style.display = "block";
  $("#incomingVideoCall").modal("hide");
  $(".bd-example-modal-lg").modal("hide");
}
//voice call function
function voiceCalling() {
  document.getElementById("toutChatdoctorhide").style.display = "none";
  $(".bd-example-modal-lg").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
  $("#incomingVoiceCall").modal("hide");
  console.log("ok les gars comment vas");
}
//exchange class
function exchangeclass() {
  $("#webcamip").removeClass("webcamipclassi");
  $("#webcamip").addClass("webcamipclass");
  $("#canvasad").removeClass("webcamipclass");
  $("#canvasad").addClass("webcamipclassi");
}

function exchangeclass2a() {
  $("#webcamip").removeClass("webcamipclass");
  $("#webcamip").addClass("webcamipclassi");
  $("#canvasad").removeClass("webcamipclassi");
  $("#canvasad").addClass("webcamipclass");
  console.log("pourquoi");
}

//appel video
function toutChatdoctorhide() {
  const webcamElement = document.getElementById("webcamip");
  const canvasElement = document.getElementById("canvasip");
  const snapSoundElement = document.getElementById("snapSoundip");
  const webcam = new Webcam(
    webcamElement,
    "user",
    canvasElement,
    snapSoundElement
  );

  webcam
    .start()
    .then((result) => {
      document.getElementById("toutChatdoctorhide").style.display = "none";
      $(".bda-example-modal-lg").modal({
        show: true,
        backdrop: "static",
        keyboard: false,
      });
      document.getElementById("material-icons3").onclick = function () {
        document.getElementById("toutChatdoctorhide").style.display = "block";
        $("#incomingVideoCall").modal("hide");
        $(".bda-example-modal-lg").modal("hide");
        webcam.stop();
      };
      console.log("webcam started");
    })
    .catch((err) => {
      console.log(err);
    });

  var picture = webcam.snap();

  webcam.stop();
}
//Cacher les boutons
function cacherLeboutonicon() {
  document.getElementById("material-icons2").style.display = "block";
  document.getElementById("material-icons1").style.display = "none";
  console.log("je suis et toi");
}

function cacherLebouton1() {
  document.getElementById("material-icons1").style.display = "block";
  document.getElementById("material-icons2").style.display = "none";
}

function cacherLeboutonA() {
  document.getElementById("material-icons5").style.display = "block";
  document.getElementById("material-icons4").style.display = "none";
  document.getElementById("webcamip2").style.display = "block";
  document.getElementById("webcambox").style.display = "none";
}

function cacherLebouton1A() {
  document.getElementById("material-icons4").style.display = "block";
  document.getElementById("material-icons5").style.display = "none";
  document.getElementById("webcambox").style.display = "block";
  document.getElementById("webcamip2").style.display = "none";
}

//Cacher les boutons du voice call
function cacherLeboutoniconcall() {
  document.getElementById("material-icons2call").style.display = "block";
  document.getElementById("material-icons1call").style.display = "none";
  console.log("je suis et toi");
}

function cacherLebouton1call() {
  document.getElementById("material-icons1call").style.display = "block";
  document.getElementById("material-icons2call").style.display = "none";
}

function cacherLeboutonAcall() {
  document.getElementById("material-icons5call").style.display = "block";
  document.getElementById("material-icons4call").style.display = "none";
}

function cacherLebouton1Acall() {
  document.getElementById("material-icons4call").style.display = "block";
  document.getElementById("material-icons5call").style.display = "none";
  document.getElementById("webcambox").style.display = "block";
  document.getElementById("webcamip2").style.display = "none";
}

//function monTextEnvoieRDV
function envoyezRDV() {
  var datetime = document.getElementById("datetimelocal").value;
  msag = `<div class="chat-message-text">
							   <p>${datetime} <img src="assets/images/alarme.svg" alt=""></p>
							   </div>`;
  document.getElementById("monTextEnvoieRDV").innerHTML = msag;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  setTimeout(() => {
    document.getElementById("numberNotification").style.display = "none";
  }, 1000);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//function orderun
function orderuna() {
  document.getElementById("orderun").style.display = "none";
}

function orderunb() {
  document.getElementById("orderun").style.backgroundColor = "rgb(92, 94, 104)";
}

function orderunc() {
  $("#validationordonnance").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
}
//function test
function validationtesta() {
  document.getElementById("orderdeux").style.display = "none";
}

function validationtestb() {
  document.getElementById("orderdeux").style.backgroundColor =
    "rgb(92, 94, 104)";
}

function validationtestc() {
  $("#validationtest").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
}
//OpenTypeCycle

function AskTypeCycle() {
  $("#AskTypeCycle").modal({
    show: true,
    backdrop: true,
    keyboard: false,
  });
}

//OpenModalImagePlanning
function OpenModalImagePlanning() {
  $("#OpenModalImagePlanningId").modal({
    show: true,
    backdrop: true,
    keyboard: false,
  });
}
//function test
function validationtesttroisa() {
  document.getElementById("ordertrois").style.display = "none";
}

function validationtesttroisb() {
  document.getElementById("ordertrois").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestquatrea() {
  document.getElementById("orderquatre").style.display = "none";
}

function validationtestquatreb() {
  document.getElementById("orderquatre").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestcinqa() {
  document.getElementById("ordercinq").style.display = "none";
}

function validationtestcinqb() {
  document.getElementById("ordercinq").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestsixa() {
  document.getElementById("ordersix").style.display = "none";
}

function validationtestsixb() {
  document.getElementById("ordersix").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestsepta() {
  document.getElementById("ordersept").style.display = "none";
}

function validationtestseptb() {
  document.getElementById("ordersept").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtesthuita() {
  document.getElementById("orderhuit").style.display = "none";
}

function validationtesthuitb() {
  document.getElementById("orderhuit").style.backgroundColor =
    "rgb(92, 94, 104)";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//commentLexamen
var myVar;

function commentLexamen() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader1").style.display = "block";
  document.getElementById("perfori").style.display = "none";
  $("#exampleModalstartexeme").modal("hide");
  setTimeout(() => {
    document.getElementById("loader1").style.display = "none";
    document.getElementById("perfori").style.display = "block";
  }, 6000);
}
// OpenIno
function mobilecheck() {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    console.log("je dois le faire");
    return true;
  } else {
    console.log("je faire");
    return false;
  }
}
/////

var VideoPlanning = document.querySelectorAll(".openVideoPlanningDemo");
VideoPlanning.forEach((Q) => {
  Q.addEventListener("click", function () {
    $("#incomingVideoPlanning").modal({
      show: true,
      backdrop: false,
      keyboard: false,
    });

    const objeta = [
      {
        id: "userA",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViA" autoplay><source src="./assets/videoPlanning/les_pillules.mp4" type="video/mp4"></video>',
      },
      {
        id: "userB",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViB" autoplay><source src="./assets/videoPlanning/les_pillules.mp4"></video>',
      },
      {
        id: "userC",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViC" autoplay><source src="./assets/videoPlanning/injections.mp4" type="video/mp4"></video>',
      },
      {
        id: "userD",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViD" autoplay><source src="./assets/videoPlanning/implants.mp4" type="video/mp4"></video>',
      },
      {
        id: "userE",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViE" autoplay><source src="./assets/videoPlanning/DIU.mp4" type="video/mp4"></video>',
      },
      {
        id: "userF",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViF" autoplay><source src="./assets/videoPlanning/préservatif.mp4" type="video/mp4"></video>',
      },
      {
        id: "userG",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViG" autoplay><source src="./assets/videoPlanning/connaissance.mp4" type="video/mp4"></video>',
      },
      {
        id: "userH",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViH" autoplay><source src="./assets/videoPlanning/allaitement.mp4" type="video/mp4"></video>',
      },
      {
        id: "userI",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViI"autoplay><source src="./assets/videoPlanning/le_retrait.mp4" type="video/mp4"></video>',
      },
    ];
    const index = objeta.findIndex((element, index) => {
      var ttableVido = [];
      if (Q.id === element.id) {
        var createUnNouveauP = document.getElementById("displayBlackVid##");
        ttableVido.push(element.balise);
        createUnNouveauP.innerHTML = ttableVido[0];
        console.log(createUnNouveauP);
        document
          .getElementById("displayBlackVidClose")
          .addEventListener("click", function (id) {
            element.balise.id;
            $("#incomingVideoPlanning").modal("hide");
            console.log(ttableVido);
          });
      }
    });
  });
});

//function show audio planning
var allPharmacyIdVar = document.querySelectorAll(".showAudioPlanning");
allPharmacyIdVar.forEach((xid) => {
  xid.addEventListener("click", function () {
    document.getElementById("button-addonmic").style.display = "block";
    console.log(xid.id);
    const objetaAudio = [
      {
        id: "chat-first-tab",
        balise: `<p></p>`,
        title: `Améliorer votre santé`,
      },
      {
        id: "chat-fourtinth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/Méthodescontraceptionhormonale.mp3" type="audio/mpeg"></audio>`,
        title: `Les méthodes contraceptives hormonales `,
      },
      {
        id: "chat-third-tab",
        balise: `<audio controls><source src="assets/audioPlannings/pilules contraceptives orales.mp3" type="audio/mpeg"></audio>`,
        title: `Les pilules contraceptives orales `,
      },
      {
        id: "chat-fourth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/contraceptivesinjectables .mp3" type="audio/mpeg"></audio>`,
        title: `Les contraceptifs injectables`,
      },
      {
        id: "chat-fifth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/implantscontraceptifs.mp3" type="audio/mpeg"></audio>`,
        title: `Les implants contraceptifs`,
      },
      {
        id: "chat-seventh-tab",
        balise: `<audio controls><source src="assets/audioPlannings/DIU.mp3" type="audio/mpeg"></audio>`,
        title: `Les dispositifs intra-utérins (DIU)`,
      },
      {
        id: "chat-eighth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/méthodesdebarrière .mp3" type="audio/mpeg"></audio>`,
        title: `Les méthodes de barrière`,
      },
      {
        id: "chat-ninth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/méthodesdeconnaissancede.mp3" type="audio/mpeg"></audio>`,
        title: `Les méthodes de connaissance de la fécondité`,
      },
      {
        id: "chat-tenth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/Allaitementausein.mp3" type="audio/mpeg"></audio>`,
        title: `L’allaitement au sein`,
      },
      {
        id: "chat-eleventh-tab",
        balise: `<audio controls><source src="assets/audioPlannings/Leretrait.mp3" type="audio/mpeg"></audio>`,
        title: `Le retrait`,
      },
      {
        id: "chat-thirteenth-tab",
        balise: `<p></p>`,
        title: `La pharmacie`,
      },
    ];
    const index = objetaAudio.findIndex((element, index) => {
      var ttableAudio = [];
      var ttableAudiotitle = [];
      if (xid.id === element.id) {
        var createUnNouveauP = document.getElementById("createAudioPlanning");
        ttableAudio.push(element.balise);
        createUnNouveauP.innerHTML = ttableAudio[0];

        ttableAudiotitle.push(element.title);
        var AllTitlePlan = document.getElementById("AllTitlePlan#");
        AllTitlePlan.innerHTML = element.title;
        console.log(element.id);
      }
    });
  });
});
var VideoPlanning = document.querySelectorAll(".openVideoPlanningDemo");
VideoPlanning.forEach((Q) => {
  Q.addEventListener("click", function () {
    $("#incomingVideoPlanning").modal({
      show: true,
      backdrop: false,
      keyboard: false,
    });
  });
});

//function planning valider

document.getElementById("AceptPlanning").addEventListener("click", function () {
  console.log("ok tour le ppofkkfv");
  $("#incomingaliderplanning").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
});
// function gotopageWithoutREfrech
$("#gotopageWithoutREfrech").click(function () {
  loadContent($(this).attr("href"));
  return false;
});

function loadContent(page) {
  $.ajax({
    url: page,
    success: function (data) {
      $(".placeholder").html(data);
    },
  });
}

// function buttonCallAllHospital
function buttonCallAllHospital() {
  document.getElementById("AllHospitalBen").style.display = "block";
  document.getElementById("AllHospitalBenInfo").style.display = "none";
}
// update profiel

{
  /** fetch("http://15.236.38.193:8000/api/auth/patient/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
       body: JSON.stringify({
          email: "romaric@gmail.com",
          username: "rodriguel",
          password: "romaric1234",
        }),
      }).then(function (response) {
        if (response.ok) {
          console.log(response);
        }
      });*/
}
// update profiel
