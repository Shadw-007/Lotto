//variables

let no1 = document.querySelector("#no1");
let no2 = document.querySelector("#no2");
let no3 = document.querySelector("#no3");
let no4 = document.querySelector("#no4");
let no5 = document.querySelector("#no5");
let no6 = document.querySelector("#no6");
let btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
    const list = [];
    for (let i = 0; i<6; i++){
        let number = Math.floor(Math.random()*61);
        list.push(number);
    }

    no1.innerHTML = list[0];
    no2.innerHTML = list[1];
    no3.innerHTML = list[2];
    no4.innerHTML = list[3];
    no5.innerHTML = list[4];
    no6.innerHTML = list[5];
})
