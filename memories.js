// ================================
// Memories Page
// ================================

// Floating Hearts
const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 300);


// ================================
// Fade In Animation
// ================================

const cards = document.querySelectorAll(".photoCard");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(80px)";

    card.style.transition="all .8s ease";

    observer.observe(card);

});


// ================================
// Image Click Effect
// ================================

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate([

            {transform:"scale(1)"},

            {transform:"scale(1.04)"},

            {transform:"scale(1)"}

        ],{

            duration:500

        });

    });

});


// ================================
// Button Glow
// ================================

const btn = document.querySelector(".mainButton");

if(btn){

setInterval(()=>{

btn.animate([

{boxShadow:"0 0 10px pink"},

{boxShadow:"0 0 40px hotpink"},

{boxShadow:"0 0 10px pink"}

],{

duration:1500

});

},1500);

}


// ================================
// Gallery Animation
// ================================

window.addEventListener("load",()=>{

document.querySelector(".gallery").animate([

{opacity:0},

{opacity:1}

],{

duration:1200,

fill:"forwards"

});

});


// ================================
// Smooth Image Hover
// ================================

const images=document.querySelectorAll(".photoCard img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

img.style.transition=".4s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// ================================
// Console
// ================================

console.log("Memories Page Loaded ❤️");
