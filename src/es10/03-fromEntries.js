// Pasar de un array a un objeto
const entries = new Map([['name', 'Cristhian'], ['age', 28]]);
console.log(entries);
console.log(Object.fromEntries(entries));