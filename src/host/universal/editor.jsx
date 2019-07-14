function ovidCloseDialog() {
  var result = Window.confirm(
    "Your data will not be saved",
    true,
    "Are you sure you want to close this file?"
  );
  return result;
}

function ovidOpenDialog() {
  var result = File.openDialog(
    "Script file to open",
    "JavaScript:*.jsx;Javascript:*.js"
  );
  return result.path + "/" + result.name;
}

function ovidSaveAsDialog() {
  // var path = File.saveDialog("Save this snippet as...", "JavaScript:*.jsx;");
  // var result = new File(result);
  // alert(result.realPath);
  // return result;
  var result = File.saveDialog("Save this snippet as...", "JavaScript:*.jsx;");
  if (result) return result.path + "/" + result.name;
  else return "";
}
