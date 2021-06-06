export default class Producto {
    constructor(id, categoria, tipo, marca, precio, descripcion, comprado){
        this.id = parseInt(id);
        this.categoria = categoria;
        this.tipo = tipo;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
        this.comprado = true;
    }
    
    precioTotal (){
        return this.precio * 1.21;
        
    }
}