/* Java script es un lenguaje de programacion multiparadigma, acepta programacion funcional, estructurada, orientada a objetos, eventos
Dentro de Js no existe int, double, float, string, etc.
Para el manejo de variables con tip de dato existe el estandar ES6 el cual nos dice que para el manejo de variables tenemos: 
VAR
LET 
CONST
*/
//Vamos a hacer una funcion para que en el campo nombre sea mayor a 3 caracteres.
//6 ejercicios en java script:
/* Método puede ser parte de una clase y le pertenece a un tipo de objetos  
La funcion siempre devuelve un estado o resultado
El parametro es la variable y el argumento es el valor que se le da a la variable
*/
function validar(formulario){
    //longitud
    if(formulario.nombre.value. length < 4){
    alert("Por favor escribe más de 3 caracteres en el nombre");
    //mantiene el cursor en donde se encontró el error
    formulario.nombre.focus();
    return false;
    }
    var abcOK="qwertyuiopasdfghjklñzxcvbnm"+"QWERTYUIOPASDFGHJKLLÑZXCVBNM";
    //valor
    var checkStr= formulario.nombre.value;
    //alert(checkStr);
    var allValido = true;
     //vamos hacer un bucle mediante el ciual primero obtenga la cadena del nombre y la separa en caracteres, una vez que tenga cada caracter debo de compararlo con la cadena que en este momento estoy considerando como la verdad absoluta y si despues de recorrer toda la cadena encuyentro que el caracter no se encuentra envie un error*/ 
    for(var i=0; i<checkStr.length; i++){
        var caracteres = chechStr.charAt(i);
        for(var j=0; j<abcOK. length; j++){
            if(caracteres ==abcOK.charArt(j)){
                break;
            }
        }
        if(j==abcOK.length){
            allValido=false;
            break;
        }
    }
    if(allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var abcOK="1234567890";
    //valor
    var checkStr= formulario.edad.value;
    //alert(checkStr);
    var allValido = true;
     //vamos hacer un bucle mediante el ciual primero obtenga la cadena del nombre y la separa en caracteres, una vez que tenga cada caracter debo de compararlo con la cadena que en este momento estoy considerando como la verdad absoluta y si despues de recorrer toda la cadena encuyentro que el caracter no se encuentra envie un error*/ 
    for(var i=0; i<checkStr.length; i++){
        var caracteres = chechStr.charAt(i);
        for(var j=0; j<abcOK. length; j++){
            if(caracteres ==abcOK.charArt(j)){
                break;
            }
        }
        if(j==abcOK.length){
            allValido=false;
            break;
        }
    }
    //para validar el correo es necesario contar con una exp. reguar porque tenemos un formato el cual es: texto.texto@texto.texto
    if(allValido){
        alert("Escriba unicamente números en el campo de edad");
        formulario.edad.focus();
        return false;
    }
    //una exp regular se inicia con doble //
    //[@\s]cualquier texto seguido de un arroba seguido de una cadena
    //El segundo caso valida un texto que incluya un arroba seguido de texto seguido de una cadena
    //El tercer caso valida texto seguido de un punto seguido de texto seguido de un arroba seguido de texto seguido de un punto seguido de texto
    var b=/^[@\s]+[]
    var txt=formulario.correo.value;
    alert("Email " +b.test(txt)?"":"no")+"valido");
    return b.test;
}