let id: number = 5;
let company: string = 'barrystone';
let isValidate: boolean = false;
let a: any = 'good';

let count: number;
// count = 'not number';

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('not number');
// let ids: number[] = [1, 2, 3, 4, 5, false];
let arr: any[] = [1, true, 'test'];

// Tuple
let person: [number, string, boolean] = [1, 'barry', true];
// let person: [number, string, boolean] = ['stone', 'barry', true];

// Tuple array
let employees: [number, string][];
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
let pid: string | number;
pid = 'test';
pid = 1;
// pid = true;

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}
console.log('Direction 1');
console.log(Direction1.Up); // get 1
console.log(Direction1.Left); // get 3

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
console.log('Direction 2');
console.log(Direction2.Up); // get 'Up'
console.log(Direction2.Left); // get 'Left'

// Objects
const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'barry'
};

type UserType = { id: number; name: string };
const user2: UserType = {
  id: 2,
  name: 'barry'
};

interface UserInterface {
  id: number;
  name: string;
}
const user3: UserInterface = {
  id: 3,
  name: 'stone'
};

// Type assertion
let cid: any = 1;
// Way 1
let customerId = <number>cid;
// Way 2
// let customerId = cid as number;

// Function
// if set "noImplicitAny: true", don't neet to set params type
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));
// console.log(addNum(1, 'test'));

// Void
function log(message: string | number): void {
  console.log(message);
}
log(1);
log('test');
// log(false);

// Interface
interface UserInterface2 {
  readonly id: number;
  name: string;
  age?: number;
  // age: number;
}
const user4: UserInterface2 = {
  id: 4,
  name: 'stone'
};
// user4.id =  5;
user4.name = 'barry';

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Type and Interface diff
type Point = number | string;
// Interface can't use "Union(|)"
// interface Point = number | string;
const p1: Point = 1;
