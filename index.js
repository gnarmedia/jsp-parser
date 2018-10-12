const fastXmlParser = require('fast-xml-parser');
const fse = require('fs-extra');

const Renderer = require('./lib/renderer');

const jsp = fse.readFileSync('./demo.jsp', 'utf-8');

const nodes = fastXmlParser.getTraversalObj(jsp, {
    ignoreAttributes: false,
    attributeNamePrefix : ""
});

fse.outputFile('./renderTree.txt', require('util').inspect(nodes, {  depth: 'infinity' }));

const jspRenderer = new Renderer(nodes);

// processNodes(nodes);
const html = jspRenderer.render();

