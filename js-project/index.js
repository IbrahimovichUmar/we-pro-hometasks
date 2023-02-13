let discount = prompt("Какая скидка?");

let totalSale = 0;

let total = 0;

let max = Object;

let min = Object;

let average = Number;

let arr = [
  {
    name: "Milk",
    price: 3.25,
  },

  {
    name: "Coffee",
    price: 1.5,
  },

  {
    name: "Ice Cream",
    price: 7.85,
  },

  {
    name: "Tomatos",
    price: 4.14,
  },

  {
    name: "Onion",
    price: 2.25,
  },
];

function setup() {
  // Fisrt exercise
  arr.filter((item) => {
    totalSale += (item.price / 100) * discount;
  });
  if (discount > 0 && discount <= 100) {
    console.log(Math.round(totalSale));
  } else {
    console.log("Нет такой скидки");
  }
  // Second exercise
  arr.filter((item) => {
    total += item.price;
  });
  console.log(Math.round(total));
}
// Third exercise
let maxPrice = 0;
let maxIndex = 0;
arr.filter((item) => {
  if (item.price > maxPrice) {
    maxPrice = item.price;
    maxIndex++;
  }
});
max = arr[maxIndex];
console.log(max);

// Fourth exercise
let minPrice = arr[0].price;
let minIndex = 0;
arr.filter((item) => {
  if (item.price < minPrice) {
    minPrice = item.price;
    minIndex++;
  }
});
min = arr[minIndex];
console.log(min);
setup();
