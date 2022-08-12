const toggleBtn = document.getElementById('hamburger-menu-trigger');
const menu = document.querySelector('.primary-navigation');

if (menu.getAttribute('aria-expanded') === 'true') {
    toggleBtn.src = 'assets/icons/list(1).svg';
}
else {
    toggleBtn.src = 'assets/icons/x-lg(1).svg';

}
toggleBtn.addEventListener('click', () => {
    if (menu.getAttribute('aria-expanded') === 'true') {
        menu.setAttribute('aria-expanded', false);
        toggleBtn.src = 'assets/icons/x-lg(1).svg';
    }
    else {
        menu.setAttribute('aria-expanded', true);
        toggleBtn.src = 'assets/icons/list(1).svg';

    }
});