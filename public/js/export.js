function exportTableToExcel(tableID, filename='table') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

jQuery(function ($) {
		 $("#downloadLinkPDF").click(function () {
				 var dataSource = shield.DataSource.create({
						 data: "#example",
						 schema: {
								 type: "table",
								 fields: {
										 Name: { type: String },
										 Age: { type: Number },
										 Office: { type: String }
								 }
						 }
				 });

				 dataSource.read().then(function (data) {
						 var pdf = new shield.exp.PDFDocument({
								 author: "Devnote",
								 created: new Date()
						 });
						 pdf.addPage("a4", "portrait");
						 pdf.table(
								 50,
								 50,
								 data,
								 [
										 { field: "Name", title: "Name", width: 200 },
										 { field: "Age", title: "Age", width: 50 },
										 { field: "Office", title: "Office", width: 200 }
								 ],
								 {
										 margins: {
												 top: 50,
												 left: 50
										 }
								 }
						 );
						 pdf.saveAs({
								 fileName: "exportToPdf"
						 });
				 });
		 });
 });
