import { EventosJS } from './modul/eventos.js';

//Constantes
const baseDeDatos = [];
const URL = "./data/data.json"
//Variables
let categorias = $(".shop");
categorias.append(`<h3 class="col-md-9 title" id="titleP"><strong>Pelotas</strong></h3>`);
categorias.append(`<h3 class="col-md-9 title" id="titleO"><strong>Cubre grip</strong></h3>`);
let titleP = $("#titleP");
let titleO = $("#titleO");
let sectionCarrito = $("#sectionCarrito");
let filtros = $(".filtros");
//AJAX - Creamos la muestra de productos del shop
$.getJSON(URL, function(respuesta, estado) {
    if(estado === "success") {
        let misProductos = respuesta;
        for (const item of misProductos) {
            baseDeDatos.push(item);
            let category = item.categoria;
            let DOMcards = (`<div class="card">
            <img src="../imagen/productos/${item.img}" class="card-img-top" alt="${item.id}">
            <div class="card-body">
            <h6 class="card-title">${item.categoria} ${item.marca}</h6> 
            <p class="card-text">$ ${item.precio}</p></div>
            <button class="btnProducto" id="btn${item.id}">Agregar al carrito</button></div>`);
                if (category === "pelotas") {
                    titleP.after(DOMcards)
                }
                else if (category === "overgrip") {
                    titleO.after(DOMcards)

                }
                else {
                    console.log("No exist")
                }
        }
    }
})

//CARRITO - Estructura DOM
let DOMcarrito = (`<div class="container">
                <p class="NoProduct hidden">Tu carrito está vacío</p>
                <p class="NoProduct hidden">¡Agregá tus productos!</p>
                <p class="precioTotal show" style="display: none">Total: 
                <span id="precioTotal show" style="display: none">0</span>
                    </p>
                <button class="btn Buy show" style="display: none">Finalizar Compra</button>
                </div>`);

sectionCarrito.prepend(DOMcarrito)

//Filtros
let tagFiltroC = $(`<hr>
<div class="categorias">
<p>Filtro por Elementos:</p>
<form onsubmit="return false" class="categoriasCheckbox">
        <div class="xx">
            <input name="identificador" value="pelotas" id="BallF" type="radio">
            <label for="pelotas">Pelotas</label>
        </div>
        <div class="xx">
            <input name="identificador" value="overgrip" id="OverF" type="radio">
            <label for="overgrip">Cubre grip</label>
        </div>
        <br>
        <input class="btn btnFiltrar" type="submit" value="Filtrar">
    </form>
</div>
`
);
let  tagFiltroM = $(`<hr>
<div class="categorias">
    <p>Filtro por Marca:</p>
    <form onsubmit="return false" class="categoriasCheckbox">
        <div class="XX">
            <input name="identificador" value="wilson" id="wilson" type="radio">
            <label for="Wilson">Wilson</label>
        </div>
        <div class="XX">
            <input name="identificador" value="Babolat" id="BabolatO" type="radio">
            <label for="Babolat">Babolat</label>
        </div>
        <div class="XX">
            <input name="identificador" value="Prince" id="Prince" type="radio">
            <label for="Prince">Prince</label>
        </div>
        <div class="XX">
            <input name="identificador" value="Dunlop" id="Dunlop" type="radio">
            <label for="Dunlop">Dunlop</label>
        </div>
        <div class="XX">
            <input name="identificador" value="Weilepu" id="Weilepu" type="radio">
            <label for="Weilepu">Weilepu</label>
        </div>
        <div class="XX">
        <input name="identificador" value="Bullpadel" id="Bullpadel" type="radio">
        <label for="Bullpadel">Bullpadel</label>
    </div>
    <br>
        <input class="btn btnFiltrar" type="submit" value="Filtrar">
    </form>
</div>
`
);

filtros.append(tagFiltroC);
filtros.append(tagFiltroM);


//Funcion para llamar a todos los eventos. (LO QUE RENEGUE NO TIENE PRECIO)
EventosJS()