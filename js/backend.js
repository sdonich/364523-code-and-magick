'use strict';

(function (global) {
  var URL = 'https://js.dump.academy/code-and-magick';
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';

  global.backend = {
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        var error;
        switch (xhr.status) {
          case 200:
            onLoad();
            break;
          case 400:
            error = 'Неверный запрос';
            break;
          default:
            error = 'Oops! Произошла ошибка: ' + xhr.status;
        }
        if (error) {
          onError(error);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Не удалось отправить запрос.');
      });

      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        var error;
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response);
            break;
          case 400:
            error = 'Неверный запрос';
            break;
          case 404:
            error = 'Данные не обнаружены';
            break;
          default:
            error = 'Oops! Произошла ошибка: ' + xhr.status;
        }
        if (error) {
          onError(error);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не смог выполниться за ' + xhr.timeout + ' cек.');
      });
      xhr.timeout = 10000;

      xhr.open('GET', URL_DATA);
      xhr.sent();
    }
  };

})(window);
