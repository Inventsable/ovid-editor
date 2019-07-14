export default function hexToRGB(hex) {
  return hex.match(/\w\w/g).map(x => parseInt(x, 16));
}
