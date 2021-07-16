
var humedad = 0;
var trabajadores = 0;
var ambiente = 0;
var liquido = 0;

function recibir(){

    let formulario = document.forms["formulario"]

    var a = formulario["ambiente"];
    var b = formularo["humedad"];
    var c = formulario["trabajadores"];
    var d = formulario["liquido"];
    
    ambiente = parseInt(a.value);
    humedad = parseInt(b.value);
    trabajadores = parseInt(c.value);
    liquido = parseInt(d.value);

}

console.log(ambiente, liquido, trabajadores, liquido)

function alerta(ambiente, liquido, trabajadores, humedad){

    if ( ambiente <= 30 || ambiente >=90 ){
        alert("fallo en la temperatura")        
    }
    if (liquido >=90){
        alert("fallo en el liquido")
    }
    if (humedad >=50) {
        alert("fallo en la humedad")
    }
    if (trabajadores >=100){
        alert("F")
    }


}





var peso = parseFloat()