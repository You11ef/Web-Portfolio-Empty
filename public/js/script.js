let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
let txtanim = document.querySelector('.home .content p')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.addEventListener('scroll', () =>{
    if (window.scrollY > 160) {
        header.classList.add('scroll');
    }
    else {
        header.classList.remove('scroll');
    }
})

new Typewriter(txtanim, {
    loop: true,
    deleteSpeed : 50
})
.changeDelay(50)
.pauseFor(1000)
.typeString('Étudiant à l \' <b><span style = "color : #0A983A">ENSIMAG</span></b> !')
.pauseFor(1000)
.deleteChars(14)
.pauseFor(1000)
.typeString('<b><span style =" color : #F4BC22 ">NSIGMA</span></b> !')
.pauseFor(1000)
.start()

    
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".1").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".2").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".3").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".4").addClass("active").siblings().removeClass("active");
});

const switchThemeBtn = document.querySelector('#moon-btn');
let toogleTheme = 0;
switchThemeBtn.addEventListener('click', () =>{

    if(toogleTheme === 0) {
        document.documentElement.style.setProperty('--ecriture', 'var(--noir)');
        document.documentElement.style.setProperty('--bg', 'var(--blanc)');
        document.documentElement.style.setProperty('--wall', 'var(--wall2)');
        document.documentElement.style.setProperty('--bghead', 'var(--blanco)');
        toogleTheme++;
    } else {
        document.documentElement.style.setProperty('--ecriture', 'var(--blanc)');
        document.documentElement.style.setProperty('--bg', 'var(--noir)');
        document.documentElement.style.setProperty('--wall', 'var(--wall1)');
        document.documentElement.style.setProperty('--bghead', 'var(--noiro)');
        toogleTheme--;

    }

})

const contactForm = document.querySelector('.contact-form');
let nom = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        nom:nom.value,
        email:email.value,
        num:number.value,
        mess:message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == "success") {
            alert("Email sent");
            nom.value= "";
            email.value= "";
            number.value= "";
            message.value= "";
        }else{
            alert("Something went wrong !")
        }
    }

    xhr.send(JSON.stringify(formData))
})