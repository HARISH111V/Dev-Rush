
/* =========================================================
   G V TEX
   TEXTILE MANUFACTURING WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("header");
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    const navLinks = document.querySelectorAll(".nav-link");

    const sections = document.querySelectorAll("section[id]");

    const year = document.getElementById("year");


    /* ================= HEADER SCROLL ================= */

    function updateHeader() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* ================= MOBILE MENU ================= */

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("open");

        const menuOpen =
            navbar.classList.contains("open");

        menuBtn.setAttribute(
            "aria-label",
            menuOpen ? "Close menu" : "Open menu"
        );

    });


    /* ================= CLOSE MOBILE MENU ================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("open");

        });

    });


    /* ================= ACTIVE NAVIGATION ================= */

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 160;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* ================= FOOTER YEAR ================= */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* ================= IMAGE CHECK ================= */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                console.warn(
                    "Image could not be loaded:",
                    image.src
                );

            }
        );

    });


    /* ================= ESCAPE KEY ================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                navbar.classList.remove("open");

            }

        }
    );

});