"use strict";

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  const originalButton = button.style.cssText;

  button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "orange";
    button.style.color = "black";
  });

  button.addEventListener("mouseout", function() {
    button.style.cssText = originalButton;
  });
});