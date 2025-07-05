console.log('Hello World!');

const sum = (a, b) => {
  return a + b;
}



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
  // convertimos el valor a yenes
  let valueInYen = valueInDollar * 156.5;
  // retornamos el valor en yenes
  return valueInYen;
}
const fromYenToPound = function(valueInYen) {
  // convertimos el valor a libras
  let valueInPound = valueInYen * 0.87;
  // retornamos el valor en libras
  return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
console.log(sum(7,3)) 