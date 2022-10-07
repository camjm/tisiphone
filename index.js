// plain javascript (valid because TS is superset of JS)
console.log('hello');
// async feature (tsc will polyfill if not supported by target JS version)
async function hello() {
    return 'world';
}
// access native DOM class with intellisense
const url = new URL('www.google.com');
// Implicit Typing
let lucky = 23; // type is inferred when declared and assigned
//lucky = ''; // TS throws compile-time error (JS wouldn't)
// can opt out of implicit typing with annotation
let lucky2 = 24;
lucky2 = 'works';
// if a variable is not annotated with a type, and is not assigned a value when declared, it will have an 'any' type
let lucky3;
let font;
font = 'italic'; // font can only be bold or italic
// explicitly strong-typing objects with multiple properties
const person = {
    first: 'cam',
    last: 'mac'
};
// strong typing a function can be complex because of arguments and return value
function pow(x, y) {
    return Math.pow(x, y); // implicit return type of number
}
function power(x, y) {
    return Math.pow(x, y);
}
//let result: string = pow(1,2); // throws a compile-time error
function listener(event) {
    // no return type
}
// how to strongly type an array
const arr = [];
arr.push(1);
//arr.push('23'); // throws compile-time error
// can even enforce custom object types to get full intellisense support when iterating
const arr2 = [];
const list = [3, 'test', false];
const list2 = [];
// generics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
// can even implicitly infer generic type
let y = new Observable('test');
export {};
