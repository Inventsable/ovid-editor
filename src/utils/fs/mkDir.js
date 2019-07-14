// BROKEN
//
export default function makeDir(path) {
  window.cep.fs.readFile(decodeURI(path).replace(/file\:\/{1,}/, "")).err
    ? new Promise((resolve, reject) => {
        window.__adobe_cep__.evalScript(
          `
          var folder = new Folder(${decodeURI(path)});
          if (!folder.exists) {
            var parts = path.split("/");
            parts.pop();
            mkdir(parts.join("/"));
            folder.create();
          }
          `,
          resolve("Done")
        );
      }).catch(err => {
        resolve(err);
      })
    : null;
}
