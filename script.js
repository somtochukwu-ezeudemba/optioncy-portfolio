setTimeout(function() {
    document.getElementById('splash').style.display = 'none';
    document.body.style.display = 'block';
}, 4010);

const body = document.querySelector("body");
const button = document.getElementById("icon");
const container = document.getElementById("containe");
let isDark = false

button.addEventListener('click', () => {
    isDark = !isDark
    if (isDark){
        document.body.classList.remove('light')
        document.body.classList.add('dark');
        button.src = "img/moon.png" 
    }else {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
        button.src = "img/Picture134.png"
    }
 
})

const link = document.createElement('a');
const lins = document.getElementById("cv");
lins.addEventListener('click', () => {
    window.location.href = "somto_cv/filesomto_CV.pdf";
    // ------- download cv or file automatically -------
    link.href =  "somto_cv/filesomto_CV.pdf";
    link.download =  "somto_CV.pdf";
    link.click();
}); 

const scrolldownbtn = document.getElementById("scrolldownbtn");
 
const menu = document.getElementById('menu');
const nav = document.getElementById('home');
const navLinks = document.querySelectorAll('#home a');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        nav.classList.remove('active')
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 320) {
        scrolldownbtn.classList.add('hide');
    }else {
        scrolldownbtn.classList.remove('hide');
    }
});

const scrollupbtn = document.getElementById("scrollupbtn");
window.addEventListener('scroll', () => {
    if (window.scrollY > 440) {
        scrollupbtn.style.display = "block";
    }else {
        scrollupbtn.style.display = "none";
    }
});

scrollupbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ------- For Transmiting Our tablinks -------

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
    tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

scrollReval({
    reset: true, distance: '80px', 
    duration: 2000, delay: 200
});
scrollReval().reveal('#containe, nav', {origin:'top'});
