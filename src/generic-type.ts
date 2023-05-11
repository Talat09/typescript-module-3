// generic mane generalize
const rollNumbers11: number[] = [1, 3, 4, 5];
const rollNumbers22: Array<number> = [1, 3, 4, 5];
const rollNumber3: Array<string> = ["1", "2"];
const rollNumber4: Array<boolean> = [true, false];
const userNameAndRollNumber1: Array<{ name: string; roll: number }> = [
  { name: " Mr x", roll: 1 },
  { name: " Mr Y ", roll: 2 },
];

//generic type

type GenericArray = Array<number>;
const rollNumbers5: GenericArray = [1, 3, 4, 5];

// generic type for any
type GenericArray1<T> = Array<T>;
const rollNumbers: GenericArray1<number> = [1, 3, 4, 5];
const rollNumber2: GenericArray1<string> = ["1", "2"];
const userNameAndRollNumber: GenericArray1<object> = [
  { name: " Mr x", roll: 1 },
  { name: " Mr Y ", roll: 2 },
];

type NameRollType = { name: string; roll: number };
const userNameAndRollNumber2: GenericArray1<NameRollType> = [
  { name: " Mr x", roll: 1 },
  { name: " Mr Y ", roll: 2 },
];

// one or more arguments pass generic type
type GenericTuple<x, y> = [x, y];
const relation: GenericTuple<string, string> = ["persian", " kate winslet"];

// another example
const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "persian",
    salary: 2000000000,
  },
  "Amir Hamja ",
];

// another example  with best practise object er vitor ki hove seta bole deowa best practise
const relationWithSalary1: GenericTuple<
  { name: string; salary: number },
  string
> = [
  {
    name: "persian",
    salary: 2000000000,
  },
  "Amir Hamja ",
];

// type bole dite pari object er
type relationWithSalaryType = {
  name: string;
  salary: number;
};
const relationWithSalary2: GenericTuple<relationWithSalaryType, string> = [
  {
    name: "persian",
    salary: 2000000000,
  },
  "Amir Hamja ",
];
