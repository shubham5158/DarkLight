let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    if (event.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (event.target.id === "violet") {
      body.style.backgroundColor = "violet";
    }
    if (event.target.id === "black") {
      body.style.backgroundColor = "black";
    }
  });
});
