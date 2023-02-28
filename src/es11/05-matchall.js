// La 
const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";
const regex = /\b(Apple)+\b/g;

for(const match of fruit.matchAll(regex)){
    console.log(match);
}