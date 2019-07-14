export default function getRoot() {
  return decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(
    /file\:\/{1,}/,
    ""
  );
}
