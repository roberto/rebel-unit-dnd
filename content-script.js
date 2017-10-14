var feetToMeters = function (feet) {
  return Qty(feet).to('m').toPrec('0.5 m')
}

findAndReplaceDOMText(document.body, {
  find: /(\d+) (feet|foot|ft\.)/g,
  replace: function (portion) {
    var converted = feetToMeters(portion.text.replace(/\.$/, ''))

    return portion.text + ' (' + converted + ')'
  }
})

findAndReplaceDOMText(document.body, {
  find: /(\d+)‐(foot)-wide/g,
  replace: function (portion, match) {
    var converted = feetToMeters(match[1] + match[2])

    return portion.text + ' (' + converted + ')'
  }
})
