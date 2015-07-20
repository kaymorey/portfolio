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
                    'media': {
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
            'date': '2014',
            'context': 'One week workshop in Amsterdam and 3 months realisation at Gobelins school',
            'technologies': 'Objective, C',
            'role': 'iOS Developer',
            'sections': [
                {
                    'left': true,
                    'media': {
                        'type': 'img',
                        'src': '../images/works/lantern1.png'
                    },
                    'title': 'Purpose of the project',
                    'text': 'The project has been suggested by the Thomson Reuters Foundation to the students of Gobelins. The aim was to propose an application bound to the digital natives to encourage them to read more news. We created a timeline that allows the user to better understand the news by having access to all of its history.',
                },
                {
                    'left': true,
                    'media': {
                        'type': 'img',
                        'src': '../images/works/lantern1.png'
                    },
                    'title': 'Purpose of the project',
                    'text': 'The project has been suggested by the Thomson Reuters Foundation to the students of Gobelins. The aim was to propose an application bound to the digital natives to encourage them to read more news. We created a timeline that allows the user to better understand the news by having access to all of its history.',
                }
            ],
            'next': 'animooh'
        },
        'animooh': {
            'title': 'Animooh',
            'image': 'animooh.jpg',
            'color': 'red',
            'visible': false,
            'subtitle': 'iOS application',
            'introduction': 'Animooh is an iPad application for children to make them discover incredible animals !',
            'date': '2014',
            'context': '3 months project at Gobelins school',
            'technologies': 'Objective-C',
            'role': 'iOS Developer',
            'sections': [
                {
                    'left': true,
                    'media': {
                        'type': 'img',
                        'src': '../images/works/lantern1.png'
                    },
                    'title': 'Purpose of the project',
                    'text': 'The subject of the project was "augmented knowledge". We decided to create an application that uses popular science and interactions on a tablet to make the learning funnier.'
                },
                {
                    'left': false,
                    'media': {
                        'type': 'video',
                        'mockup': 'ipad-portrait',
                        'src': '../videos/animooh/interaction.mp4'
                    },
                    'title': 'Play with animals',
                    'text': 'Each animal has an extraordinary capability. The child can play and interact with the animal to realize what it is.'
                },
                {
                    'left': true,
                    'media': {
                        'type': 'video',
                        'mockup': 'ipad-portrait',
                        'src': '../videos/animooh/setules.mp4'
                    },
                    'title': 'Understand how it works',
                    'text': 'Each capability is explained thanks to diagrams or funny interactions. The aim was to make scientific explanations accessible for children. A voiceover also explains how it is working.',
                },
                {
                    'left': false,
                    'media': {
                        'type': 'img',
                        'src': '../images/works/lantern1.png'
                    },
                    'title': 'Discover or re-discover animals',
                    'text': 'We chose a dozen of animals which are incredible : let\'s discover the pistol shrimp, the monkfish or the mimic octopus. The parent may learn as many things as his/her children...'
                }
            ],
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
