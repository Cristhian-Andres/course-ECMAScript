// anehced object literals
function newUser(user, age, country, uId){
    return {
        user,
        age, 
        country,
        id: uId
    }
}
console.log(newUser('cral@2204', 28, 'col', 1));