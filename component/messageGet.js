const UserConnectIdH = localStorage.getItem("storageNameH");
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const div = document.getElementById("getUserMessageAll");
const url = `https://edotofamilyapi.com/api/auth/medecin/${UserConnectIdH}/`;

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    var msg = data.messages_received;
    //  console.log("les medecins" + data);
    return msg.map(function (msga) {
      let span = createNode("span");
      span.innerHTML = `
                     <a class="nav-link active" data-toggle="modal" data-target="#exampleModalMsgID" style="margin-bottom: 1vh;"
                      role="tab" aria-controls="chat-first" aria-selected="true" openModalMsgId(this.id)>
                          <div class="media active">
                              <div class=""><i class="material-icons" style="color: #f82249; width: 9px; height: 12px; margin-bottom: 7vh !important;" >videocam</i></div>
                           <img class="align-self-center rounded-circle" src="assets/images/girl.svg"
                               alt="User Image">
                              <div class="media-body">
                                 <h5><span class="chat-timing">${msga.created_date}</span></h5>
                                    <p>${msga.content} </p>
                                                    
                                </div>
                            </div>
                         </a>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalMsgID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${msga.subject}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        ${msga.content}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="${msga.sender}" onclick="tackesenderIdClass(this.id)">Plannifier</button>
                        </div>
                        </div>
                    </div>
                    </div>
            `;

      append(div, span);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

var button = document.querySelector("#starta");
var container = document.querySelector("#jitsi-container");
var api = null;

function tackesenderIdClass(checked) {
  var elementa = document.getElementById("dark-layout");
  elementa.classList.add("areaID");
  document.getElementById("idHospitalShowJitisi").style.display = "block";
  document.getElementById("idHospitalShow").style.display = "none";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var stringLength = 30;

  function pickRandom() {
    return possible[Math.floor(Math.random() * possible.length)];
  }

  var randomString = Array.apply(null, Array(stringLength))
    .map(pickRandom)
    .join("");

  var domain = "meet.jit.si";
  var options = {
    roomName: randomString,
    parentNode: container,
    height: 600,
  };
  api = new JitsiMeetExternalAPI(domain, options);

  // start function send visio link from hospital
  document
    .getElementById("sendLinkVisioData")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var inlineFormInputDate1 = document.getElementById(
        "inlineFormInputGroupUsername1"
      ).value;
      var inlineFormInputDate2 = document.getElementById(
        "inlineFormInputGroupUsername2"
      ).value;
      var inlineFormInputDate3 = document.getElementById(
        "inlineFormInputGroupUsername3"
      ).value;
      var now = new Date();
      fetch("https://edotofamilyapi.com/api/messages/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          subject: inlineFormInputDate3,
          content: `Du  ${inlineFormInputDate1} au ${inlineFormInputDate2} `,
          sender: UserConnectIdH,
          created_date: now,
          receiver: checked,
        }),
      }).then(function (response) {
        if (response.ok) {
          //  console.log(response);
          document.getElementById("idHospitalShowJitisi").style.display =
            "none";
          document.getElementById("idHospitalShow").style.display = "block";

          setTimeout(() => {
            location.reload();
          }, 500);
        } else {
          alert(`Quelque chose s'est mal passé`);
        }
      });
    });
  // end function send visio link from hospital
}
