document.addEventListener("DOMContentLoaded", function(){

     const menu = document.querySelector(".menu-icon");
    const navigation = document.querySelector(".navigation");

    if (menu && navigation) {
        menu.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });
    }
})
  document.querySelectorAll(".navigation a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (navigation) {
                navigation.classList.remove("active");
            }
        });
    });
 const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please fill in all the fields.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been received.");

            contactForm.reset();
        });
    }
 const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

