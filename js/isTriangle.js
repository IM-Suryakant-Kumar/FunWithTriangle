const angles = document.querySelectorAll(".angle");
const output = document.querySelector("#output");
const btn = document.querySelector("#isTriangle");

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0 && calculateSumOfAngles(a, b, c) == 180) {
    // console.log("the angles form a triangle");
    output.innerText = "the angles form a triangle";
  } else {
    // console.log("the angles don't form a triangle");
    output.innerText = "the angles don't form a triangle";
  }
}

function calculateSumOfAngles(a, b, c) {
  return a + b + c;
}

btn.addEventListener("click", () => {
  isTriangle(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );
});
