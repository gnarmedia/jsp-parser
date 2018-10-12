'use strict'

module.exports = function () {
  return function posthtmlJspToEjs (tree) {
    // console.log(require('util').inspect(tree, { depth: 'infinity' }))
    // tree.match({ tag: 'c:if' }, (node) => {
    //   let tag = node.tag

    //   console.log(node)

    //   Object.assign(node, { tag: 'div', attrs: {class: tag} })

    // return node
    // })
    return tree
  }
}
