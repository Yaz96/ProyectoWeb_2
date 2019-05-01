
var modal = document.getElementById('id01');

function LoginResolution(data){
    let password = $("#password" ).val();

    if(data.posts.length != 0){
        if (password != data.posts[0].password){
            alert("contrasena incorrecta");
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
})
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}