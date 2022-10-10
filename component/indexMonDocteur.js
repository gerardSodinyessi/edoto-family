				

										function exampleModalCenteresignup(){
											$('#exampleModalCenteresignup').modal({
												show:true
											})
										}
												(function () {
							window.requestAnimFrame = (function (callback) {
								return window.requestAnimationFrame ||
									window.webkitRequestAnimationFrame ||
									window.mozRequestAnimationFrame ||
									window.oRequestAnimationFrame ||
									window.msRequestAnimaitonFrame ||
									function (callback) {
										window.setTimeout(callback, 1000 / 60);
									};
							})();
				
							var canvas = document.getElementById("sig-canvas");
							var ctx = canvas.getContext("2d");
							ctx.strokeStyle = "#222222";
							ctx.lineWidth = 1;
				
							var drawing = false;
							var mousePos = {
								x: 0,
								y: 0
							};
							var lastPos = mousePos;
				
							canvas.addEventListener("mousedown", function (e) {
								drawing = true;
								lastPos = getMousePos(canvas, e);
							}, false);
				
							canvas.addEventListener("mouseup", function (e) {
								drawing = false;
							}, false);
				
							canvas.addEventListener("mousemove", function (e) {
								mousePos = getMousePos(canvas, e);
							}, false);
				
							// Add touch event support for mobile
							canvas.addEventListener("touchstart", function (e) {
				
							}, false);
				
							canvas.addEventListener("touchmove", function (e) {
								var touch = e.touches[0];
								var me = new MouseEvent("mousemove", {
									clientX: touch.clientX,
									clientY: touch.clientY
								});
								canvas.dispatchEvent(me);
							}, false);
				
							canvas.addEventListener("touchstart", function (e) {
								mousePos = getTouchPos(canvas, e);
								var touch = e.touches[0];
								var me = new MouseEvent("mousedown", {
									clientX: touch.clientX,
									clientY: touch.clientY
								});
								canvas.dispatchEvent(me);
							}, false);
				
							canvas.addEventListener("touchend", function (e) {
								var me = new MouseEvent("mouseup", {});
								canvas.dispatchEvent(me);
							}, false);
				
							function getMousePos(canvasDom, mouseEvent) {
								var rect = canvasDom.getBoundingClientRect();
								return {
									x: mouseEvent.clientX - rect.left,
									y: mouseEvent.clientY - rect.top
								}
							}
				
							function getTouchPos(canvasDom, touchEvent) {
								var rect = canvasDom.getBoundingClientRect();
								return {
									x: touchEvent.touches[0].clientX - rect.left,
									y: touchEvent.touches[0].clientY - rect.top
								}
							}
				
							function renderCanvas() {
								if (drawing) {
									ctx.moveTo(lastPos.x, lastPos.y);
									ctx.lineTo(mousePos.x, mousePos.y);
									ctx.stroke();
									lastPos = mousePos;
								}
							}
				
							// Prevent scrolling when touching the canvas
							document.body.addEventListener("touchstart", function (e) {
								if (e.target == canvas) {
									e.preventDefault();
								}
							}, false);
							document.body.addEventListener("touchend", function (e) {
								if (e.target == canvas) {
									e.preventDefault();
								}
							}, false);
							document.body.addEventListener("touchmove", function (e) {
								if (e.target == canvas) {
									e.preventDefault();
								}
							}, false);
				
							(function drawLoop() {
								requestAnimFrame(drawLoop);
								renderCanvas();
							})();
				
							function clearCanvas() {
								canvas.width = canvas.width;
							}
				
							// Set up the UI
							var sigText = document.getElementById("sig-dataUrl");
							var sigImage = document.getElementById("sig-image");
							var clearBtn = document.getElementById("sig-clearBtn");
							var submitBtn = document.getElementById("sig-submitBtn");
							clearBtn.addEventListener("click", function (e) {
								clearCanvas();
								sigText.innerHTML = "Data URL for your signature will go here!";
								sigImage.setAttribute("src", "");
							}, false);
							submitBtn.addEventListener("click", function (e) {
								var dataUrl = canvas.toDataURL();
								sigText.innerHTML = dataUrl;
								sigImage.setAttribute("src", dataUrl);
								$('#exampleModalCenteresignup').modal('hide')
							}, false);
				
						})();
								
				// function quitter mci modal
				function quit(){
					$('#createGroupdimudocteur').modal('hide')
				   }
					// function mettre à jour
					document.getElementById('btn-primaryc').onclick=function(){
						setTimeout(()=>{
						document.getElementById('update').style.display="block"
						document.getElementById('btn-primaryc').style.display='none'
						document.getElementById('createGroupTitled').style.display='none'
						document.getElementById('createGroupTitleupd').style.display='block'
						$('#createGroupdimudocteur').modal('hide')
						},5000)
					}
		   
							   // functin  voice call end
				   function voicecaleend() {
						   document.getElementById('toutChatdoctorhide').style.display='block'
						   $('#incomingVideoCall').modal('hide')
						   $('.abd-example-modal-lg').modal('hide')
					   }
				   //voice call function
				   function voiceCalling(){
					   document.getElementById('toutChatdoctorhide').style.display='none'
					   $('.abd-example-modal-lg').modal({
						   show:true,
						   backdrop:'static',
						   keyboard:false
					   })
					   $('#incomingVoiceCall').modal('hide')
					   console.log('ok les gars comment vas')
				   }
					   //exchange class
					   function exchangeclass(){
						   $('#webcamip').removeClass('webcamipclassi');
						   $('#webcamip').addClass('webcamipclass');
						   $('#canvasad').removeClass('webcamipclass');
						   $('#canvasad').addClass('webcamipclassi');			
					   }
					   function exchangeclass2a(){
						   $('#webcamip').removeClass('webcamipclass');
						   $('#webcamip').addClass('webcamipclassi');
						   $('#canvasad').removeClass('webcamipclassi');
						   $('#canvasad').addClass('webcamipclass');
						   console.log('pourquoi')
					   }
		   
					   //appel video
					   function toutChatdoctorhide(){
					   const webcamElement = document.getElementById('webcamip');
					   const canvasElement = document.getElementById('canvasip');
					   const snapSoundElement = document.getElementById('snapSoundip');
					   const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
		   
		   
					   webcam.start()
					   .then(result =>{
					   document.getElementById('toutChatdoctorhide').style.display='none'
					   $('.bd-example-modal-lg').modal({
						   show: true,
						   backdrop: 'static',
						   keyboard: false
					   })
					   //endcallvideo
					   document.getElementById('material-icons3').onclick=function(){
						   document.getElementById('toutChatdoctorhide').style.display='block'
						   $('#incomingVideoCall').modal('hide')
						   $('.bd-example-modal-lg').modal('hide')
						   webcam.stop();
					   }
					   console.log("webcam started");
					   })
					   .catch(err => {
						   console.log(err);
					   });
					   var picture = webcam.snap();
					   
		   
					   }
					   //Cacher les boutons
					   function cacherLeboutonicon() {
					   document.getElementById('material-icons2').style.display = "block"
					   document.getElementById('material-icons1').style.display = "none"
					   console.log('je suis et toi')
				   }
		   
				   function cacherLebouton1() {
					   document.getElementById('material-icons1').style.display = "block"
					   document.getElementById('material-icons2').style.display = "none"
		   
				   }
		   
				   function cacherLeboutonA() {
					   document.getElementById('material-icons5').style.display = "block"
					   document.getElementById('material-icons4').style.display = "none"
					   document.getElementById('webcamip2').style.display = "block"
					   document.getElementById('webcambox').style.display = "none"
				   }
		   
				   function cacherLebouton1A() {
					   document.getElementById('material-icons4').style.display = "block"
					   document.getElementById('material-icons5').style.display = "none"
					   document.getElementById('webcambox').style.display = "block"
					   document.getElementById('webcamip2').style.display = "none"
		   
				   }
					   //Cacher les boutons du voice call
					   function cacherLeboutoniconcall() {
					   document.getElementById('material-icons2call').style.display = "block"
					   document.getElementById('material-icons1call').style.display = "none"
					   console.log('je suis et toi')
				   }
		   
				   function cacherLebouton1call(){
					   document.getElementById('material-icons1call').style.display = "block"
					   document.getElementById('material-icons2call').style.display = "none"
		   
				   }
		   
				   function cacherLeboutonAcall() {
					   document.getElementById('material-icons5call').style.display = "block"
					   document.getElementById('material-icons4call').style.display = "none"
				   }
		   
				   function cacherLebouton1Acall() {
					   document.getElementById('material-icons4call').style.display = "block"
					   document.getElementById('material-icons5call').style.display = "none"
					   document.getElementById('webcambox').style.display = "block"
					   document.getElementById('webcamip2').style.display = "none"
				   }
					   //function monTextEnvoieJav
					   function monTextEnvoieJav() {
						   event.preventDefault();
						   var tapemessage = document.getElementById('Typemessage').value;
						   msag = `<div class="chat-message-text">
									   <p>${tapemessage}</p>
									   </div>`
						   document.getElementById('monTextEnvoieJav').innerHTML = msag
						   document.getElementById('Typemessage').value = ""
					   }
					   //function monTextEnvoieRDV
					   function envoyezRDV() {
						   var datetime = document.getElementById('datetimelocal').value;
						   msag = `<div class="chat-message-text">
									   <p>${datetime} <img src="assets/images/alarme.svg" alt=""></p>
									   </div>`
						   document.getElementById('monTextEnvoieRDV').innerHTML = msag
					   }
		   
					   function soummettreOder() {
						   setTimeout(() => {
							   document.getElementById('medicamentUn').style.display = "none"
							   document.getElementById('medicamentdeux').style.display = "none"
							   document.getElementById('medicamenttrois').style.display = "none"
							   document.getElementById('medicamentquatre').style.display = "none"
							   document.getElementById('medicamentcinq').style.display = "none"
							   document.getElementById('medicamentsix').style.display = "none"
							   document.getElementById('medicamentsept').style.display = "none"
							   document.getElementById('medicamenthuit').style.display = "none"
							   document.getElementById('medicamentneuf').style.display = "none"
							   document.getElementById('medicamentdix').style.display = "none"
							   document.getElementById('lesbuttons').style.display = "none"
							   document.getElementById('medicamentHeurededormir').style.display = "block"
						   }, 3000)
					   }
					   // function validerVal()
					   function validerVal() {
						   setTimeout(() => {
							   document.getElementById('accesmessageConfirm').style.display = "none"
							   document.getElementById('messageModaledenvoieOrder').style.display = "block"
						   }, 3000);
						   setTimeout(() => {
							   $('#exampleModalpara').modal('hide').style.display = 'none'
						   }, 12000)
					   }
		   
		   
					   //function Ajouterun
					   function Ajouterun() {
						   document.getElementById('medicamentUn').style.display = 'none'
						   document.getElementById('medicamentdeux').style.display = 'block'
					   }
		   
					   //function Ajouterdeux
					   function Ajouterdeux() {
						   document.getElementById('medicamentdeux').style.display = 'none'
						   document.getElementById('medicamenttrois').style.display = 'block'
					   }
		   
					   //function Ajoutertrois
					   function Ajoutertrois() {
						   document.getElementById('medicamenttrois').style.display = 'none'
						   document.getElementById('medicamentquatre').style.display = 'block'
					   }
					   //function Ajouterquatre
					   function Ajouterquatre() {
						   document.getElementById('medicamentquatre').style.display = 'none'
						   document.getElementById('medicamentcinq').style.display = 'block'
					   }
					   //function Ajoutercinq
					   function Ajoutercinq() {
						   document.getElementById('medicamentcinq').style.display = 'none'
						   document.getElementById('medicamentsix').style.display = 'block'
					   }
					   //function Ajoutersix
					   function Ajoutersix() {
						   document.getElementById('medicamentsix').style.display = 'none'
						   document.getElementById('medicamentsept').style.display = 'block'
					   }
					   //function Ajoutersept
					   function Ajoutersept() {
						   document.getElementById('medicamentsept').style.display = 'none'
						   document.getElementById('medicamenthuit').style.display = 'block'
					   }
					   //function Ajouterhuit
					   function Ajouterhuit() {
						   document.getElementById('medicamenthuit').style.display = 'none'
						   document.getElementById('medicamentneuf').style.display = 'block'
					   }
					   //function Ajouterneuf
					   function Ajouterneuf() {
						   document.getElementById('medicamentneuf').style.display = 'none'
						   document.getElementById('medicamentdix').style.display = 'block'
					   }
		   
					   //function Retourdeux
					   function Retourdeux() {
						   document.getElementById('medicamentdeux').style.display = 'none'
						   document.getElementById('medicamentUn').style.display = 'block'
					   }
		   
					   //function Retourtrois
					   function Retourtrois() {
						   document.getElementById('medicamenttrois').style.display = 'none'
						   document.getElementById('medicamentdeux').style.display = 'block'
					   }
					   //function Retourquatre
					   function Retourquatre() {
						   document.getElementById('medicamentquatre').style.display = 'none'
						   document.getElementById('medicamenttrois').style.display = 'block'
					   }
					   //function Retourcinq
					   function Retourcinq() {
						   document.getElementById('medicamentcinq').style.display = 'none'
						   document.getElementById('medicamentquatre').style.display = 'block'
					   }
					   //function Retoursix
					   function Retoursix() {
						   document.getElementById('medicamentsix').style.display = 'none'
						   document.getElementById('medicamentcinq').style.display = 'block'
					   }
					   //function Retoursept
					   function Retoursept() {
						   document.getElementById('medicamentsept').style.display = 'none'
						   document.getElementById('medicamentsix').style.display = 'block'
					   }
					   //function Retourhuit
					   function Retourhuit() {
						   document.getElementById('medicamenthuit').style.display = 'none'
						   document.getElementById('medicamentsept').style.display = 'block'
					   }
					   //function Retourneuf
					   function Retourneuf() {
						   document.getElementById('medicamentneuf').style.display = 'none'
						   document.getElementById('medicamenthuit').style.display = 'block'
					   }
					   //function retourtrois
					   function Retourdix() {
						   document.getElementById('medicamentdix').style.display = 'none'
						   document.getElementById('medicamentneuf').style.display = 'block'
					   }
		   
					   //function 
					   function sendOrdonnanceModalr() {
		   
						   $('#exampleModalpara').modal({
							   show: true,
							   backdrop: 'static',
							   keyboard: false
						   });
					   }
		   
					   function mahu() {
						   event.preventDefault()
						   var recupererNumberDrug = document.getElementById('genderNomMedi').value;
		   
						   document.getElementById('medicamentUn').style.display = "block"
						   document.getElementById('medicamentdeux').style.display = "block"
		   
					   }
		   
					   function openNav() {
						   document.getElementById("mySidenav").style.width = "320px";
						   setTimeout(() => {
							   document.getElementById('numberNotification').style.display = "none"
						   }, 1000)
		   
					   }
		   
					   function closeNav() {
						   document.getElementById("mySidenav").style.width = "0";
					   }
					   //function orderun
					   function orderuna() {
						   document.getElementById('orderun').style.display = "none"
					   }
		   
					   function orderunb() {
						   document.getElementById('orderun').style.backgroundColor = "rgb(92, 94, 104)"
					   }
		   
					   function orderunc() {
						   $('#validationordonnance').modal({
							   show: true,
							   backdrop: 'static',
							   keyboard: false
						   })
					   }
					   //function test
					   function validationtesta() {
						   document.getElementById('orderdeux').style.display = "none"
					   }
		   
					   function validationtestb() {
						   document.getElementById('orderdeux').style.backgroundColor = "rgb(92, 94, 104)"
					   }
		   
					   function validationtestc() {
						   $('#validationtest').modal({
							   show: true,
							   backdrop: 'static',
							   keyboard: false
						   })
					   }
					   //function test
					   function validationtesttroisa() {
						   document.getElementById('ordertrois').style.display = "none"
					   }
		   
					   function validationtesttroisb() {
						   document.getElementById('ordertrois').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestquatrea() {
						   document.getElementById('orderquatre').style.display = "none"
					   }
		   
					   function validationtestquatreb() {
						   document.getElementById('orderquatre').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestcinqa() {
						   document.getElementById('ordercinq').style.display = "none"
					   }
		   
					   function validationtestcinqb() {
						   document.getElementById('ordercinq').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestsixa() {
						   document.getElementById('ordersix').style.display = "none"
					   }
		   
					   function validationtestsixb() {
						   document.getElementById('ordersix').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestsepta() {
						   document.getElementById('ordersept').style.display = "none"
					   }
		   
					   function validationtestseptb() {
						   document.getElementById('ordersept').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtesthuita() {
						   document.getElementById('orderhuit').style.display = "none"
					   }
		   
					   function validationtesthuitb() {
						   document.getElementById('orderhuit').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   // fermer examen modale
					   function validerMontestFermer(){
						$('#exampleModal').modal('hide')
					}

					//function open examen modale
					function exampleModalenvoiTest(){
						$('#exampleModal').modal({
							show: true,
						   backdrop: 'static',
						   keyboard: false
						})
					}