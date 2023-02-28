/* Promesas: algo que va a pasar, hoy, mañana o nunca
es una forma de trabajar con el asincronismo. 
*/
const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }else{
            reject('uff');
        }
    })
}

anotherFuntion()
    .then(response => console.log(response))
    .catch(err => console.log(err))