findAndReplaceDOMText(document.body, {
  find: /(\d+) (feet|foot|ft)/g,
  replace: function (portion) {
    var converted = Qty(portion.text).to('m').toPrec('0.5 m')

    return portion.text + ' (' + converted + ')'
  }
})
