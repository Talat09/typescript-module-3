const arrayofnumbers = [1, 3, 4, 5];
const arrayofString = arrayofnumbers.map((number) => number.toString());
console.log(arrayofString);

type volume = {
  height: number;
  width: number;
  depth: number;
};
type Area = {
  [key in keyof volume]: string;
};
type Area1 = {
  [key in keyof volume]: volume[key];
};
//generic example
type Area2<T> = {
  [key in keyof T]: T[key];
};
type Area3<T> = {
  readonly [key in keyof T]: T[key];
};
const area1: Area2<{ name: string }> = { name: "persian" };
//more dynamic way
const area2: Area3<{ height: number; width: string }> = {
  height: 11,
  width: "10",
};
type AreaString = {
  height: string;
  width: string;
};
type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};
const rectangularArea: AreaReadOnly = {
  height: 10,
  width: 12,
};
