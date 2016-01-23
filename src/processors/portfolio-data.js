/**
 * @dgProcessor portfolioDataProcessor
 * @description
 * cleans urls, basically just nests everything that isnt a index.html file down a level
 */
module.exports = function portfolioDataProcessor(renderDocsProcessor) {
	var data = require('../portfolio-data.json');
	return {
		$runBefore: ['renderDocsProcessor'],
		$process: function(docs) {
			renderDocsProcessor.extraData.portfolioData = data;
			return docs;
		}
	};
};