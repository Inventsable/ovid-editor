const chalk = require("chalk");
const fse = require("fs-extra");
const fs = require("fs");
const shell = require("shelljs");
const inquirer = require("inquirer");

// Box-style message for end
const boxen = require("boxen");
const BOXEN_OPTS = {
  padding: 1,
  margin: 1,
  align: "center",
  borderColor: "yellow",
  borderStyle: "round"
};

const osPrefix = process.platform === "win32" ? "" : `./`;

// Spinner component for terminal
const ora = require("ora");
const ORA_SPINNER = {
  interval: 80,
  frames: [
    "   ⠋",
    "   ⠙",
    "   ⠚",
    "   ⠞",
    "   ⠖",
    "   ⠦",
    "   ⠴",
    "   ⠲",
    "   ⠳",
    "   ⠓"
  ]
};

const cepBlock = `${chalk.black.bgBlue(" CEP ")}`;
const helpPrompt = `${cepBlock} 😅   Didn't mean to do that? Use ${chalk.yellow(
  "npm run help"
)} to see a full list of commands`;

module.exports = {
  ignore: async function() {
    let ignores;
  },
  help: async function() {
    const extVersion = getExtVersion();
    const extName = getExtName();
    console.log("   Welcome! You can run these commands at any time:");
    console.log("");
    console.log(
      `${chalk.black.bgGreen(" VUE ")} ${chalk.yellow(
        "npm run serve"
      )} — Run the development server (${chalk.blue("DEVELOPER")})`
    );
    console.log(
      `${chalk.black.bgGreen(" VUE ")} ${chalk.yellow(
        "npm run build"
      )} — Compile to ${chalk.green("./dist/")} directory (${chalk.blue(
        "PRODUCTION"
      )})`
    );
    console.log(
      `${cepBlock} ${chalk.yellow(
        "npm run switch"
      )} — Switch between ${chalk.blue("DEVELOPER")} and ${chalk.blue(
        "PRODUCTION"
      )}`
    );
    console.log(
      `${cepBlock} ${chalk.yellow(
        "npm run update"
      )} — Update the panel's version`
    );
    console.log(
      `${cepBlock} ${chalk.yellow(
        "npm run register"
      )} — Register the info to be used in ${chalk.yellow("npm run sign")}`
    );
    console.log(
      `${cepBlock} ${chalk.yellow(
        "npm run sign"
      )} — Stage, sign, and certify panel with result as ${chalk.green(
        `./archive/${extName}${extVersion}.zxp`
      )}`
    );
    console.log("");
    console.log(
      `   - Documentation per template can be found at the generator repo here:`
    );
    console.log(
      `     ${chalk.blue(
        "https://github.com/Inventsable/generator-cep-vue-cli#templates"
      )}`
    );
    console.log("");
    console.log(
      `   - An outline of how to use this workflow and what each command does can be found here:`
    );
    console.log(
      `     ${chalk.blue(
        "https://github.com/Inventsable/CEP-Self-Signing-Panel#usage"
      )}`
    );
    console.log(
      `     ${chalk.blue(
        "https://github.com/Inventsable/CEP-Self-Signing-Panel#what-do-they-do"
      )}`
    );
    return "";
  },
  register: async function() {
    console.log(`${helpPrompt}`);
    console.log(``);
    let user = shell.exec("git config user.name", { silent: true }).stdout;
    user = user.replace(" ", "-").trim();
    let certInfo;
    if (fs.existsSync(`./src/utils/dev/certInfo.txt`)) {
      certInfo = fs.readFileSync(`./src/utils/dev/certInfo.txt`, {
        encoding: "utf-8"
      });
      console.log(
        `${cepBlock}  Current string for certs is ${chalk.green(
          certInfo.split(";").join(" ")
        )}`
      );
      console.log("");
    } else {
      certInfo = "US;NY;SomeOrg";
      console.log(
        `${chalk.red(
          "✘ "
        )} No user data was found! It will default to ${chalk.green(
          certInfo.split(";").join(" ")
        )}`
      );
    }
    certInfo = certInfo.split(";");
    if (certInfo.length < 4) certInfo = [].concat(certInfo, [user]);
    promptRegister(certInfo).then(answer => {
      let fulldetails = [answer.country, answer.state, answer.org, answer.name];
      let finaldetails = fulldetails.map(ans => {
        return /\s/.test(ans) ? ans.split(" ").join("-") : ans;
      });
      fs.writeFileSync(`./src/utils/dev/certInfo.txt`, finaldetails.join(";"));
      console.log("");
      console.log(
        `   ${chalk.green("✔ ")} Config has been saved to ${chalk.green(
          "./src/utils/dev/certInfo.txt"
        )}`
      );
      console.log(
        `   👍  Self-signed certificates via ${chalk.yellow(
          "npm run sign"
        )} will use this data!`
      );
      console.log("");
    });
  },
  sign: async function() {
    console.log(`${helpPrompt}`);
    console.log(``);
    // gathering data
    const extVersion = getExtVersion();
    const extName = getExtName();
    const extString = `${extName}${extVersion}`;

    shell.config.silent = true;
    let pwd = shell.pwd();
    const rootDir = pwd.match(/[^\\|\/]*$/)[0];
    shell.config.silent = false;

    // beginning the prompts

    console.log(`${cepBlock}  🤘  Signing ${chalk.blue(extString)}!`);
    console.log("");
    console.log(
      `   Be sure to run ${chalk.yellow(
        "npm run register"
      )} prior to this command.`
    );
    console.log(
      `   You can add any valid regex or phrases to ${chalk.green(
        "./src/utils/dev/.certignore"
      )} to exclude them from staging.`
    );
    console.log("");

    promptUser().then(answer => {
      let spinner = ora({
        text: `Staging temp files...`,
        spinner: ORA_SPINNER
      }).start();
      stageExtensionFolder(extString).then(res => {
        spinner.stopAndPersist({
          symbol: chalk.green("   ✔ "),
          text: `Staging complete.`
        });
        spinner = ora({
          text: `Running ${chalk.yellow("ZXPSignCmd")} for you...`,
          spinner: ORA_SPINNER
        }).start();
        setTimeout(() => {
          signCommands(res, rootDir, answer.password, answer.createZip).then(
            () => {
              console.log("");
              spinner.stopAndPersist({
                symbol: chalk.green("   ✔ "),
                text: `Signing is complete.`
              });
              fse.removeSync(`./${extString}-tmp`);
              fse.removeSync(`./${rootDir}/archive/temp1.p12`);
              console.log(
                boxen(`${chalk.blue(`${extString}.zxp`)} is ready!`, {
                  ...BOXEN_OPTS,
                  ...{
                    borderColor: "blue"
                  }
                })
              );
              console.log(
                `   👍  You can find it in ${chalk.green(
                  `./archive/${extString}.zxp`
                )}`
              );
              console.log("");
            }
          );
        }, 1000);
      });
    });
    return "";
  },
  switch: async function() {
    console.log(`${helpPrompt}`);
    console.log(``);
    const extVersion = getExtVersion();
    const extName = getExtName();
    const extString = `${extName}${extVersion}`;

    let isDev = await getCurrentContext();
    console.log(
      `${cepBlock}  ${chalk.blue(extString)} is in ${chalk.blue(
        `${isDev ? "DEVELOPER" : "PRODUCTION"}`
      )}`
    );
    console.log("");
    await inquirer
      .prompt([
        {
          type: "confirm",
          name: "shouldSwitch",
          message: `Would you like to switch to ${chalk.blue(
            `${!isDev ? "DEVELOPER" : "PRODUCTION"}`
          )}?`,
          default: true
        }
      ])
      .then(answer => {
        if (answer.shouldSwitch)
          switchContext()
            .then(res => {
              console.log(
                boxen(`Context switched to ${chalk.blue(res)}`, {
                  ...BOXEN_OPTS,
                  ...{
                    borderColor: "blue"
                  }
                })
              );
              console.log(`   ${chalk.green("✔ ")} Switch successful!`);
              endMessage(true);
            })
            .catch(err => {
              console.log(
                `${chalk.red(
                  "✘ "
                )} Something went wrong! Double-check your ${chalk.green(
                  "manifest.xml"
                )} file.`
              );
              return null;
            });
        else {
          console.log("");
          console.log(`   👍  All right! No changes have been made.`);
          endMessage();
        }
      })
      .catch(err => {
        console.log("Closing...");
      });

    return "";
  },
  update: async function() {
    console.log(`${helpPrompt}`);
    const extVersion = getExtVersion();
    const extName = getExtName();
    console.log("");
    console.log(
      `${cepBlock}  ${chalk.blue(extName)} is currently ${chalk.green(
        `v${extVersion}`
      )}`
    );
    console.log("");
    await inquirer
      .prompt([
        {
          type: "confirm",
          name: "shouldUpdate",
          message: `Update version?`,
          default: true
        }
      ])
      .then(answer => {
        if (answer.shouldUpdate) {
          findTier(extVersion.split(".")).then(answerver => {
            let chosen = extVersion.split(".")[answerver.versionIndex];
            promptNewNumber(chosen).then(ans => {
              let newVersion = extVersion.split(".");
              newVersion[answerver.versionIndex] = ans.newTier;
              setExtVersion(extVersion, newVersion).then(updated => {
                console.log("");
                console.log(`   ${chalk.green("✔ ")} Update successful!`);
                console.log(
                  boxen(
                    `${chalk.blue(extName)} updated to ${chalk.green(
                      `v${updated}`
                    )}`,
                    {
                      ...BOXEN_OPTS,
                      ...{
                        borderColor: "blue"
                      }
                    }
                  )
                );
              });
            });
          });
        } else {
          console.log("");
          console.log(`   👍  All right! No changes will be made.`);
          endMessage();
        }
      })
      .catch(err => {
        //
      });

    return "";
  }
};

