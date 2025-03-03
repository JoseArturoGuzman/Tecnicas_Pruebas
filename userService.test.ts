import { register, authenticate, blockUser, reset } from './userService';
describe('Fail Based Tests', () => {
// Desarrollar aquí pruebas Basadas en Fallas

test('Debe dar error si el nombre de usuario está vacío', () => {
    expect(() => register('', 'contraseñatest')).toThrow('Username and password are required');
});

test('Debe dar error si la contraseña está vacía', () => {
    expect(() => register('usuariotest', '')).toThrow('Username and password are required');
});

test('Debe dar error si el nombre de usuario ya existe', () => {
    register('usuariotest', 'contraseñatest');
    expect(() => register('usuariotest', 'otraClave')).toThrow('User already exists');
});

test('Se debe poder registrar un usuario si los datos son correctos', () => {
    expect(() => register('usuario2', 'password456')).not.toThrow();
});

});
describe('Use Based Tests', () => {
// Desarrollar aquí pruebas Basadas en el Uso
});
describe('Model Based Tests', () => {
// Desarrollar aquí pruebas Basadas en Modelos
});