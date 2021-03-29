document.addEventListener("DOMContentLoaded",function(event){

    var nombreCliente = document.getElementById("Nombre");
    var apellidoCliente = document.getElementById("Apellido");

    function constructorUsuario(nombreCliente,apellidoCliente) {
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
    }

    var btn = document.getElementById("btn");
    if (btn){
        btn.addEventListener("click", function () {
            console.log(nombreCliente.value,apellidoCliente.value)
        });
    }
        

});