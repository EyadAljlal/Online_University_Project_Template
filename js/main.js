
document.querySelector(".header .search-form i").addEventListener('click', (e) => {
    document.querySelector(".header .search-form").classList.toggle("open");
    document.querySelector(".header .search-form input").classList.toggle("open");
    document.querySelector(".header .search-form input").focus();
});


document.querySelector("header .container .logo i").addEventListener('click', (e) => {
    document.querySelector(".nav").classList.add("open");
});
document.querySelector(".nav .go-back i").addEventListener('click', (e) => {
    document.querySelector(".nav").classList.remove("open");
});

document.querySelector(".landing > i").addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
    });
});

// Show Go Up Button 
window.addEventListener('scroll', (ele) => {
    let clientHeightLen = document.documentElement.clientHeight;
    let scrollTopLen = document.documentElement.scrollTop;
    let goUpBtn = document.querySelector("button.go-up");

    if (scrollTopLen >= clientHeightLen) {
        goUpBtn.classList.add("show");
    } else {
        goUpBtn.classList.remove("show");
    }
    goUpBtn.onclick = function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    };
});

// Open Login Box 
let overlay = document.createElement("div");
overlay.classList.add("overlay");
document.querySelector("header .links a.sign-in").addEventListener('click', (e) => {
    document.querySelector("form.sign-in").classList.add("open");
    document.documentElement.appendChild(overlay);
});
document.querySelector("form.sign-in .go-back i").addEventListener('click', (e) => {
    document.querySelector("form.sign-in").classList.remove("open");
    document.documentElement.removeChild(overlay);
});



