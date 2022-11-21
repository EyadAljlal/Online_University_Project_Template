let sidebarItmeActive = localStorage.getItem("active-section");

if (sidebarItmeActive !== null) {
    document.querySelectorAll(".sidebar ul li a").forEach(ele => {
        dataAttribute = ele.getAttribute("data-section");
        if ( dataAttribute === sidebarItmeActive) {
            ele.classList.add("active");
            document.querySelectorAll(".content-pages > div.active").forEach(element => {
                element.classList.remove("active");
            });
            document.querySelector(".content-pages > " +sidebarItmeActive).classList.add("active");
        }
        else {
            ele.classList.remove("active");
        }    
    });
}
let siderbarItems = document.querySelectorAll(".sidebar ul li a");
siderbarItems.forEach((ele) =>{
    ele.addEventListener('click', e => {
        document.querySelectorAll(".sidebar ul li a.active").forEach(el => {
            el.classList.remove("active");
        });
        localStorage.setItem("active-section",ele.getAttribute("data-section"));
        ele.classList.add("active");
        document.querySelectorAll(".content-pages > div").forEach(element => {
                element.classList.remove("active");
        });
        document.querySelector(".content-pages > " +ele.getAttribute("data-section")).classList.add("active");
    });
});
 
function removeActivClass(elements) {
    elements.forEach(ele => {
        ele.classList.remove("active");
    });
}

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