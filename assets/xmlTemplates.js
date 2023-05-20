const header = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<STExchangeFile>
	<fileHeader company="Schneider Automation" product="Control Expert V15.0 - 201016B" dateTime="date_and_time#2023-5-18-12:41:14" content="Structured source file" DTDVersion="41"></fileHeader>
	<contentHeader name="Project" version="0.0.000"></contentHeader>
	<program>
		<identProgram name="VARIABLE_IMPORT_TEMP" type="section" task="MAST" SectionOrder="1"></identProgram>
		<STSource>(*Temporary ST file to mass import variables, please delete this file*)

</STSource>
	</program>
	<dataBlock>`;

const footer = `</dataBlock>
</STExchangeFile>`;

module.exports = { header, footer };
