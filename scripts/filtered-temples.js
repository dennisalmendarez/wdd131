const templesElement = document.getElementById("temples");
let templeList = [];

const displayTemples = (temples) => {
    templesElement.innerHTML = '';
    temples.forEach(temple => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        img.loading = "lazy";

        const locationP = document.createElement('p');
        locationP.textContent = `Location: ${temple.location}`;

        const dateP = document.createElement('p');
        dateP.textContent = `Dedicated: ${temple.dedicated}`;

        const sizeP = document.createElement('p');
        sizeP.textContent = `Square Footage: ${temple.squareFootage}`;

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(locationP);
        article.appendChild(dateP);
        article.appendChild(sizeP);

        templesElement.appendChild(article);
    });
};

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

const reset = () => {
    templesElement.innerHTML = "";
};


const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1950));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

document.querySelector("#filtered").addEventListener("change", () => { 
    filterTemples(templeList); 
});

document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", event => {
        const filter = event.target.getAttribute("data-filter");
        filterTemplesByNav(templeList, filter);
    });
});

function filterTemplesByNav(temples, filter) {
    reset();
    switch (filter) {
        case "old":
            displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
            break;
        case "new":
            displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
            break;
        case "large":
            displayTemples(temples.filter(temple => temple.area > 90000));
            break;
        case "small":
            displayTemples(temples.filter(temple => temple.area < 90000));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
}


getTemples();