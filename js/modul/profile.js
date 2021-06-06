export default class Perfil {
    constructor(Nombre, Apellido, fNacimiento, Email, Password, Edad = ""){
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.nacimiento = fNacimiento;
        this.email = Email;
        this.password = Password
        this.edad = Edad;
    }
    
    validar (){
        console.log(this.nombre + " " + this.apellido + " " + "esta logueado");
    }
}
