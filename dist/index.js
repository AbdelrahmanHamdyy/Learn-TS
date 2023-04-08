"use strict";
// Basic Types
let id = 5;
let company = "Traversy";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad", false];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Mary"],
];
// Union
let pid;
pid = 22;
pid = "22";
// Enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
console.log(Directions.Up);
const user1 = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
let customerId = cid;
// let customerId = cid as number;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 5));
function log(message) {
    console.log(message);
}
log("String or Number");
const user2 = {
    id: 2,
    name: "Mark",
    hobby: "Football",
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name, email) {
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
    constructor(id, name, email, position) {
        super(id, name, email);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Email3", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["1", "2", "3", "4"]);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
