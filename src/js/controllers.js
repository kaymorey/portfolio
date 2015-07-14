var PortfolioControllers = angular.module('PortfolioControllers', [])

.controller('HomeCtrl', function HomeCtrl($scope) {

})

.controller('WorksCtrl', function WorksCtrl($scope) {
    $scope.works = {
        'lantern': {
            'title': 'Lantern',
            'image': 'lantern.jpg',
            'color': 'yellow',
            'visible': true,
            'description': 'iOS application & connected object'
        },
        'trust': {
            'title': 'Trust',
            'image': 'trust.jpg',
            'color': 'blue',
            'visible': false,
            'description': 'iOS application'
        },
        'animooh': {
            'title': 'Animooh',
            'image': 'animooh.jpg',
            'color': 'red',
            'visible': false,
            'description': 'iOS application'
        },
        'simonpong': {
            'title': 'SimonPong',
            'image': 'simonpong.jpg',
            'color': 'blue',
            'visible': false,
            'description': 'arduino experiment'
        },
        'jocondelab': {
            'title': 'JocondeLab',
            'image': 'jocondelab.jpg',
            'color': 'red',
            'visible': false,
            'description': 'angularJS web experiment'
        }
    };

    $scope.changeBackground = function(identifier) {
        angular.forEach($scope.works, function(work) {
            work.visible = false;
        });
        $scope.works[identifier].visible = true;
    }
})

.controller('WorkCtrl', function WorkCtrl($scope, $routeParams) {
    $scope.works = {
        'lantern': {
            'title': 'Lantern',
            'image': 'lantern.jpg',
            'color': 'yellow',
            'visible': true,
            'subtitle': 'iOS application & connected object',
            'description': 'Lantern is my final year project in Gobelins. It is a nightlight that creates an atmosphere of sound and light according to the story the parent reads.',
            'video': '130524548'
        },
        'trust': {
            'title': 'Trust',
            'image': 'trust.jpg',
            'color': 'blue',
            'visible': false,
            'subtitle': 'iOS application',
            'description': 'iOS application & connected object',
            'video': '130524548'
        },
        'animooh': {
            'title': 'Animooh',
            'image': 'animooh.jpg',
            'color': 'red',
            'visible': false,
            'subtitle': 'iOS application',
            'description': 'iOS application & connected object',
            'video': '130524548'
        },
        'simonpong': {
            'title': 'SimonPong',
            'image': 'simonpong.jpg',
            'color': 'blue',
            'visible': false,
            'subtitle': 'arduino experiment',
            'description': 'iOS application & connected object',
            'video': '130524548'
        },
        'jocondelab': {
            'title': 'JocondeLab',
            'image': 'jocondelab.jpg',
            'color': 'red',
            'visible': false,
            'subtitle': 'angularJS web experiment',
            'description': 'iOS application & connected object',
            'video': '130524548'
        }
    };
    var identifier = $routeParams.identifier;

    $scope.work = $scope.works[identifier];
});
