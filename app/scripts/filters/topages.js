define(function() {
  'use strict';
  return function() {
    return function(count, limit) {
      var pages = [];
      for (var i = 0; i * limit < count; i += 1) {
        pages.push(i + 1);
      }
      return pages;
    };
  };
});
