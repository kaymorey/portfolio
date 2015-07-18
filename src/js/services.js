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
            'video': 'https://player.vimeo.com/video/130524548',
            'purpose': 'Before going to bed, children are often afraid of leaving their parent’s side. Some tend to extend their bedtime as much as they can, usually by wanting to listen to another story, then another one, and this can go on for hours. We wanted to create a bedtime routine that combines two of the strongest existing solutions: the bedtime story and the nightlight.',
            'technologies': ['Objective-C', 'Arduino'],
            'team': ['Katia Moreira - Developer', 'Alexis Tessier - Developer', 'Athanassios Tohme - Designer', 'Jonas Deprund - Designer'],
            'website': {
                'url': 'http://lantern-app.com',
                'title': 'lantern-app.com',
            },
            'next': 'trust'
        },
        'trust': {
            'title': 'Trust',
            'image': 'trust.jpg',
            'color': 'blue',
            'visible': false,
            'subtitle': 'iOS application',
            'description': 'iOS application & connected object',
            'video': '130524548',
            'next': 'animooh'
        },
        'animooh': {
            'title': 'Animooh',
            'image': 'animooh.jpg',
            'color': 'red',
            'visible': false,
            'subtitle': 'iOS application',
            'description': 'iOS application & connected object',
            'video': '130524548',
            'next': 'simonpong'
        },
        'simonpong': {
            'title': 'SimonPong',
            'image': 'simonpong.jpg',
            'color': 'blue',
            'visible': false,
            'subtitle': 'arduino experiment',
            'description': 'iOS application & connected object',
            'video': '130524548',
            'next': 'jocondelab'
        },
        'jocondelab': {
            'title': 'JocondeLab',
            'image': 'jocondelab.jpg',
            'color': 'red',
            'visible': false,
            'subtitle': 'angularJS web experiment',
            'description': 'iOS application & connected object',
            'video': '130524548',
            'next': 'lantern'
        }
    };

    worksService.getWorks = function() {
        return works;
    }

    worksService.getWork = function(identifier) {
        return works[identifier];
    }

    return worksService;
})

.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);