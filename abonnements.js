const UserConnectIdH = localStorage.getItem("storageNameH");
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
    //abonnement basique
    diva.innerHTML = `
        <h3>${result[0].title} </h3>
        <h4>${result[0].subscription_price} <sup>FCFA</sup><span>par an</span></h4>
          `;
    diva3.innerHTML = `
    <a href="${result[0].url}" class="buy-btn" id="${result[0].id}">Abonnez-vous</a>
    `;
    //abonnement standard
    diva1.innerHTML = `
        <h3>${result[1].title} </h3>
        <h4>${result[1].subscription_price} <sup>FCFA</sup><span>par an</span></h4>
          `;
    diva4.innerHTML = `
    <a href="${result[1].url}" class="buy-btn" id="${result[1].id}">Abonnez-vous</a>
    `;
    //abonnement premium
    diva2.innerHTML = `
        <h3>${result[2].title} </h3>
        <h4>${result[2].subscription_price} <sup>FCFA</sup><span>par an</span></h4>
          `;
    diva5.innerHTML = `
    <a href="${result[2].url}" class="buy-btn" id="${result[2].id}">Abonnez-vous</a>
    `;
  })
  .catch(function (error) {
    console.log(error);
  });
