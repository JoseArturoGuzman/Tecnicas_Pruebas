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
test('Se debe regsistrar un usuario de manera exitosa, por lo que autenticamos si fue registrado', () => {
    register('usuario3', 'contrasena123');
    expect(authenticate('usuario3', 'contrasena123')).toBe(true);
});

test('Debe de darme un errror cuando intento a un registrar un usuario ya existente', () => {
    expect(() => register('usuario3', 'contrasena123')).toThrow('User already exists');
});

test('Debe no dejar autenticar a un usuario que no se haya registrado', () => {
    expect(authenticate('usuarioNoNuevo', 'Consentraseñatest')).toBe(false);
});

test('Se puede bloquear a los usuarios registrados', () => {
    register('usuarioPrueba', 'contraseña123');
    blockUser('usuarioPrueba');
    expect(authenticate('usuarioPrueba', 'contraseña123')).toBe(false);
})

test('Se debe de eliminar a los usuarios registrados cuando se resetea, y por lo tanto no se podrán autenticar', () => {
    register('usuarioTest', 'contraseña123');
    reset();
    expect(authenticate('usuarioTest', 'contraseña123')).toBe(false);
});

});
describe('Model Based Tests', () => {
// Desarrollar aquí pruebas Basadas en Modelos
});