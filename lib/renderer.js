const {inspect} = require('util')

function print (obj) {
    return inspect(obj, {  depth: 'infinity' });
}

module.exports = class Renderer {
    constructor(nodes) {
        this.nodes = nodes;
        this.markup = [];
    }

    render() {
        return this.processNodes(this.nodes);
    }

    processNodes(nodes) {
        this.processNode(nodes);
    }

    processNode(node) {
        const {tagname, val, parent, child} = node;

        if (!tagname) {
            console.log('no tagname:', node)
        } else if (Object.keys(child).length > 0) {
            if (tagname == 'pa') {
                console.log('has child:', node)
            } else {
                console.log('has child:', tagname)
            }

            this.processOpenTag(node);
        } else {
            // console.log('node:', tagname)
            this.processOpenTag(node);
        }

        if (Object.keys(child).length > 0) {
            Object.keys(child).forEach(childKey => {
                child[childKey].forEach((childNode, index, child) => {
                    if (Object.is(child.length - 1, childNode)) {
                        childNode.lastNode = true;
                    }
                    this.processNode(childNode);
                })
            })
        } else if (Object.keys(parent).length > 0 && node.lastNode === true) {
            this.processClosingTag(parent.tagname)
        } else if (val) {
            this.processValAndClosingTag({tagname, val})
        } else {
            // console.log(node)
        }
    }

    processOpenTag({tagname, val}) {
        console.log(`<${tagname}>${val}`);

        // if (tagname && tagname.includes(':')) {
        //     switch (tagname) {
        //         case '!xml':
        //             // html += '<!xml>';
        //             console.log('<!xml>');
        //             break;

        //         case 'c:if':
        //             // html += '<!xml>';
        //             console.log('<c:if>');
        //             break;

        //         case 'c:choose':
        //             // html += '<!xml>';
        //             console.log('<c:choose>');
        //             break;

        //         case 'p':
        //             // html += '<!xml>';
        //             console.log('<p>');
        //             break;
            
        //         default:
        //             // console.log(`undefined: <${tagname}>`);
        //             console.log('undefined:', require('util').inspect(node, {  depth: 'infinity' }));
        //             // html += 'undefined:'
        //             break;
        //     }
        // } else {
        //     // console.log(node)
        //     console.log(`<${tagname}>`)
        // }

        // if (child) {
        //     this.processNodes(child);
        // }
    }

    processClosingTag(tagname) {
        console.log(`</${tagname}>`);
    }

    processValAndClosingTag({tagname, val}) {
        console.log(`${val}</${tagname}>`);
    }
}