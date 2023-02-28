// Tenemos una función
function* iterator(array){
    for(let value of array){
        yield value;
    }
}

const it = iterator(['ana', 'julieth', 'ulises', 'jenifer', 'cristhian']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);