// GLOBAL
function getExtVersion() {
  const xml = fs.readFileSync(`./CSXS/manifest.xml`, { encoding: "utf-8" });
  const bundleVersion = /ExtensionBundleVersion\=\"(\d|\.)*(?=\")/;
  const matches = xml.match(bundleVersion);
  return matches.length ? matches[0].replace(/\w*\=\"/, "") : "Unknown";
}

function getExtName() {
  const xml = fs.readFileSync(`./CSXS/manifest.xml`, { encoding: "utf-8" });
  const bundleVersion = /Menu\>.*(?=\<)/;
  const matches = xml.match(bundleVersion);
  return matches.length
    ? matches[0]
        .replace(/Menu\>/, "")
        .split(" ")
        .join("-")
    : "Unknown";
}
// ----------------------------------

// SIGN
//
async function promptUser() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "password",
      message: "Password for certificate",
      default: "hello-world"
    },
    {
      type: "confirm",
      name: "createZip",
      message: "Create a ZIP aswell?",
      default: true
    }
  ]);
}

function getIgnores() {
  if (fs.existsSync(`./src/utils/dev/.certignore`)) {
    ignores = fs.readFileSync(`./src/utils/dev/.certignore`, {
      encoding: "utf-8"
    });
    ignores = ignores.trim().split(/(\r\n|\n|\r)/);
    ignores = ignores.filter(item => {
      return item.length > 2;
    });
    ignores = ignores.map(item => {
      return item.replace(
        /[-\/\\^$*+?.()|[\]{}]/,
        `\\${item.match(/[-\/\\^$*+?.()|[\]{}]/)}`
      );
    });
  } else {
    ignores = ["node_modules", "archive", "^(\\.git)"];
    fs.writeFileSync(`./src/utils/dev/.certignore`, ignores.join("\r\n"));
  }
  return new RegExp(ignores.join("|"));
}

