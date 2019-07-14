export default function launchLocalHost() {
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
  cep.util.openURLInDefaultBrowser(
    `http://localhost:${debug.data.match(port)[1]}`
  );
}
