//
async function* anotherGenerator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
    yield await Promise.resolve(4)
}

const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log('--hello--');

// lo hacemos con arrays
async function arrayOfNames(array){
    for await(let value of array){
        console.log(value);
    }
}
const names = ['Cristhian', 'Andres', 'Luna', 'Navarro'];
arrayOfNames(names)
console.log('--after--')