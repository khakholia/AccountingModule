angular
  .module("myapp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider.when("/home", {
      templateUrl: "./home.html",
      controller: "homeCtrl"
    })
    .when("/about",{
        templateUrl:"./about.html",
    })
    .when("/contact",{
        templateUrl:"./contact.html",
    })
    .when("/accounts",{
        templateUrl:"./accounts.html",
        controller:"accountsCtrl"
    })
  })
  .controller("baseCtrl", function () {})
  .controller("homeCtrl",function($scope){
    $scope.message = "Shopping Redefined!!"
  })
  .controller("accountsCtrl",function($scope,$http){
    $http.get('transaction.json').success(function(response){
      $scope.transactions=response.data
    })
  })
