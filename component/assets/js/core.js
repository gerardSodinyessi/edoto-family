/*
--------------------------------------------------------------
  Template Name: Gappa - Chat & Discussion Plateform Template
  File: Core JS File
--------------------------------------------------------------
 */
"use strict";
$(document).ready(function () {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    $(".chat-user-info").addClass("hide");
    //document
    //  .getElementById("view-user-infoa")
    //  .addEventListener("click", function () {
    //    document.getElementById("AllHospitalBenInfo").style.display = "none";
    //    document.getElementById("AllHospitalBen").style.display = "block";
    //$(".chat-user-info").addClass("show");
    // });
  } else {
    console.log("je faire");
    $(".chat-user-info").addClass("show");
    $(".chat-bottom").addClass("small");
    $(".whatsapp_chat_support").addClass("margiNleftClassWhat");
    document
      .getElementById("view-user-info")
      .addEventListener("click", function () {
        $(".whatsapp_chat_support").addClass("margiNleftClassWhat");
        $(".margiNleftClass").removeClass("margiNleftClassP");
        document.getElementById("AllHospitalBen").style.display = "block";
        document.getElementById("AllHospitalBenInfo").style.display = "none";
      });

    $("#close-user-info").on("click", function (e) {
      $(".margiNleftClass").addClass("margiNleftClassP");
      $(".whatsapp_chat_support").removeClass("margiNleftClassWhat");
      e.preventDefault();
      $(".chat-user-info").removeClass("show");
      $(".chat-bottom").removeClass("small");
    });
  }

  //function close modal Allhospital
  //document
  //  .getElementById("close-user-info")
  // .addEventListener("click", function () {
  //   document.getElementById("AllHospitalBen").style.display = "none";
  //   $(".chat-bottom").removeClass("small");
  // });
  /* -- Show User Info -- */
  $("#view-user-info").on("click", function (e) {
    e.preventDefault();
    $(".chat-user-info").addClass("show");
    $(".chat-bottom").addClass("small");
    document.getElementById("IdAcueiApp2").style.display = "block";
    $("#myModalIdAcueiApp1").modal("hide");
    $(".chat-bottom").addClass("small");
  });
  /* -- Close User Info -- */
  $("#close-user-info").on("click", function (e) {
    e.preventDefault();
    $(".chat-user-info").removeClass("show");
    $(".chat-bottom").removeClass("small");
  });
  /* -- Collapse Chat Rightbar -- */
  $(".chat-userlist .nav-link").on("click", function (e) {
    e.preventDefault();
    $(".chat-rightbar").addClass("show");
  });
  /* -- Back Chat Rightbar -- */
  $(".back-arrow").on("click", function (e) {
    e.preventDefault();
    $(".chat-rightbar").removeClass("show");
  });
  /* -- User Media Slider -- */
  $(".user-media-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="feather icon-chevron-left"></i>',
    nextArrow: '<i class="feather icon-chevron-right"></i>',
  });
  /* -- Chat Profile Pic Upload -- */
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(".profile-pic").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  $(".profile-upload").on("change", function () {
    readURL(this);
  });
  $(".upload-button").on("click", function () {
    $(".profile-upload").click();
  });
  /* -- Bootstrap Popover -- */
  $('[data-toggle="popover"]').popover();
  /* -- Bootstrap Tooltip -- */
  $('[data-toggle="tooltip"]').tooltip();
});
