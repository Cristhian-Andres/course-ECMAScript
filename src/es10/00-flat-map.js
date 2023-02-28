// Matrices: aplana el resultado
const array1 = [1, 2, 3, 4, [ 5, 4, 3, 2, 1, [1,2,3]]];
// flat
console.log(array1.flat(3));

// flatmap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v*2]));
