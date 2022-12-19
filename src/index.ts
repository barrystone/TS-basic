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
  id: 1,
  name: 'barry'
};

interface UserInterface {
  id: number;
  name: string;
}
const user3: UserInterface = {
  id: 2,
  name: 'stone'
};
