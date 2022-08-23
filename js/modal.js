const trigger_open = document.getElementById('modal-open-btn');
const trigger_close = document.getElementById('modal-close-btn');
const modal = document.getElementById('modal');
var tmp = true;
modal.toggle = function () {
    this.toggleAttribute('open');
};
modal.close = function () {
    this.removeAttribute('open');
};
modal.openModal = function () {
    this.setAttribute('open', '');
};
trigger_open.addEventListener('click', () => {

    modal.openModal();
});

trigger_close.addEventListener('click', () => {

    modal.close();
});