define(function() {
  'use strict';
  return function() {
    return function(input, data) {
      return input ? data : '';
    };
  };
});
