const UserConnectIdCommand = localStorage.getItem("storageNameH");
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const divOder = document.getElementById("getUserMessageAllcommands");
const urlk = `https://edotofamilyapi.com/api/auth/medecin/${UserConnectIdCommand}/`;

fetch(urlk)
  .then((resp) => resp.json())
  .then(function (data) {
    var msgordersreceived = data.orders_received;
    //console.log("les medecins" + msgordersreceived);
    return msgordersreceived.map(function (msgaOder) {
      var undiPriceT = msgaOder.cost;
      var undiPriceQ = msgaOder.quantity;
      var undiPriceU = undiPriceT / undiPriceQ;
      console.log("les medecins" + msgaOder.quantity);
      let span = createNode("span");
      span.innerHTML = `
                     <a class="nav-link active" data-toggle="modal" data-target="#exampleModalMsgIDcommands" style="margin-bottom: 1vh;"
                      role="tab" aria-controls="chat-first" aria-selected="true">
                          <div class="media active">
                              <div class=""><img src="assets/images/bagcheckfill.svg"
                              alt="Generic placeholder image" style="font-size: 24px; color:red; margin-top: 2vh;"></div>
                           
                              <div class="media-body">
                                 <h5><span class="chat-timing">${msgaOder.created_date}</span></h5>
                                 <h5 style="margin-left: 25vh;"><span class="chat-timing" style=" margin-top: 2vh;"><img class="align-self-center rounded-circle"
                                 src="assets/images/checkmark-circle-outline.svg" alt="User Image" style="height: 22px;width: 25px;"></span></h5>
                                    <p>Quantité : ${msgaOder.quantity}</p>
                                    <p>Prix : ${undiPriceU} FCFA</p>
                                    <p>Total : ${msgaOder.cost} FCFA</p>
                                                    
                                </div>
                            </div>
                         </a>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalMsgIDcommands" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Quantité : ${msgaOder.quantity}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <p>Quantité : ${msgaOder.quantity}</p><br>
                        <p>Prix : ${undiPriceU} FCFA</p><br>
                        Total : ${msgaOder.cost} FCFA
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="${msgaOder.buyer}" onclick="tackecommandsIdClass(this.id)">Valider la commande</button>
                        </div>
                        </div>
                    </div>
                    </div>
            `;

      append(divOder, span);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
// function pour l'envoir de comfirmation de produits

function tackecommandsIdClass(checked) {
  var now = new Date();
  //console.log(checked);
  fetch("https://edotofamilyapi.com/api/messages/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      subject: `Commande validée`,
      content: `Votre commande a été valider avec succès`,
      sender: UserConnectIdCommand,
      created_date: now,
      receiver: checked,
    }),
  }).then(function (response) {
    if (response.ok) {
      //console.log(response);
      document.getElementById("idHospitalShowJitisi").style.display = "none";
      document.getElementById("idHospitalShow").style.display = "block";

      setTimeout(() => {
        alert(`Vous venez de vlalider cette commande avec succès !`);
      }, 5000);
    } else {
      alert(`Quelque chose s'est mal passé`);
    }
  });
}
