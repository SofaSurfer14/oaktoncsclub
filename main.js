var app = angular.module("ohs-cs-club", ["firebase"]);
app.directive('backImg', function(){
  return function (scope, element, attrs){
    attrs.$observe('backImg', function(value){
      element.css({'background-image': 'url(' + value + ')'})
    })
  }
  });
app.controller("Announcements-Controller", function($scope, $firebaseArray) {
  var ref = new Firebase("https://ohs-cs-club.firebaseio.com/announcements");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.announcements = $firebaseArray(ref);
});

