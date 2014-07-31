(function () {
  'use strict';

// Declare app level module which depends on filters, and services
angular.module('sampleApp', [
  'ngRoute',
  'sampleApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sampleapp1', {templateUrl: 'sampleapp/partial1.html', controller: 'SampleAppCtrl1'});
  $routeProvider.when('/sampleapp2', {templateUrl: 'sampleapp/partial2.html', controller: 'SampleAppCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

});