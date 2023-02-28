// Es muy utilizado en frameworks
const users = {
    user1: {
        name: 'cristhian',
        age: 28,
        country: 'co'
    },
    user2: {
        name: 'julieth',
        age: 20,
        country: 'ho'
    }
}

// Agregamos '?' para no romper los datos para saber si existen los datos
console.log(users?.user1?.us)
console.log(users?.bebeloper?.country)
