const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateHypotenuse() {
  const p = Number(sides[0].value);
  const b = Number(sides[1].value);
  const h = Math.floor(Math.sqrt(p * p + b * b));
  console.log(h);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
