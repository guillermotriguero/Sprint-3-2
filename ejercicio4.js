let firstName = ["G","U","I","L","L","E","R","M","O"];
let surname = ["T", "R", "I", "G", "U", "E", "R", "O"];
let fullName = [];

function apellido(){
    for (let i = 0; i<firstName.length; i++){
        fullName.push(firstName[i])
    }

    // El espacio entre nombre y apellido

    fullName.push("");

    for (let i = 0; i<surname.length; i++){
        fullName.push(surname[i])
    }
}

console.log(fullName);