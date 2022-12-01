const UserConnectIdToBuy = localStorage.getItem("storageName");
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
//abonnement basique
const diva = document.getElementById("abonnTypeBasique");
const diva3 = document.getElementById("abonnTypeBasiqueurl");
//abonnement satndard
const diva1 = document.getElementById("abonnTypeStandard");
const diva4 = document.getElementById("abonnTypestandrdurl");
//abonnement premium
const diva2 = document.getElementById("abonnTypepremium");
const diva5 = document.getElementById("abonnTypepremiumurl");

const urla = `https://edotofamilyapi.com/subscription_type/`;

fetch(urla)
  .then((resp) => resp.json())
  .then(function (data) {
    var result = data.results;
    var priceOfABONNE = result[0].subscription_price * 0;
    var priceOfABONNE1 = 2000 - result[1].subscription_price;
    var priceOfABONNE2 = 5000 - result[2].subscription_price;

    //abonnement basique
    diva.innerHTML = `
        <h3>GRATUIT </h3>
        <h4>${priceOfABONNE} <sup>FCFA</sup><span></span></h4>
          `;
    diva3.innerHTML = `
    
    `;
    //abonnement standard
    diva1.innerHTML = `
        <h3>${result[1].title} </h3>
        <h4>${priceOfABONNE1} <sup>FCFA</sup><span>par an</span></h4>
          `;
    diva4.innerHTML = `
    <a onclick="OneABonnement()" class="buy-btn" id="${priceOfABONNE1}" style="cursor: pointer;">Abonnez-vous</a>
    
    `;
    //abonnement premium
    diva2.innerHTML = `
        <h3>${result[2].title} </h3>
        <h4>${priceOfABONNE2} <sup>FCFA</sup><span>par an</span></h4>
          `;
    diva5.innerHTML = `
    <a href="${result[2].url}" class="buy-btn" id="${result[2].id}">Abonnez-vous</a>
    `;
  })
  .catch(function (error) {
    console.log(error);
  });
// abonnement
function OneABonnement() {
  if (UserConnectIdToBuy) {
    openKkiapayWidget({
      amount: "10",
      position: "center",
      callback: "javascript:sendmycommandinCentremodale()",
      data: "",
      theme: "blue",
      key: "deb48fc468f8e7fcc35aee7ae721254a3427f5e5",
    });
  } else {
    alert("Inscrivez-vous avant de vous abonner !");
  }

  addSuccessListener((response) => {
    //console.log(response);
    var trans = response.transactionId;
    //  console.log(trans);
    localStorage.setItem("storageNameTransq", trans);
    if (trans && UserConnectIdToBuy) {
      window.location.href = "./component/patient.html";
    } else {
      alert(`quelque chose s'est mal passé`);
    }
  });
}
