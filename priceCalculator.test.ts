import { calculateFinalPrice } from './priceCalculator';
describe('Intuition and Experience Based Tests', () => {
// Desarrollar aquí pruebas basadas en la intuición y experiencia
});
describe('Domain Based Tests', () => {
// Desarrollar aquí pruebas basadas en el dominio

// Identificación de Clases de Equivalencia

test('Los precios negativos no deben de ser validos', () => {
    expect(() => calculateFinalPrice(-1, 25)).toThrow('Invalid input');
  });

  test('Es invalido tener descuentos negativos.', () => {
    expect(() => calculateFinalPrice(1500, -15)).toThrow('Invalid input');
  });

  test('Es invalido tener descuentos por encima del 100%', () => {
    expect(() => calculateFinalPrice(485, 101)).toThrow('Invalid input');
  });

  test('Debe aceptar precios positivos y descuentos positivos ', () => {
    expect(calculateFinalPrice(10000, 75)).toBe(2500);
});


  //Análisis de Valores Límite
  test('Se calcula correctamente cuando el precio es un numero decimal', () => {
    expect(calculateFinalPrice(499.99, 75)).toBeCloseTo(124.9975);
});

  test('Debe de dar el mismo precio en caso de que sea del 0%', () => {
    expect(calculateFinalPrice(759, 0)).toBe(759);
  });

  test('Te debe dar el precio cuando calculamos el 50%', () => {
    expect(calculateFinalPrice(7000, 50)).toBe(3500);
  });

  test('Debe de dar 0 en caso de que el descuento sea del 100%', () => {
    expect(calculateFinalPrice(9145, 100)).toBe(0);
  });



});


describe('Code Based Tests', () => {
// Desarrollar aquí pruebas basadas en el código
});