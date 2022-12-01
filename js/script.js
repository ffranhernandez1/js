function CalculadorDeEdadPromedio(){
    let resultado=(primerNum+segundoNum+tercerNum+cuartoNum)/4;
    alert("el promedio de edad es de "+resultado)
}

let primerNum=parseInt(prompt("ingrese la primer edad"))
let segundoNum=parseInt(prompt("ingrese la segunda edad"))
let tercerNum=parseInt(prompt("ingrese la tercer edad"))
let cuartoNum=parseInt(prompt("ingrese la cuarta edad"))

CalculadorDeEdadPromedio()
