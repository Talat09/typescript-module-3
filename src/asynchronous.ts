//mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = " Data is fetched ";
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data !");
    }
  });
};
const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
console.log(getPromiseData());
// example of boolean
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = false;
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data !");
    }
  });
};
const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};
// example for object
type objectDataType = {
  name: string;
};
const makePromiseObject = (): Promise<objectDataType> => {
  return new Promise<objectDataType>((resolve, reject) => {
    const data: objectDataType = { name: "talat" };
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data !");
    }
  });
};
const getPromiseDataObject = async (): Promise<objectDataType> => {
  const data = await makePromiseObject();
  return data;
};
getPromiseDataObject();

//json placeholder er maddhome api hit kore dekhano holo
// json example
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data as ITodo;
};

const getTodoData = async (): Promise<void> => {
  try {
    const result = await getTodo();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getTodoData();
