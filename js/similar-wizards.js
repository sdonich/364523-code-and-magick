'use strict';

(function (global) {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  window.fragment = document.createDocumentFragment();

  var getRandom = function (quantity) {
    return Math.round(Math.random() * (quantity - 1));
  };

  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['blue', 'green', 'yellow', 'red', 'black'];
  var generateWizardName = function () {
    var firstName = WIZARDS_NAMES[getRandom(WIZARDS_NAMES.length)];
    var secondName = WIZARDS_SURNAMES[getRandom(WIZARDS_SURNAMES.length)];
    return firstName + ' ' + secondName;
  };

  var generateWizardCoatColor = function () {
    return COAT_COLORS[getRandom(COAT_COLORS.length)];
  };

  var generateWizardEye = function () {
    return EYES_COLORS[getRandom(EYES_COLORS.length)];
  };

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: generateWizardName(),
      coatColor: generateWizardCoatColor(),
      eyesColor: generateWizardEye()
    });
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  for (i = 0; i < wizards.length; i++) {
    global.fragment.appendChild(renderWizard(wizards[i]));
  }

})(window);
