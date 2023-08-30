// const miTitulo = document.querySelector("h1");

// miTitulo.textContent = "resultado";

// function multipliocar(num1,num2) {

//      let resultado = num1 * num2;
     
//      return console.log(resultado);
// }

// multipliocar(3,10)


// document.querySelector("li").onclick = function () {
//     alert("!Ouch !Deja de picharme")
// }


let miImage = document.querySelector("img");

miImage.onclick = function () {

    let miSrc = miImage.getAttribute("src");

    if (miSrc === "images/tigres.jpg"){
        miImage.setAttribute("src", "images/tigres.jpg")
    } else {
        miImage.setAttribute("src", "images/tigre.jpg")
    }
}

let miBoton = document.querySelector("button");

let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {

    let miNombre = prompt("por favor, ingrese tu nombre. ");
    let miApellido = prompt("Agregue su apellido")

    if (!miNombre) {
        estableceNombreUsuario();
    } else {

   
    localStorage.setItem("nombre","Apellido", miNombre,miApellido);

    miTitulo.textContent = "Bienvenido Sr(a)," + miNombre + " " + miApellido
    }
    
}

if(!localStorage.getItem("nombre")){
    estableceNombreUsuario();

} else {
    let nombAlm = localStorage.getItem("nombre","Apellido");
    miTitulo.textContent = "Mozilla es genial," + nombAlm;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
}