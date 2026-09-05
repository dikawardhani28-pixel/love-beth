/* =================================
   ELEMENTS
================================= */

const password = "28082007";

const step1 =
    document.getElementById("step1");

const step2 =
    document.getElementById("step2");

const loveScene =
    document.getElementById("loveScene");

const step3 =
    document.getElementById("step3");

const galaxy =
    document.getElementById("galaxy");

const passwordInput =
    document.getElementById("passwordInput");

const wrongPassword =
    document.getElementById("wrongPassword");

const particles =
    document.getElementById("particles");

const shootingStars =
    document.getElementById("shootingStars");


/* =================================
   STEP 1 → PASSWORD
================================= */

function showPassword() {

    step1.classList.remove("active");

    setTimeout(() => {

        step2.classList.add("active");

        passwordInput.focus();

    }, 700);
}


/* =================================
   PASSWORD
================================= */

function checkPassword() {

    const entered =
        passwordInput.value.trim();

    if (entered === password) {

        wrongPassword.textContent = "";

        step2.classList.remove("active");

        setTimeout(() => {

            loveScene.classList.add("active");

        }, 900);

    } else {

        wrongPassword.textContent =
            "Hmm... try again.";

        passwordInput.value = "";

        passwordInput.focus();
    }
}


/* =================================
   ENTER KEY
================================= */

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            checkPassword();

        }

    }
);


/* =================================
   LOVE → EXPLOSION
================================= */

function goToMessage() {

    const heart =
        document.querySelector(".big-heart");

    const rect =
        heart.getBoundingClientRect();

    const centerX =
        rect.left +
        rect.width / 2;

    const centerY =
        rect.top +
        rect.height / 2;


    /*
       Love disappears
    */

    loveScene.classList.remove(
        "active"
    );


    /*
       Create explosion
    */

    createLoveExplosion(
        centerX,
        centerY
    );


    /*
       Galaxy slowly zooms away
    */

    setTimeout(() => {

        galaxy.style.opacity = "0";

        galaxy.style.transform =
            "scale(1.18)";

    }, 450);


    /*
       Golden screen arrives
    */

    setTimeout(() => {

        step3.classList.add("active");

        startTyping();

    }, 1400);
}


/* =================================
   LOVE PARTICLES
================================= */

function createLoveExplosion(x, y) {

    const symbols = [
        "♥",
        "♡",
        "♥",
        "✦",
        "✧",
        "·"
    ];


    for (
        let i = 0;
        i < 180;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.classList.add(
            "particle"
        );


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            `${x}px`;

        particle.style.top =
            `${y}px`;


        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            150 +
            Math.random() * 750;


        const moveX =
            Math.cos(angle) *
            distance;

        const moveY =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--x",
            `${moveX}px`
        );

        particle.style.setProperty(
            "--y",
            `${moveY}px`
        );


        particle.style.setProperty(
            "--duration",
            `${1.3 + Math.random() * 1.8}s`
        );


        particle.style.fontSize =
            `${8 + Math.random() * 20}px`;


        particles.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 3500);
    }
}


/* =================================
   SHOOTING STARS
================================= */

function createShootingStar() {

    const star =
        document.createElement(
            "div"
        );

    star.classList.add(
        "shooting-star"
    );


    /*
       Random starting position
    */

    star.style.left =
        `${20 + Math.random() * 100}%`;

    star.style.top =
        `${-10 + Math.random() * 70}%`;


    /*
       Random speed
    */

    star.style.setProperty(
        "--speed",
        `${1.3 + Math.random() * 1.8}s`
    );


    shootingStars.appendChild(
        star
    );


    setTimeout(() => {

        star.remove();

    }, 3500);
}


/*
   Banyak bintang jatuh,
   tapi tidak semuanya muncul
   bersamaan.
*/

function shootingStarLoop() {

    createShootingStar();

    setTimeout(
        shootingStarLoop,
        900 + Math.random() * 2200
    );
}

shootingStarLoop();


/* =================================
   TYPEWRITER
================================= */

const titleText =
    "For you, Karebeth.";

const firstText =
    "Maybe I don't say it enough, but you are someone very special to me.";

const thankText =
    "Thank you for being you.";

const finalText =
    "I love you, sayang.";


function typeText(
    element,
    text,
    speed,
    callback
) {

    let index = 0;

    element.textContent = "";


    const timer =
        setInterval(() => {

            element.textContent +=
                text[index];

            index++;


            if (
                index >= text.length
            ) {

                clearInterval(timer);

                if (callback) {
                    callback();
                }
            }

        }, speed);
}


/* =================================
   START TYPING
================================= */

function startTyping() {

    const title =
        document.getElementById(
            "messageTitle"
        );

    const text =
        document.getElementById(
            "messageText"
        );

    const thank =
        document.getElementById(
            "messageThank"
        );

    const finalLove =
        document.getElementById(
            "finalLove"
        );


    title.textContent = "";
    text.textContent = "";
    thank.textContent = "";
    finalLove.textContent = "";


    /*
       TITLE
    */

    setTimeout(() => {

        typeText(
            title,
            titleText,
            80,
            () => {

                /*
                   FIRST MESSAGE
                */

                setTimeout(() => {

                    typeText(
                        text,
                        firstText,
                        35,
                        () => {

                            /*
                               THANK YOU
                            */

                            setTimeout(() => {

                                typeText(
                                    thank,
                                    thankText,
                                    60,
                                    () => {

                                        /*
                                           FINAL LOVE
                                        */

                                        setTimeout(() => {

                                            typeText(
                                                finalLove,
                                                finalText,
                                                90
                                            );

                                        }, 500);

                                    }
                                );

                            }, 500);

                        }
                    );

                }, 600);

            }
        );

    }, 700);
}


/* =================================
   RESTART
================================= */

function restart() {

    /*
       Hide slide 3
    */

    step3.classList.remove(
        "active"
    );


    /*
       Bring galaxy back
    */

    galaxy.style.opacity = "1";

    galaxy.style.transform =
        "scale(1)";


    /*
       Clear password
    */

    passwordInput.value = "";

    wrongPassword.textContent = "";


    /*
       Clear particles
    */

    particles.innerHTML = "";


    /*
       Clear message
    */

    document.getElementById(
        "messageTitle"
    ).textContent = "";

    document.getElementById(
        "messageText"
    ).textContent = "";

    document.getElementById(
        "messageThank"
    ).textContent = "";

    document.getElementById(
        "finalLove"
    ).textContent = "";


    /*
       Back to LOCK
    */

    setTimeout(() => {

        step1.classList.add(
            "active"
        );

    }, 900);
}