// purpose : add event listeners to all toggle button of faq section
const list = document.querySelectorAll(".plus-btn-faq");
const containerList = document.querySelectorAll('.section11>ul>li');
if (list !== null && list.length !== 0) {
    list.forEach((e) => {
        e.addEventListener('click', () => {
            console.log('event listener fired');
            containerList[Number(e.id)].toggleAttribute('show-content');
        });
    });
}
else {
    console.log('no plus btn found!');
}
if (containerList === null || containerList.length === 0) {
    console.log('no questions found!');

}