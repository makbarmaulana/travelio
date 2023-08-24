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

const heroContainer = document.querySelector('#hero');
const heroBackground = document.querySelector('.background__image');

heroContainer.addEventListener('click', ({ target }) => {
  if (target.classList.contains('content__image')) {
    heroBackground.classList.remove('flashing');

    setTimeout(() => {
      heroBackground.src = target.src;
      heroBackground.classList.add('flashing');
    }, 100);
  }
});
