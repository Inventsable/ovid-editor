// Universal function assigning a hexadecimal color to valid value for AEFT/ILST
//
export default function appHexToRGB(hex) {
  const appName = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName;
  const color = hex
    .replace(/\#/, "")
    .match(/\w\w/g)
    .map(x => parseInt(x, 16));
  return /aeft/i.test(appName)
    ? color.map(a => a / 255)
    : /ilst/i.test(appName)
    ? {
        red: color[0],
        green: color[1],
        blue: color[2]
      }
    : color;
}
