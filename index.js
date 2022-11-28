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

let nameOfUser = prompt("What is your name?").toUpperCase();

if (nameOfUser[0] === "A") {
  let ageOfUser = prompt("How old are you?");
  if (ageOfUser > 20 && ageOfUser <= 40) {
    let moneyOfUser = prompt("How much money do you have?");
    if (moneyOfUser > 100) {
      let sizeOfUser = prompt("How many are you?");
      let clubOccupied = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let freePlace = sizeOfUser - clubOccupied;
      if (sizeOfUser <= 10) {
        console.log("Come on");
      } else {
        console.log(`There is only ${freePlace} free places`);
      }
    } else {
      console.log("Not enough");
    }
  } else {
    console.log("Wrong age");
  }
} else {
  console.log("Wrong name");
}
