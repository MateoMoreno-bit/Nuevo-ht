function addTable() {
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')
    
    table.border = '1px'
    table.appendChild(tableBody);
    
    var ArrayClientes = JSON.parse( localStorage.getItem("ArrayClientes"))

    var heading = new Array();
    heading[0] = "ID cliente"
    heading[1] = "Nombre completo cliente"
    heading[2] = "Dirección cliente"
    heading[3] = "Telefono cliente"
    heading[4] = "Fecha de creación cliente"
    heading[5] = "ID contacto"
    heading[6] = "Nombre completo contacto"
    heading[7] = "Dirección contacto"
    heading[8] = "Telefono contacto"
    
    var stock = new Array()

    for(var co = 0;co < ArrayClientes.length;co++){
        stock[co] = new Array(
            JSON.stringify(ArrayClientes[co].idCliente),
            JSON.stringify(ArrayClientes[co].nombreCliente),
            JSON.stringify(ArrayClientes[co].DirCliente),
            JSON.stringify(ArrayClientes[co].TelCliente),
            JSON.stringify(ArrayClientes[co].fechaCreacion),
            JSON.stringify(ArrayClientes[co].idCont),
            JSON.stringify(ArrayClientes[co].nombreCont),
            JSON.stringify(ArrayClientes[co].DirCont),
            JSON.stringify(ArrayClientes[co].TelCont)
        )
    }
    
    //COLUMNAS DE LA TABLA
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }
    
    //FILAS DE LA TABLA
    for (i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }  
    myTableDiv.appendChild(table)
    }
