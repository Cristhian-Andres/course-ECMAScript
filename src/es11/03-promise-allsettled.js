// Estudiar las promesas en js
const promise1 = new Promise((resolve, reject) => reject ('Reject 1'))
const promise2 = new Promise((resolve, reject) => resolve ('Resolve 1'))
const promise3 = new Promise((resolve, reject) => resolve ('Resolve 2'))

Promise.allSettled([promise1, promise2, promise3])
.then(Response => console.log(Response))