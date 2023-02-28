/* Clases en javascript */
// Estamos declarando un clase
class Users {}
// Estamos instanciando una clase
const newUser = new Users();
/* declaramos otra clase*/
class User {
    // Metodos 
    greeting(){
        return 'hello';
    }
} 

const gndx = new User();
console.log(gndx.greeting());
const loper = new User();
console.log(loper.greeting);

// Constructor
class User{
    // Constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'hello';
    }
}

const cristhian = new User();

// this:
class User{
    // Constructor
    constructor(name){
        this.name = name;
    }
    // metodos
    speak(){
        return 'Hello, how are you?'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const andres = new User('Crhisthian');
console.log(andres.greeting());

// setters and getters
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // get
    get uAge(){
        return this.age;
    }
    // set
    set uAge(n){
        return this.age = n;
    }
    // Metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new User('Ana', 22);
console.log(ana.greeting());
console.log(ana.uAge);
console.log(ana.uAge = 20);