async function confirmSign() {
  return await inquirer.prompt([
    {
      type: "Confirm",
      message: "Are you ready to proceed?",
      name: "confirmation",
      default: true
    }
  ]);
}

function stageExtensionFolder(extString) {
  return new Promise((resolve, reject) => {
    let tempdir = [];
    let omitted = getIgnores();
    fs.readdir("./", (err, list) => {
      if (err) reject("Error encountered while reading directory for staging.");
      list.forEach(filename => {
        if (!omitted.test(filename)) {
          if (filename) tempdir.push(filename);
        }
      });
      try {
        fs.mkdirSync(`../${extString}-tmp`);
        tempdir.forEach(file => {
          fse.copy(`./${file}`, `../${extString}-tmp/${file}`);
        });
        try {
          fs.mkdirSync(`./archive`);
        } catch (err) {
          //
        }
        resolve(`${extString}`);
      } catch (err) {
        reject(err);
      }
    });
  });
}

function signCommands(path, rootpath, password, includeZip) {
  return new Promise((resolve, reject) => {
    let certInfo;
    if (fs.existsSync(`./src/utils/dev/certInfo.txt`)) {
      certInfo = fs.readFileSync(`./src/utils/dev/certInfo.txt`, {
        encoding: "utf-8"
      });
    } else {
      certInfo = "US;NY;SomeOrg;SomeName";
      fs.writeFileSync(`./src/utils/dev/certInfo.txt`, certInfo);
    }
    certInfo = certInfo.split(";");
    shell.cd(`..`);
    console.log(
      `${osPrefix}ZXPSignCmd -selfSignedCert ${certInfo[0]} ${certInfo[1]} ${
        certInfo[2]
      } ${certInfo[3]} ${password} ./${rootpath}/archive/temp1.p12`
    );
    shell.exec(
      `${osPrefix}ZXPSignCmd -selfSignedCert ${certInfo[0]} ${certInfo[1]} ${
        certInfo[2]
      } ${certInfo[3]} ${password} ./${rootpath}/archive/temp1.p12`
    );
    setTimeout(() => {
      console.log(
        `${osPrefix}ZXPSignCmd -sign ./${path}-tmp ./${rootpath}/archive/${path}.zxp ./${rootpath}/archive/temp1.p12 ${password} -tsa http://time.certum.pl`
      );
      shell.exec(
        `${osPrefix}ZXPSignCmd -sign ./${path}-tmp ./${rootpath}/archive/${path}.zxp ./${rootpath}/archive/temp1.p12 ${password} -tsa http://time.certum.pl`
      );

      if (includeZip)
        setTimeout(() => {
          shell.exec(
            `${osPrefix}ZXPSignCmd -sign ./${path}-tmp ./${rootpath}/archive/${path}.zip ./${rootpath}/archive/temp1.p12 ${password} -tsa http://time.certum.pl`
          );
        }, 1000);
      setTimeout(() => {
        console.log(
          `${osPrefix}ZXPSignCmd -verify ./${rootpath}/archive/${path}.zxp -certinfo`
        );
        shell.exec(
          `${osPrefix}ZXPSignCmd -verify ./${rootpath}/archive/${path}.zxp -certinfo`
        );

        resolve();
      }, 1000);
    }, 1000);
    // shell.cd(`./${path.replace(`-tmp`, '')}`);
  }).catch(err => {
    //
  });
}
// -----------------------------

