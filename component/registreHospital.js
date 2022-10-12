function postDataHospital() {
  var username = document.getElementById("usernameHospital").value;
  var email = document.getElementById("emailHospital").value;
  var password = document.getElementById("passwordHospital").value;
  var telHostel = document.getElementById("telHospital").value;

  fetch("https://edotofamilyapi.com/api/auth/medecin/registration/", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      tel: telHostel,
      password: password,
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        document.getElementById("ChargementIdHospital").style.display = "block";
        document.getElementById("usernameHospital").value = "";
        document.getElementById("emailHospital").value = "";
        document.getElementById("passwordHospital").value = "";
        document.getElementById("telHospital").value = "";
        setTimeout(() => {
          document.getElementById("ChargementIdHospital").style.display =
            "none";
          alert(
            `Cette page indique que quelque chose s'est mal passé. Essayez de vous enrégistrer à nouveau`
          );
        }, 6000);
      } else {
        var result = response.json();
        //  console.log(result);
        document.getElementById("usernameHospital").value = "";
        document.getElementById("emailHospital").value = "";
        document.getElementById("passwordHospital").value = "";
        document.getElementById("telHospital").value = "";
        document.getElementById(
          "exampleAnimatedsuccessHospital"
        ).style.display = "block";
        setTimeout(() => {
          document.getElementById(
            "exampleAnimatedsuccessHospital"
          ).style.display = "none";
          window.location.href = "loginHospital.html";
        }, 9000);
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

{
  /**fetch("http://15.236.38.193:8000/api/auth/medecin/", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
})
  .then((resp) => resp.json())
  .then(function (data) {
    let authors = data.results;
    console.log(authors);
    authors.map((k) => {
      console.log("voici nos mailop " + k.email);
    });
  });
*/
}
