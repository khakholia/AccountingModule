angular
  .module("myapp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider.when("/home", {
      templateUrl: "./home.html",
    })
    .when("/about",{
        templateUrl:"./about.html",
    })
    .when("/contact",{
        templateUrl:"./contact.html",
    })
    .when("/accounts",{
        templateUrl:"./accounts.html",
    })
  })
  .controller("baseCtrl", function () {})
