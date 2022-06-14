const nav = document.querySelector("nav");
const header = document.querySelector(".header");
const about = document.querySelector(".about");
const navLinks_ul_li_a = document.querySelectorAll(".navLinks ul li a");
const navImg = document.querySelector("nav a img");
const navImgAnim = document.querySelector("flowIn");
const backImg = document.querySelector(".header .swiper");

var pText = document.querySelectorAll(".pText");

var maxHNav = 180;

// var logoSwell = 0;


const threeLine = document.querySelector(".threeLine");
const navLinks = document.querySelector(".navLinks");

const cross = document.getElementById("cross");


threeLine.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
cross.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
navLinks_ul_li_a.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.toggle("open");
    });
});






document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(".preLoader").style.animation = "none";
        document.querySelector(".header").style.animation = "none";
        document.querySelector("nav").style.animation = "none";
    } else {
        document.querySelector(".preLoader").style.animation = "preLoad 1s ease-in-out 0.8s 1 forwards";
        document.querySelector(".header").style.animation = "flowInHdr 2s ease-in-out 0.3s 1 forwards";
        document.querySelector("nav").style.animation = "flowIn 2s ease-in-out 0s 1 forwards";
    }
};






var alw = setInterval(scrollFunction, 5);
function scrollFunction() {


    // console.log("----------"+document.documentElement.scrollTop);

    // console.log(window.innerWidth);

    // if (window.innerHeight/window.innerWidth > 1) {
    //     backImg.style.minWidth = window.innerHeight/window.innerWidth*100 + "vw";
    // } else {
    //     backImg.style.minWidth = "100vw";
    // }

    // var index;
    // for (index = 0; index < pText.length; ++index) {
    //     pText[index].querySelector("h3").style.fontSize = 0.0007 * window.innerWidth + 1 + "vh";
    //     pText[index].querySelector("h5").style.fontSize = 0.0007 * window.innerWidth + 0.5 + "vh";
    //     pText[index].querySelector("p").style.fontSize = 0.0007 * window.innerWidth + 0.7 + "vh";
    // }

    if (window.innerWidth > 1000) {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

            document.getElementById("navBar").style.background = "linear-gradient(rgba(0, 0, 0, 0.95),rgba(0, 0, 0, 0.9))";
            navImg.style.width = "70px";
            navImg.style.borderRadius = "0px";
            nav.style.height = "90px";
            maxHNav = 90;

            document.getElementById("Home").style.fontSize = "18px";
            document.getElementById("About").style.fontSize = "18px";
            document.getElementById("Projects").style.fontSize = "18px";
            document.getElementById("Skills").style.fontSize = "18px";
            document.getElementById("Photography").style.fontSize = "18px";
            document.getElementById("Contact").style.fontSize = "18px";

        } else {

            document.getElementById("navBar").style.background = "linear-gradient(rgba(0, 0, 0, " + 0.95 * document.documentElement.scrollTop / 100 + "), rgba(0, 0, 0, " + 0.9 * document.documentElement.scrollTop / 100 + "))";
            navImg.style.width = (130 - document.documentElement.scrollTop * 0.6) + "px";
            navImg.style.borderRadius = (130 - document.documentElement.scrollTop * 1.3) / 2 + "px";
            nav.style.height = (180 - document.documentElement.scrollTop * 0.9) + "px";
            maxHNav = (180 - document.documentElement.scrollTop * 0.9);


            document.getElementById("Home").style.fontSize = (28 - document.documentElement.scrollTop * 0.1) + "px ";
            document.getElementById("About").style.fontSize = (21 - document.documentElement.scrollTop * 0.03) + "px ";
            document.getElementById("Projects").style.fontSize = (21 - document.documentElement.scrollTop * 0.03) + "px ";
            document.getElementById("Skills").style.fontSize = (21 - document.documentElement.scrollTop * 0.03) + "px ";
            document.getElementById("Photography").style.fontSize = (21 - document.documentElement.scrollTop * 0.03) + "px ";
            document.getElementById("Contact").style.fontSize = (21 - document.documentElement.scrollTop * 0.03) + "px ";

        }

    } else {

        document.getElementById("Home").style.fontSize = "5vh";
        document.getElementById("About").style.fontSize = "5vh";
        document.getElementById("Projects").style.fontSize = "5vh";
        document.getElementById("Skills").style.fontSize = "5vh";
        document.getElementById("Photography").style.fontSize = "5vh";
        document.getElementById("Contact").style.fontSize = "5vh";

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

            document.getElementById("navBar").style.background = "linear-gradient(rgba(0, 0, 0, 0.95),rgba(0, 0, 0, 0.9))";
            navImg.style.width = "70px";
            navImg.style.borderRadius = "0px";
            nav.style.height = "90px";
            maxHNav = 90;

        } else {

            document.getElementById("navBar").style.background = "linear-gradient(rgba(0, 0, 0, " + 0.95 * document.documentElement.scrollTop / 100 + "), rgba(0, 0, 0, " + 0.9 * document.documentElement.scrollTop / 100 + "))";
            navImg.style.width = (130 - document.documentElement.scrollTop * 0.6) + "px";
            navImg.style.borderRadius = (130 - document.documentElement.scrollTop * 1.3) / 2 + "px";
            nav.style.height = (180 - document.documentElement.scrollTop * 0.9) + "px";
            maxHNav = (180 - document.documentElement.scrollTop * 0.9);

        }

    }

    //   if (logoSwell==1) {
    //     navImg.style.width = navImg.style.width*1.1 + "px";
    //   }

}





