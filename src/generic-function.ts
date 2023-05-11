const createArray = (param: string): string[] => {
  return [param];
};
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
const createArray1 = <T>(param: T): T[] => {
  return [param];
};
const result = createArray2<string, string>(
  " bangladesh",
  " i love my country "
);
const result5 = createArray2<boolean, Array<string>>(false, [
  " i love my country ",
]);
const result4 = createArray(" bangladesh");
const result1 = createArray1<boolean>(false);
const result2 = createArray1<object>({ name: "talat", age: 24 });
const result3 = createArray1<{ name: string; age: number }>({
  name: "talat",
  age: 24,
});
type Name = {
  name: string;
  age: number;
};
const result43 = createArray1<Name>({ name: "joy", age: 24 });
// 9.25 mint porjon2 note korci
//spread operator
const addMeInMyCrushMind = (myInfo: object) => {
  const crush = "Osthir maya ";
  const newData = { ...myInfo, crush };
  return newData;
};
const addMeInMyCrushMind1 = <T>(myInfo: T) => {
  const crush = "Osthir maya ";
  const newData = { ...myInfo, crush };
  return newData;
};
//normal function
function addMeInMyCrushMind4<T>(myInfo: T) {
  const crush = "Osthir maya ";
  const newData = { ...myInfo, crush };
  return newData;
}
// const myInfo = {
//   name: "Talat",
//   age: 23,
//   salary: 100000222222220,
// };
const result22 = addMeInMyCrushMind1(myInfo);
const result66 = addMeInMyCrushMind4(myInfo);
