// Ejercicio 5

// Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

// Que la función use el parametro para simular una tirada de dado y retornar el resultado.

// Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()

function rollDice(caras) {
    return Math.floor(Math.random() * caras) + 1;
}

console.log("Dado de 6 caras:", rollDice(6));   // 1 a 6
console.log("Dado de 20 caras:", rollDice(20)); // 1 a 20
console.log("Dado de 100 caras:", rollDice(100)); // 1 a 100
