function createAnn(){
        let dia = $("#day").val();
        let mes = $("#month").val();
        let anio = $("#year").val();
        let author = $("#ann").val();
        let message = $(".sub").val();


//----------Esta seccion es la que falta corregir------------//
        let data = {};
        data.active = true;
    

        url = `/minirobo/api/status/${email}`;
        let settings = {
            method : 'PUT',
            headers : {
                "tipo" : "anuncio"
            },
            body : JSON.stringify(data)
        };
//----------------------------------------------------------//

	fetch(url, settings)
    .then(response => {
        if(response.ok){
        }
        else{
            throw Error("Something went wrong.");
        }
    })		
    .then(responseJSON => {
        alert("Correct");
    })
    .catch(err => {
        console.log(err);
    })
    //window.location.href = "profile.html";

    }  


$("#sub").click(function(e){
    e.preventDefault();                     //Evita el refresh
    console.log("ya llegue primera parte");                 
    createAnn();
});