angular.module('PortfolioControllers', ['PortfolioServices'])

.controller('HomeCtrl', function HomeCtrl($scope, $timeout, $location) {
    $scope.goTo = function(path) {
        $timeout(function() {
            $location.path(path);
        }, 300);
    }
})

.controller('WorksCtrl', function WorksCtrl($scope, WorksService) {
    var promise = WorksService.getWorks();
    promise.then(function(works) {
        $scope.works = works;
        $scope.activeBackground = $scope.works['lantern'].image;
    });

    $scope.changeBackground = function(identifier) {
        angular.forEach($scope.works, function(work) {
            work.visible = false;
        });
        $scope.works[identifier].visible = true;
        $scope.activeBackground = $scope.works[identifier].image;
    }
})

.controller('WorkCtrl', function WorkCtrl($scope, $routeParams, WorksService) {
    var identifier = $routeParams.identifier;
    $scope.work = WorksService.getWork(identifier);

    WorksService.getWorks().then(function(works) {
        $scope.works = works;
        $scope.nextWork = works[$scope.work.next];
    });
})

.controller('AboutCtrl', function AboutCtrl($scope, WorksService) {
    WorksService.getWorks().then(function(works) {
        $scope.works = works;
    });
});
