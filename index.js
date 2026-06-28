// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 250);


// ===============================
// Floating Sparkles
// ===============================

function sparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (12 + Math.random() * 12) + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.opacity = "0.8";
    sparkle.style.transition = "2s";
    sparkle.style.zIndex = "999";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.transform = "translateY(-40px)";
        sparkle.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        sparkle.remove();
    }, 2200);

}

setInterval(sparkle, 1200);


// ===============================
// Page Load Animation
// ===============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "0";

        setTimeout(() => {

            hero.style.transition = "1.5s";
            hero.style.opacity = "1";

        }, 100);

    }

});


// ===============================
// Cover Image Animation
// ===============================

const cover = document.querySelector(".cover");

if (cover) {

    cover.animate([
        { transform: "scale(.8)", opacity: 0 },
        { transform: "scale(1)", opacity: 1 }
    ], {
        duration: 1500,
        fill: "forwards"
    });

}


// ===============================
// Heading Animation
// ===============================

const heading = document.querySelector("h1");

if (heading) {

    heading.animate([
        { opacity: 0, transform: "translateY(-40px)" },
        { opacity: 1, transform: "translateY(0px)" }
    ], {
        duration: 1200,
        fill: "forwards"
    });

}


// ===============================
// Quote Animation
// ===============================

const quote = document.querySelector(".quote");

if (quote) {

    quote.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 2200,
        fill: "forwards"
    });

}


// ===============================
// Gift Button Animation
// ===============================

const surpriseBtn = document.querySelector(".mainButton");

if (surpriseBtn) {

    // Hover effect
    surpriseBtn.addEventListener("mouseenter", () => {

        surpriseBtn.style.transform = "scale(1.08)";

    });

    surpriseBtn.addEventListener("mouseleave", () => {

        surpriseBtn.style.transform = "scale(1)";

    });

    // Pulse animation
    setInterval(() => {

        surpriseBtn.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ], {
            duration: 1500
        });

    }, 1800);

}


// ===============================
// Smooth Transition to Next Page
// ===============================

const surpriseLink = document.querySelector("a");

if (surpriseLink) {

    surpriseLink.addEventListener("click", function (e) {

        e.preventDefault();

        document.body.style.transition = "opacity .8s";
        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = this.href;

        }, 800);

    });

}

console.log("❤️ Happy Birthday Pamela ❤️");