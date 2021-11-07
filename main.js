const screen = document.getElementById("display");
const keys = document.querySelectorAll(".show-display");
const equalKey = document.getElementById("result");
const acKey = document.getElementById("all-clear");
const cKey = document.getElementById("clear-last");


////////functions///

function showDisplayKeys(event) {
  const x = event.target.innerText;

  if (screen.innerText == 0) {
    return (screen.innerText = x);
  }
  return (screen.innerText += x);
}

function result() {
  screen.innerText = eval(screen.innerText);
}

function allClear() {
  screen.innerText = 0;
}

function clearLast() {
  const text = screen.innerText;
  if (text.length === 1) {
    screen.innerText = 0;
  } else {
    screen.innerText = text.substring(0, text.length - 1);
  }
}

////////events////

keys.forEach((item) => {
  item.addEventListener("click", showDisplayKeys);
});

equalKey.addEventListener("click", result);

acKey.addEventListener("click", allClear);

cKey.addEventListener("click", clearLast);