const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext('2d');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

let particlesArray;

// mouse position
let mouse = {
    x: null,
    y: null,
    radius: (canvas1.height / 100) * (canvas1.width / 100)
}

window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);



var ax = 0;
var ay = 0;

// create particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.redD = 1;
        this.greenD = 1;
        this.blueD = 1;
    }

    //  draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    // check particle position, check mouse position, move the particle, draw the particle
    update() {
        // check if particle is still within canvas
        if (this.x > canvas1.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas1.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        let r;
        let g;
        let b;

        let i = 4;
        let x = '';
        let m = this.color.substring(i, i + 1);
        while (m.localeCompare(',') != 0) {
            x = x + m;
            i++;
            m = this.color.substring(i, i + 1);
        }
        r = parseInt(x);

        x = '';
        i++;
        m = this.color.substring(i, i + 1);
        while (m.localeCompare(',') != 0) {
            x = x + m;
            i++;
            m = this.color.substring(i, i + 1);
        }
        g = parseInt(x);

        x = '';
        i++;
        m = this.color.substring(i, i + 1);
        while (m.localeCompare(')') != 0) {
            x = x + m;
            i++;
            m = this.color.substring(i, i + 1);
        }
        b = parseInt(x);

        if (this.redD == 1) {
            r++;
            if (r > 254) {
                this.redD = 0;
            }
        }
        else {
            r--;
            if (r < 1) {
                this.redD = 1;
            }
        }

        if (this.greenD == 1) {
            g += 2;
            if (g > 253) {
                this.greenD = 0;
            }
        }
        else {
            g -= 2;
            if (g < 2) {
                this.greenD = 1;
            }
        }

        if (this.blueD == 1) {
            b += 3;
            if (b > 252) {
                this.blueD = 0;
            }
        }
        else {
            b -= 3;
            if (b < 3) {
                this.blueD = 1;
            }
        }

        this.color = 'rgb(' + r + ',' + g + ',' + b + ')';

        // check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas1.width - this.size * 10) {
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas1.height - this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }
        // move particle

        window.ondevicemotion = function (e) {
            ax = window.event.accelerationIncludingGravity.x * 5;
            ay = window.event.accelerationIncludingGravity.y * 5;
        }
        // console.log("1 ok");
        if (ax != 0 || ay != 0) {
            var landscapeOrientation = window.innerWidth / window.innerHeight > 1;
            if (landscapeOrientation) {
                this.directionX = this.directionX + ay/1000000;
                this.directionY = this.directionY + ax/1000000;
            } else {
                this.directionX = this.directionX - ax/1000000;
                this.directionY = this.directionY + ay/1000000;
            }
        } else {
            this.directionY += 0.005;
        }

        if (this.directionX > 2.5) {
            this.directionX = 2.5;
        }
        if (this.directionX < -2.5) {
            this.directionX = -2.5;
        }
        if (this.directionY > 2.5) {
            this.directionY = 2.5;
        }
        if (this.directionY < -2.5) {
            this.directionY = -2.5;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        // draw particle
        this.draw();

    }
}


