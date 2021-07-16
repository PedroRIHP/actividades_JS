
function recibir(){
    let formulario = document.forms['formulario'];
    var x = formulario['entero'];
    entero = parseInt(x.value);

    console.log(entero);

    var suma=0;
    
    for(var i=1;i<=entero;i++){
        suma= suma + i;
    }
    console.log('suma total ' + suma);
}


/* 
function imc(){
    let indice = document.forms["indice"];

    var a = (indice["peso"]);
    var b = (indice["altura"]);
    
    var imc = (a%(b*b))
    
    console.log('IMC ' + a);
    
}
 */




