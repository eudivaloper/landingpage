function enviaForm(event){
    event.preventDefault();
    let cliente = {
        nome : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        empresa : document.querySelector("#company").value
    }

    let http = new XMLHttpRequest();
    http.addEventListener("load", function(){
        if (http.readyState == 4){
            console.log(http.response)
        }
    });

    http.open("POST", "https://landingpage-317e2.firebaseio.com/cliente.json");
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(cliente));
}

