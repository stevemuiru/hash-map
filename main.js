import HashMap from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("Initial length:", test.length()); 
console.log("Initial size:", test.size); 


test.set('apple', 'green');
test.set('banana', 'dark yellow');

console.log(test.get('apple')); 
console.log(test.get('banana')); 


test.set('moon', 'silver');

console.log("After resizing:");
console.log("New size:", test.size); 
console.log("New length:", test.length()); 
console.log(test.get('moon')); 

