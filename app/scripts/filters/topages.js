define(['app'], function(app) {
  'use strict';
  app.module.filter(app.filters.topages.name, function() {
    return function(count, limit) {
      var pages = [];
      for(var i=0; i*limit<count; i+=1) {
        pages.push(i+1);
      }
      return pages;
    };
  });
});
