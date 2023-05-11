//Generic Interface
interface CrushInterface<T> {
  name: string;
  husband: T;
}
const crush1: CrushInterface<boolean> = {
  name: "salma",
  husband: true,
};
console.log(crush1);
const cursh2: CrushInterface<string> = {
  name: "salma fariha juhi",
  husband: "Dihan",
};
console.log(cursh2);
interface HusbandInterface {
  name: string;
  salary: number;
}
const crush3: CrushInterface<HusbandInterface> = {
  name: "salma fariha juhi",
  husband: {
    name: "Talat Mahud",
    salary: 20000,
  },
};
console.log(crush3);
interface IcrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}
const crush4: IcrushInterface<boolean, string> = {
  name: "Salma fariha",
  husband: true,
  wife: "Warisa",
};
console.log("crush4", crush4);
const crush5: IcrushInterface<object, object> = {
  name: "kate",
  husband: {
    name: "persian",
    age: 30,
  },
  wife: {
    name: "winslet",
    age: 40,
  },
};
//best practise
interface PersonInterface {
  name: string;
  age: number;
}
const crush6: IcrushInterface<PersonInterface, PersonInterface> = {
  name: "kateiesaaa",
  husband: {
    name: "Rafy ajmol",
    age: 30,
  },
  wife: {
    name: "parsa evana",
    age: 40,
  },
};
console.log("crush5:", crush5);
console.log("crush6:", crush6);
