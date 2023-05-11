type PersonType = {
  name: string;
  age: number;
  address: string;
};
type newType = "name" | "age" | "address"; // manually kora
type newTypeUsingKeyOf = keyof PersonType;
const a: newType = "age";
const b: newTypeUsingKeyOf = "name";
//({ name: "Mr x", age: 100 }), "age"; // eikhane age dile age return korbe ar name dile name return korbe
//example of normal function
//eikhane Y = 'name'| 'age' union type banai fele jokhn Y extends keyof X likha hoi that means object er key gula sob union type hisabe niye nei
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}
const property = getProperty({ name: " salma khatun ", age: 100 }, "age");
console.log(property);
// keyof diye ekta generic type ke onno ekta generic type hisabe keyof diye force korte pari
