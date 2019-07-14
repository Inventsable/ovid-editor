export default function getAppName() {
  return JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName;
}
