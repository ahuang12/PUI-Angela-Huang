//javascript file for animation (with anime js library)

//grabs each thumbnail individually
window.onload=function(){
    document.getElementById("thumbnail1").onmouseover = function() {mouseOver1()};
    document.getElementById("thumbnail1").onmouseleave = function() {mouseLeave1()};
    document.getElementById("thumbnail2").onmouseover = function() {mouseOver2()};
    document.getElementById("thumbnail2").onmouseleave = function() {mouseLeave2()};
    document.getElementById("thumbnail3").onmouseover = function() {mouseOver3()};
    document.getElementById("thumbnail3").onmouseleave = function() {mouseLeave3()};
};

//functions to enlarge and fade away the thumbnails (and vice versa to original state)
function mouseOver1() {
    anime({
          targets: '#thumbnail1',
          opacity: .7, // Animate all divs opacity to .7
          scale: 1.05, // Animate all divs scale to 1.05
        });
}

function mouseLeave1() {
    anime({
          targets: '#thumbnail1',
          opacity: 1, // Animate all divs opacity back to to 1
          scale: 1, // Animate all divs scale back to 1
        });
}

function mouseOver2() {
    anime({
          targets: '#thumbnail2',
          opacity: .7, // Animate all divs opacity to .7
          scale: 1.05, // Animate all divs scale to 1.05
        });
}

function mouseLeave2() {
    anime({
          targets: '#thumbnail2',
          opacity: 1, // Animate all divs opacity back to to 1
          scale: 1, // Animate all divs scale back to 1
        });
}

function mouseOver3() {
    anime({
          targets: '#thumbnail3',
          opacity: .7, // Animate all divs opacity to .7
          scale: 1.05, // Animate all divs scale to 1.05
        });
}

function mouseLeave3() {
    anime({
          targets: '#thumbnail3',
          opacity: 1, // Animate all divs opacity back to to 1
          scale: 1, // Animate all divs scale back to 1
        });
}