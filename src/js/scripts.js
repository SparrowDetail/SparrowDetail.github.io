/**Calculates scroll variable as a ratio of html scroll distance to client
 * height, i.e. --scroll of 1 will be a distance of 100vh */
const setScrollVar = () => {
    const page = document.documentElement;
    const scrollAmount = page.scrollTop / page.clientHeight;
    page.style.setProperty("--scroll", scrollAmount);
};

setScrollVar();

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

//About-me-page animation toggle
const aboutMeTypingAnimationList = document.querySelectorAll("[type-ani=about]");

//Sets character count property used in typing animations
aboutMeTypingAnimationList.forEach((e) => {
    const elementTextLength = e.textContent.length;
    e.style.setProperty("--typing-character-count", elementTextLength);
    e.style.setProperty("--animation-speed", `${0.06 * elementTextLength}s`)
});

const hideList = (array) => {
    array.forEach((e) => {
        e.classList.add("hidden");
    });
};

const iterateTypingAnimationList = (array) => {
    let timeout = 0;

    array.forEach((e) => {
        const animationTimeout = parseFloat(e.style.getPropertyValue("--animation-speed").replace("s","")) * 1000;
        setTimeout(() => {
            e.classList.remove("hidden");
            e.classList.add("type-animation");
            setTimeout(() => {
                e.classList.remove("type-animation");
            }, animationTimeout);
        }, timeout);
        timeout += animationTimeout;
    });
};

let aboutAnimation = false;
hideList(aboutMeTypingAnimationList);
window.addEventListener("scroll", () => {
    const scroll = document.documentElement.style.getPropertyValue("--scroll");

    if (scroll <= 0.7) {
        if (aboutAnimation) {
            hideList(aboutMeTypingAnimationList); 
            aboutAnimation = false
        }
        return;
    }

    if (scroll >= 1) {
        if (!aboutAnimation) {
            aboutAnimation = true;
            iterateTypingAnimationList(aboutMeTypingAnimationList);
        }
    }
});