var allPharmacyIdVar = document.querySelectorAll(".allClassIprodoctClik");
allPharmacyIdVar.forEach((x) => {
  x.addEventListener("click", function () {
    console.log(x.id);
    //modaleAceptFacturactionMOOW id de moow modale

    const objetAllproduct = [
      {
        id: "productA",
        name: "POSTINOR",
        prix: "500",
      },
      {
        id: "productB",
        name: "PREGNON",
        prix: "1110",
      },
      {
        id: "productC",
        name: "LEVO BD",
        prix: "2850",
      },
      {
        id: "productD",
        name: "LEVOPREG",
        prix: "2720",
      },
      {
        id: "productE",
        name: "NORLEVO",
        prix: "4280",
      },
      {
        id: "productF",
        name: "ELLA ONE",
        prix: "5215",
      },
      {
        id: "productG",
        name: "PRÉSERVATIF FÉMININ",
        prix: "150",
      },
      {
        id: "productH",
        name: "PRÉSERVATIF MASCULIN",
        prix: "150",
      },
      {
        id: "productI",
        name: "TEST VIH",
        prix: "800",
      },
    ];

    const index = objetAllproduct.findIndex((element, index) => {
      var tableobjetAllproduct = [];
      if (x.id === element.id) {
        tableobjetAllproduct.push(element.name, element.prix);
        console.log(tableobjetAllproduct);
      }
    });
  });
});
