const input = document.getElementById("texto"); //input de texto de la página html
const btn = document.getElementById("outputEncriptacion"); // boton de Encriptacion del texto en la página html
const output = document.getElementById("outputDesencriptacion"); // output del resultado de Encriptacion de la página html

// Guardamos el texto dado por el usuario en la variable global textoParaEncriptar
let inputText = input.value;
let textoParaEncriptar = inputText;

btn.addEventListener("click", () => {
    output.innerHTML = encriptar(textoParaEncriptar);
});

// Función que encripta el texto dado por el usuario
function encriptar(texto) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        textoEncriptado += String.fromCharCode(texto.charCodeAt(i) + 1);
    }
    return textoEncriptado;
}

// Función que desencripta el texto dado por el usuario
function desencriptar(texto) {
    let textoDesencriptado = "";
    for (let i = 0; i < texto.length; i++) {
        textoDesencriptado += String.fromCharCode(texto.charCodeAt(i) - 1);
    }
    return textoDesencriptado;
}

// Función que muestra el texto desencriptado en el output de la página html
function mostrarDesencriptado() {
    output.innerHTML = desencriptar(textoParaEncriptar);
}

// Mostrando el texto encriptado y desencriptado en la consola del navegador
console.log(encriptar(textoParaEncriptar));
console.log(desencriptar(textoParaEncriptar));
