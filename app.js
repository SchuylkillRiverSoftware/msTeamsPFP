const form = document.querySelector("initials-form");
const letterJ = document.querySelector(".letter.j");
const letterG = document.querySelector(".letter.g");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = form.elements["initials"].value.trim().toUpperCase();

  if (value.length >= 2) {
    letterJ.textContent = value[0];
    letterG.textContent = value[1];
  }
    const input = form.elements["initials"];
    console.log(input.value);
});
