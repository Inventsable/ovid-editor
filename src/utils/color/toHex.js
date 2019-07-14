export default function toHex(color, delta) {
  function computeValue(value, delta) {
    var computedValue = !isNaN(delta) ? value + delta : value;
    if (computedValue < 0) {
      computedValue = 0;
    } else if (computedValue > 255) {
      computedValue = 255;
    }

    computedValue = Math.round(computedValue).toString(16);
    return computedValue.length == 1 ? '0' + computedValue : computedValue;
  }
  var hex = '';
  if (color) {
    hex =
      computeValue(color.red, delta) +
      computeValue(color.green, delta) +
      computeValue(color.blue, delta);
  }
  return '#' + hex;
}
