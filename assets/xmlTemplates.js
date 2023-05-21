const header = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<VariablesExchangeFile>
	<fileHeader company="Schneider Automation" product="Control Expert V15.0 - 201016B" dateTime="date_and_time#2023-5-18-12:41:14" content="Variable source file" DTDVersion="41"></fileHeader>
	<contentHeader name="p" version="0.0.000"></contentHeader>
	<dataBlock>
`;

const footer = `    </dataBlock>
</VariablesExchangeFile>`;

module.exports = { header, footer };
