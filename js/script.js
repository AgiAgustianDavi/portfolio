/* --------------------------------------------------active navbar------------------------------------------------------------------------------------------------- */


document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan semua elemen item menu dalam navbar
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    window.onscroll=()=> {
        sections.forEach(sec=> {
            let top = window.scrollY;
            let offset = sec.offsetTop-150;
            let height = sec.offsetHeight;
            let id=sec.getAttribute('id');
            if(top>offset && top<offset + height) {
                navItems.forEach (links=> {
                    links.classList.remove('active')
                    document.querySelector('.navbar-nav .nav-item .nav-link[href*='+id+']').classList.add('active')
                });
            }
        });
    }
});

/* --------------------------------------------------active navbar end------------------------------------------------------------------------------------------------- */

/* --------------------------------------------------Hamburger navbar------------------------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan semua elemen item menu dalam navbar
    const navItems = document.querySelectorAll(".navbar-nav .nav-link");

    // Tambahkan event listener untuk setiap item menu
    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Tutup navbar setelah item diklik
            const navbarToggler = document.querySelector(".navbar-toggler");
            const navbarCollapse = document.querySelector(".navbar-collapse");
            navbarToggler.classList.add("collapsed");
            navbarCollapse.classList.remove("show");
        });
    });
});

/* --------------------------------------------------Hamburger Navbar end------------------------------------------------------------------------------------------------- */

/* --------------------------------------------------DOM Manipulation in about page------------------------------------------------------------------------------------------------- */

const skillSection = document.getElementById('skill-section');
const experienceSection = document.getElementById('experience-section');
const educationSection = document.getElementById('education-section');

skillSection.style.display = 'none';
experienceSection.style.display = 'none';
educationSection.style.display = 'none';

function showSection(section) {
    skillSection.style.display = 'none';
    experienceSection.style.display = 'none';
    educationSection.style.display = 'none';

    section.style.display = 'block';
}

document.querySelector('a[href="#skill"]').addEventListener('click', () => {
    showSection(skillSection);
});

document.querySelector('a[href="#experience"]').addEventListener('click', () => {
    showSection(experienceSection);
});

document.querySelector('a[href="#education"]').addEventListener('click', () => {
    showSection(educationSection);
});

/* --------------------------------------------------DOM Manipulation End------------------------------------------------------------------------------------------------- */
