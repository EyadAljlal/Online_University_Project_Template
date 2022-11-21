class Resource {

    constructor() {
        this.lightBgColor = "#FFF";
        this.lightAltColor = "#e7e7e7";
        this.lightHoverColor = "#eee";
        this.lightFontColor = "#000";
    
        this.darkBgColor = "rgba(42, 42, 42, 1)";
        this.darkAltColor = "rgb(53, 53, 53)";
        this.darkHoverColor = "rgba(255, 255, 255, .12)";
        this.darkFontColor = "#FFF";
    }
    getLightColor() {
        return this.lightBgColor;
    }
    setColorMode(colorMode) {
        if (colorMode === "light") {
            document.documentElement.style.setProperty("--main-color", this.lightBgColor);
            document.documentElement.style.setProperty("--alt-color", this.lightAltColor);
            document.documentElement.style.setProperty("--hover-color", this.lightHoverColor);
            document.documentElement.style.setProperty("--font-color", this.lightFontColor);
        } else {
            document.documentElement.style.setProperty("--main-color", this.darkBgColor);
            document.documentElement.style.setProperty("--alt-color", this.darkAltColor);
            document.documentElement.style.setProperty("--hover-color", this.darkHoverColor);
            document.documentElement.style.setProperty("--font-color", this.darkFontColor);
        }
        
    }
    
    storeColorMode() {
        if (document.querySelector("#mode").classList.contains("dark")) {
            this.setColorMode("dark");
            localStorage.setItem("colorMode", "dark");
        } else {
            this.setColorMode("light");
            localStorage.setItem("colorMode", "light");
        }
    }
    init() {
        let mode = localStorage.getItem("colorMode");
        if (mode !== null) {
            this.setColorMode(mode);
        }
    }
    }
    Resource = new Resource();
    Resource.init();
    document.querySelector("#mode").addEventListener("click", (e) => {
        e.target.classList.toggle("dark");
        Resource.storeColorMode();
    });