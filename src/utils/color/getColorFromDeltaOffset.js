import rgbToHex from "./rgbToHex";

export default function getColorFromDeltaOffset(color, delta) {
  return rgbToHex(
    color.map(col => {
      return +col + +delta;
    })
  );
}
