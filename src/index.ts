// Basic Types
let id: number = 5;
let company: string = "Traversy";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", false];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Mary"],
];

// Union
let pid: string | number;
pid = 22;
pid = "22";

// Enum
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

console.log(Directions.Up);

// Objects
type User = {
  id: number;
  name: string;
};

const user1: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 5));

function log(message: string | number): void {
  console.log(message);
}

log("String or Number");

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
  readonly hobby: string;
}

const user2: UserInterface = {
  id: 2,
  name: "Mark",
  hobby: "Football",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;
  private email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  register() {
    return `${this.name} is now registered with email ${this.email}`;
  }
}

const brad = new Person(1, "Brad Traversy", "Email1");
const mike = new Person(2, "Mike", "Email2");

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, email: string, position: string) {
    super(id, name, email);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Email3", "Developer");

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["1", "2", "3", "4"]);

// numArray.push("hello"); Error
