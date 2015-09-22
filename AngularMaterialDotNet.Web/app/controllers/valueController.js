'use strict';
app.controller('valueController', ['$scope', '$location', '$routeParams', '$mdToast','$route', 'valueService', function ($scope, $location, $routeParams, $mdToast,$route, valueService) {
    //Init
    $scope.savedSuccessfully = false;
    $scope.message = "";
    $scope.data = {
        loading: true
    };

    $scope.value = {
        valueId:"",
        name: "",
        description: ""
    };

    $scope.getValues = function () {
        valueService.getValues()
           .then(function (results) {
               $scope.values = results.data;
               $scope.data.loading = false;
           }, function (error) {
               //alert(error.data.message);
           });
    };

    //$scope.getValue = function () {
    //    valueService.getValue()
    //       .then(function (results) {
    //           $scope.value = results.data;
    //           $scope.data.loading = false;
    //       }, function (error) {
    //           //alert(error.data.message);
    //       });
    //};

    $scope.createValue = function () {
        valueService.createValue($scope.value)
            .then(function (results) {
                $location.path('/value');
                $mdToast.show(
            $mdToast.simple()
              .content(results.name + " Added!")
               .hideDelay(3000)
          );
            }, function (error) {
                //alert(error.data.message);
            });
    };

    $scope.deleteValue = function (id) {
        valueService.deleteValue(id)
            .then(function (results) {
                 $route.reload();
                $mdToast.show(
            $mdToast.simple()
              .content("Deleted!")
               .hideDelay(3000)
          );
            }, function (error) {
                //alert(error.data.message);
            });
    };
 
    $scope.editValue = function () {
        valueService.editValue($scope.value)
            .then(function (results) {
                $location.path('/value');
                $mdToast.show(
            $mdToast.simple()
              .content("Edited!")
               .hideDelay(3000)
          );
            }, function (error) {
                //alert(error.data.message);
            });
    };


    //Check params
    var valueId = $routeParams.valueId;
    if (valueId != null) {
        valueService.getValue(valueId)
            .then(function (results) {
                $scope.value = results.data;
            }, function (error) {
                //alert(error.data.message);
            });
    }

}]);