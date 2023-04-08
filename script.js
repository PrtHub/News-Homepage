const mobileIconMenu = document.querySelector('.mobile-icon-menu');
const mobileIconCloseMenu = document.querySelector('.mobile-icon-close-menu');
const navbarLists = document.querySelector('.navbar-lists');

mobileIconMenu.addEventListener('click', () => {
  navbarLists.style.display = 'flex';
  mobileIconMenu.style.display = 'none';
  mobileIconCloseMenu.style.display = 'block';
});

mobileIconCloseMenu.addEventListener('click', () => {
  navbarLists.style.display = 'none';
  mobileIconMenu.style.display = 'block';
  mobileIconCloseMenu.style.display = 'none';
});


