
//datos del usuario

let sucursal = [{		{
        "localidad" : "Mar del Plata ",
        "provincia": "Buenos Aires",
        "id" : "1",
        "direccion" : " ",
        "latitud" : ,
        "longitud" : 
    },{
        "localidad" : "La Plata ",
        "provincia": "Buenos Aires",
        "id" : "2 ",
        "direccion" : " ",
        "latitud" : ,
        "longitud" : 
    },{
        "localidad" : "Bahia Blanca",
        "provincia": "Buenos Aires",
        "id" : "3",
        "direccion" : " ",
        "latitud" : ,
        "longitud" : 
    },{
    	"localidad" : "Rosario",
    	"provincia": "Santa Fe",
        "id" : "4",
        "direccion" : " ",
        "latitud" : ,
        "longitud" : 
    },{
    	"localidad" : "Neuquen",
    	"provincia": "Neuquen",
        "id" : "5",
        "direccion" : " ",
        "latitud" : ,
        "longitud" : 
    }];



let cliente = {
    "nombre y apellido" : " "
    "id" = ,
}

//direccion origen / destino

let Sucursal = function(){
	this.localidad = localidad;
	this.direccion = direccion;
	this.idSucursal = idSucursal;
	this.getDistance = function(){
		//a definir segun formas de calculo con el cliente
	}
}

let sucursalOrigen = new Sucursal();
let sucursalDestino = new Sucursal();

//volumen //peso

let Encomienda = function(){
	this.volume = volumen;
	this.weight = peso;
}

//tipo de entrega

let entrega = ["Entrega a Domicilio", "Retiro en Sucursal"];

//presupuesto

let Presupuesto = function(){
	let preciokgXKm = 50;
	this.cliente ;
	this.encomiendas = [];
	this.sucursalOrigen ;
	this.sucursalDestino ;
	this.fecha = Date.now();
	this.precio = function (){
		// a definir
	}
}

