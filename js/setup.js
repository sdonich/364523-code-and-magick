'use strict';

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

var similalListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['blue', 'green', 'yellow', 'red', 'black'];

var generateWizardName = function () {
  var firstName = WIZARDS_NAMES[Math.floor(Math.random() * (WIZARDS_NAMES.length - 1))];
  var secondName = WIZARDS_SURNAMES[Math.floor(Math.random() * (WIZARDS_SURNAMES.length - 1))];
  return firstName + ' ' + secondName;
};

var generateWizardCoatColor = function () {
  return COAT_COLORS[Math.floor(Math.random() * (COAT_COLORS.length - 1))];
};

var generateWizardEye = function () {
  return EYES_COLORS[Math.floor(Math.random() * (EYES_COLORS.length - 1))];
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

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similalListElement.appendChild(fragment);
userSetup.querySelector('.setup-similar').classList.remove('hidden');

