
/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
    module.exports = 'ng-fastclick';
}

angular.module('ng-fastclick', []).run(function() {
  FastClick.attach(document.body)
});

