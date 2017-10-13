var feetToMeters = function (value) {
  return (value * 0.3048).toString() + ' meters'
}

var convert = {
  'feet': feetToMeters,
  'foot': feetToMeters
}

findAndReplaceDOMText(document.getElementsByTagName('body')[0], {
  find: /(\d+) (feet|foot)/g,
  replace: function (node, found) {
    var original = {
      text: found[0],
      value: parseInt(found[1]),
      unit: found[2]
    }

    var converted = convert[original.unit](original.value)

    return original.text + ' (' + converted + ')'
  }
})
