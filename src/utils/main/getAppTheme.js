export default function getAppTheme() {
  const appName = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName;
  if (/aeft|ppro/i.test(appName)) return "gradient";
  const alpha = JSON.parse(window.__adobe_cep__.getHostEnvironment())
    .appSkinInfo.panelBackgroundColor.color.red;
  if (alpha > 220) return "lightest";
  else if (alpha > 150) return "light";
  else if (alpha > 80) return "dark";
  else return "darkest";
}
