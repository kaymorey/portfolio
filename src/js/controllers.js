angular.module('PortfolioControllers', ['PortfolioServices'])

.controller('HomeCtrl', function HomeCtrl($scope) {

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
});
