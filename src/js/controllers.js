angular.module('PortfolioControllers', ['PortfolioServices'])

.controller('HomeCtrl', function HomeCtrl($scope, $timeout, $location) {
    $scope.goTo = function(path) {
        $timeout(function() {
            $location.path(path);
        }, 300);
    }
})

.controller('WorksCtrl', function WorksCtrl($scope, WorksService) {
    $scope.works = WorksService.getWorks();

    $scope.changeBackground = function(identifier) {
        angular.forEach($scope.works, function(work) {
            work.visible = false;
        });
        $scope.works[identifier].visible = true;
    }
})

.controller('WorkCtrl', function WorkCtrl($scope, $routeParams, WorksService) {
    var identifier = $routeParams.identifier;
    $scope.work = WorksService.getWork(identifier);

    $scope.works = WorksService.getWorks();
    $scope.nextWork = $scope.works[$scope.work.next];
});
