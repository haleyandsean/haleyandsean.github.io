/********************** Sheet Lookup ****************/

$('#rsvp-form-name').on('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    $('#alert-wrapper-name').html(alert_markup('info', '<strong>Just a sec!</strong> Looking up your details.'));

    // Validate form input
    const name = $('#name').val();
    if (!name) {
        alert('Please enter your name.');
        return;
    }
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8liDt1TSFf_apNdPtoDdzYlwYy2NyibnmLLjacWmyBsBoRh7hfQMLhPHe_uP74HmqhfVptGtdAAuc/pub?gid=924980658&single=true&output=csv';
    fetch(sheetUrl)
        .then((response) => response.text())
        .then((data) => displayCSVData(data, name));
});

function displayCSVData(csv, name) {
    const rows = csv.split('\n');
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');

    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    rows.forEach((row, index) => {
        const cols = row.split(',');
        if ((cols[0] == name) && (index != 0)){
            const tr = document.createElement('tr');

            cols.forEach(col => {
                const cell = document.createElement(index === 0 ? 'th' : 'td');
                cell.textContent = col.trim();
                tr.appendChild(cell);
            });

            if (index === 0) {
                tableHead.appendChild(tr);
            } else {
                tableBody.appendChild(tr);
            }
        }
    });
}