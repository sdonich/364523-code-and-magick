'use strict';

(function (global) {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var BAR_WIDTH = 40;
  var HEXOGRAM_HEIGHT = 150;
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

  global.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP);
    ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 5 * GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {

      var intentX = NAMES_GAP + i * NAMES_DISTANT;
      var barHeight = HEXOGRAM_HEIGHT * times[i] / maxTime;

      ctx.font = '16px PT Mono';
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], intentX, CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.round(times[i]), intentX, CLOUD_Y + 7 * GAP + HEXOGRAM_HEIGHT - barHeight);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';

      if (names[i] !== 'Вы') {
        ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
      }
      ctx.fillRect(intentX, CLOUD_HEIGHT - 3 * GAP, BAR_WIDTH, -barHeight);
    }
  };
})(window);
