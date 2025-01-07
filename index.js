let x = 0;
function decrement() {
  x -= 1;
  // count_box.style.fontsize="large"
  console.log(x);
  document.getElementById("count_box").innerHTML = x;
  // document.getElementById("count_box").
}
function increment() {
  x += 1;
  console.log(x);
  document.getElementById("count_box").innerHTML = x;
}
function reset() {
  x = 0;
  console.log(x);
  document.getElementById("count_box").innerHTML = x;
}
