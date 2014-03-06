define(['jquery', 'bootstrap'], function($) {
  var $after;
  $(function() {
    $after = $('body > nav');
  });
  var OK=0, INFO=1, WARN=2, ERR=3;
  function display(type, msg) {
    if(!$after) return;
    var typeClass;
    switch(type) {
      case OK: typeClass = 'alert-success'; break;
      case INFO: typeClass = 'alert-info'; break;
      case WARN: typeClass = 'alert-warning'; break;
      case ERR: typeClass = 'alert-danger'; break;
    }
    var $alert = $('<div class="alert alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>');
    $alert.addClass(typeClass).find('button').after(msg);
    $after.after($alert);
  }
  function dismiss() {
    $alert.addClass('hidden');
  }
  return {
    ok: function(msg) {
      display(OK, msg);
    },
    info: function(msg) {
      display(INFO, msg);
    },
    warn: function(msg) {
      display(WARN, msg);
    },
    err: function(msg) {
      display(ERR, msg);
    }
  };
});
