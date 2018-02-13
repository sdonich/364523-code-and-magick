'use strict';
(function () {
  var getRandom = function (quantity) {
    return Math.round(Math.random() * (quantity - 1));
  };

  var PLAYER_COATS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var PLAYER_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var colorChange = function (target, colors) {
    if (target.tagName === 'use') {
      target.style.fill = colors;
    }

    if (target.tagName === 'DIV') {
      target.parentNode.style.backgroundColor = colors;
    }
  };

  window.wizardSetupChange = function (evt) {
    var target = evt.target;

    if (target.classList.contains('wizard-coat')) {
      colorChange(target, PLAYER_COATS[getRandom(PLAYER_COATS.length)]);
    }

    if (target.classList.contains('wizard-eyes')) {
      colorChange(target, PLAYER_EYES[getRandom(PLAYER_EYES.length)]);
    }

    if (target.classList.contains('setup-fireball')) {
      colorChange(target, FIREBALLS[getRandom(FIREBALLS.length)]);
    }
  };
})();


