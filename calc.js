


(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.cal');
  let clear = document.querySelector('.operands_clear');
  let equal = document.querySelector('.operands_equal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });
  equal.addEventListener('click', function (e) {
  if (screen.value === '') {
      screen.value = "Please enter";
    } else { 
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
 clear.addEventListener('click',function (e){
    screen.value=answer;
  })

})();

