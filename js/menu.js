(() => {
    const menuBtnRef = document.querySelector ("[data-menu-button]");

    menuBtnRef.AddEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    });
})();