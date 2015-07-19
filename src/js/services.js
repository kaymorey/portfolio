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
            'introduction': 'Lantern is my final year project in Gobelins. It is a nightlight that creates an atmosphere of sound and light according to the story the parent reads on a tablet.',
            'date': '2015',
            'context': '8 months project at Gobelins school',
            'technologies': 'Objective-C, Arduino',
            'role': 'iOS Developer',
            'sections': [
                {
                    'left': true,
                    'media':{
                        'type': 'img',
                        'src': '../images/works/lantern1.png'
                    },
                    'title': 'Purpose of the project',
                    'text': 'Before going to bed, children are often afraid of leaving their parent’s side. Some tend to extend their bedtime as much as they can, usually by wanting to listen to another story, then another one, and this can go on for hours. We wanted to create a bedtime routine that combines two of the strongest existing solutions: the bedtime story and the nightlight.'
                },
                {
                    'left': false,
                    'media':{
                        'type': 'video',
                        'mockup': 'ipad-portrait',
                        'src': '../videos/lantern/covers.mp4'
                    },
                    'title': 'Choose a story',
                    'text': 'Swipe from right to left to navigate through covers stories. Each cover is represented by illustrations and pictograms which animate while swiping.'
                },
                {
                    'left': true,
                    'media':{
                        'type': 'video',
                        'mockup': 'ipad-portrait',
                        'src': '../videos/lantern/reading.mp4'
                    },
                    'title': 'Navigate through pages',
                    'text': 'Just swipe from bottom to top to navigate through pages and see the pictos animate. Each time you change pages, the color of the nightlight changes as well. You can also tap on a small icon to play a one-time animation on the nightlight.'
                },
                {
                    'left': false,
                    'media':{
                        'type': 'video',
                        'mockup': 'ipad-portrait',
                        'src': '../videos/lantern/sleep-mode.mp4'
                    },
                    'title': 'Configure sleep mode',
                    'text': 'At the end of the story, choose a melody and a duration. The nightlight will play the sound and make a sweet light during this time. It will then acompagny the child during the night thanks to a soft light.'
                },
            ],
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
            'introduction': 'Trust is a mobile application that gives you access to a timeline of news.',
            'purpose': 'The project has been suggested by the Thomson Reuters Foundation to the students of Gobelins. The aim was to propose an application bound to the digital natives to encourage them to read more news. We created a timeline that allows the user to better understand the news by having access to all of its history.',
            'technologies': ['Objective-C'],
            'team': ['Katia Moreira - Developer', 'Samuel Honingstein - Developer', 'Marjorie Rouffet - Designer', 'Thibault Terray - Designer'],
            'video': '130524548',
            'next': 'animooh'
        },
        'animooh': {
            'title': 'Animooh',
            'image': 'animooh.jpg',
            'color': 'red',
            'visible': false,
            'subtitle': 'iOS application',
            'introduction': 'iOS application & connected object',
            'video': '130524548',
            'next': 'simonpong'
        },
        'simonpong': {
            'title': 'SimonPong',
            'image': 'simonpong.jpg',
            'color': 'blue',
            'visible': false,
            'subtitle': 'arduino experiment',
            'introduction': 'iOS application & connected object',
            'video': '130524548',
            'next': 'jocondelab'
        },
        'jocondelab': {
            'title': 'JocondeLab',
            'image': 'jocondelab.jpg',
            'color': 'red',
            'visible': false,
            'subtitle': 'angularJS web experiment',
            'introduction': 'iOS application & connected object',
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