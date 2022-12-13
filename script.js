// Exercise 1
let arr = [
  {
    model: "BMW",
    motorType: "turbo",
    costs: 45000,
  },
  {
    model: "Lamborghini",
    motorType: "turbo-flex",
    costs: 90000,
  },
  {
    model: "Lacetti",
    motorType: "simple",
    costs: 20000,
  },
  {
    model: "Spark",
    motorType: "simple-granit",
    costs: 15000,
  },
  {
    model: "Matiz",
    motorType: "mini-granit",
    costs: 5000,
  },
  {
    model: "Jaguar",
    motorType: "ultra-turbo",
    costs: 95000,
  },
];

// Filter
const filterFnc = arr.filter((item) => {
  if (item.costs < 35000) {
    return item;
  }
});

console.log(filterFnc);

// Map
const mapFnc = arr.map((item) => {
  if (item.costs < 35000) {
    return item;
  }
});

console.log(mapFnc);

// For Each
let cheap = [];

arr.forEach((item) => {
  if (item.costs < 35000) {
    cheap.push(item);
  }
});
console.log(cheap);

// Exercise 4
