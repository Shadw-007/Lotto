//variables

let no1 = document.querySelector("#no1");
let no2 = document.querySelector("#no2");
let no3 = document.querySelector("#no3");
let no4 = document.querySelector("#no4");
let no5 = document.querySelector("#no5");
let no6 = document.querySelector("#no6");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const list = [];
  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * 61);
    list.push(number);
  }

  let elements = [no1, no2, no3, no4, no5, no6];

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.innerHTML = list[index];
    }, index * 5000); // Delay each update by 5 seconds times the index
  }); 
});
