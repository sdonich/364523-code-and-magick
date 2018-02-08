'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
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

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['blue', 'green', 'yellow', 'red', 'black'];

var userSetup = document.querySelector('.setup');
var similalListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

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

// блок с обработчиками событий

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupPlayer = document.querySelector('.setup-player');
var form = document.querySelector('form');

var random = function (quantity) {
  return Math.round(Math.random() * (quantity - 1));
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var colorChange = function (target, colors) {
  if (target.tagName === 'use') {
    target.style.fill = colors;
  }

  if (target.tagName === 'DIV') {
    target.parentNode.style.backgroundColor = colors;
  }
};

var openPopup = function () {
  userSetup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userSetup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var wizardSetupChange = function (evt) {
  var target = evt.target;

  if (target.classList.contains('wizard-coat')) {
    colorChange(target, PLAYER_COATS[random(PLAYER_COATS.length)]);
  }

  if (target.classList.contains('wizard-eyes')) {
    colorChange(target, PLAYER_EYES[random(PLAYER_EYES.length)]);
  }

  if (target.classList.contains('setup-fireball')) {
    colorChange(target, FIREBALLS[random(FIREBALLS.length)]);
  }
};

form.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
}, true);
form.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
}, true);

setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupPlayer.addEventListener('click', wizardSetupChange);
