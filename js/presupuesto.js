
//datos del usuario

let Cliente = function(){
	this.nombre = nombre;
	this.apellido = apellido;
  	this.getFullName = function () {
    	return `${this.nombre} ${this.apellido}`
  }
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

