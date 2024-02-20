"use strict";
let display = document.querySelector("#displayNum");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".clear-btn");
let equal = document.querySelector("#equal-btn");

let eraser = document.querySelector(".erase-btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.target.dataset.num;
    display.value += value;
  });
});

equal.addEventListener("click", () => {
  if (display.value === "") {
    display.value = "Please enter a Value";
  } else {
    let answer = eval(display.value);
    display.value = answer;
    console.log(display.value);
  }
});
clear.addEventListener("click", () => {
  display.value = "";
});
eraser.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
