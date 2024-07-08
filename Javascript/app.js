// Variables (Lotto game)
let no1 = document.querySelector("#no1");
let no2 = document.querySelector("#no2");
let no3 = document.querySelector("#no3");
let no4 = document.querySelector("#no4");
let no5 = document.querySelector("#no5");
let no6 = document.querySelector("#no6");
let btn = document.querySelector(".btn");

let timeouts = [];

btn.addEventListener("click", function () {
  // Clear any existing timeouts
  timeouts.forEach((timeout) => clearTimeout(timeout));
  timeouts = [];

  // Reset the innerHTML of each number element
  [no1, no2, no3, no4, no5, no6].forEach((element) => {
    element.innerHTML = "";
  });

  // Generate new numbers
  const list = [];
  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * 61);
    list.push(number);
  }

  let elements = [no1, no2, no3, no4, no5, no6];

  // Set new numbers with delays
  elements.forEach((element, index) => {
    const timeout = setTimeout(() => {
      element.innerHTML = list[index];
    }, index * 5000); // Delay each update by 5 seconds times the index
    timeouts.push(timeout);
  });
});
