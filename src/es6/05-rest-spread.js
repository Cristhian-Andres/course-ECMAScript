// Arrays destructurig
let fruits = ['apple', 'banana', 'kiwi'];
let [a, b, c] = fruits;
console.log(a, b, c);

// Objetc destructurig
let user = {
    username: 'Cristhian',
    age: 28,
    country: 'col'
}
let {username, age, country} = user;
console.log(username, age, user.country);

// Spreed operator
let person = {
    name: 'andres',
    age: 28
}
let email = 'user@email.es'
let data = {...person, email}
console.log(data);

// rest
function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num + values[2];
}

sum(1,2,3,4,5)