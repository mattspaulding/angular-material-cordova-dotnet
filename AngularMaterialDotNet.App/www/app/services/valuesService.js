'use strict';

angular.module('App.valuesServices', []).factory('Value', function ($resource, ngAuthSettings) {
    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    return $resource(ngAuthSettings.apiServiceBaseUri + 'api/values/:id', { id: '@valueId' }, {
        update: {
            method: 'PUT'
        }
    });
});
