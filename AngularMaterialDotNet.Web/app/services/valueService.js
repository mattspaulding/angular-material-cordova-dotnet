'use strict';
app.factory('valueService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {
   
    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var valueServiceFactory = {};
  
    // GET
    // Get all values
    var _getValues = function () {
        return $http.get(serviceBase + 'api/values')
           .then(function (response) {
               return response;
           }, function (response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
           });
    };
    valueServiceFactory.getValues = _getValues;

    // GET
    // Get a value by id
    var _getValue = function (id) {
        return $http.get(serviceBase + 'api/values/' + id)
           .then(function (response) {
               return response;
           }, function (response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
           });
    };
    valueServiceFactory.getValue = _getValue;

    // POST
    // Create a value
    var _createValue = function (value) {
        return $http.post(serviceBase + 'api/values/', value)
          .then(function (response) {
              return response.data;
          }, function (response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
          });
    };
    valueServiceFactory.createValue = _createValue;

    // DELETE
    // Delete a value
    var _deleteValue = function (id) {
        return $http.delete(serviceBase + 'api/values/' + id)
          .then(function (response) {
              return response.data;
          }, function (response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
          });
    };
    valueServiceFactory.deleteValue = _deleteValue;

    // PUT
    // Edit a value
    var _editValue = function (value) {
        return $http.put(serviceBase + 'api/values/' + value.valueId, value)
          .then(function (response) {
              return response.data;
          }, function (response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
          });
    };
    valueServiceFactory.editValue = _editValue;

    return valueServiceFactory;

}]);