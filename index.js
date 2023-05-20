const dialog = require("node-file-dialog");
const fs = require("fs");
const xmlTemplates = require("./assets/xmlTemplates");

async function main() {
    const csvPromise = await dialog({ type: "open-file" });
    csvFilePath = csvPromise[0];
    xmlFilePath = `${csvFilePath.split(".")[0]}.xml`;
    fs.writeFile(xmlFilePath, "test", () => {});
}

main();
