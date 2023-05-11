let emni: any;
emni = " Next Level Web development";
(emni as string).length;
// <string>emni.length; eivhabe o type assertion likha jai tsx a eita kaaj korbe nah

//example with function

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted result is : ${value} gram `;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `The converted result is : ${value} gram `;
  }
}
const resultTobeNumber = kgToGram(10) as number;
const resultTobeString = <string>kgToGram("100");
type customeErrorType = {
  message: string;
};
try {
} catch (err) {
  console.log((err as customeErrorType).message);
}
