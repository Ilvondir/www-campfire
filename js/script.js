for (i=0;i<3;i++) {
    const firewood = document.createElement("div");
    $(firewood).addClass("firewood");
    $(".container").append(firewood);
}


const fire = document.createElement("div");
$(fire).addClass("fire");
$(".container").append(fire);


for (let i=0;i<12;i++) {
    const flame = document.createElement("div");
    $(flame).addClass("flame");
    $(".container").append(flame);
}

const ground = document.createElement("div");
$(ground).addClass("ground");
$("body").append(ground);

function burning() {
    anime({
        targets: ".fire",
        scale: 1.1,
        backgroundColor: ["#FF0000", "#FFA500", "#FFFF00"],
        direction: "alternate",
        easing: "linear",
        duration: 600,
        complete: burning,
    })
}

function animation() {
    anime({
        targets: ".flame:nth-child(5), .flame:nth-child(9), .flame:nth-child(13)",
        opacity: [1, 0.6, 0],
        translateY: [0,-150],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 1.2, 0],
        translateX: [0,function() {
            return anime.random(-30,30);
        }],
        duration: 750,
        easing: "linear",
        delay: anime.stagger(80),
        complete: animation,
    })
}

function animation2() {
    anime({
        targets: ".flame:nth-child(6), .flame:nth-child(10), .flame:nth-child(11)",
        opacity: [1, 0.6, 0],
        translateY: [0,-150],
        translateX: [0,function() {
            return anime.random(-60,60);
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 1.2, 0],
        duration: 750,
        easing: "linear",
        delay: anime.stagger(150),
        complete: animation2,
    })
}

function animation3() {
    anime({
        targets: ".flame:nth-child(7), .flame:nth-child(8), .flame:nth-child(12)",
        opacity: [1, 0.6, 0],
        translateY: [0,-150],
        translateX: [0,function() {
            return anime.random(-60,60);
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 1.2, 0],
        duration: 750,
        easing: "linear",
        delay: anime.stagger(260),
        complete: animation3,
    })
}

function animation4() {
    anime({
        targets: ".flame:nth-child(14), .flame:nth-child(15), .flame:nth-child(16)",
        opacity: [1, 0.6, 0],
        translateY: [0,-150],
        translateX: [0,function() {
            return anime.random(-60,60);
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 0],
        duration: 550,
        easing: "linear",
        delay: 1,
        complete: animation4,
    })
}

burning();
animation();
animation2();
animation3();
animation4();

$("<audio></audio").attr({
    "src": "audio/fire.mp3",
    "loop": "loop",
    "id": "sound",
    "volume": 0.4
}).appendTo("body");

$("body").on("click", function () {
    $("#sound")[0].play();
})