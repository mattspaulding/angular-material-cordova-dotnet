'use strict';
app.controller('userController', ['$scope', '$location', '$routeParams', '$mdToast', 'userService', function ($scope, $location, $routeParams, $mdToast, userService) {

    //Init
    $scope.savedSuccessfully = false;
    $scope.message = "";
    $scope.data = {
        loading: true
    };

    $scope.user = {
        userName: ""
    };

    //Check params
    var userId = $routeParams.userId;
    if (userId != null) {
        userService.getUser(userId)
            .then(function (results) {
                $scope.user = results.data;
            }, function (error) {
                //alert(error.data.message);
            });
    }

    $scope.getUsers = function () {

        userService.getUsers()
            .then(function (results) {
                $scope.users = results.data;
                $scope.data.loading = false;

            }, function (error) {
                //alert(error.data.message);
            });
    };

    $scope.deleteUser = function (id) {
        userService.deleteUser(id)
            .then(function (results) {
                userService.getUsers()
                .then(function (results) {
                    $scope.users = results.data;
                    $mdToast.show(
                        $mdToast.simple()
                          .content("Deleted!")
                          .hideDelay(3000)
                        );
                });
            }, function (error) {
                //alert(error.data.message);
            });
    };

    $scope.editUser = function () {
        userService.editUser($scope.user)
            .then(function (results) {
                $location.path('/user');
                $mdToast.show(
            $mdToast.simple()
              .content("Edited!")
               .hideDelay(3000)
          );
            }, function (error) {
                //alert(error.data.message);
            });
    };
}]);