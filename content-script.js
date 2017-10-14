findAndReplaceDOMText(document.getElementById('content'), {
  find: /(\d+) (feet|foot|ft)/g,
  replace: function (node) {
    var converted = Qty(node.text).to('m')

    return node.text + ' (' + converted + ')'
  }
})
