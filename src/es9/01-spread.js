// 
const user = {
    username: 'Cristhian',
    age: 28,
    country: 'co'
}
const {username, ...values} = user;

console.log(username);
console.log(values);