// create particle array
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas1.height * canvas1.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + (size * 2));
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + (size * 2));
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = 'rgb(' + (Math.random() * 255) + ',' + (Math.random() * 255) + ',' + (Math.random() * 255) + ')';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));

    }
}


// check if particles are close enough to draw line between them
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) + (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas1.width / 7) * (canvas1.height / 7)) {
                opacityValue = 0.5 - (distance / 40000);

                ctx.strokeStyle = 'rgba(' + (Math.random() * 255) + ',' + (Math.random() * 255) + ',' + (Math.random() * 255) + ',' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();

            }
        }
    }
}


// animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// resize event
window.addEventListener('resize',
    function () {
        canvas1.width = innerWidth;
        canvas1.height = innerHeight;
        mouse.radius = ((canvas1.height / 100) * (canvas1.width / 100));
        init();
    }
);

// mouse out of screen
window.addEventListener('mouseout',
    function () {
        mouse.x = undefined;
        mouse.y = undefined;
    }
)



init();
animate();







// ------------------------------------------------------------------------------------------------


const FPS = 90;
var bs;
var r1;
var r2;
var r3;
var r4;
var r5;
var r6;
var r7;
var r8;
var r9;
var r10;
var r11;
var r12;
var r13;
var r14;
var r15;
var r16;
var r17;
var r18;
var r19;
var r20;
var r21;
var canvas, context;
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");
if (window.innerWidth > 1000) {
    canvas.width = window.innerWidth * 3;
    canvas.height = window.innerHeight * 0.7 * 3;
}
else if (window.innerWidth > 800 && window.innerWidth < 1000) {
    canvas.width = window.innerWidth * 3;
    canvas.height = window.innerHeight * 0.55 * 3;
}
else {
    canvas.width = window.innerWidth * 3;
    canvas.height = window.innerHeight * 0.85 * 3;
}


// resize event
window.addEventListener('resize',
    function () {
        if (window.innerWidth > 800) {
            canvas.width = window.innerWidth * 3;
            canvas.height = window.innerHeight * 0.7 * 3;
        } else {
            canvas.width = window.innerWidth * 3;
            canvas.height = window.innerHeight * 0.85 * 3;
        }
    }
);


var minSpeed = 100;
var maxSpeed = 100;

