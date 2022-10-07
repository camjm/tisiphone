// third-party libraries (some libaries ship with TS type declarations, but not lodash)
// so this import will cause a warning (no types found) and intellisense won't be available 
// unless you install a mono repo with community maintaned types as a node dev dependency
import * as _ from 'lodash';

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
let lucky2 : any = 24;
lucky2 = 'works';

// if a variable is not annotated with a type, and is not assigned a value when declared, it will have an 'any' type
let lucky3;

// creating your own types
type Style = string; // creates a type based on another type
type Style2 = 'bold' | 'italic'; // creates a union type
let font: Style2;
font = 'italic' // font can only be bold or italic

// enforce the shape of objects with an interface
interface Person { // restrictive by default: defines all and only properties allowed
    first: string;
    last: string;
    [key: string]: any // this means that any other properties can be optionally added to Person
}

// explicitly strong-typing objects with multiple properties
const person: Person = {
    first: 'cam',
    last: 'mac'
}


// strong typing a function can be complex because of arguments and return value
function pow(x: number, y: number) {
    return Math.pow(x, y); // implicit return type of number
}

function power(x: number, y: number): number { // explicit return type of number
    return Math.pow(x, y);
}

//let result: string = pow(1,2); // throws a compile-time error

function listener(event: string) : void {
    // no return type
}

// how to strongly type an array
const arr: number[] = [];
arr.push(1);
//arr.push('23'); // throws compile-time error

// can even enforce custom object types to get full intellisense support when iterating
const arr2: Person[] = [];

// TypeScript also natively supports tupples (basically a fixed-length array where each index has it's own type)
type MyList = [number, string, boolean];
const list: MyList = [3, 'test', false];

// you can make the arguments optional
type MyList2 = [number?, string?, boolean?]
const list2: MyList2 = [];

// generics
class Observable<T> {
    constructor(public value: T) {

    }
}

let x: Observable<number>;

// can even implicitly infer generic type
let y = new Observable('test');