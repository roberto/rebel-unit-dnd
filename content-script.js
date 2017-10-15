var convert = function (value) {
  var sanitized = value
    .replace(/\.$/, '')
    .replace(/½/, '.5')

  return Qty(sanitized).toBase().toPrec(0.5)
}

document.querySelectorAll('span.No-Break').forEach(function (element) {
  element.outerHTML = element.innerHTML
})

findAndReplaceDOMText(document.body, {
  find: /(\d+½?) ((?:to|by|and|to over) \d+½? (pounds|lb\.|feet|foot|ft\.))/g,
  replace: function (portion, match) {
    var firstValue = match[1]
    var secondPart = match[2]
    var unit = match[3]
    var converted = convert(firstValue + unit)

    return firstValue + ' (' + converted + ') ' + secondPart
  }
})

findAndReplaceDOMText(document.body, {
  find: /(\d+½?) (pounds|lb\.|feet|foot|ft\.)/g,
  replace: function (portion) {
    var converted = convert(portion.text)

    return portion.text + ' (' + converted + ')'
  }
})

findAndReplaceDOMText(document.body, {
  find: /(\d+½?)\-(foot)(\-(wide|square))?/g,
  replace: function (portion, match) {
    var converted = convert(match[1] + match[2])

    return portion.text + ' (' + converted + ')'
  }
})
