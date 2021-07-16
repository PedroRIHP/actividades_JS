function recibir() {
// extraemos los datos del formulario 
let formulario=document.forms["formulario"];
let x = formulario["payasos"];
let y = formulario["munecas"];

var payasos = x.value;
var munecas = y.value;
//multiplicamos las unidades por su peso en Gramos
var peso_munecas = munecas*75;
var peso_payasos = payasos*112;
// el peso total del pedido sumando el peso de todos los productos
var peso_total = peso_munecas + peso_payasos;

//numero de cajas de kilo

var numero_kilo = peso_total/1000;
console.log("peso total del paquete: ", numero_kilo);

// tomamos el modulo para saber si tenemos exceso
var numero_sobrante = peso_total%1000;
var numero_cajas=0
// si tenemos exceso suma 1 caja, si no pues no jajaja
if (numero_sobrante = 0){
    numero_cajas=numero_kilo
}else{
    numero_cajas= parseInt(numero_kilo + 1);
}
console.log("el numero de cajas de a kilo es: ",numero_cajas);

}