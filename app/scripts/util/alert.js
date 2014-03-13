define(['jquery', 'bootstrap'], function($) {
  'use strict';
  var $after;
  $(function() {
    $after = $('body > nav');
  });

  function display(type, msg, timeout) {
    if (!$after) {
      return;
    }
    var $alert = $('<div class="alert alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>');
    $alert.addClass(type).find('button').after(msg);
    $after.after($alert);
    var dismissFunc = dismiss.bind(this, $alert);
    if (timeout > 0) {
      setTimeout(dismissFunc, timeout);
    }
    return dismissFunc;
  }

  function dismiss($alert) {
    $alert.remove();
  }
  return {
    ok: function(msg, timeout) {
      return display('alert-success', msg, timeout);
    },
    info: function(msg, timeout) {
      return display('alert-info', msg, timeout);
    },
    warn: function(msg, timeout) {
      return display('alert-warning', msg, timeout);
    },
    err: function(msg, timeout) {
      return display('alert-danger', msg, timeout);
    }
  };
});
