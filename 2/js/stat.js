'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var NAMES_GAP = CLOUD_X + 4 * GAP;
var NAMES_DISTANT = 2 * BAR_WIDTH + GAP;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 5 * GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], NAMES_GAP + i * NAMES_DISTANT, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), NAMES_GAP + i * NAMES_DISTANT, CLOUD_Y + 7 * GAP + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';

    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }
    ctx.fillRect(NAMES_GAP + i * NAMES_DISTANT, CLOUD_HEIGHT - 3 * GAP, BAR_WIDTH, -BAR_HEIGHT * times[i] / maxTime);
  }
};
