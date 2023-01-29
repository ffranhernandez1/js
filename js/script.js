// let nombreFormulario = document.querySelector("#ingresar-nombre");

// let correoFormulario = document.querySelector("#ingresar-correo");

// nombreFormulario.addEventListener("input", function(){

// })

// correoFormulario.addEventListener("input", function(){

// })

// let btnGuardarDatosLocales = document.querySelector(".boton-2");
// let btnGuardarDatosSesion = document.querySelector(".boton-3")
// let btnBorrarDatosLocales = document.querySelector(".boton-4");
// let btnBorrarDatosSesion = document.querySelector(".boton-5");


// btnGuardarDatosLocales.addEventListener("click",(e)=>{
//     e.preventDefault()
//     localStorage.setItem('nombre', nombreFormulario.value)
//     localStorage.setItem('email', correoFormulario.value)
// })

// btnGuardarDatosSesion.addEventListener("click",(e)=>{
//     e.preventDefault()
//     sessionStorage.setItem('nombre', nombreFormulario.value)
//     sessionStorage.setItem('email', correoFormulario.value)  
// })

// btnBorrarDatosLocales.addEventListener("click",(e)=>{
//     e.preventDefault()
//     localStorage.clear()
// })

// btnBorrarDatosSesion.addEventListener("click",(e)=>{
//     e.preventDefault()
//     sessionStorage.clear()
// })

// let formulario = document.querySelector("#formulario");

// let infoFormulario = document.querySelector(".info");

// infoFormulario.innerHTML = ` ${localStorage.getItem('nombre')}`

// const mostrarInfo = formulario.addEventListener("submit", function(e){
//     e.preventDefault();

//     info.innerHTML=`
//     <div class="info-div">
//     <h4 class="info-h4"> Hola ${nombreFormulario.value} gracias por ingresar a nuestra pagina, en caso de compras nos comunicaremos a este mail ${correoFormulario.value} 
//     </h4></div>
//     `
// });





// CODIGO DE CARRITO

const productos = []
let articulosCarro = JSON.parse(localStorage.getItem('articulosCarro')) || [];




class Producto{
    constructor(id, nombre, img){
        this.id = id
        this.nombre = nombre
        this.img = img
    }
    desplegarProducto() {
        const card = `<div class="producto">
        <h4 class="titulo-producto">${this.nombre}</h4>
        <img src=${this.img} class="imagen">
        <button id=${this.id} class='btnAgregarCarro'>agregar al carrito</button>
        </div>
        `
        const container = document.getElementById('grid')
        container.innerHTML += card
    }
    agregarEvento() {
        const btnAgregarCarro = document.getElementById(`${this.id}`)
        const finderProduct = productos.find( p => p.id == this.id)
        btnAgregarCarro.addEventListener('click', () => agregarAlCarrito(finderProduct))
    }
}

fetch("../local.json")
    .then( res => res.json())
    .then( data => {
        data.forEach(prod => {
            let newProducto = new Producto (prod.id, prod.nombre, prod.img)
            productos.push(newProducto) 
        })
        productos.forEach( e => {
            e.desplegarProducto()
        })
        productos.forEach( e => {
            e.agregarEvento()
        })    
    })

const carro = document.querySelector('.carro')

function carroHTML() {
    limpiarHTML();
        articulosCarro.forEach((prod)=>{
            const row = document.createElement("div")
            row.innerHTML=`<div class="producto">
            <h4 class="titulo-producto">${prod.nombre}</h4>
            <img src=${prod.img} class="imagen">
            <button id=${prod.id} class='btn-eliminar'>eliminar del carrito</button>
            </div>
            `;
        carro.appendChild(row)
    })
}
function limpiarHTML(){
    carro.innerHTML = ""
}

if  (articulosCarro.length){
    carroHTML()
}

let btnBorrarDatosLocales = document.querySelector(".boton-4");
btnBorrarDatosLocales.addEventListener("click",(e)=>{
        e.preventDefault()
        localStorage.clear()
          location.reload()
})

function agregarAlCarrito(producto) {

    const enCarro = articulosCarro.find(prod => prod.id === producto.id)

    if(!enCarro) {
        articulosCarro.push({...producto, cantidad: 1 })
        localStorage.setItem('articulosCarro', JSON.stringify(articulosCarro))
    } else {
        let carritoFilter = articulosCarro.filter( prod => prod.id != enCarro.id)
        articulosCarro = [
            ...carritoFilter, 
            {
                ...enCarro,
                cantidad: enCarro.cantidad + 1
            }
        ]
        localStorage.setItem('articulosCarro', JSON.stringify(articulosCarro))
    }
    carroHTML()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'se agrego al carrito!!',
        showConfirmButton: false,
        timer: 1500
      })
}

carro.addEventListener("click", eliminarProducto,);
function eliminarProducto(e){
    if(e.target.classList.contains("btn-eliminar")){
        console.log("entre a eliminar")
        let productoID = e.target.getAttribute("id")
        articulosCarro=articulosCarro.filter(
            (producto)=>producto.id !== productoID
        )
        carroHTML()
    }
}


