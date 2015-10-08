'use strict';
app.controller('indexController', ['$scope', '$location', '$mdSidenav', 'authService', function ($scope, $location, $mdSidenav, authService) {

    $scope.logOut = function () {
        authService.logOut();
        $location.path('/home');
    }

    $scope.go = function (path) {
        $location.path(path);
    }

    $scope.authentication = authService.authentication;
    //if ($scope.authentication.userName != "") {
    //    $scope.authentication.role = authService.role();
    //}

    $scope.toggleLeft = function () {
        $mdSidenav('left')
              .toggle();
    }

    $scope.menuIcon = 'menu';
    $scope.menuToggle = function () {
        if ($scope.menuIcon == 'menu') {
            $mdSidenav('left')
              .open();
            $scope.menuIcon = 'arrow_back';
        }
        else {
            $mdSidenav('left')
              .close();
            $scope.menuIcon = 'menu';
        }
    }
}]);