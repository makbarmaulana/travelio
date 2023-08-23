const navMenu = document.querySelector('#navMenu');
const drawer = document.querySelector('#navDrawer');

const toggleDrawer = ({ target }) => {
  if (drawer !== target) {
    drawer.classList.remove('toggle');
    navMenu.classList.remove('show-menu');
  } else {
    drawer.classList.toggle('toggle');
    navMenu.classList.toggle('show-menu');
  }
};

document.addEventListener('click', toggleDrawer);
