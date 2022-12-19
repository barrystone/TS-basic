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
