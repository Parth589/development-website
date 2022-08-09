console.log("HEllo world");
const navigation_height_mobile = "100vh";
const navigation_height_desktop = "fit-content";
let IS_OPENED = false;// !dont temper it. it is used as state of navigation 
let trigger = document.getElementById("hamburger-menu-trigger");
console.log(trigger);
if (trigger === null) {
    console.error("Cant find the tigger ");
}
else {
    trigger.addEventListener("click", () => {
        console.log("click event fired");

        if (IS_OPENED) {
            IS_OPENED = false;
            //close the navigation
            if (window.innerWidth <= 700) {
                console.log("closing navigation");
                trigger.src = "assets/icons/list(1).svg";
                // document.getElementById("navigation-list").style.opacity = "0";
                // document.getElementById("navigation-list").style.height = "0";
                document.getElementById("hamburger-menu-list").style.animation = "up 1s 1";
            }
        }
        else {
            IS_OPENED = true;
            //open the navigation
            if (window.innerWidth <= 700) {
                console.log("opening navigation");
                trigger.src = "assets/icons/x-lg(1).svg";
                // document.getElementById("navigation-list").style.height = navigation_height_mobile;
                // document.getElementById("navigation-list").style.opacity = "1";
                document.getElementById("hamburger-menu-list").style.animation = "down 1s 1 forwards";
            }
        }
    });
}
let previous_width = window.innerWidth;
window.addEventListener("resize", () => {
    let width = window.innerWidth;
    if (width <= 700) {
        //close 
        IS_OPENED = false;
        console.log("closing navigation");
        document.getElementById("hamburger-menu-list").style.opacity = "0";
        document.getElementById("hamburger-menu-list").style.height = "0";

    }
    else {
        if (previous_width <= 700) {

            //switching from mobile to desktop
            IS_OPENED = false;
            document.getElementById("hamburger-menu-list").style.animation = "up .5s 1";
            trigger.src = "assets/icons/list(1).svg";
        }
        document.getElementById("hamburger-menu-list").style.height = navigation_height_desktop;
        document.getElementById("hamburger-menu-list").style.opacity = "1";
    }
    previous_width = width;
});