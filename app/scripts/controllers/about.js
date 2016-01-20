'use strict';

/**
 * @ngdoc function
 * @name yeomanGettingStartedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanGettingStartedApp
 */
angular.module('yeomanGettingStartedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
