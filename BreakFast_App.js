const prompt = require("prompt-sync")();
console.log("Hi...Welcome to Yeti's Breakfast Hub!");
const name = prompt("What Is Your Name? ");

// console.log("");
console.log(`Welcome ${name}!`);
console.log("");

while (true) {
  const order = prompt(
    "Would you like to have breakfast before work? YES/NO: "
  ).toUpperCase();

  if (order === "yes") {
    continue;
  } else if (order === "NO") {
    console.log("Okay, Have a pleasant day!");
    break;
  }

  while (true) {
    let orderNumber = parseInt(
      prompt("How many plates would you like to order? ")
    );
    // const order = parseInt(prompt(`${name}, Please place ORDER: `));

    const entry = prompt(
      "Please Press Y to Continue order or R to Reset your order, otherwise Press C to CANCEL order: "
    ).toUpperCase();

    if (entry === "C") {
      console.log(`${name}, You order has been cancelled`);
    } else if (entry === "R") {
      console.log("Please reset your orer");
    } else if (entry === "Y") {
      while (true) {
        console.log(`You ordered ${orderNumber} plates!`);

        const start = parseInt(
          prompt("To keep you on track, how long would you be here for? ")
        );

        if (orderNumber <= 0) {
          console.log(
            `hey ${name}, you should leave in order to make it on time to work.`
          );
          break;
        }
        orderNumber -= start;
        console.log(
          `Awesome ${name}... you have ${orderNumber} min left to go \nBe quick with your meal!`
        );
      }
      break;
    }
  }
}
