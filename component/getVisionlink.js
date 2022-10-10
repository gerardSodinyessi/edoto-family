//OpenTypeCycle
document
  .getElementById("dropdownMenuButton")
  .addEventListener("click", function () {
    $("#getNotificationmsgM").modal({
      show: true,
      backdrop: true,
      keyboard: false,
    });
  });

const UserConnectlink = localStorage.getItem("storageName");
function createNode(elementa) {
  return document.createElement(elementa);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const divlink = document.getElementById("getVisionlinkMsg");
const urlx = `https://edotofamilyapi.com/api/auth/patient/${UserConnectlink}`;

fetch(urlx)
  .then((resp) => resp.json())
  .then(function (data) {
    let authorsx = data.messages_received;
    console.log(authorsx);
    return authorsx.map(function (authorx) {
      let li = createNode("li");
      li.innerHTML = `
      <a class="nav-link active"  href="${authorx.subject}"
      role="tab" aria-selected="true" style="background-color: #a9a1a3;">
      <div class="media">
      
        <img class="align-self-center rounded-circle"
          src="assets/images/lesLogosCentre.png" alt="User Image" style="border-radius: 100%; background-color: #f288a3;">
        <div class="media-body">
          <div class="container">
            <div class="row">
              <div class="col-6"><h5>Centre APBF</h5></div>
              <div class="col-6" style="color:white;">${authorx.created_date}<i class="material-icons" style="color: #f82249; margin-left: 6vh;margin-top: 4vh;" >videocam</i></div>
            </div>
          </div>
          <div class="row">
            <div class="col-12" style="color: white;">${authorx.content}</div>
            
          </div>
          <div class="row">
            <div class="col-12"><link rel="stylesheet" href="${authorx.subject}"> ${authorx.subject} </div>
          </div>
        </div>
      </div>
</a> 
        `;

      append(divlink, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

function getDatahopital() {
  var username = document.getElementById("usernameloginH").value;
  var password = document.getElementById("passwordloginH").value;
  fetch("https://edotofamilyapi.com/api/auth/login/", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        document.getElementById("usernameloginH").value = "";
        document.getElementById("passwordloginH").value = "";
        document.getElementById("exampleAnimatedloginH").style.display =
          "block";
        setTimeout(() => {
          document.getElementById("exampleAnimatedloginH").style.display =
            "none";
        }, 5000);
      } else {
        var result = response.json();
        console.log(result);
        document.getElementById("exampleAnimatedsuccessH").style.display =
          "block";
        document.getElementById("usernameloginH").value = "";
        document.getElementById("passwordloginH").value = "";
        setTimeout(() => {
          document.getElementById("exampleAnimatedsuccessH").style.display =
            "none";
          window.location.href = "indexp.html";
        }, 6000);
      }
    })
    .catch(console.error);

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
}
