var HandleFile = require("nativescript-handle-file").HandleFile;
var handleFile = new HandleFile();

describe("greet function", function() {
    it("exists", function() {
        expect(handleFile.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(handleFile.greet()).toEqual("Hello, NS");
    });
});