// Forma de hacerlo anteriormente
function newUser(name, age, country){
    var name = name || 'Cristhian';
    var age = age || 28;
    var country = country || 'col' 
    console.log(name, age, country)
};
newUser();
newUser('Andrés', 22, 'col');

// Como hacerlo con EMACScript 6
function newAdmin(name = 'Cristhian', age = 28, country = 'col'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Camila', 20, 'Canada');