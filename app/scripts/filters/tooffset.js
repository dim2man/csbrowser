define(function() {
  'use strict';
  return function() {
    return function(pages, current, offset) {
      var start;
      if (current < offset) {
        start = 0;
      } else if (current > pages.length - offset) {
        start = pages.length - offset * 2 - 1;
        if (start < 0) {
          start = 0;
        }
      } else {
        start = current - offset;
      }
      return pages.slice(start, start + offset * 2 + 1);
    };
  };
});
