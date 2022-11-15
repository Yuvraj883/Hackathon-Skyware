/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .card__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)


const blogs = document.getElementById("blogs"); 

  fetch('https://rich-pear-piglet-boot.cyclic.app/blogs')
  .then((response) => response.json())
  .then((data) => {console.log(data);

blogPosts(data)});
function blogPosts(arr){

    for(let i=0; i<arr.length; i++){
        let title = arr[i].title; 
        let body = arr[i].body; 
        let writter = arr[i].writter; 
        let id = arr[i].id; 
        let div = document.createElement("div"); 
        let h = document.createElement("h1"); 
        let p = document.createElement("p"); 
        let sub = document.createElement("sub"); 

    div.className="post"; 
            h.innerText=title; 
            sub.innerText =`by ${writter}`;
        p.innerText = body; 
        div.appendChild(h); 
        div.appendChild(sub);
        div.appendChild(p);
        blogs.appendChild(div);
    }
}
const blogForm = document.getElementById("blog-form"); 
const toggleDisplay = document.getElementById("toggleDisplay"); 
let display = false; 

toggleDisplay.addEventListener('click',toggle); 
function toggle(){
    console.log("Button clicked");
    if(display){
        blogForm.classList.add("none");
        display = !display; 
    }
    else{
        blogForm.classList.remove("none"); 
        display = !display;

    }

}

// const submit = document.getElementById("submit");
// submit.addEventListener('click',onSubmit);
// function onSubmit(e){
//     e.preventDefault(); 
//     fetch("https://rich-pear-piglet-boot.cyclic.app/blogs", {
     
//     // Adding method type
//     method: "POST",
     
//     // Adding body or contents to send
//     body: JSON.stringify({
//         title: document.getElementById('title').value,
//         writter: document.getElementById('writter').value,
//         body: document.getElementById('body').value,
//         userId: 1
//     }),
     
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "mode":"no-cors"
//     }
// })
 
// // Converting to JSON
// .then(response => response.json())
 
// // Displaying results to console
// .then(json => console.log(json));
// }