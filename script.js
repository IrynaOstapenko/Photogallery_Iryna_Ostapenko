const menuButton = document.querySelector('.hamburger-icon');

const menu = document.querySelector('.container-sidebar-nav');

menuButton.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menuButton.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
})