var bx1 = canvas.width * 1 / 5;
var by1 = canvas.height * 1 / 5;
var xv1 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv1 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx2 = canvas.width * 2 / 5;
var by2 = canvas.height * 1 / 5;
var xv2 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv2 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx3 = canvas.width * 3 / 5;
var by3 = canvas.height * 1 / 5;
var xv3 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv3 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx4 = canvas.width * 4 / 5;
var by4 = canvas.height * 1 / 5;
var xv4 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv4 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx5 = canvas.width * 1 / 5;
var by5 = canvas.height * 2 / 5;
var xv5 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv5 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx6 = canvas.width * 2 / 5;
var by6 = canvas.height * 2 / 5;
var xv6 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv6 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx7 = canvas.width * 3 / 5;
var by7 = canvas.height * 2 / 5;
var xv7 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv7 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx8 = canvas.width * 4 / 5;
var by8 = canvas.height * 2 / 5;
var xv8 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv8 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx9 = canvas.width * 1 / 5;
var by9 = canvas.height * 3 / 5;
var xv9 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv9 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx10 = canvas.width * 2 / 5;
var by10 = canvas.height * 3 / 5;
var xv10 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv10 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx11 = canvas.width * 3 / 5;
var by11 = canvas.height * 3 / 5;
var xv11 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv11 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx12 = canvas.width * 4 / 5;
var by12 = canvas.height * 3 / 5;
var xv12 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv12 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx13 = canvas.width * 1 / 5;
var by13 = canvas.height * 4 / 5;
var xv13 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv13 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx14 = canvas.width * 2 / 5;
var by14 = canvas.height * 4 / 5;
var xv14 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv14 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx15 = canvas.width * 3 / 5;
var by15 = canvas.height * 4 / 5;
var xv15 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv15 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx16 = canvas.width * 4 / 5;
var by16 = canvas.height * 4 / 5;
var xv16 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv16 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx17 = canvas.width * 1 / 5;
var by17 = canvas.height * 5 / 5;
var xv17 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv17 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx18 = canvas.width * 2 / 5;
var by18 = canvas.height * 5 / 5;
var xv18 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv18 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx19 = canvas.width * 3 / 5;
var by19 = canvas.height * 5 / 5;
var xv19 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv19 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx20 = canvas.width * 4 / 5;
var by20 = canvas.height * 5 / 5;
var xv20 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv20 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var bx21 = canvas.width * 1.5 / 5;
var by21 = canvas.height * 1 / 5;
var xv21 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
var yv21 = Math.floor(Math.random() * maxSpeed + minSpeed) / FPS;
if (Math.floor(Math.random() * 2) == 0) {
    xv1 = -xv1;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv1 = -yv1;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv2 = -xv2;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv2 = -yv2;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv3 = -xv3;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv3 = -yv3;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv4 = -xv4;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv4 = -yv4;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv5 = -xv5;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv5 = -yv5;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv6 = -xv6;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv6 = -yv6;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv7 = -xv7;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv7 = -yv7;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv8 = -xv8;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv8 = -yv8;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv9 = -xv9;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv9 = -yv9;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv10 = -xv10;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv10 = -yv10;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv11 = -xv11;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv11 = -yv11;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv12 = -xv12;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv12 = -yv12;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv13 = -xv13;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv13 = -yv13;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv14 = -xv14;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv14 = -yv14;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv15 = -xv15;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv15 = -yv15;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv16 = -xv16;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv16 = -yv16;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv17 = -xv17;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv17 = -yv17;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv18 = -xv18;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv18 = -yv18;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv19 = -xv19;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv19 = -yv19;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv20 = -xv20;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv20 = -yv20;
}
if (Math.floor(Math.random() * 2) == 0) {
    xv21 = -xv21;
}
if (Math.floor(Math.random() * 2) == 0) {
    yv21 = -yv21;
}

