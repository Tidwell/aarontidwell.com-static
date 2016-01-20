var path = require('canonical-path');

var Dgeni = require('dgeni');
var staticGeneratorPackage = require('static-generator');

/* Create the package for the site generator */
var sitePackage = new Dgeni.Package('sitePackage', [
    staticGeneratorPackage
]);

/* Config */
sitePackage.config(function(writeFilesProcessor){
    writeFilesProcessor.outputFolder = path.resolve(process.cwd(), './build');
});

sitePackage.config(function(readFilesProcessor) {
    readFilesProcessor.basePath = './';
    readFilesProcessor.sourceFiles = [{
        include: 'content/**/*',
        basePath: 'content'
    }];
});

sitePackage.config(function(templateFinder){
    templateFinder.templateFolders.unshift('templates/');
    templateFinder.templatePatterns.unshift('index.hbs');
});

/* Run */
var dgeni = new Dgeni([sitePackage]);

dgeni.generate().then(function(docs) {
    console.log(docs.length, 'docs generated');
});