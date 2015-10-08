
var app = angular.module('App', ['ui.router','ngResource', 'App.valuesControllers', 'App.valuesServices', 'LocalStorageModule', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state("home", {
        url: "/",
        controller: "homeController",
        templateUrl: "/app/views/home/index.html"
    })

    $stateProvider.state("user", {
        url: "/user", 
        controller: "userController",
        templateUrl: "/app/views/user/index.html"
    });

    $stateProvider.state("userEdit", {
        url: "/user/edit/:userId", 
        controller: "userController",
        templateUrl: "/app/views/user/edit.html"
    });

    $stateProvider.state("login", {
        url: "/login", 
        controller: "loginController",
        templateUrl: "/app/views/account/login.html"
    });

    $stateProvider.state("signup", {
        url: "/signup", 
        controller: "signupController",
        templateUrl: "/app/views/account/signup.html"
    });

    $stateProvider.state("values", {
        url: "/values", 
        controller: "valuesIndexController",
        templateUrl: "/app/views/values/index.html"
    });

    $stateProvider.state("valuesAdd", {
        url: "/values/add", 
        controller: "valuesAddController",
        templateUrl: "/app/views/values/add.html"
    });

    $stateProvider.state("valuesEdit", {
        url: "/values/edit/:valueId", 
        controller: "valuesEditController",
        templateUrl: "/app/views/values/edit.html"
    });

    $stateProvider.state("valuesDetails", {
        url: "/values/details/:valueId", 
        controller: "valuesDetailsController",
        templateUrl: "/app/views/values/details.html"
    });

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


