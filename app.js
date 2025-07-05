console.log('Hello World!');

const sum = (a, b) => {
  return a + b;
}

// Tasas de conversión basadas en 1 EURO
const oneEuroIs = {
    "JPY": 156.5,  // 1 euro = 156.5 yenes
    "USD": 1.07,   // 1 euro = 1.07 dólares
    "GBP": 0.87    // 1 euro = 0.87 libras
};

// Conversión de Euro a Dólar
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs.USD;
};

// Conversión de Dólar a Yen (pasando por euros)
const fromDollarToYen = (valueInDollar) => {
    const valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

// Conversión de Yen a Libra (pasando por euros)
const fromYenToPound = (valueInYen) => {
    const valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

// Exportamos todas las funciones
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};