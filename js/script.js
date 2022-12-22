let nombreDeUsuario = prompt("ingrese su nombre y apellido")
alert("bienvenido "+nombreDeUsuario)

function auto(id, nombre, marca, velocidad){
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.velocidad = velocidad;
}

const auto1 = new auto("1","polo","vw","160km")
const auto2 = new auto("2","corolla","toyota","170km")
const auto3 = new auto("3","agera","koenisegg","447km")

function camioneta(id, nombre, marca, velocidad){
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.velocidad = velocidad;
}

const camioneta1 = new camioneta("4","hilux","toyota","160km")
const camioneta2 = new camioneta("5","amarok v6","vw","220km")
const camioneta3 = new camioneta("6","raptor-f150","ford","250km")

const autosInfo = [
{
    modelo: 'polo',
    precio: 16000
},
{
    modelo: 'corolla',
    precio: 18000
},
{
    modelo: 'agera',
    precio: 1800000
}
]

const camionetasInfo = [
{
    modelo: 'hilux',
    precio: 26000
},
{
    modelo: 'amarok',
    precio: 18000
},
{
    modelo: 'raptor-f150',
    precio: 1800000
}   
]

const vehiculosInfo = autosInfo.concat(camionetasInfo);

let TipoDeAutos = prompt("ingrese 1 si usted busca un auto, ingrese 2 si usted busca una camioneta")
if (TipoDeAutos==1){
let modeloAuto =prompt("usted a elegido autos los modelos disponibles son los siguientes: polo, corolla, agera, si queres mas info sobre algunos de estos escriba el modelo")
if (modeloAuto = "polo")
    alert(JSON.stringify(auto1))
else if (modeloAuto = "corolla")
    alert(JSON.stringify(auto2))
else if (modeloAuto = "agera")
    alert(JSON.stringify(auto3))
else
    alert("este auto no existe")
}
else if (TipoDeAutos==2){
let modeloCamioneta =prompt("usted a elegido camionetas los modelos disponibles son los siguientes: hilux, amarok v6, raptor-f150, si queres mas info sobre algunas de estas escriba el modelo")
if (modeloCamioneta = "hilux")
    alert(JSON.stringify(camioneta1))
else if (modeloCamioneta= "amarok v6")
    alert(JSON.stringify(camioneta2))
else if (modeloCamioneta = "raptor-f150")
    alert(JSON.stringify(camioneta3))
else
    alert("este auto no existe")
}
else{
    alert("ingreso cualquier numero porfavor ingres bien el numero")
}

let infoDeTodo = prompt("si queres saber los precios de todos los autos envie 1, si quiere saber toda la info de las camionetas envie 2, si quieres saber la info de todos le vehiculos envie 3.")
if (infoDeTodo==1)
    alert(JSON.stringify(autosInfo))
else if (infoDeTodo==2)
    alert(JSON.stringify(camionetasInfo))
else if (infoDeTodo==3)
    alert(JSON.stringify(vehiculosInfo))
else
alert("no seleccionaste ningun vehiculo")

let preciosVehiculos = prompt("escriba auto para ver para q auto estas mas cerca de comprar con su presupuesto o camioneta para ver cual estas mas cerca de comprar con tu presupuesto")
if (preciosVehiculos = "auto"){
let plataDisponible = prompt("ingrese la plata que usted dispone, el auto que le alcanze aparecera en la consola")
const filtrado = autosInfo.filter(autosInfo=>autosInfo.precio<=plataDisponible)
console.log(filtrado)}
else if (preciosVehiculos = "camioneta"){
let plataDisponible = prompt("ingrese la plata que usted dispone, la camioneta que le alcanze aparecera en la consola")
const filtrado = camionetasInfo.filter(camionetasInfo=>camionetasInfo.precio<=plataDisponible)
console.log(filtrado)}
else 
alert("ingrese bien el tipo de vehiculo")




