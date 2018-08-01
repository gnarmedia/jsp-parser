const fs = require('fs-extra');
const util = require('util');

// TODO: solve global require
const jsp = require('./jsp.js');

fs.readFile('./test.jsp', 'utf-8')
    .then(text => {
        var tree = jsp.parse(text);

        tree.elements.forEach(function (node) {
            console.log(util.inspect(node.offset, node.text));
        });

        console.log(util.inspect(text));
        console.log(util.inspect(tree));
    })
    .catch(e => console.log(e));
