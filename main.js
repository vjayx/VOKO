function toggleDropdown() {
    let navbarToggle = document.getElementById("topNav-toggle");
    if (navbarToggle.className === 'topNav') {
        navbarToggle.className += ' responsive';
    }
    else {

        navbarToggle.className = 'topNav';

    }
        }

