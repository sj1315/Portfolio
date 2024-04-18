//*=========== typed js ===========*//
const typed = new Typed(".typing",{
    strings:["Front-end Developer","Web Developer"],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//*=========== scroll sections active link ===========*//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    //*=========== sticky navbar ===========*//
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //*=========== remove toggle icon navbar when clicknavbar ===========*//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



//*=========== toggle icon navbar ===========*//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//*=========== Contact ===========*//
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken: "cc34e6f7-12f7-41de-859c-1998b1cbcbc1",
        To : 'lantanostanlee@gmail.com',
        From : "lantanostanlee@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
        if (item.value != "") {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
        else {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address"
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank"
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});

//*=========== Scroll Reveal ===========*//
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    delay: 3205
});

ScrollReveal().reveal('.header',{origin:'right'});

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .project-container, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-left img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-right', { origin: 'right' });

//*=========== Preloader ===========*//
gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
    opacity: 0,
    display: "none",
    duration: .3,
    delay: 3.5,
    }
);

gsap.fromTo(
    ".logo-name",
    {
    y: 50,
    opacity: 0,
    },
    {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
    }
);
