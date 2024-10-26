function createHurricaneTable() {

    const categories = [
        { category: 'Category 1', windSpeed: '74-95 mph', damage: 'Minimal damage' },
        { category: 'Category 2', windSpeed: '96-110 mph', damage: 'Moderate damage' },
        { category: 'Category 3', windSpeed: '111-129 mph', damage: 'Extensive damage' },
        { category: 'Category 4', windSpeed: '130-156 mph', damage: 'Extreme damage' },
        { category: 'Category 5', windSpeed: '157+ mph', damage: 'Catastrophic damage' },
    ];

    const tableDiv = document.getElementById('table');

    const table = document.createElement('table');
    table.classList.add('hurricane-table');


    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Category', 'Wind Speed', 'Damage'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);


    const tbody = document.createElement('tbody');
    categories.forEach(categoryData => {
        const row = document.createElement('tr');

        for (const key in categoryData) {
            const td = document.createElement('td');
            td.textContent = categoryData[key];
            row.appendChild(td);
        }

        tbody.appendChild(row);
    });

    table.appendChild(tbody);


    tableDiv.appendChild(table);
}

document.addEventListener("DOMContentLoaded", function() {
    createHurricaneTable();
});

