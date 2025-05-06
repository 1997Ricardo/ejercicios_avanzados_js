function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
          return i;
        }
      }
      return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Han Solo")); // 2
console.log(findArrayIndex(mainCharacters, "Rey"));      // 4
console.log(findArrayIndex(mainCharacters, "Yoda"));     // -1
console.log(findArrayIndex(mainCharacters, "Leia"));     // 1

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
  
    if (index !== -1) {
      array.splice(index, 1); // eliminamos 1 elemento en la posición encontrada
    }
  
    return array;
  }
  // Copias para pruebas
let test1 = [...mainCharacters];
let test2 = [...mainCharacters];
let test3 = [...mainCharacters];

console.log(removeItem(test1, "Han Solo")); // elimina "Han Solo"
console.log(removeItem(test2, "Leia"));     // elimina "Leia"
console.log(removeItem(test3, "Yoda"));     // no existe, no cambia nada