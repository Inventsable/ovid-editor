export default function writeFile(path, data, toJSON = false) {
  return window.cep.fs.writeFile(
    decodeURI(path).replace(/file\:\/{1,}/, ""),
    toJSON ? JSON.stringify(data) : data
  );
}
