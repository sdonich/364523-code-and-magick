'use strict';

(function (global) {

  global.descriptError = function (error) {
    var err = document.createElement('div');

    document.body.appendChild(err);
    err.classList.add('error');
    err.textContent = error;

    setTimeout(function () {
      err.remove();
    }, 2000);
  };

})(window);
