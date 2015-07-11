var PortfolioControllers = angular.module('PortfolioControllers', [])

.controller('HomeCtrl', function HomeCtrl($scope) {

})

.controller('WorksCtrl', function WorksCtrl($scope) {
    $scope.works = [
        {
            'title': 'Lantern',
            'image': 'lantern.jpg',
            'visible': true,
            'description': 'iOS application & connected object'
        },
        {
            'title': 'Trust',
            'image': 'trust.jpg',
            'visible': false,
            'description': 'iOS application'
        },
        {
            'title': 'Animooh',
            'image': 'animooh.jpg',
            'visible': false,
            'description': 'iOS application'
        },
        {
            'title': 'SimonPong',
            'image': 'simonpong.jpg',
            'visible': false,
            'description': 'arduino experiment'
        },
        {
            'title': 'JocondeLab',
            'image': 'jocondelab.jpg',
            'visible': false,
            'description': 'angularJS web experiment'
        }
    ];

    $scope.changeBackground = function(index) {
        angular.forEach($scope.works, function(work) {
            work.visible = false;
        });
        $scope.works[index].visible = true;
    }
});
