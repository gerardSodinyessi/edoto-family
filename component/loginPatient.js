const userTableData = [];
function getData() {
  var username = document.getElementById("usernamelogin").value;
  var password = document.getElementById("passwordlogin").value;

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
        document.getElementById("usernamelogin").value = "";
        document.getElementById("passwordlogin").value = "";
        document.getElementById("exampleAnimatedlogin").style.display = "block";
        setTimeout(() => {
          document.getElementById("exampleAnimatedlogin").style.display =
            "none";
        }, 5000);
      } else {
        response.json().then((data) => {
          //var IdUserConnect = data.access;
          var IdUserConnectId = data.user;
          //console.log(IdUserConnect);
          //  console.log(IdUserConnectId);
          userTableData.push(IdUserConnectId);
          if (IdUserConnectId.role === "patient") {
            document.getElementById("exampleAnimatedsuccess").style.display =
              "block";
            document.getElementById("usernamelogin").value = "";
            document.getElementById("passwordlogin").value = "";
            document.getElementById("exampleAnimatedsuccess").style.display =
              "block";

            setTimeout(() => {
              document.getElementById("exampleAnimatedsuccess").style.display =
                "none";
              // console.log(userTableData);
              userTableData.forEach((q) => {
                //  console.log("kolokolo" + q.id);
                var getInput = q.id;
                localStorage.setItem("storageName", getInput);
                window.location.href = `patient.html`;
              });
            }, 6000);
          } else {
            document.getElementById("exampleAnimatedlogin").style.display =
              "block";
            setTimeout(() => {
              document.getElementById("exampleAnimatedlogin").style.display =
                "none";
            }, 5000);
          }
        });
      }
    })
    .catch(console.error);

  {
    /**const url = "http://15.236.38.193:8000/api/auth/patient/";

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let authors = data.results;
      return authors.map(function (author) {
        var JeVeuxVérifier = document.getElementById("JeVeuxVérifier");
        JeVeuxVérifier.innerHTML = ` ${author.username}
      `;
      });
    })
    .catch(function (error) {
      console.log(error);
    });

   fetch("http://15.236.38.193:8000/api/auth/patient/", {
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
  /**
fetch("http://13.39.67.197:8000/api/messages/", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
}).then((response) => {
  if (!response.ok) {
    console.log("polopolop ERROR");
  } else {
    response.json().then((data) => {
      var UserConne = data.results;
      console.log(UserConne);
    });
  }
});
*/
}
