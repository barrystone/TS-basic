"use strict";
let id = 5;
let company = 'barrystone';
let isValidate = false;
let a = 'good';
let count;
// count = 'not number';
let ids = [1, 2, 3, 4, 5];
// ids.push('not number');
// let ids: number[] = [1, 2, 3, 4, 5, false];
let arr = [1, true, 'test'];
// Tuple
let person = [1, 'barry', true];
// let person: [number, string, boolean] = ['stone', 'barry', true];
// Tuple array
let employees;
employees = [
    [1, 'jack'],
    [2, 'tony'],
    [3, 'barry']
];
// employees = [
//   [1, 'jack'],
//   [2, 'tony'],
//   ['not number', 'barry']
// ];
// Union
let pid;
pid = 'test';
pid = 1;
// pid = true;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('Direction 1');
console.log(Direction1.Up); // get 1
console.log(Direction1.Left); // get 3
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log('Direction 2');
console.log(Direction2.Up); // get 'Up'
console.log(Direction2.Left); // get 'Left'
// Objects
const user1 = {
    id: 1,
    name: 'barry'
};
const user2 = {
    id: 2,
    name: 'barry'
};
const user3 = {
    id: 3,
    name: 'stone'
};
// Type assertion
let cid = 1;
// Way 1
let customerId = cid;
// Way 2
// let customerId = cid as number;
// Function
// if set "noImplicitAny: true", don't neet to set params type
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// console.log(addNum(1, 'test'));
// Void
function log(message) {
    console.log(message);
}
log(1);
log('test');
const user4 = {
    id: 4,
    name: 'stone'
};
// user4.id =  5;
user4.name = 'barry';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Interface can't use "Union(|)"
// interface Point = number | string;
const p1 = 1;
