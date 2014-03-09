define(['app'], function(app) {
  'use strict';
  app.module.filter(app.filters.iftrue.name, function() {
    return function(input, data) {
      return input ? data : '';
    };
  });
});
