angular.module('PortfolioServices', [])

.factory('WorksService', function() {
    var worksService = {};

    var works = {
        'lantern': {
            'title': 'Lantern',
            'image': 'lantern.jpg',
            'color': 'yellow',
            'visible': true,
            'subtitle': 'iOS application & connected object',
            'description': 'Lantern is my final year project in Gobelins. It is a nightlight that creates an atmosphere of sound and light according to the story the parent reads on a tablet.',
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

    worksService.getWorks = function() {
        return works;
    }

    workService.getWork = function(identifier) {
        return works[identifier];
    }

    workService.getNextWork = function(identifier) {
        var index = 0;
        angular.forEach(works, function(work, key) {
            if (key == identifier) {
                var nextIndex = index + 1;
                if (nextIndex == works.length - 1) {
                    nextIndex = 0;
                }

                return works[nextIndex];
            }

            index++;
        });

        return null;
    }

    return worksService;
});