let nombreVocal = ["G","U","I","L","L","3","R","M","O"];

function vocal(){
    for (let i = 0; i<nombreVocal.length; i++){
        
        if (nombreVocal[i] == "A" || nombreVocal[i] == "E" || nombreVocal[i] == "I" || nombreVocal[i] == "O" || 
            nombreVocal[i] == "U") {
            console.log("He encontrado la vocal " + nombreVocal[i])

            // NOTA PARA PABLO: SI PONGO...
            // if (nombreVocal[i] == "A" || "E" || "I" ||  "O" || "U") {
            //... solo me hace la comparación con la "A" y pasa a asignarle el valor "E" a nombreVocal[i].
            // Esta solución es un poco aparatosa pero la he dejado porque funciona.
            // Cuando lo corrijas si quieres comentamos alguna solución más práctica que no se me haya ocurrido.

        } else if (nombreVocal[i] == "1" || nombreVocal[i] == "2" || nombreVocal[i] == "3" || nombreVocal[i] == "4" ||
        nombreVocal[i] == "5" || nombreVocal[i] == "6" || nombreVocal[i] == "7" || nombreVocal[i] == "8" || 
        nombreVocal[i] == "9" || nombreVocal[i] == "0"){
            console.log("Los nombres de personas no contienen el número " + nombreVocal[i])
            
        } else {
            console.log("He encontrado la consonante " + nombreVocal[i])
        }
    }
}