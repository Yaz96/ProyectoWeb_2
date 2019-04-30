
function displayResults(data){

for(let i = 0; i < data.posts.length; i ++){
	$('.results').append(`<div class= "Extra">
							<div class="Video"> 
							<img src=" ${data.posts[i].url}/${data.posts[i].name}" alt="${data.posts[i].name}" onclick="OverOn(this);" ></img>
							</div>
							</div>`);
	}
}




function createImageFetch(){
    let url = '/minirobo/api/img'; // /sports/api/list-sports
    
	fetch(url)
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => displayResults(responseJSON))
		.catch(err => {
			console.log(err);
		});}








function watchForm(){ // Creates the image grid from the images that are in the database


createImageFetch();

}

function OverOn(imgurl) {
	document.getElementById("overlay").style.display = "block";
	$("#fotoOv").remove();
	$("#ImageOver").append( `<div id="fotoOv"> 
	<img src=" ${imgurl.src}" alt="${imgurl.src}" " ></img>
	</div>`);


  }

function OverOff(){
	document.getElementById("overlay").style.display = "none";
}




$(watchForm);


/*{"tipo:":"registro","timestamp": "1/19/2019 14:13:14","email": "gacy.casas@icloud.com","beneficiario": "Aarón Galarza Casas","edad": "10","GradoEscolar":4,"Escuela":"Lazaro Cardenas","PadreBenef": "Juan Francisco Galarza Luna","Telefono": 8124125055,"Segunda_Ref":"Graciela Casas Bravo", "TelefonoSegRef": 8112170220, "Nivel": 1 }
{"tipo:":"registro", "timestamp": "1/19/2019 14:18:22","email": "lauraepuebla@hotmail.com","beneficiario": "Aarón Guerrero Puebla","edad": "11","GradoEscolar":6,"Escuela":"Esc. Primaria Petra Benavides de Salinas","PadreBenef": "Roberto Carlos Guerrero Moreno","Telefono": 8119994167,"Segunda_Ref":"Laura Esthela Puebla Zamora", "TelefonoSegRef": 8126472975, "Nivel": 2 }
*/