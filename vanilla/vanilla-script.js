;(function () {
  var selectors = {
    addition: '.addition',
    subtraction: '.subtraction',
    result: '.result',
  },
  counter,
  result,
  addition,
  subtraction,
  init = function () {
    counter = 0;
    addition = document.querySelector(selectors.addition);
    subtraction = document.querySelector(selectors.subtraction);
    result = document.querySelector(selectors.result);
  },
  bindEvents = function () {
    addition.addEventListener('click', function () {
      result.innerHTML = ++counter;
      if (counter < 0) result.classList.add('negative');
      else result.classList.remove('negative');
    });
    subtraction.addEventListener('click', function () {
      result.innerHTML = --counter;
      if (counter < 0) result.classList.add('negative');
      else result.classList.remove('negative');
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    init();
    bindEvents();
  });
})();