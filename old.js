const fastXmlParser = require('fast-xml-parser');
const he = require('he');
const fse = require('fs-extra');

// const { processNode } = require('./lib/renderer');

const jsp = fse.readFileSync('./demo.jsp', 'utf-8');

const nodes = fastXmlParser.getTraversalObj(jsp, {
    ignoreAttributes: false,
    attributeNamePrefix : "",
    attrNodeName: "attr",
});

// const ejsOpenTag = '<%';
// const ejsCloseTag = '%>';

let html = '';
console.log(require('util').inspect(nodes, {depth:'infinity'}));
console.log();

processNodes(nodes);

// console.log(html);

function processNodes(nodes) {
    let html = '';

    Object.entries(nodes).forEach(node => {
        html += processOpenTag(node);
    });

    console.log(html)
}

function processOpenTag(node) {
    const {tagname} = node;

    // console.log(node)

    let html = '';


    switch (tagname) {
        case '!xml':
            break;
    
        default:
            break;
    }

    return html;

}

// function processNode( {tagname, attr }) {
//     let nodeHtml = '';
//     if (tagname) {
//         switch (tagname) {
//             case 'c:if':
//                 html += `${ejsOpenTag} if (${attrsMap['@_test']}) { ${ejsCloseTag}`
//                 break;
        
//             default:
//                 break;
//         }
//     }
//     html += nodeHtml;
// }

// console.log(require('util').inspect(nodes, { depth: 'infinity' }));

// for (node in nodes) {
//     let tagname = nodes[node].tagname;
//     let attrs = [];

//     switch (tagname) {
//         case 'c:if':
//             const test = 
//             html += `<% if () { %>`;
//             break;
    
//         default:
//             break;
//     }

//     console.log(nodes[node]);
// }

// console.log(html);
