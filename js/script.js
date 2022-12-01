let cantidadEdades=parseInt(prompt("ingrese la cantidad de edades que quiere calcular(no mas de 4)"))
if (cantidadEdades==4){
    alert("ingrese las 4 edades");

    let primerNum=parseInt(prompt("ingrese la primer edad"))
    let segundoNum=parseInt(prompt("ingrese la segunda edad"))
    let tercerNum=parseInt(prompt("ingrese la tercer edad"))
    let cuartoNum=parseInt(prompt("ingrese la cuarta edad"))

    function CalculadorDeEdadPromedio4(){
        let resultado=(primerNum+segundoNum+tercerNum+cuartoNum)/4;
        alert("el promedio de edad es de "+resultado)
    }

    CalculadorDeEdadPromedio4()
}
if (cantidadEdades==3){
    alert("ingrese las 3 edades");

    let primerNum=parseInt(prompt("ingrese la primer edad"))
    let segundoNum=parseInt(prompt("ingrese la segunda edad"))
    let tercerNum=parseInt(prompt("ingrese la tercer edad"))

    function CalculadorDeEdadPromedio3(){
        let resultado=(primerNum+segundoNum+tercerNum)/3;
        alert("el promedio de edad es de "+resultado)
    }

    CalculadorDeEdadPromedio3()
}
if (cantidadEdades==2){
    alert("ingrese las 2 edades");

    let primerNum=parseInt(prompt("ingrese la primer edad"))
    let segundoNum=parseInt(prompt("ingrese la segunda edad"))

    function CalculadorDeEdadPromedio2(){
        let resultado=(primerNum+segundoNum)/2;
        alert("el promedio de edad es de "+resultado)
    }

    CalculadorDeEdadPromedio2()
}
if (cantidadEdades==1){
    alert("ingrese la edad");

    let primerNum=parseInt(prompt("ingrese la unica edad"))

    function CalculadorDeEdadPromedio1(){
        let resultado=(primerNum)/1;
        alert("el promedio de edad es de "+resultado)
    }

    CalculadorDeEdadPromedio1()
}

