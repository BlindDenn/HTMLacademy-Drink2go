const toggleSiteMenuButton = document.querySelector('.toggle-site-menu');
const toggleSiteMenuButtonOpened = document.querySelector('.toggle-site-menu__image-opened');
const toggleSiteMenuButtonClosed = document.querySelector('.toggle-site-menu__image-closed');
const siteMenu = document.querySelector('.site-nav');
const ymap = document.querySelector('.ymap');

const clearNoJs = () => {
  toggleSiteMenuButton.classList.remove('nav__toggle-site-menu--no-js');
  siteMenu.classList.remove('nav__site-nav--no-js');
  ymap.classList.remove('ymap--no-js');
  siteMenu.classList.add('site-nav--closed');
}

const initSiteNavToggle = () => {
  toggleSiteMenuButton.addEventListener('click', () => {
    siteMenu.classList.toggle('site-nav--closed');
    toggleSiteMenuButtonOpened.classList.toggle('toggle-site-menu__image-opened--active');
    toggleSiteMenuButtonClosed.classList.toggle('toggle-site-menu__image-closed--active');
  });
}

export {
  clearNoJs,
  initSiteNavToggle
};
