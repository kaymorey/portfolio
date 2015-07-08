var app = angular.module('portfolio', [
    'ngRoute',
    'PortfolioControllers'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/works', {
            templateUrl: 'templates/works.html',
            controller: 'WorksCtrl'
        })
        .when('/works/:identifier', {
            templateUrl: 'templates/work.html',
            controller: 'WorkCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);
