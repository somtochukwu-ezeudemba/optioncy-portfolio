// let icon = document.getElementById("icon");
// icon.onclick = function(){
//     document.body.classList.toggle(".dark-theme")
//     cons
// }

// function myfunc() {
//     let good = document.getElementById("cv").innerHTML.value = lins
//     console.log(good)
// }
// myfunc()

setTimeout(function() {
    document.getElementById('splash').style.display = 'none';
    document.body.style.display = 'block';
}, 4010);

const body = document.querySelector("body");
const button = document.getElementById("icon");
const container = document.getElementById("containe")
let isDark = false

if (localStorage.getItem("theme")){
    body.className += localStorage.getItem("theme");
}
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
    // if (localStorage.getItem("theme") === "dark"){
    //     localStorage.removeItem("theme");
    //     body.className = "";
    // }else if (document.body.classList.contains("dark")){
    //     button.src = "images/moon.png"
    // }else {
    //     localStorage.setItem("theme", "dark");
    //     body.className = "dark";
    //     button.src= "images/Picture134.png"
    //     container.className = "dark1"

    // };

    // if (localStorage.getItem("theme") === "dark1"){
    //     localStorage.removeItem("theme");
    //     container.className = "";
    // }else {
    //     localStorage.getItem("theme", "dark1");
    //     container.className = "dark1";
    // }
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
// ------- To Make Our Navbar Fixted -------
// const navbar = document.getElementById('navbar');
// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 100) {
//         navbar.classList.style.position = 'fixed';
//         navbar.style.zIndex = "20000"
//     }else {
//         navbar.style.position = 'relative';
//         navbar.style.zIndex = '1';
//     };
    
//     if (window.scrollY >= 100) {
//         navbar.classList.add('fixed');
//     }else{
//         navbar.classList.remove('fixed')
//     };
// });

function toggleMenu(){
    document.querySelector('#home').classList.toggle('active')
}

const scrolldownbtn = document.getElementById("scrolldownbtn");

scrolldownbtn.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
        // display: "none"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrolldownbtn.classList.add('hide');
    }else {
        scrolldownbtn.classList.remove('hide');
    }
});

const scrollupbtn = document.getElementById("scrollupbtn");
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
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

// window.addEventListener("DOMContentLoaded", () => {
//     let emailjs = emailjs.init("kYv8acaesFNRM7Beh");
//     const form = document.getElementById("contact-form");
//     form.addEventListener("submit", (email) => {
//         email.preventDefault();
//         emailjs.sendForm("service_uplys8m", "template_4hpascg", this).then(() => {
//             alert("Message sent successfully!");
//             form.requestFullscreen();
//         }).catch((erro) => {
//             alert("Failed to send:\n" + JSON.stringify(erro));
//         })
//     })
// })



// (function () {
//     emailjs.init("tSI7Gsf0VSNOf5b3H");
// })();

// document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const templateParems = {
//         from_name: document.getElementById("name").Value,
//         from_email: document.getElementById("email").Value,
//         message: document.getElementById("message").value,
//     };
//     emailjs.send("service_uplys8m", "template_3rkq83g", templateParems)
//     .then(
//         function (response) {
//             alert("Message sent successfully!");
//             document.getElementById("contact-form").reset();
//         },
//         function (error) {
//             alert("Failed to send message:" + JSON.stringify(error));
//         }
//     )
// })


// const form = document.getElementById('contact-form');
// form.addEventListener('submit', async function (email) {
//     email.preventDefault();
//     const formdata = new FormData(form);
//     const data = Object.fromEntries(formdata.entries());
//     const response = await fetch('https://formspree.io/f/xgvzzpya', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json', 'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     if (response.ok) {
//         alert('Message sent successfully!')
//     }else {
//         alert("Error sending message.")
//     }
// });

scrollReval({
    reset: true, distance: '80px', 
    duration: 2000, delay: 200
});
scrollReval().reveal('#containe, nav', {origin:'top'});