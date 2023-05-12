
function encriptar() {

    //Almacenamos el texto introducido por el usuario
    let texto = document.getElementById("texto_introducido").value;
    texto = texto.toLowerCase();

    //Mostramos el textarea donde se mostrara el texto encriptado/desencriptado
    document.getElementById("texto_resultante").style.display = "inline-block";
    document.getElementById("boton_copiar").style.display = "inline-block";

    //Creamos una variable para almacenar el texto resultante
    let resultado ="";

    //Recorremos el string para reemplazar cada vocal por su clave de encriptación
    for(let i=0; i<texto.length; i++){
        if(texto[i] == "a"){

            resultado = resultado + texto[i].replace("a","ai");

        } else if(texto[i] == "e"){

            resultado = resultado + texto[i].replace("e","enter");

        } else if(texto[i] == "i"){

            resultado = resultado + texto[i].replace("i","imes");

        } else if(texto[i] == "o"){

            resultado = resultado + texto[i].replace("o","ober");

        } else if(texto[i] == "u"){

            resultado = resultado + texto[i].replace("u","ufat");

        } else{

            resultado = resultado + texto[i];
        }
    }

    //Mostramos el texto en el area correspondiente
    document.getElementById("texto_resultante").innerHTML=resultado;
}

function desencriptar() {

    //Almacenamos el texto introducido por el usuario
    let texto = document.getElementById("texto_introducido").value;
    texto = texto.toLowerCase();

    //Mostramos el textarea donde se mostrara el texto encriptado/desencriptado
    document.getElementById("texto_resultante").style.display = "inline-block";
    document.getElementById("boton_copiar").style.display = "inline-block";

    //Creamos una variable para almacenar el texto resultante
    let resultado ="";

    //Modificamos el string para reemplazar cada clave por su vocal

    resultado = texto.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");

    //Mostramos el texto en el area correspondiente
    document.getElementById("texto_resultante").innerHTML=resultado;
}

function copiar(){
    let texto = document.getElementById("texto_resultante").value;
    navigator.clipboard.writeText(texto);
}

window.onload = function(){

    const botonEncriptar = document.getElementById("boton_encriptar").addEventListener("click", encriptar);
    const botonDesencriptar = document.getElementById("boton_desencriptar").addEventListener("click",desencriptar);
    const botonCopiar = document.getElementById("boton_copiar").addEventListener("click",copiar);

}
