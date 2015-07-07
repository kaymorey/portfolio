## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Compass](http://compass-style.org/) `gem install compass`
    * [Susy](http://susy.oddbird.net/) `gem install susy`
* Install dependencies:
    * `npm install`
* Run:
    * `gulp server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `gulp build` — builds minified project for production
* Learn:
    * `build/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
