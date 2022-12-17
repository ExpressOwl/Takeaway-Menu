// pathname is the name of the page, index.html or menu.html
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a')

navLinks.forEach (link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
})

// Menu dropdown and highlights
