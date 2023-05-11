type a1 = null;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null; // eikhane a1 er upor a2 nirbhorshil
// nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;
type sheikh = {
  wife1: string;
  wife2: string;
};
type CheckProperty<T> = T extends { wife1: string } ? true : false;
type checkwife1 = CheckProperty<sheikh>;
type checkProperty1<T, K> = K extends keyof sheikh ? true : false;
type checkwife2 = checkProperty1<sheikh, "wife2">;
//another example
type Bandhubi = " monika" | "rony" | "rito";
type RemoveBandhubi<T> = T extends "rony" ? never : T;
type CurrentBandhubi = RemoveBandhubi<Bandhubi>;
// more dynamic way remove friend
type RemoveBandhubi2<T, K> = T extends K ? never : T;
type CurrentBandhubi1 = RemoveBandhubi2<Bandhubi, "rony">; // union type theak kono ekta jodi never type kore deowa hoi tahle seta remove hoiye jai
