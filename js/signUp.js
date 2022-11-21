 
 
//  let overlay = document.createElement("div");
//  overlay.classList.add("overlay");
 document.querySelectorAll(".links a.sign-up :first-child > div").forEach((ele)=> {
     ele.addEventListener('click', (e) => {
        document.querySelector("form.sign-up").classList.add("open");
        document.documentElement.appendChild(overlay);
    });
 });
 document.querySelector("form.sign-in a.sign-up").addEventListener('click', (e) => {
        document.querySelector("form.sign-up").classList.add("open");
        document.querySelector("form.sign-in").classList.remove("open");
    });
 
let firstbox = document.querySelector(".sign-up-boxes .first-box");
let secondbox = document.querySelector(".sign-up-boxes .second-box");

document.querySelector(".btns .btn-next").onclick = (e)=> {
    firstbox.classList.remove("show");
    secondbox.classList.add("show");
 }
 document.querySelector(".sign-up .close-back").addEventListener('click', (e)=> {
       if(secondbox.classList.contains("show")) {
            firstbox.classList.add("show");
            secondbox.classList.remove("show");
        } else {
            document.querySelector("form.sign-up").classList.remove("open");
            document.documentElement.removeChild(overlay);
        }
 });

 