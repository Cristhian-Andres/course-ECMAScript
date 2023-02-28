// Capturamos el error
try {
    hello();
} catch (error) {
    console.log(error);
}

// Ahora nosotros colocamos el error
try {
    anotherFn();
} catch {
    console.log('Error!')
}