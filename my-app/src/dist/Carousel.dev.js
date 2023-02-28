"use strict";

var slider = document.querySelector(".container");
var container = document.querySelectorAll(".slide");
document.getElementById("left").addEventListener("click", function () {
  toPrevious();
});
document.getElementById("right").addEventListener("click", function () {
  toNext();
});
var current = 0;
var prev = 4;
var next = 1;

var toPrevious = function toPrevious() {
  console.log('prev');

  if (current > 0) {
    toSlide(current - 1);
  } else {
    toSlide(container.length - 1);
  }
};

var toNext = function toNext() {
  if (current < 4) {
    toSlide(current + 1);
  } else {
    toSlide(0);
  }
};

var toSlide = function toSlide(number) {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (var i = 0; i < container.length; i++) {
    container[i].classList.remove("active");
    container[i].classList.remove("prev");
    container[i].classList.remove("next");
  }

  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  container[current].classList.add("active");
  container[prev].classList.add("prev");
  container[next].classList.add("next");
};