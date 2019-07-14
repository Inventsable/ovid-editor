export default function getPanelBG() {
  return getRGBArray(
    JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo
      .panelBackgroundColor.color
  );
  function getRGBArray(color) {
    return [color.red, color.green, color.blue];
  }
}
