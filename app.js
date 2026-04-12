const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

// Cuando hagas click, ponle o quítale la clase "active"
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Cerrar el menú automáticamente al hacer click en un enlace
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
});

elementos.forEach(el=>{
    observer.observe(el);
});



elementos.forEach(el=>{
    observer.observe(el);
});


let carrito = [];

function agregarCarrito(nombre,precio,imagen){

carrito.push({
nombre:nombre,
precio:precio,
imagen:imagen
});

document.getElementById("contador").innerText = carrito.length;

mostrarCarrito();

}

function mostrarCarrito(){

let lista = document.getElementById("lista-carrito");
let totalElemento = document.getElementById("total-precio");

lista.innerHTML="";

let total = 0;

carrito.forEach(function(producto){

let item = document.createElement("li");

item.innerHTML =
"<img src='"+producto.imagen+"' width='40'> " +
producto.nombre + " - $" + producto.precio;

lista.appendChild(item);

total += producto.precio;

});

totalElemento.innerText = total;

}

function verCarrito(){

let menu = document.getElementById("carrito-menu");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}


function enviarWhatsApp(){

if(carrito.length === 0){
alert("El carrito está vacío");
return;
}

let telefono = "18099430075"; 

let mensaje = "Hola hermano, quiero hacer este pedido:\n\n";

let total = 0;

carrito.forEach(function(producto){

mensaje += "• " + producto.nombre + " - $" + producto.precio + "\n";

total += producto.precio;

});

mensaje += "\n💰 Total: $" + total;
mensaje += "\n\n¿Me preparas este pedido por favor?";

let url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

window.open(url, "_blank");
}

const botones = document.querySelectorAll(".filter-btn");
const productos = document.querySelectorAll(".card-productos");

botones.forEach(boton => {

boton.addEventListener("click", () => {

let filtro = boton.getAttribute("data-filter");

productos.forEach(producto => {

let categoria = producto.getAttribute("data-category");

if(categoria === filtro){
producto.classList.remove("oculto");
}else{
producto.classList.add("oculto");
}

});

});

});


