const h1 = document.querySelector('#example-5');
let randomColor;
document.querySelector('#start_btn').addEventListener('click', function() {
  randomColor = setInterval(() => {
   
    h1.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}, 500);
});
document.querySelector('#stop_btn').addEventListener('click', function() {
  clearInterval(randomColor);
})
// const span = document.querySelector("span");
// setInterval(() => {
//   span.textContent++;
//   GamepadButton.click('none')
// },0   ;

 

// const example1Span = document.querySelector("#example-1 span");
// example1Span.textContent = localStorage.getItem("example-1-number") ?? 0;
// document
//   .querySelector("#example-1 button")
//   .addEventListener("click", function () {
//     example1Span.textContent--;
//     localStorage.setItem("example-1-number", example1Span.textContent);
//   });

// const example3Input = document.querySelector("example-3-input");
// example3Input.value = localStorage.getItem;('example-3-input');

// const darkThem = document.querySelector("input[type=checkbox]");

// darkThem.checked = +localStorage.getItem("dark-theme");
// document.body.classList.toggle("dark-theme", darkThem.checked);

// darkThem.addEventListener("change", function () {
//   localStorage.setItem("dark-theme", +darkThem.checked);
//   document.body.classList.toggle("dark-theme");

// const setTimeoutExample(function() {
//   document.querySelector('span').textContent = "hello";
// }, 3000);

// document.querySelector('button').addEventListener('click', function() {
//   clearTimeout(TimeoutExample);
// });

// let timeoutId;
// document.querySelector("button").addEventListener("click", function () {
//   this.textContent = "generating...";
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => {
//     this.textContent = Math.random() * 100;
//   }, 3000);
// });
