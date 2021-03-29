document.addEventListener("DOMContentLoaded",function(event){
    
    let arrayTotal = []
    let idLocal

    function constructorUsuario(nombreCliente,DirCliente,TelCliente,nombreCont,DirCont,TelCont) {
        this.idCliente = Math.floor(Math.random() * 999999);
        this.nombreCliente = nombreCliente;
        this.DirCliente = DirCliente;
        this.TelCliente = TelCliente;
        this.fechaCreacion = new Date();

        this.idCont = Math.floor(Math.random() * 999999);
        this.nombreCont = nombreCont;
        this.DirCont = DirCont;
        this.TelCont = TelCont;
    }

    function obtenerDatos() {
        
        let nombreCliente = document.getElementById("Nombre_User").value;
        let DirCliente = document.getElementById("Dir_User").value;
        let TelCliente = document.getElementById("Tel_User").value;

        let nombreCont = document.getElementById("Nombre_Cont").value;
        let DirCont = document.getElementById("Dir_Cont").value;
        let TelCont = document.getElementById("Tel_Cont").value;

        if (nombreCliente == '' || DirCliente == '' || TelCliente == '' || nombreCont == '' || DirCont == '' || TelCont == '') {
            alert('Alguno de los campos esta vacio, por favor verifique.')
        }
        else{

            var newUsuario = new constructorUsuario(nombreCliente,DirCliente,TelCliente,nombreCont,DirCont,TelCont)
            
            arrayTotal.push(newUsuario) 

            /* alert(JSON.stringify(arrayTotal)) */
            alert('Usuario creado satisfactoriamente.')

            /* idLocal = Math.floor(Math.random() * 999999); */

            localStorage.setItem(`ArrayClientes`, JSON.stringify(arrayTotal))      
            /* localStorage.setItem(idLocal, JSON.stringify(newUsuario)) */

            
        }

    }

    document.getElementById('btn').addEventListener('click', obtenerDatos, true);

    

});

function popUp(URL) {
    window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=1000px,height=500px,left = 390,top = 50');
}





