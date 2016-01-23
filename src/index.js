var Dgeni = require('dgeni');
var staticGuideDgeniPackage = require('static-generator');

var cleanUrlsProcessor = require('./processors/clean-urls');
var portfolioDataProcessor = require('./processors/portfolio-data');


/* Create the package for the site generator */
var site = new Dgeni.Package('site', [
	staticGuideDgeniPackage
]);

//add our custom processors to the site package
site.processor(cleanUrlsProcessor);
site.processor(portfolioDataProcessor);

/* export the site package */
module.exports = site;