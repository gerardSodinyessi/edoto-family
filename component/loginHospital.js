const userTableDataH = [];
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
        response.json().then((data) => {
          //var IdUserConnectH = data.access;
          var IdUserConnectIdH = data.user;
          console.log(IdUserConnectIdH);
          //console.log(theTableUser[0]);
          //console.log(lol);
          userTableDataH.push(IdUserConnectIdH);
          if (IdUserConnectIdH.role === "medecin") {
            document.getElementById("exampleAnimatedsuccessH").style.display =
              "block";
            document.getElementById("usernameloginH").value = "";
            document.getElementById("passwordloginH").value = "";

            setTimeout(() => {
              document.getElementById("exampleAnimatedsuccessH").style.display =
                "none";
              console.log(userTableDataH);
              userTableDataH.forEach((q) => {
                console.log("kolokolo" + q.id);
                var getInputH = q.id;
                localStorage.setItem("storageNameH", getInputH);
                window.location.href = `indexMonDocteur.html`;
              });
            }, 6000);
          } else {
            document.getElementById("exampleAnimatedloginH").style.display =
              "block";
            setTimeout(() => {
              document.getElementById("exampleAnimatedloginH").style.display =
                "none";
            }, 5000);
          }
        });
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
