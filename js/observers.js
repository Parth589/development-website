let section = document.querySelector(".develop-animation");
console.log(section);
const callback = (entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
        console.log(entry.target);
        console.log("change is received");
        if (entry.isIntersecting) {
            entry.target.setAttribute('animate', "");
            console.log("element entered");
        }
        else {
            entry.target.removeAttribute("animate");
            observer.unobserve(section);
            console.log("Element is removed");
        }
    });
};

let options = {
    root: document.querySelector('body'),
    rootMargin: '0px',
    threshold: 1.0
};

let observer = new IntersectionObserver(callback, options);

observer.observe(section);