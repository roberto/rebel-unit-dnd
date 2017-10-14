var feetToMeters = function (value) {
  return Qty(value.replace(/\.$/, '')).to('m').toPrec('0.5 m')
}

findAndReplaceDOMText(document.body, {
  find: /(\d+) ((?:to|by|and) \d+ (feet|foot|ft\.))/g,
  replace: function (portion, match) {
    var firstValue = match[1]
    var secondPart = match[2]
    var unit = match[3]
    var converted = feetToMeters(firstValue + unit)

    return firstValue + ' (' + converted + ') ' + secondPart
  }
})

findAndReplaceDOMText(document.body, {
  find: /(\d+) (feet|foot|ft\.)/g,
  replace: function (portion) {
    var converted = feetToMeters(portion.text)

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

