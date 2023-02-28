// Se añade finally

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
    .finally(() => console.log('finally'))