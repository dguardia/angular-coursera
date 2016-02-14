'use strict';

angular.module('confusionApp')
    .constant("baseURL","http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getDishes = function() {
            return $resource(baseURL + "dishes/:id", null,
                {'update': {method: 'PUT'}});
        };


        this.getPromotion = function() {
            return $resource(baseURL + "promotions/:id", null,
                {'update': {method: 'PUT'}});
        };
    }])

    .factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        var corpfac = {};

        // Implement two functions, one named getLeaders,
        corpfac.getLeaders = function () {
            return $resource(baseURL + "leadership/:id", null, {'update': {method: 'PUT'}});
        };

        // Remember this is a factory not a service
        return corpfac;

    }])

    .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        this.getFeedback = function() {
            return $resource(baseURL + "feedback/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };

        return {
            getFeedback: this.getFeedback
        };

    }])
;