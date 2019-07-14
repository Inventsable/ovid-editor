// Should be able to extract all data about tokens, push them to individual arrays,
// then construct token objects to extend Monaco at launch?

const require = cep_node.require || require;
const fs = require("fs");

export default function getTokensFromTypescriptFile() {
  let appName = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName;
  let root = decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(
    /file\:\/{1,}/,
    ""
  );

  // let typeList = ["global", "plugplug", "ScriptUI", appName];
  let typeList = ["global"];
  let typings;
  typeList.forEach(types => {
    typings +=
      fs.readFileSync(
        `${root}/src/components/monaco-adobe/types/${types}.d.ts`,
        {
          encoding: "utf-8"
        }
      ) + "\r\n";
  });

  // let result =
}
