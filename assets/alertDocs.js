const alert = require("alert");

const alertString = `
/////////////////////FORMAT DATA LIKE THIS//////////////////////////

////COMMENTS AND MEMORY ADDRESSES ARE OPTIONAL////
+---+--------------------+---------------+---------------+------------------------+
|      |              A             |          B         |          C         |               D                |
+---+--------------------+---------------+---------------+------------------------+
|  1  | Variable Name 1 | Data Type 1 | Comment 1 | Memory Address 1 |
|  2  | Variable Name 2 | Data Type 2 | Comment 2 | Memory Address 2 |
|  3  | Variable Name 3 | Data Type 3 | Comment 3 | Memory Address 3 |
+---+--------------------+---------------+---------------+------------------------+

`;

function alertDocs() {
    alert(alertString);
}

module.exports = alertDocs;
