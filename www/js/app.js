// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Im17yo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('Im17yoCtrl', ['$scope', function($scope){
  $scope.mydate = new Date("1979-10-05");
  $scope.seventeen = "日付を入力してください";

  $scope.onchange = function(){
    var d   = $scope.mydate;
    var d17 = new Date(
    				  d.getFullYear() + 17
    				, d.getMonth()
    				, d.getDate()
    			);
    var now = new Date();
	
	console.log(d, d17, now);
	
    $scope.seventeen = "17歳 (" + Math.floor((now.getTime() - d17.getTime()) / (1000 * 60 * 60)) + "日経過)";
  }
}]);