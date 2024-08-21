const txtArea = document.querySelector(".txt__area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(txtArea.value);
    mensaje.value = textoEncriptado;
    txtArea.value = "";
    mensaje.style.backgroundImage = "none"; // Corregido
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }   
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(txtArea.value);
    mensaje.value = textoDesencriptado;
    txtArea.value = "";
    mensaje.style.backgroundImage = "none"; // Corregido
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    // Debemos reemplazar en el orden inverso al de encriptación para evitar problemas.
    for (let i = matrizCodigo.length - 1; i >= 0; i--) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }   
    }
    return stringDesencriptada;
}