export function EventosJS() {
    let btnCarrito = $('.btnCarrito')
    btnCarrito.on('click', () => {
        $("#sectionCarrito").toggle('direction: "left"');
    })

    let ocultarP = $('.hidden')
    let mostrarP = $('.show')
    let btnAgregar = $('.btnProducto')
    btnAgregar.click( ()=> {
        ocultarP.hide();
        mostrarP.show();
        console.log("que onda")
    }
    )
let bienvenida = $("body > header > h1")
let subtitulo = $("body > header > h3")

$(document).ready(function(){
    bienvenida.slideUp( ()=> bienvenida.fadeIn())
    bienvenida.animate({
        center: "50%",
        heigth: "2em"},)
        subtitulo.delay(2000)
        .fadeIn()
        .css({
            opacity: "0.5"})
})
}


///////NO ME FUNCIONAN LOS EVENTOS HAY UN ERROR QUE NO PUEDO SOLUCIONAR:
///25[Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL>
