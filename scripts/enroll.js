document.addEventListener("DOMContentLoaded", function() {

    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");
    const savedPhone = localStorage.getItem("userPhone");

    if (savedName) document.getElementById("name").value = savedName;
    if (savedEmail) document.getElementById("email").value = savedEmail;
    if (savedPhone) document.getElementById("phone").value = savedPhone;


    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPhone", phone);

    });
});