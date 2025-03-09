// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
  }
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift("Milo");
}
function appendCat(Broom) {
    const appendCat = [...cats , "Broom"];
    return appendCat;
}
function prependCat(Arnold) {
    const prependCat = ["Arnold" , ...cats];
    return prependCat;
}
function removeLastCat() {
    return cats.slice( 0, -1);
}
function removeFirstCat() {
     return cats.slice(1);
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  }); 

 