const {
    calcularArea,
    cambiarNombre,
    esCuadrado
} = require("./figuras");

// TEST 1: calcularArea
test("calcularArea calcula correctamente el área", () => {
    expect(calcularArea(10, 5)).toBe(25);
});

// TEST 2: calcularArea
test("calcularArea devuelve cero si la base es cero", () => {
    expect(calcularArea(0, 5)).toBe(0);
});

// TEST 3: cambiarNombre
test("cambiarNombre devuelve null cuando el nombre está vacío", () => {
    expect(cambiarNombre("")).toBeNull();
});

// TEST 4: cambiarNombre
test("cambiarNombre devuelve null cuando el nombre es null", () => {
    expect(cambiarNombre(null)).toBeNull();
});

// TEST 5: esCuadrado
test("esCuadrado devuelve true cuando los lados son iguales", () => {
    expect(esCuadrado(5, 5)).toBe(true);
});

// TEST 6: esCuadrado
test("esCuadrado devuelve false cuando los lados son diferentes", () => {
    expect(esCuadrado(5, 3)).toBe(false);
});