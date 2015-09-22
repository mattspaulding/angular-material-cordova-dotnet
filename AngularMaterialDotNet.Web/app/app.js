
var app = angular.module('App', ['ngRoute', 'LocalStorageModule', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'ui.bootstrap.datetimepicker', 'ui.bootstrap.timepicker', 'angular.filter']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home/index.html"
    });

    $routeProvider.when("/user", {
        controller: "userController",
        templateUrl: "/app/views/user/index.html"
    });

    $routeProvider.when("/user/edit/:userId", {
        controller: "userController",
        templateUrl: "/app/views/user/edit.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/account/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/account/signup.html"
    });

    $routeProvider.when("/value", {
        controller: "valueController",
        templateUrl: "/app/views/value/index.html"
    });

    $routeProvider.when("/value/add", {
        controller: "valueController",
        templateUrl: "/app/views/value/add.html"
    });

    $routeProvider.when("/value/edit/:valueId", {
        controller: "valueController",
        templateUrl: "/app/views/value/edit.html"
    });

    $routeProvider.when("/value/details/:valueId", {
        controller: "valueController",
        templateUrl: "/app/views/value/details.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-purple')
      .accentPalette('amber')
      .warnPalette('red')
    .backgroundPalette('grey');
});

var serviceBase = 'http://localhost:49512/';
var clientId = 'consoleApp';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: clientId
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


