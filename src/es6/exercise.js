function solutions(json1, json2){
    json1 = json1 || {
        name: "Mr. Michi",
        food: "Pescado"
    }
    json2 = json2 || {
        age: 12,
        color: "Blanco"
    }

    return {...json1, ...json2};
}

console.log(solutions());
