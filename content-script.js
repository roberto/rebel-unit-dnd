var convert = function (value) {
  return Qty(value.replace(/\.$/, '')).toBase().toPrec(0.5)
}

findAndReplaceDOMText(document.body, {
  find: /(\d+) ((?:to|by|and|to over) \d+ (pounds|lb\.|feet|foot|ft\.))/g,
  replace: function (portion, match) {
    var firstValue = match[1]
    var secondPart = match[2]
    var unit = match[3]
    var converted = convert(firstValue + unit)

    return firstValue + ' (' + converted + ') ' + secondPart
  }
})

findAndReplaceDOMText(document.body, {
  find: /(\d+) (pounds|lb\.|feet|foot|ft\.)/g,
  replace: function (portion) {
    var converted = convert(portion.text)

    return portion.text + ' (' + converted + ')'
  }
})

findAndReplaceDOMText(document.body, {
  find: /(\d+)‐(foot)-wide/g,
  replace: function (portion, match) {
    var converted = convert(match[1] + match[2])

    return portion.text + ' (' + converted + ')'
  }
})

