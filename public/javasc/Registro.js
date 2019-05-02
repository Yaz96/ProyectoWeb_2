
function createPostRegFetch(timestamp,email,nomNino,edad,GradEsc,Escuela,PuboPriv,NomTut,tel,telsec,Nivel ){
	let url = './minirobo/api/create-registry';
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({
			timestamp: timestamp,
			email: email,
			beneficiario: nomNino,
			edad: edad,
			GradoEscolar:GradEsc,
			Escuela: Escuela,
			Publica_O_Privada:PuboPriv,
			PadreBenef: NomTut,
			Telefono: tel,
			TelefonoSegRef:telsec,
			Nivel: Nivel

		})
	};

	fetch(url, settings)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				return new Promise(function(resolve, reject){
					resolve(response.json());
				})
				.then(data =>{
					throw new Error(data.message);
				})
			}
		})		
		.then(responseJSON => {
			console.log(responseJSON);
			alert("Registro exitoso");
		})
		.catch(err => {
			console.log(err);
		});

}




function watchForm(){ // Creates the image grid from the images that are in the database
	$("#BotonEnviar").on("click", function(event){
		event.preventDefault();
		var today = new Date();

		
		var timestamp = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()+' '+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let email = $("#email").val();
		let nomNino =$("#nombreNino").val();
		let edad =$("#edad").val();
		let GradEsc =$("#GradEsc").val();
		let Escuela =$("#Escuela").val();
		let PuboPriv = $('input[name=escuela]:checked').val();
		let NomTut =$("#NomTutor").val();
		let tel =$("#tel").val();
		let telsec =$("#telsec").val();
		let Nivel = $('input[name=nivel]:checked').val();
		
		$("#email").val('');
		$("#nombreNino").val('');
		$("#edad").val('');
		$("#GradEsc").val('');
		$("#Escuela").val('');
		$("#NomTutor").val('');
		$("#tel").val('');
		$("#telsec").val('');


		createPostRegFetch(timestamp,email,nomNino,edad,GradEsc,Escuela,PuboPriv,NomTut,tel,telsec,Nivel );
		


	});


}


$(watchForm);