setInterval(update, 1000 / FPS);
function update() {


    if (window.innerWidth > 1000) {
        bs = 150;
        r1 = 400;
        r2 = 250;
        r3 = 600;
        r4 = 500;
        r5 = 550;
        r6 = 500;
        r7 = 500;
        r8 = 500;
        r9 = 800;
        r10 = 250;
        r11 = 300;
        r12 = 700;
        r13 = 100;
        r14 = 500;
        r15 = 400;
        r16 = 350;
        r17 = 350;
        r18 = 500;
        r19 = 500;
        r20 = 600;
        r21 = 500;
    } else {
        bs = 100;
        r1 = 270;
        r2 = 170;
        r3 = 400;
        r4 = 340;
        r5 = 370;
        r6 = 340;
        r7 = 340;
        r8 = 340;
        r9 = 540;
        r10 = 170;
        r11 = 200;
        r12 = 470;
        r13 = 70;
        r14 = 340;
        r15 = 270;
        r16 = 240;
        r17 = 240;
        r18 = 340;
        r19 = 340;
        r20 = 400;
        r21 = 340;
    }




    bx1 += xv1;
    by1 += yv1;
    if (bx1 - bs < 0 && xv1 < 0) {
        xv1 = -xv1;
    }
    if (bx1 + r1 > canvas.width && xv1 > 0) {
        xv1 = -xv1;
    }
    if (by1 - 2 * bs < 0 && yv1 < 0) {
        yv1 = -yv1;
    }
    if (by1 > canvas.height && yv1 > 0) {
        yv1 = -yv1;
    }
    bx2 += xv2;
    by2 += yv2;
    if (bx2 - bs < 0 && xv2 < 0) {
        xv2 = -xv2;
    }
    if (bx2 + r2 > canvas.width && xv2 > 0) {
        xv2 = -xv2;
    }
    if (by2 - 2 * bs < 0 && yv2 < 0) {
        yv2 = -yv2;
    }
    if (by2 > canvas.height && yv2 > 0) {
        yv2 = -yv2;
    }
    bx3 += xv3;
    by3 += yv3;
    if (bx3 - bs < 0 && xv3 < 0) {
        xv3 = -xv3;
    }
    if (bx3 + r3 > canvas.width && xv3 > 0) {
        xv3 = -xv3;
    }
    if (by3 - 2 * bs < 0 && yv3 < 0) {
        yv3 = -yv3;
    }
    if (by3 > canvas.height && yv3 > 0) {
        yv3 = -yv3;
    }
    bx4 += xv4;
    by4 += yv4;
    if (bx4 - bs < 0 && xv4 < 0) {
        xv4 = -xv4;
    }
    if (bx4 + r4 > canvas.width && xv4 > 0) {
        xv4 = -xv4;
    }
    if (by4 - 2 * bs < 0 && yv4 < 0) {
        yv4 = -yv4;
    }
    if (by4 > canvas.height && yv4 > 0) {
        yv4 = -yv4;
    }
    bx5 += xv5;
    by5 += yv5;
    if (bx5 - bs < 0 && xv5 < 0) {
        xv5 = -xv5;
    }
    if (bx5 + r5 > canvas.width && xv5 > 0) {
        xv5 = -xv5;
    }
    if (by5 - 2 * bs < 0 && yv5 < 0) {
        yv5 = -yv5;
    }
    if (by5 > canvas.height && yv5 > 0) {
        yv5 = -yv5;
    }
    bx6 += xv6;
    by6 += yv6;
    if (bx6 - bs < 0 && xv6 < 0) {
        xv6 = -xv6;
    }
    if (bx6 + r6 > canvas.width && xv6 > 0) {
        xv6 = -xv6;
    }
    if (by6 - 2 * bs < 0 && yv6 < 0) {
        yv6 = -yv6;
    }
    if (by6 > canvas.height && yv6 > 0) {
        yv6 = -yv6;
    }
    bx7 += xv7;
    by7 += yv7;
    if (bx7 - bs < 0 && xv7 < 0) {
        xv7 = -xv7;
    }
    if (bx7 + r7 > canvas.width && xv7 > 0) {
        xv7 = -xv7;
    }
    if (by7 - 2 * bs < 0 && yv7 < 0) {
        yv7 = -yv7;
    }
    if (by7 > canvas.height && yv7 > 0) {
        yv7 = -yv7;
    }
    bx8 += xv8;
    by8 += yv8;
    if (bx8 - bs < 0 && xv8 < 0) {
        xv8 = -xv8;
    }
    if (bx8 + r8 > canvas.width && xv8 > 0) {
        xv8 = -xv8;
    }
    if (by8 - 2 * bs < 0 && yv8 < 0) {
        yv8 = -yv8;
    }
    if (by8 > canvas.height && yv8 > 0) {
        yv8 = -yv8;
    }
    bx9 += xv9;
    by9 += yv9;
    if (bx9 - bs < 0 && xv9 < 0) {
        xv9 = -xv9;
    }
    if (bx9 + r9 > canvas.width && xv9 > 0) {
        xv9 = -xv9;
    }
    if (by9 - 2 * bs < 0 && yv9 < 0) {
        yv9 = -yv9;
    }
    if (by9 > canvas.height && yv9 > 0) {
        yv9 = -yv9;
    }
    bx10 += xv10;
    by10 += yv10;
    if (bx10 - bs < 0 && xv10 < 0) {
        xv10 = -xv10;
    }
    if (bx10 + r10 > canvas.width && xv10 > 0) {
        xv10 = -xv10;
    }
    if (by10 - 2 * bs < 0 && yv10 < 0) {
        yv10 = -yv10;
    }
    if (by10 > canvas.height && yv10 > 0) {
        yv10 = -yv10;
    }
    bx11 += xv11;
    by11 += yv11;
    if (bx11 - bs < 0 && xv11 < 0) {
        xv11 = -xv11;
    }
    if (bx11 + r11 > canvas.width && xv11 > 0) {
        xv11 = -xv11;
    }
    if (by11 - 2 * bs < 0 && yv11 < 0) {
        yv11 = -yv11;
    }
    if (by11 > canvas.height && yv11 > 0) {
        yv11 = -yv11;
    }
    bx12 += xv12;
    by12 += yv12;
    if (bx12 - bs < 0 && xv12 < 0) {
        xv12 = -xv12;
    }
    if (bx12 + r12 > canvas.width && xv12 > 0) {
        xv12 = -xv12;
    }
    if (by12 - 2 * bs < 0 && yv12 < 0) {
        yv12 = -yv12;
    }
    if (by12 > canvas.height && yv12 > 0) {
        yv12 = -yv12;
    }
    bx13 += xv13;
    by13 += yv13;
    if (bx13 - bs < 0 && xv13 < 0) {
        xv13 = -xv13;
    }
    if (bx13 + r13 > canvas.width && xv13 > 0) {
        xv13 = -xv13;
    }
    if (by13 - 2 * bs < 0 && yv13 < 0) {
        yv13 = -yv13;
    }
    if (by13 > canvas.height && yv13 > 0) {
        yv13 = -yv13;
    }
    bx14 += xv14;
    by14 += yv14;
    if (bx14 - bs < 0 && xv14 < 0) {
        xv14 = -xv14;
    }
    if (bx14 + r14 > canvas.width && xv14 > 0) {
        xv14 = -xv14;
    }
    if (by14 - 2 * bs < 0 && yv14 < 0) {
        yv14 = -yv14;
    }
    if (by14 > canvas.height && yv14 > 0) {
        yv14 = -yv14;
    }
    bx15 += xv15;
    by15 += yv15;
    if (bx15 - bs < 0 && xv15 < 0) {
        xv15 = -xv15;
    }
    if (bx15 + r15 > canvas.width && xv15 > 0) {
        xv15 = -xv15;
    }
    if (by15 - 2 * bs < 0 && yv15 < 0) {
        yv15 = -yv15;
    }
    if (by15 > canvas.height && yv15 > 0) {
        yv15 = -yv15;
    }
    bx16 += xv16;
    by16 += yv16;
    if (bx16 - bs < 0 && xv16 < 0) {
        xv16 = -xv16;
    }
    if (bx16 + r16 > canvas.width && xv16 > 0) {
        xv16 = -xv16;
    }
    if (by16 - 2 * bs < 0 && yv16 < 0) {
        yv16 = -yv16;
    }
    if (by16 > canvas.height && yv16 > 0) {
        yv16 = -yv16;
    }
    bx17 += xv17;
    by17 += yv17;
    if (bx17 - bs < 0 && xv17 < 0) {
        xv17 = -xv17;
    }
    if (bx17 + r17 > canvas.width && xv17 > 0) {
        xv17 = -xv17;
    }
    if (by17 - 2 * bs < 0 && yv17 < 0) {
        yv17 = -yv17;
    }
    if (by17 > canvas.height && yv17 > 0) {
        yv17 = -yv17;
    }
    bx18 += xv18;
    by18 += yv18;
    if (bx18 - bs < 0 && xv18 < 0) {
        xv18 = -xv18;
    }
    if (bx18 + r18 > canvas.width && xv18 > 0) {
        xv18 = -xv18;
    }
    if (by18 - 2 * bs < 0 && yv18 < 0) {
        yv18 = -yv18;
    }
    if (by18 > canvas.height && yv18 > 0) {
        yv18 = -yv18;
    }
    bx19 += xv19;
    by19 += yv19;
    if (bx19 - bs < 0 && xv19 < 0) {
        xv19 = -xv19;
    }
    if (bx19 + r19 > canvas.width && xv19 > 0) {
        xv19 = -xv19;
    }
    if (by19 - 2 * bs < 0 && yv19 < 0) {
        yv19 = -yv19;
    }
    if (by19 > canvas.height && yv19 > 0) {
        yv19 = -yv19;
    }
    bx20 += xv20;
    by20 += yv20;
    if (bx20 - bs < 0 && xv20 < 0) {
        xv20 = -xv20;
    }
    if (bx20 + r20 > canvas.width && xv20 > 0) {
        xv20 = -xv20;
    }
    if (by20 - 2 * bs < 0 && yv20 < 0) {
        yv20 = -yv20;
    }
    if (by20 > canvas.height && yv20 > 0) {
        yv20 = -yv20;
    }
    bx21 += xv21;
    by21 += yv21;
    if (bx21 - bs < 0 && xv21 < 0) {
        xv21 = -xv21;
    }
    if (bx21 + r21 > canvas.width && xv21 > 0) {
        xv21 = -xv21;
    }
    if (by21 - 2 * bs < 0 && yv21 < 0) {
        yv21 = -yv21;
    }
    if (by21 > canvas.height && yv21 > 0) {
        yv21 = -yv21;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = bs + "px Arial";
    context.fillStyle = "#950";
    context.fillText("HTML", bx1 - bs / 2, by1 - bs / 2, r1);
    context.fillStyle = "#841";
    context.fillText("C++", bx2 - bs / 2, by2 - bs / 2, r2);
    context.fillStyle = "#732";
    context.fillText("Inventor", bx3 - bs / 2, by3 - bs / 2, r3);
    context.fillStyle = "#623";
    context.fillText("MATLAB", bx4 - bs / 2, by4 - bs / 2, r4);
    context.fillStyle = "#514";
    context.fillText("FreeCAD", bx5 - bs / 2, by5 - bs / 2, r5);
    context.fillStyle = "#405";
    context.fillText("Prolog", bx6 - bs / 2, by6 - bs / 2, r6);
    context.fillStyle = "#316";
    context.fillText("Unreal", bx7 - bs / 2, by7 - bs / 2, r7);
    context.fillStyle = "#227";
    context.fillText("Unity", bx8 - bs / 2, by8 - bs / 2, r8);
    context.fillStyle = "#138";
    context.fillText("Illustrator", bx9 - bs / 2, by9 - bs / 2, r9);
    context.fillStyle = "#049";
    context.fillText("SDL", bx10 - bs / 2, by10 - bs / 2, r10);
    context.fillStyle = "#158";
    context.fillText("VHDL", bx11 - bs / 2, by11 - bs / 2, r11);
    context.fillStyle = "#267";
    context.fillText("JavaScript", bx12 - bs / 2, by12 - bs / 2, r12);
    context.fillStyle = "#376";
    context.fillText("C", bx13 - bs / 2, by13 - bs / 2, r13);
    context.fillStyle = "#485";
    context.fillText("Python", bx14 - bs / 2, by14 - bs / 2, r14);
    context.fillStyle = "#594";
    context.fillText("Java", bx15 - bs / 2, by15 - bs / 2, r15);
    context.fillStyle = "#683";
    context.fillText("CSS", bx16 - bs / 2, by16 - bs / 2, r16);
    context.fillStyle = "#792";
    context.fillText("SML", bx17 - bs / 2, by17 - bs / 2, r17);
    context.fillStyle = "#881";
    context.fillText("ML-Lex", bx18 - bs / 2, by18 - bs / 2, r18);
    context.fillStyle = "#970";
    context.fillText("ML-Yacc", bx19 - bs / 2, by19 - bs / 2, r19);
    context.fillStyle = "#861";
    context.fillText("Photoshop", bx20 - bs / 2, by20 - bs / 2, r20);
    context.fillStyle = "#752";
    context.fillText("NodeJs", bx21 - bs / 2, by21 - bs / 2, r21);
}


// const tl = new TimelineMax();

// tl.fromTo(nav,5,{
//     background: linear-gradient(rgba(0, 0, 0, 0))
// },{
//     background: linear-gradient(rgba(0, 2, 10, 0.95), rgba(0, 2, 10, 0.9), rgba(0, 2, 10, 0.83), rgba(0, 2, 10, 0.76), rgba(0, 2, 10, 0.69),rgba(0, 2, 10, 0))
// });





function onLinkClick() {
    var x = 1;
    var y = 0;

    setInterval(function () {
        // document.getElementsByTagName('h1')[1].scrollIntoView();
        if (y < window.innerHeight * 1.5) {
            window.scrollBy(0, x);
            x += 1;
            y += x;
        }

        // will scroll to 4th h3 element
    }, 1);
};