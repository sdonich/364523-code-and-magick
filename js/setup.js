'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var similalListElement = document.querySelector('.setup-similar-list');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupPlayer = document.querySelector('.setup-player');
  var form = document.querySelector('form');

  var openPopup = function () {
    userSetup.classList.remove('hidden');
    userSetup.querySelector('.setup-similar').classList.remove('hidden');

    similalListElement.appendChild(window.fragment);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userSetup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  setupPlayer.addEventListener('click', window.wizardSetupChange);
  setupOpen.addEventListener('click', openPopup);
  setupClose.addEventListener('click', closePopup);

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  form.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  }, true);
  form.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  }, true);

})();


