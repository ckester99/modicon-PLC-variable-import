const converter = require("convert-csv-to-array");

function buildVars(csvText) {
    let xmlVars = ``;
    const csvData = converter.convertCSVToArray(csvText, { type: "array" });
    csvData.forEach((rowArr) => {
        xmlVars = xmlVars.concat(getVarParams(rowArr));
    });

    return xmlVars;
}

function getVarParams(varRow) {
    varRow = varRow.map((x) => x.replace(/(\r\n|\n|\r)/gm, ""));
    if (!varRow[0] | !varRow[1]) {
        throw new Error("Some variables are missing names or data types!");
    }

    let varString = `       <variables name="${varRow[0]}" typeName="${varRow[1]}"`;
    //variable is located in memory
    if (varRow[3]) {
        varString = varString.concat(` topologicalAddress="${varRow[3]}">
`);
    } else {
        varString = varString.concat(`>
`);
    }
    //variable has a comment
    if (varRow[2]) {
        varString = varString.concat(
            `           <comment>${varRow[2]}</comment>
            </variables>`
        );
    } else {
        varString = varString.concat(`</variables>
`);
    }

    return varString;
}

module.exports = buildVars;
