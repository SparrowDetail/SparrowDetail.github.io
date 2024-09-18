

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

