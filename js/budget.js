//DOM
let date = new Date();
let currentHour = date.getHours();
let titleContainer = document.getElementById('titlePresupuesto');
let hours = [
    [6, 12, 'Buen día!</br><h3> Presupuestá tus envíos ahora mismo</h3>'],
    [12, 19, 'Buenas tardes!</br><h3> Presupuestá tus envíos ahora mismo</h3>'],
    [19, 24, 'Buenas noches!</br><h3> Presupuestá tus envíos ahora mismo</h3>'],
    
];
let msg = 'Hola!';
hours.forEach(hour => {
    if(currentHour >= hour[0] && currentHour < hour[1]) {
        msg = hour[2];
    }            
})
titleContainer.innerHTML = msg; //innerHTML permite leer en js etiquetas del html



//SUCURSALES 

let sucursalArray = [{
    "localidad" : "Mar del Plata ",
    "provincia": "Buenos Aires",
    "id" : "1",
    "direccion" : "",
    "latitud" : "",
    "longitud" : ""
},{
    "localidad" : "La Plata ",
    "provincia": "Buenos Aires",
    "id" : "2 ",
    "direccion" : "",
    "latitud" : "",
    "longitud" : ""
},{
    "localidad" : "Bahia Blanca",
    "provincia": "Buenos Aires",
    "id" : "3",
    "direccion" : "",
    "latitud" : "",
    "longitud" : ""
},{
    "localidad" : "Rosario",
    "provincia": "Santa Fe",
    "id" : "4",
    "direccion" : "",
    "latitud" : "",
    "longitud" : "" 
},{
    "localidad" : "Neuquen",
    "provincia": "Neuquen",
    "id" : "5",
    "direccion" : "",
    "latitud" : "",
    "longitud" : ""
}];
//funcion de orden alfabetico
function compareStrings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }
  sucursalArray.sort(function(a, b) {
    return compareStrings(a.localidad, b.localidad);
  })
//
let sucursal;
sucursal = document.getElementsByName('sucursal'); 
console.log(sucursal);
function loadLocal() {
    sucursalArray.forEach(function(localidad) { 
    sucursal.forEach(function(inputSucural){
        let item = document.createElement('option');
        item.textContent = localidad.localidad;
        inputSucural.appendChild(item);
    });
});
sucursal.forEach(function (iSucursal){
    iSucursal.value = -1;
});  
}
loadLocal();


const KEYNAME = "keyName";
let nameInput = document.getElementById("name");
nameInput.addEventListener("focus",infoFocus);
nameInput.addEventListener('blur', saveName)
let sendLocal = document.getElementById("sendLocal");
let receptLocal = document.getElementById("receptLocal");
let entrega = document.getElementById("entrega");
entrega.addEventListener("focus",infoFocus);

function saveName(){
    console.log(nameInput.value);
    localStorage.setItem(KEYNAME, nameInput.value);
}

function loadSavedName(){
    nameInput.value =  localStorage.getItem(KEYNAME);
}
loadSavedName();

function infoFocus() {
    console.log('Ingresá tus datos!');
}


let kiloArray = [];
for(let i = 1; i <= 100 ; i++){
    kiloArray.push(i);
}
let kilo;
kilo = document.getElementById('kilos'); 
function loadKilo() {
    kiloArray.forEach(function(weigth) {
    let item = document.createElement('option');
    item.textContent = (weigth) + " kg";
    kilo.appendChild(item);
    });
    kilo.value = -1;
};
loadKilo();

let sendAlert = document.getElementById('entrega');
sendAlert.addEventListener('change', alertFunction); 
function alertFunction(){
    if(sendAlert.value == 2){
    alert("Los envíos a domicilio tienen un costo adicional de entre $200 y $500 según la dirección");
    }
}
