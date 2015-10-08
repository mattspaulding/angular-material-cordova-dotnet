angular.module('App.valuesControllers', [])
    .controller('valuesIndexController', function ($scope, $state, $window, Value) {
        $scope.values = Value.query(); //fetch all values. Issues a GET to /api/values

        $scope.deleteValue = function (value) { // Delete a value. Issues a DELETE to /api/values/:id
            value.$delete(function () {
                var index = $scope.values.indexOf(value);
                $scope.values.splice(index, 1);
                //$window.location.href = ''; //redirect to home
            });
        };
    }).controller('valuesDetailsController', function ($scope, $stateParams, Value) {
         $scope.value = Value.get({ id: $stateParams.valueId }); //Get a single value.Issues a GET to /api/values/:id
    }).controller('valuesAddController', function ($scope, $state, $stateParams, Value) {
        $scope.message = "";
        $scope.value = new Value();  //create new value instance. Properties will be set via ng-model on UI

        $scope.addValue = function () { //create a new value. Issues a POST to /api/values
            $scope.value.$save(function () {
                $state.go('values'); // on success go back to home i.e. values state.
            });
        };
    }).controller('valuesEditController', function ($scope, $state, $stateParams, Value) {
        $scope.message = "";
        $scope.editValue = function () { //Update the edited value. Issues a PUT to /api/values/:id
            $scope.value.$update(function () {
                $state.go('values'); // on success go back to home i.e. values state.
            });
        };

        $scope.loadValue = function () { //Issues a GET request to /api/values/:id to get a value to update
            $scope.value = Value.get({ id: $stateParams.valueId });
        };

        $scope.loadValue(); // Load a value which can be edited on UI
    });