const hurricanes = [
    { name: 'Hurricane Harvey', year: 2017, category: 4, damage: '$125 billion', livesLost: 107 },
    { name: 'Hurricane Maria', year: 2017, category: 5, damage: '$91 billion', livesLost: 2982 },
    { name: 'Hurricane Irma', year: 2017, category: 5, damage: '$77 billion', livesLost: 134 },
    { name: 'Hurricane Florence', year: 2018, category: 4, damage: '$24 billion', livesLost: 53 },
    { name: 'Hurricane Michael', year: 2018, category: 5, damage: '$25 billion', livesLost: 74 },
    { name: 'Hurricane Laura', year: 2020, category: 4, damage: '$19 billion', livesLost: 42 },
    { name: 'Hurricane Ida', year: 2021, category: 4, damage: '$75 billion', livesLost: 115 }
];


const tableBody = document.querySelector('#hurricaneTable tbody');


hurricanes.forEach(hurricane => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${hurricane.name}</td>
        <td>${hurricane.year}</td>
        <td>Category ${hurricane.category}</td>
        <td>${hurricane.damage}</td>
        <td>${hurricane.livesLost}</td>
    `;

    tableBody.appendChild(row);
});