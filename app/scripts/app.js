'use strict';

/**
 * @ngdoc overview
 * @name yeomanGettingStartedApp
 * @description
 * # yeomanGettingStartedApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanGettingStartedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
