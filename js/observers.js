let section = document.querySelector(".section3");
let section_animation = document.querySelector(".develop-animation");
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            //in the viewport
            section_animation.setAttribute('animate', "");
            document.querySelector(".develop-animation>span").style.animation = 'fade-up-btm 1s .5s 1 forwards';
        }
        else {
            //outside the viewport
            section_animation.removeAttribute("animate");
            document.querySelector(".develop-animation>span").style.animation = 'none';

        }
    });
};

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.45
};
let observer = new IntersectionObserver(callback, options);

observer.observe(section);

const switch_section = document.querySelector('.switch-up-down');
let observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
            //coming inside
            switch_section.setAttribute('animate', "");
            Array.from(switch_section.children).forEach((e) => {
                e.toggleAttribute('second');
            });
        }
        else {
            //going outside
            switch_section.removeAttribute('animate');
            Array.from(switch_section.children).forEach((e) => {
                e.toggleAttribute('second');
            });
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1
});
observer2.observe(switch_section);