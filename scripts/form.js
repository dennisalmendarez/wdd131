const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Function to capitalize the first letter of each word
function capitalize(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Populate the product dropdown
const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;

  option.textContent = capitalize(product.name);
  productSelect.appendChild(option);
});

// Track the number of reviews submitted
window.onload = function() {
  if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    document.body.innerHTML += `<p>You have submitted ${reviewCount} reviews.</p>`;
  }
};