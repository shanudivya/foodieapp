var foodieApp = angular.module('foodieApp',[]);
 console.log(foodieApp);








foodieApp.controller('mainController',function($scope) {
  $scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna']
})