// SWITCH
//
async function endMessage(switched = false) {
  let finalstate = await getCurrentContext();
  if (finalstate)
    console.log(
      `   ${chalk.blue("DEVELOPER")}: Use ${chalk.yellow("npm run serve")} ${
        switched ? "and restart the app to continue developing" : "to continue"
      }.`
    );
  else
    console.log(
      `   ${chalk.blue("PRODUCTION")}: Ready for ${chalk.yellow(
        "npm run build"
      )} or ${chalk.yellow("npm run sign")}.`
    );
}

async function getCurrentContext() {
  return new Promise((resolve, reject) => {
    const xml = fs.readFileSync(`./CSXS/manifest.xml`, { encoding: "utf-8" });
    const isDev = /\<\!\--\s\<MainPath\>\.\/dist\/index\.html\<\/MainPath\>\s\-\-\>/;
    const isBuild = /\<\!\--\s\<MainPath\>\.\/public\/index\-dev\.html\<\/MainPath\>\s\-\-\>/;
    resolve(isDev.test(xml));
  });
}

function switchContext() {
  return new Promise((resolve, reject) => {
    let xml = fs.readFileSync(`./CSXS/manifest.xml`, { encoding: "utf-8" });
    const isDev = /\<\!\--\s\<MainPath\>\.\/dist\/index\.html\<\/MainPath\>\s\-\-\>/;
    const isBuild = /\<\!\--\s\<MainPath\>\.\/public\/index\-dev\.html\<\/MainPath\>\s\-\-\>/;
    const isDevVanilla = /\<MainPath\>\.\/dist\/index\.html\<\/MainPath\>/;
    const isBuildVanilla = /\<MainPath\>\.\/public\/index\-dev\.html\<\/MainPath\>/;
    const devString = `<MainPath>./public/index-dev.html</MainPath>`;
    const buildString = `<MainPath>./dist/index.html</MainPath>`;
    const commentedDevString = `<!-- <MainPath>./public/index-dev.html</MainPath> -->`;
    const commentedBuildString = `<!-- <MainPath>./dist/index.html</MainPath> -->`;
    if (isDev.test(xml)) {
      xml = xml.replace(isDev, buildString);
      xml = xml.replace(isBuildVanilla, commentedDevString);
      fs.writeFileSync(`./CSXS/manifest.xml`, xml);
      resolve("PRODUCTION");
    } else if (isBuild.test(xml)) {
      xml = xml.replace(isBuild, devString);
      xml = xml.replace(isDevVanilla, commentedBuildString);
      fs.writeFileSync(`./CSXS/manifest.xml`, xml);
      resolve("DEVELOPER");
    } else {
      console.log("Whoops! Something went wrong.");
    }
  });
}
// ----------------------------

