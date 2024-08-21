
const excelUrl = 'https://matax123.github.io/knowyourdrug/list.xlsx';

async function readExcel() {
    let response = await fetch(excelUrl);
    let data = await response.arrayBuffer();
    let arr = new Uint8Array(data);
    let workbook = XLSX.read(arr, { type: 'array' });
    return workbook;
}

function loadTable(data) {
    let table = document.getElementById('table');
    let tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    data.forEach((row) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        td1.classList = "border px-4 py-2";
        td2.classList = "border px-4 py-2";
        td3.classList = "border px-4 py-2";
        td4.classList = "border px-4 py-2";
        td5.classList = "border px-4 py-2";
        td6.classList = "border px-4 py-2";
        td7.classList = "border px-4 py-2";
        td1.textContent = row.Name;
        td2.textContent = row.Origin;
        td3.textContent = row.Action;
        td4.textContent = row.Administration;
        td5.textContent = row.Legal;
        td6.textContent = row.SecondaryEffectProbability;
        td7.textContent = row.SecondaryEffectSeverity;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tbody.appendChild(tr);
    });
}

window.onload = async function () {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let workbook = await readExcel();
    let sheet = workbook.Sheets['Sheet1'];
    let data = XLSX.utils.sheet_to_json(sheet);
    loadTable(data);
    document.getElementById("loading").close();
    document.querySelector('.preload').classList.remove('preload');
}