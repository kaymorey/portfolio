var PortfolioControllers = angular.module('PortfolioControllers', [])

.controller('HomeCtrl', function HomeCtrl($scope) {

})

.controller('WorksCtrl', function WorksCtrl($scope) {
    $scope.works = [
        {
            'title': 'Lantern',
            'image': 'jocondelab.jpg'
        },
        {
            'title': 'Trust',
            'image': 'jocondelab.jpg'
        },
        {
            'title': 'Animooh',
            'image': 'jocondelab.jpg'
        },
        {
            'title': 'SimonPong',
            'image': 'simonpong.jpg'
        },
        {
            'title': 'JocondeLab',
            'image': 'jocondelab.jpg'
        }
    ];

    $scope.changeBackground = function(index) {
        console.log(angular.element(document.querySelector('.works')));
        angular.element(document.querySelector('.works')).css('background-image', 'url(../images/works/' + $scope.works[index].image + ')');
    }
});
