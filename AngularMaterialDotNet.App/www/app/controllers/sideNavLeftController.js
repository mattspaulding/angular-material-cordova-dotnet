'use strict';
app.controller('sideNavLeftController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.close = function () {
        $mdSidenav('left').close();
    };
}]);