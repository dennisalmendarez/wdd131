function createHurricaneTable() {
    // Hurricane categories data
    const categories = [
        { category: 'Category 1', windSpeed: '74-95 mph', damage: 'Minimal damage' },
        { category: 'Category 2', windSpeed: '96-110 mph', damage: 'Moderate damage' },
        { category: 'Category 3', windSpeed: '111-129 mph', damage: 'Extensive damage' },
        { category: 'Category 4', windSpeed: '130-156 mph', damage: 'Extreme damage' },
        { category: 'Category 5', windSpeed: '157+ mph', damage: 'Catastrophic damage' },
    ];

    // Get the table div
    const tableDiv = document.getElementById('table');

    // Create a table element
    const table = document.createElement('table');
    table.setAttribute('border', '1'); // Set a border for the table

    // Create table header
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

    // Create table body
    const tbody = document.createElement('tbody');
    categories.forEach(categoryData => {
        const row = document.createElement('tr');

        // Create and append cells for each row
        for (const key in categoryData) {
            const td = document.createElement('td');
            td.textContent = categoryData[key];
            row.appendChild(td);
        }

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Add the table to the page
    tableDiv.appendChild(table);
}

// Call the function to create the table when the page loads
window.onload = createHurricaneTable;