// UPDATE
//
async function findTier(original) {
  return await inquirer.prompt([
    {
      type: "list",
      name: "versionIndex",
      message: "Choose tier to update",
      choices: [
        {
          name: `Major (${original[0]}.x.x)`,
          value: 0
        },
        {
          name: `Minor (x.${original[1]}.x)`,
          value: 1
        },
        {
          name: `Micro (x.x.${original[2]})`,
          value: 2
        }
      ]
    }
  ]);
}

async function promptNewNumber(old) {
  return await inquirer.prompt([
    {
      type: "Number",
      message: "Enter new value for tier",
      default: +old + 1,
      name: "newTier"
    }
  ]);
}

function setExtVersion(older, newer) {
  return new Promise((resolve, reject) => {
    let xml = fs.readFileSync(`./CSXS/manifest.xml`, { encoding: "utf-8" });
    let rx = new RegExp(`${older.split(".").join("\\.")}`);
    xml = xml.split(rx).join(newer.join("."));
    fs.writeFileSync(`./CSXS/manifest.xml`, xml);

    let jsondata = fs.readFileSync("./package.json", { encoding: "utf-8" });
    let jsonrx = /\"version\"\:\s\"[^\"]*/;
    jsondata = jsondata
      .split(jsonrx)
      .join(`\"version\"\: \"${newer.join(".")}`);
    fs.writeFileSync(`./package.json`, jsondata);
    resolve(newer.join("."));
  });
}
//  -----------------------------------

// REGISTER
//
async function promptRegister(data) {
  return await inquirer.prompt([
    {
      type: "input",
      name: "country",
      message: "Country Code",
      default: data[0]
    },
    {
      type: "input",
      name: "state",
      message: "State or Province",
      default: data[1]
    },
    {
      type: "input",
      name: "org",
      message: "Organization",
      default: data[2]
    },
    {
      type: "input",
      name: "name",
      message: "Common name",
      default: data[3]
    }
  ]);
}
//  -----------------------------------

require("make-runnable/custom")({
  printOutputFrame: false
});
