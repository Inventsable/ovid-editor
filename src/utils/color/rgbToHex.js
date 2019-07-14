// Universal function for color conversion to hexadecimal
//
export default function rgbToHex(rgbArray, delta = 0) {
  !(rgbArray instanceof Array)
    ? [
        rgbArray.r || rgbArray.red,
        rgbArray.g || rgbArray.green,
        rgbArray.b || rgbArray.blue
      ]
    : rgbArray;
  while (rgbArray.length > 3) rgbArray.pop();
  rgbArray =
    /aeft/i.test(
      JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName
    ) && rgbArray.reduce((a, b) => a + b, 0) <= 3
      ? rgbArray.map(a => a * 255)
      : rgbArray;
  return (
    "#" +
    rgbArray
      .map(c => {
        c = c + +delta < 255 ? Math.abs(c + +delta).toString(16) : 0;
        return c.length < 2 ? `0${c}` : c;
      })
      .join("")
  );
}
