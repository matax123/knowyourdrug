
const excelUrl = 'list.xlsx';

// Fetch the Excel file
fetch(excelUrl)
    .then(response => response.arrayBuffer())
    .then(data => {
        // Parse the file using xlsx
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the Excel file has only one sheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert sheet to JSON format
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        console.log(jsonData); // Outputs the data in JSON format
    })
    .catch(error => console.error('Error fetching or processing Excel file:', error));

console.log(1)