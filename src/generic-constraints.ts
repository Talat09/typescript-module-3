// type ta eirkm eirkm hoite hove tahle seta ke bole generic constaints
type MyInfoType = {
  name: string;
  age: number;
  salary: number;
};
const myInfo: MyInfoType = {
  name: "Talat Mahmud ",
  age: 100,
  salary: 199398,
};
type MandatoryTypes = { name: string; age: number; salary: number };
const addmeINMyCrushMind = <T extends MandatoryTypes>(myInfo: T) => {
  const crush = " kate winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

const results = addmeINMyCrushMind<MyInfoType>(myInfo);
console.log(results.salary);
