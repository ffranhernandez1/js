let nombreFormulario = document.querySelector("#ingresar-nombre");

let correoFormulario = document.querySelector("#ingresar-correo");

nombreFormulario.addEventListener("input", function(){

})

correoFormulario.addEventListener("input", function(){

})

let btnGuardarDatosLocales = document.querySelector(".boton-2");
let btnGuardarDatosSesion = document.querySelector(".boton-3")
let btnBorrarDatosLocales = document.querySelector(".boton-4");
let btnBorrarDatosSesion = document.querySelector(".boton-5");


btnGuardarDatosLocales.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.setItem('nombre', nombreFormulario.value)
    localStorage.setItem('email', correoFormulario.value)
})

btnGuardarDatosSesion.addEventListener("click",(e)=>{
    e.preventDefault()
    sessionStorage.setItem('nombre', nombreFormulario.value)
    sessionStorage.setItem('email', correoFormulario.value)  
})

btnBorrarDatosLocales.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.clear()
})

btnBorrarDatosSesion.addEventListener("click",(e)=>{
    e.preventDefault()
    sessionStorage.clear()
})

let formulario = document.querySelector("#formulario");

let infoFormulario = document.querySelector(".info");

infoFormulario.innerHTML = ` ${localStorage.getItem('nombre')}`

const mostrarInfo = formulario.addEventListener("submit", function(e){
    e.preventDefault();

    info.innerHTML=`
    <div class="info-div">
    <h4 class="info-h4"> Hola ${nombreFormulario.value} gracias por ingresar a nuestra pagina, en caso de compras nos comunicaremos a este mail ${correoFormulario.value} 
    </h4></div>
    `
});





// CODIGO DE CARRITO



const productos = document.querySelectorAll(".producto");
productos.forEach((producto) => {
    producto.addEventListener("click", (e) => {
        leerDatosProducto(e.target.parentElement);
    });
});

let articulosCarro = [];

function leerDatosProducto(producto){
    const informacionProducto = {
        titulo: producto.querySelector(".titulo-producto").textContent,
        id: producto.querySelector(".boton-carrito").getAttribute("data-id"),
        foto: producto.querySelector(".imagen").src,
    };
    articulosCarro = [...articulosCarro, informacionProducto];

    carroHTML();
}

const carro = document.querySelector(".carro");

function carroHTML(){
limpiarHTML();

    articulosCarro.forEach((producto)=>{
        const row = document.createElement("div")
        row.innerHTML=`
        <div class="productos">
        <h4>${producto.titulo}</h4>
        <img src="${producto.foto}" class="">
        <button class="btn-eliminar" id="${producto.id}">Eliminar Producto</button>
        </div>
        `;

    carro.appendChild(row)
    })
}

function limpiarHTML(){
    carro.innerHTML = ""
}

carro.addEventListener("click", eliminarProducto);

function eliminarProducto(e){
    if(e.target.classList.contains("btn-eliminar")){
        let productoID = e.target.getAttribute("id")
        articulosCarro=articulosCarro.filter(
            (producto)=>producto.id !== productoID
        )

        carroHTML()
    }
}