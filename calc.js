const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.cal');
const clear = document.querySelector('.operands_clear');
const equal = document.querySelector('.operands_equal');

function numButton(x) {
  screen.value += x;
}
function clearBtn() {
  let sval = screen.value;
  screen.value = sval.slice(0, sval.length - 1);
}
function clearAll() {
  screen.value = "";
}
function evaluateBtn() {
  let expr = screen.value;
  let ans;
  try {
    ans = eval(expr);
  }
  catch (x) {
    ans = "und";
  }
  screen.value = '' + ans;
}

// document.addEventListener("keydown",(event)=>{
//   if(event.key=='=')
// })

