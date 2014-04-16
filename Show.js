app.directive('jqShowEffect', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // configure options
      var passedOptions = scope.$eval(attrs.jqOptions);
      
      // defaults
      var options = {
        type: 'slide', // or 'slide'
        duration: 1000,
        delay: 200, 
        hideImmediately: true, // if true, will hide without effects or duration
        callback: null 
      };
      $.extend(options, passedOptions);
      var type = options.type;
      var duration = options.duration;
      var callback = options.callback;
      var delay = options.delay;
      var hideImmediately = options.hideImmediately;
 
      // watch the trigger
      var jqElm = $(element);
      scope.$watch(attrs.jqShowEffect, function(value) {
        if (hideImmediately && !value) {
          jqElm.hide(0, callback);
        } else {
          $timeout(function() {
            if (type == 'fade') {
              value ? jqElm.fadeIn(duration, callback) : jqElm.fadeOut(duration, callback);
            } else if (type == 'slide') {
              value ? jqElm.slideDown(duration, callback) : jqElm.slideUp(duration, callback);
            } else {
              value ? jqElm.show(duration, callback) : jqElm.hide(duration, callback);
            }
          }, delay);
        }
      });
    }
  }
}]);

