// Complete class task

// let name = prompt("What is your name?").toUpperCase().trim();
// let age = confirm("Are you upper 18?");

// if (name[0] === "A" && age === true) {
//   console.log("Welcome");
// } else {
//   console.log("Go home");
// }

// Even or odd

// let int = prompt("any number");

// if (int % 2 == 0) {
//   console.log("число четное");
// } else {
//   console.log("число нечетное");
// }

// Quantity of numbers should be even

// let userName = prompt("What is your name?");
// let userAge = prompt("How old are you?");

// if (userName.length % 2 == 0 && userAge >= 18) {
//   console.log("Welcome");
// } else {
//   console.log("Go home");
// }

// Presidents include

// let guess = prompt("Mirziyoyev Putin Obama Biden Zelensky Trump");

// if (guess.includes()) {
//   console.log("You are president");
// } else {
//   console.log("You are not president");
// }

// const name = "Alex";
// const password = 7777;
// const money = 10000;

// let userName = prompt("What is your name?");

// if (userName === name) {
//   let userPwd = +prompt("Your account number?");

//   if (userPwd === password) {
//     let cashOut = prompt("How much money do you want?");

//     if (cashOut > 0 && cashOut <= money) {
//       alert(`Hello mr/ms ${name}
//       Your balance was: ${money}
//       Your balance now: ${money - cashOut}
//       You cashed out: ${cashOut}
//       `);
//     } else {
//       console.log("Not enough");
//     }
//   } else {
//     console.log("Wrong password");
//   }
// } else {
//   console.log("Go home");
// }

// let nameOfUser = prompt("What is your name?").toUpperCase();

// if (nameOfUser[0] === "A") {
//   let ageOfUser = prompt("How old are you?");
//   if (ageOfUser > 20 && ageOfUser <= 40) {
//     let moneyOfUser = prompt("How much money do you have?");
//     if (moneyOfUser > 100) {
//       let sizeOfUser = prompt("How many are you?");
//       if (sizeOfUser <= 10) {
//         console.log("Come on");
//       } else {
//         console.log("Too many");
//       }
//     } else {
//       console.log("Not enough");
//     }
//   } else {
//     console.log("Wrong age");
//   }
// } else {
//   console.log("Wrong name");
// }

// console.log(numbers.sort((a, b) => a - b));

// // Task 1
// let students = [
//   {
//     name: "Timur",
//     age: 17,
//     gender: "male",
//   },
//   {
//     name: "Zafar",
//     age: 17,
//     gender: "male",
//   },
//   {
//     name: "Nigina",
//     age: 17,
//     gender: "female",
//   },
//   {
//     name: "Madina",
//     age: 16,
//     gender: "female",
//   },
//   {
//     name: "Samir",
//     age: 14,
//     gender: "male",
//   },
//   {
//     name: "Aziz",
//     age: 15,
//     gender: "male",
//   },
//   {
//     name: "Mirjalol",
//     age: 18,
//     gender: "male",
//   },
//   {
//     name: "Umar",
//     age: 16,
//     gender: "male",
//   },
//   {
//     name: "Maxdi",
//     age: 15,
//     gender: "male",
//   },
//   {
//     name: "Munis",
//     age: 18,
//     gender: "male",
//   },
//   {
//     name: "Laziz",
//     age: 15,
//     gender: "male",
//   },
// ];

// let total = students.reduce((a, b) => {
//   return a + b.age;
// }, 0);

// let average = total / students.length;

// console.log(average.toFixed(1));

// let male = [];
// let female = [];

// students.filter((student) => {
//   if (student.gender === "male") {
//     male.push(student);
//   } else {
//     female.push(student);
//   }
// });

// console.log(male, female);

// // Task 2

// let products = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut au`tem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true,
//   },
// ];
// let a = {
//   count: 0,
//   arr: [],
// };

// let b = {
//   count: 0,
//   arr: [],
// };

// products.filter((product) => {
//   if (product.completed === true) {
//     a.arr.push(product);
//   } else {
//     b.arr.push(product);
//   }
// });

// products.filter((number) => {
//   if (number.completed === true) {
//     a.count++;
//   } else {
//     b.count++;
//   }
// });

// console.log(a, b);
