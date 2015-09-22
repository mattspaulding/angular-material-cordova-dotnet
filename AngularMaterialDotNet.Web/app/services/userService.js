'use strict';
app.factory('userService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {
   
    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var userServiceFactory = {};
  
    // GET
    // Get all users
    var _getUsers = function () {
         return $http.get(serviceBase + 'api/applicationusers')
            .then(function (response) {
                return response;
            }, function (response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    };
    userServiceFactory.getUsers = _getUsers;

  
    // GET
    // Get a user by id
    var _getUser = function (id) {
        return $http.get(serviceBase + 'api/applicationusers/' + id)
           .then(function (response) {
               return response;
           }, function (response) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
           });
    };
    userServiceFactory.getUser = _getUser;

    // DELETE
    // Delete a user
    var _deleteUser = function (id) {
        return $http.delete(serviceBase + 'api/applicationUsers/' + id)
          .then(function (response) {
              return response.data;
          }, function (response) {
               // called asynchronously if an error occurs
              // or server returns response with an error status.
          });
    };
    userServiceFactory.deleteUser = _deleteUser;

    // PUT
    // Edit a user
    var _editUser = function (user) {
         return $http.put(serviceBase + 'api/applicationusers/' +user.id, user)
          .then(function (response) {
              return response.data;
          }, function (response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
          });
    };
    userServiceFactory.editUser = _editUser;

    return userServiceFactory;

}]);