export default function getExtVersion() {
  const xml = window.cep.fs.readFile(
    `${decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(
      /file\:\/{1,}/,
      ""
    )}/CSXS/manifest.xml`
  );
  const bundleVersion = /ExtensionBundleVersion\=\"(\d|\.)*(?=\")/;
  const matches = xml.data.match(bundleVersion);
  return matches.length ? matches[0].replace(/\w*\=\"/, "") : "Unknown";
}
