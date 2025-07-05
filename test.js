const { 
    sum, 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
} = require('./app.js');

// Prueba para la función sum()
test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});

// Prueba para fromEuroToDollar()
test("3.5 euros deberían ser 3.745 dólares", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 3.5 * 1.07
});

// Prueba para fromDollarToYen()
test("3.5 dólares deberían ser ~511.92 yenes", () => {
    const expected = (3.5 / 1.07) * 156.5; // Conversión correcta
    expect(fromDollarToYen(3.5)).toBeCloseTo(expected, 2); // Aproximado a 2 decimales
});

// Prueba para fromYenToPound()
test("3.5 yenes deberían ser ~0.0195 libras", () => {
    const expected = (3.5 / 156.5) * 0.87; // Conversión correcta
    expect(fromYenToPound(3.5)).toBeCloseTo(expected, 4); // Aproximado a 4 decimales
});