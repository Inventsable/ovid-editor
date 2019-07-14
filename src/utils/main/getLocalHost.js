export default function getLocalHost() {
  const debug = window.cep.fs.readFile(
    `${decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(
      /file\:\/{1,}/,
      ""
    )}/.debug`
  );
  const port = new RegExp(
    `\\<Host\\sName\\=\\"${
      JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName
    }\\"\\sPort\\=\\"(\\d*)`
  );
  return `http://localhost:${debug.data.match(port)[1]}`;
}
