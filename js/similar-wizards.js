'use strict';

(function (global) {
  var WIZARDS_AMOUNT = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  global.fragment = document.createDocumentFragment();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  global.backend.load(function (wizards) {
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var x = i + Math.floor(Math.random() * (wizards.length - i));
      global.fragment.appendChild(renderWizard(wizards[x]));
    }
  },
  function (error) {
    window.descriptError(error);
  });
})(window);
