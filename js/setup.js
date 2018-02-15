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
    window.defaultCoordsX = userSetup.offsetLeft;
    window.defaultCoordsY = userSetup.offsetTop;

    similalListElement.appendChild(window.fragment);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userSetup.style.top = window.defaultCoordsY + 'px';
    userSetup.style.left = window.defaultCoordsX + 'px';
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

  var setupShop = document.querySelector('.setup-artifacts-shop');
  var backpack = setupPlayer.querySelector('.setup-artifacts');

  setupShop.addEventListener('dragstart', function (evt) {
    var magicArtifact = evt.target;

    magicArtifact.addEventListener('drag', function (evtDrag) {
      backpack.style.outline = '2px dashed red';
      magicArtifact = evtDrag.target;
    });

    backpack.addEventListener('drop', function (evtDrop) {
      evtDrop.preventDefault();
      evtDrop.target.appendChild(magicArtifact);
      backpack.style.outline = '';
      evtDrop.target.style.backgroundColor = '';

      magicArtifact.addEventListener('dragend', function () {
        backpack.style.outline = '';

        magicArtifact = null;
      });
    });

    backpack.addEventListener('dragenter', function (evtEnter) {
      evtEnter.preventDefault();
      evtEnter.target.style.backgroundColor = 'yellow';
    });

    backpack.addEventListener('dragover', function (evtOver) {
      evtOver.preventDefault();
    });

    backpack.addEventListener('dragleave', function (evtLeave) {
      evtLeave.target.style.backgroundColor = '';
    });
  });

  setupShop.addEventListener('dragend', function () {
    backpack.style.outline = '';
  });

  var setupHandler = userSetup.querySelector('.setup-title').querySelector('input');
  setupHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      userSetup.style.top = (userSetup.offsetTop - shift.y) + 'px';
      userSetup.style.left = (userSetup.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtPrevent) {
          evtPrevent.preventDefault();
          userSetup.removeEventListener('click', onClickPreventDefault);
        };
        userSetup.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();


