//premitive khetre amra always type alias use korbo
type User = {
  name: string;
  age: number;
};
type extendedUser = User & {
  role: string;
};
const newUser: extendedUser = {
  name: "Rafy",
  age: 25,
  role: "khor giri",
};
console.log(newUser);
//union insersection er maddome interface

// ar object type er datar khetre type interface use korbo ...interface chaile extend kora jai
interface IUser {
  name: string;
  age: number;
}
// const userWithTypeAlias: User ={
// name : 'Type ALias';
// age: 100;
// }
// const userWithInterface : Iuser ={
// name : 'Interface';
// age : 200 ;
// };
// ...interface chaile extend kora jai
interface IExtendedUser extends IUser {
  role: string;
}
const userTalat: IExtendedUser = {
  name: "Talat Mahmud",
  age: 200,
  role: "admin",
};
console.log(userTalat);
//Object,function,array ei gula sob object ei gular khetre interface type use korte hove
//Object,function,array ei gula sob object ei gular khetre interface type use korte hove
//type alias
type addNumbersType = (num1: number, num2: number) => number;
const addNumbers1: addNumbersType = (number1, number2) => number1 + number2;

//with interface
interface IaddNumbers {
  (num1: number, num2: number): number;
}
const addNumbers2: IaddNumbers = (number1, number2) => number1 + number2;
//function er khetre type alias beshi use korbo because of more readable code

const addNumbers3 = (number1: number, number2: number): number =>
  number1 + number2; //normal way

// example of array
//normal way
const rollNumbers1: number[] = [1, 2, 3, 5];

// example with type alias array
type rollNumbersType = number[];
const rollNumbers2: rollNumbersType = [1, 2, 3, 5];

// example with interface [ index ]  j kono type er data hold kore
interface IRollNumbers1 {
  [index: number]: number; // eita ke index signature bole
  //[ index : number ] : string ;
}
// interface IRollNumbers2 {
//   [index: number]: string; // eita ke index signature bole
// }
const rollNumbers3: IRollNumbers1 = [11, 23, 32, 57];
// const rollNumbers4: IRollNumbers2 = [" 11 ", " 21 ", " 45", " 53"];

console.log(rollNumbers3);
//object class er khetre type interface niye kaaj korbo baki gular khetre type alias niye kaaj korbo
