const example1Span = document.querySelector("#example-1 span");
example1Span.textContent = localStorage.getItem("example-1-number") ?? 0;
document
  .querySelector("#example-1 button")
  .addEventListener("click", function () {
    example1Span.textContent--;
    localStorage.setItem("example-1-number", example1Span.textContent);
  });

const example3Input = document.querySelector('example-3-input');
example3Input.value