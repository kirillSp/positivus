class Header {
    selectors = {
        root: "[data-js-header]",
        headerOverlay: "[data-js-header-overlay]",
        headerBurgerButton: "[data-js-header-burger-button]",
    }

    stateClasses = {
        isActive: "is-active",
        isLock: "is-lock"
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.headerOverlayElement = this.rootElement.querySelector(this.selectors.headerOverlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.headerBurgerButton);
        this.bindEvent();
    }

    onBurgerButtonClick = () => {
        this.headerOverlayElement.classList.toggle(this.stateClasses.isActive);
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.rootElement.classList.toggle(this.stateClasses.isLock);
    }

    bindEvent() {
        this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick);
    } 
}

export default Header;