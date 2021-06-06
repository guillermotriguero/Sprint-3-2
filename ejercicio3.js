let nombreMapa = ["G","U","I","L","L","L","R","M","O"];

function mapa(){
    // Primero creamos el mapa

    const m = new Map();


    for (let i = 0; i<nombreMapa.length; i++){

           // CÓDIGO QUE PUSE YO ANTES (Y FUNCIONABA)
        
        // if (m.get (nombreMapa[i]) == null) {
        //     m.set(nombreMapa[i], 1)
        //     } else {
        //     m.set(nombreMapa[i], (m.get (nombreMapa[i])+1))
        //     }    
        // }
    

        // VERSIÓN CON CÓDIGO TERNARIO POR SUGERENCIA DE PABLO:

        m.get (nombreMapa[i]) == null? m.set(nombreMapa[i], 1) : m.set(nombreMapa[i], (m.get (nombreMapa[i])+1));
    }
     
    // Mostramos el mapa en la consola
    console.log(m);
}

