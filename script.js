let arr = {
  name: "Alex",
  age: 23,
  gender: "male",
  account: "30000",
  married: true,
  familyMembers: 5,
  children: ["Tom", "Beer", "Deer"],
  abilities: {
    swimming: true,
    running: 20,
    drawing: true,
    dancing: false,
  },
  workPlaces: {
    marketing: "In USA",
    programming: "In Great Britain",
    blogPost: "In Italy",
  },
};
let newObj = {};
let firstObj = arr.abilities;
let secondObj = arr.workPlaces;
let addObj = Object.assign(newObj, firstObj, secondObj);
console.log(addObj);

let arrKeys = [];
let addKeys = arrKeys.push(Object.keys(newObj));
console.log(arrKeys);

let arrValues = [];
let addValues = arrValues.push(Object.values(newObj));
console.log(arrValues);

let contactArr = arrKeys.concat(arrValues);
console.log(contactArr);

let types = {
  string: [],
  number: [],
  object: [],
  boolean: [],
};
contactArr.filter((dataTypes) => {
  if (dataTypes.typeof === "string") {
    console.log(types.string.push(dataTypes));
  } else {
    console.log("Uncorrect");
  }
});
