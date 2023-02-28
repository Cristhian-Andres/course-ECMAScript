class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // get: es privado
    get uAge(){
        return this.age;
    }
    // set
    set uAge(n){
        return this.age = n;
    }
    // Metodos: speak es privado.
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.#speak()} ${this.name}`
    }
}

const ana = new User('Ana', 22);
console.log(ana.greeting());
console.log(ana.uAge);
console.log(ana.uAge = 20);