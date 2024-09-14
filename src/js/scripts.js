const setScrollVar = () => {
    const page = document.documentElement;
    const scrollAmount = page.scrollTop / page.clientHeight;
    page.style.setProperty("--scroll", scrollAmount);
};

setScrollVar();

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);