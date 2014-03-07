define(['app'], function(app) {
  function getPropertyByPath(obj, path) {
    if (typeof path === 'string') {
      return getPropertyByArray(obj, path.split('.'));
    }
    else if (path instanceof Array) {
      return getPropertyByArray(obj, path);
    }
    return null;
  }
  function getPropertyByArray(obj, path) {
    for(var i=0; i<path.length && obj !== null; i++) {
      obj = getPropertyByString(obj, path[i]);
    }
    return obj;
  }
  function getPropertyByString(obj, path) {
    if(typeof obj === 'object' && obj !== null) {
      return obj[path];
    }
    return null;
  }

  return app.module.filter(app.filters.bypath.name, function() {
    return getPropertyByPath;
  });
});
