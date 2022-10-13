const UserConnectIdHmsg = localStorage.getItem("storageNameH");

function createNode(elementy) {
  return document.createElement(elementy);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const divS = document.getElementById("theAllMsgGetHospital");
const urlS = `https://edotofamilyapi.com/api/auth/medecin/${UserConnectIdHmsg}/`;

fetch(urlS)
  .then((resp) => resp.json())
  .then(function (data) {
    var msgS = data.messages_sent;
    // console.log(msgS);
    return msgS.map(function (msgaS) {
      let li = createNode("li");
      li.innerHTML = `
      <a class="nav-link active" href="${msgaS.subject} "
      role="tab" aria-selected="true" style="background-color: #a9a1a3;">
      <div class="media">
          <img class="align-self-center rounded-circle"
              src="assets/images/men.svg" alt="User Image">
          <div class="media-body">
              <div class="container">
                  <div class="row">
                      <div class="col-6"><h5 style="color: white;">${msgaS.created_date}</h5> </div>
                      <div class="col-6"><i class="material-icons" style="color: #f82249; margin-left: 10vh;" >videocam</i></div>
                  </div>
              </div>
              <p>${msgaS.subject} <link rel="stylesheet" href="${msgaS.subject}"></p>
          </div>
      </div>
      </a> 
            `;

      append(divS, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
