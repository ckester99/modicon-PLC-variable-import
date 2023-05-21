const dialog = require("node-file-dialog");
const fs = require("fs");
const { header, footer } = require("./assets/xmlTemplates");
const buildVars = require("./assets/buildVars");
const alertDocs = require("./assets/alertDocs");

async function main() {
    alertDocs();
    const csvPromise = await dialog({ type: "open-file" });
    csvFilePath = csvPromise[0];
    xmlFilePath = `${csvFilePath.split(".")[0]}.XSY`;
    fs.readFile(csvFilePath, { encoding: "utf-8" }, (err, csvData) => {
        const xmlString = `${header}${buildVars(csvData)}${footer}`;
        fs.writeFile(xmlFilePath, xmlString, () => {});
    });
}

main();
