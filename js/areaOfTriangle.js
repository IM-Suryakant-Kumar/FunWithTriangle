const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateArea() {
  const base = Number(sides[0].value);
  const height = Number(sides[1].value);
  const area = Math.floor((1 / 2) * (base * height));
  output.innerText = `The area of the triangle = ${area}`;
}

areaBtn.addEventListener("click", calculateArea);
