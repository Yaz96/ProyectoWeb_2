
var modal = document.getElementById('id01');
let CA = 123;

function LoginResolution(data){
    let password = $("#password" ).val();

    if(data.posts.length != 0){
        if (password != data.posts[0].password){
            alert("contraseña incorrecta");
            $("#password" ).val('');
        }
        else{
            createUserUpdateFetch(data.posts[0].email)}
    }
    else{
        alert("email incorrecto o no registrado");
    }
}
function createUserUpdateFetch(email){
        let data = {};
        data.active = true;
    
    
        url = `/minirobo/api/status/${email}`;
        let settings = {
            method : 'PUT',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        };

	fetch(url, settings)
    .then(response => {
        if(response.ok){
        }
        else{
            throw Error("Something went wrong.");
        }
    })		
    .then(responseJSON => {
        alert("Welcome back!");
    })
    .catch(err => {
        console.log(err);
    })

    window.location.href = "profile.html";

    }    

    function createPostUserFetch(Nombre,Regemail,RegPass,RegNivCuent){
        let url = './minirobo/api/create-user';
	let settings = {
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({
			tipo: "user",
			name: Nombre,
			email: Regemail,
            password: RegPass,
            Privilegio:RegNivCuent
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
			alert("Your user was added correclty.");
		})
		.catch(err => {
			console.log(err);
		});




    }

function createUserFetch(email){
    let url = `/minirobo/api/log/${email}`; // /sports/api/list-sports
    
	fetch(url) 
		.then(response => {
			if(response.ok){
				return response.json();
			}
			else{
				throw Error("Something went wrong.");
			}
		})		
		.then(responseJSON => LoginResolution(responseJSON))
		.catch(err => {
			console.log(err);
        });}

$(".loginform").on("submit", function(event) {
    event.preventDefault();
    let email = $("#email" ).val();

    createUserFetch(email);
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("#RegNomUsuario").val('');
        $("#Regemail").val('');
        $("#RegPass").val('');
        $("#RegPassCong").val('');
        $("#RegCodAdm").val('');
    }
}

$("#sendButt").on("click", function(event) {
    event.preventDefault();
    let Nombre = $("#RegNomUsuario").val();
    let Regemail = $("#Regemail").val();
    let RegPass = $("#RegPass").val();
    let RegPassConf = $("#RegPassCong").val();
    let RegCodAdm = $("#RegCodAdm").val();
    let RegNivCuent = $("#RegNivCuent").val();
    
    modal.style.display = "none";

    if (CA==RegCodAdm){ //Checa que el codigo de administrador este correcto
        if (RegPass==RegPassConf){ //checa que las contraseñas sean las mismas
        $("#RegNomUsuario").val('');
        $("#Regemail").val('');
        $("#RegPass").val('');
        $("#RegPassCong").val('');
        $("#RegCodAdm").val('');
        $("#RegNivCuent").val('');
        
        createPostUserFetch(Nombre,Regemail,RegPass,RegNivCuent);

        }
        else{
            alert("Contraseñas no son las mismas");
        }
    }
    else{
        alert("Codigo de Administrador incorrecto, contacta tu adminisrador");

    }
    



});