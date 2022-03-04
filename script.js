const button = document.querySelector("example1 button");
const span = document.querySelector("example1 span");

span.textContent = localStorage.getItem("example1-number") ?? 0;

button.addEventListener("click", function () {
  span.textContent++;

  localStorage.setItem("example1-number", span.textContent);
});
