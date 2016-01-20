var Dgeni = require('dgeni');
var staticGuideDgeniPackage = require('static-generator');

/* Load the processor to create the custom 'data' object we want */
var cleanUrlsProcessor = require('./processors/clean-urls');


/* Create the package for the site generator */
var site = new Dgeni.Package('site', [
	staticGuideDgeniPackage
]);

//add our custom processors to the site package
site.processor(cleanUrlsProcessor);

/* export the site package */
module.exports = site;