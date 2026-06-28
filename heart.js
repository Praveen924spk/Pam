// ==============================
// Floating Hearts
// ==============================

const hearts = document.querySelector(".hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 250);


// ==============================
// Typewriter Letter
// ==============================

const message = `

Happy Birthday Pam ❤️

Today is all about celebrating you.

Thank you for every smile,
every laugh,
and every beautiful memory.

You deserve happiness,
success,
good health,
and endless smiles.

Never stop shining.

May all your dreams come true.

Thank you for being part of my life.

Happy Birthday once again my girl ❤️

By your Baby Praveen 

`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(!typing) return;

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

window.onload = ()=>{

    typeWriter();

}


// ==============================
// Celebrate Button
// ==============================

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click",()=>{

    launchConfetti();

    const music=document.getElementById("music");

    if(music){

        music.play().catch(()=>{});

    }

});


// ==============================
// Confetti Animation
// ==============================

function launchConfetti(){

    if(typeof confetti==="function"){

        confetti({

            particleCount:180,

            spread:120,

            origin:{y:0.6}

        });

        setTimeout(()=>{

            confetti({

                particleCount:180,

                spread:140,

                origin:{x:0.2,y:0.5}

            });

        },300);

        setTimeout(()=>{

            confetti({

                particleCount:180,

                spread:140,

                origin:{x:0.8,y:0.5}

            });

        },600);

    }

}


// ==============================
// Floating Cake
// ==============================

const cake=document.querySelector(".cake");

if(cake){

cake.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:2000,

iterations:Infinity

});

}


// ==============================
// Hero Animation
// ==============================

const photo=document.querySelector(".heartPhoto");

if(photo){

photo.animate([

{

opacity:0,

transform:"scale(.8)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:1500,

fill:"forwards"

});

}


// ==============================
// Glow Celebrate Button
// ==============================

setInterval(()=>{

celebrateBtn.animate([

{

boxShadow:"0 0 10px hotpink"

},

{

boxShadow:"0 0 40px deeppink"

},

{

boxShadow:"0 0 10px hotpink"

}

],{

duration:1500

});

},1500);


console.log("Heart Page Loaded ❤️");