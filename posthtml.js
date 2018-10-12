const posthtml = require('posthtml')
const parser = require('posthtml-parser')
const render = require('posthtml-render-ejs')
const fse = require('fs-extra')

let jsp = fse.readFileSync('./test.jsp', 'utf-8')

jsp = jsp.replace(/<%--[\s\S]*?--%>/g, '')

// TODO: strip jsp comments <%-- --%>

posthtml([
    require('./plugin')(),
  ])
  .process(jsp, { parser, render }
  )
  .then(result =>  console.log(result.html))
