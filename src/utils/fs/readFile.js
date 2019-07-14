export default function readFile(path) {
  if (!window.cep.fs.readFile(decodeURI(path).replace(/file\:\/{1,}/, "")).err)
    return window.cep.fs.readFile(decodeURI(path).replace(/file\:\/{1,}/, ""))
      .data;
  else return false;
}
