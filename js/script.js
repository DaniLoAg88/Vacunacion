/**
 * Todo lo referente a la vacunación
 **/

let edades = ["2 meses", "4 meses", "11 meses", "12 meses", "15 meses", "4 años", "6 años", "12 años", "14 años"];

let seleccion = document.querySelector("#desplegableEdad");

let banderaGris = false; //Va a controlar la escala de grises para activarla o desactivarla
let banderaContraste = false; //Va a controlar el contraste para activarlo o desactivarlo

for (let i = 0; i < edades.length; i++) {
    
    let opcion = document.createElement("option");
    opcion.setAttribute("value", edades[i]);
    opcion.textContent = edades[i];
    
    seleccion.appendChild(opcion);
}

seleccion.addEventListener("change", function(){

    let salida = document.querySelector("#salidaVacuna");
    document.querySelector("#tituloSalida").innerHTML = "<b>Debe vacunar a su hijo contra las siguientes enfermedades:</b>";

    switch (seleccion.value) {
        case "2 meses":
            salida.textContent = "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo B, Neumococo";
            break;
        case "4 meses":
            salida.textContent = "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Meningococo C, Meningococo B, Neumococo";
            break;
        case "11 meses":
            salida.textContent = "Poliomielitis, Difteria, Tétanos, Tosferina, Haemophilus B, Hepatitis B, Neumococo";
            break;
        case "12 meses":
            salida.textContent = "Sarampión, Rubeola, Parotiditis, Meningococo C, Meningococo B";
            break;
        case "15 meses":
            salida.textContent = "Varicela";
            break;
        case "4 años":
            salida.textContent = "Sarampión, Rubeola, Parotiditis, Varicela";
            break;
        case "6 años":
            salida.textContent = "Difteria, Tétanos, Tosferina, Poliomielitis";
            break;
        case "12 años":
            salida.textContent = "Varicela, Meningococo ACWY, Papilomavirus2";
            break;
        case "14 años":
            salida.textContent = "Difteria, Tétanos";
            break;
        default:
            document.querySelector("#tituloSalida").textContent = "";
            salida.textContent = "";
            break;
    }
});



/**
 * Todo lo referente a la accesibilidad
 **/

document.querySelector("#aumentar").addEventListener("click", ()=>{
    ajustarFuente(1);
});

document.querySelector("#reducir").addEventListener("click", ()=>{
    ajustarFuente(-1);
});
/* ÉSTOS DOS DE ARRIBA NO SE LLAMAN DIRECTAMENTE EN EL ADDEVENT PORQUE LE PASAMOS UN PARÁMETRO */

document.querySelector("#escalaGrises").addEventListener("click", escalaGrises);
document.querySelector("#altoContraste").addEventListener("click", altoContraste);
document.querySelector("#restablecer").addEventListener("click", restablecer);

function ajustarFuente(cambio){
    let elementos = document.querySelectorAll("body *:not(.accesibilidad *)"); /* Selecciona todos los elementos del DOM que hay dentro del BODY (* all) excepto el div accesibilidad y todo lo que tiene dentro  */

    elementos.forEach(function(elem){
        let estilo = window.getComputedStyle(elem); // Toma el estilo de cada elemento recorrido
        let tamañoFuente = parseFloat(estilo.fontSize); // Toma del estilo el tamaño de la fuente 

        console.log(tamañoFuente);
        elem.style.fontSize = tamañoFuente + cambio + "px";
    })
}

function escalaGrises(){

    if(banderaGris == false){
        document.body.style.filter = "grayscale(100%)"; // Pone el filtro de escala de grises al BODY
        banderaGris = true;
    } else{
        document.body.style.filter = ""; // Quita el filtro de escala de grises al BODY
        banderaGris = false;
    }
    
    // let boton = document.querySelector(".icono-accesibilidad");
    // boton.style.position = "fixed";
    // boton.style.top = "50%";
}

function altoContraste() {

    if(banderaContraste == false){
        document.body.style.backgroundColor = "#1c1f22";
        document.querySelector("#desplegableEdad").style.backgroundColor = "#1c1f22";

        let elementos = document.querySelectorAll("body *");

        elementos.forEach(function(elem){
        let estilo = window.getComputedStyle(elem);
        elem.style.color = "#ffd700";
        })

        banderaContraste = true;

    } else{
        let elementos = document.querySelectorAll("body *");

        elementos.forEach(function(elem){
            elem.style.fontSize = "";
            elem.style.color = "";
        })

        document.body.style.backgroundColor = "";
        document.querySelector("#desplegableEdad").style.backgroundColor = "";

        banderaContraste = false;
    }
    
}

function restablecer() {
    let elementos = document.querySelectorAll("body *");

    elementos.forEach(function(elem){
        elem.style.fontSize = "";
        elem.style.color = "";
    })

    document.body.style.backgroundColor = "";
    document.body.style.filter = "";
    document.querySelector("#desplegableEdad").style.backgroundColor = "";
}

function mostrarOcultar() {
    let barra = document.querySelector(".accesibilidad");
    barra.classList.toggle("mostrar"); //TOGGLE lo que hace es buscar esa clase y si la tiene la quita, pero si no la tiene la añade

    let boton = document.querySelector(".icono-accesibilidad");
    boton.classList.toggle("mostrar");

}