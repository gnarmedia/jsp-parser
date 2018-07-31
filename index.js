const fs = require('fs-extra');

// TODO: solve global require
const jsp = require('./jsp.js');

fs.readFile('./test.jsp', 'utf-8')
    .then(text => {
        var tree = jsp.parse(text);

        tree.elements.forEach(function (node) {
            console.log(node.offset, node.text);
        });

        console.log(text);
        console.log(tree);
    })
    .catch(e => console.log(e));
