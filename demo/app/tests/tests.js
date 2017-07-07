var HandleFile = require("nativescript-handle-file").HandleFile;
var handleFile = new HandleFile();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(handleFile.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(handleFile.functionname()).toEqual(jasmine.any(Promise));
  });
});