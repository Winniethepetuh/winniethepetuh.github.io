var start = new Date().getTime();
   
function randomColor() {
    var letters = "0123456789ABCDE".split('')
        color   = '#';
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
}

function makeshape() {
    var top   = Math.random() * 300 
        width = Math.random() * (50 - 400) + 400; 

    if(Math.random() > 0.5) {
        document.getElementById("cub").style.borderRadius = "50%";
    } else{
        document.getElementById("cub").style.borderRadius = "0%";
    }
    document.getElementById("cub").style.backgroundColor = randomColor();
    document.getElementById("cub").style.top             = top + "px";
    document.getElementById("cub").style.left            = top + "px";
    document.getElementById("cub").style.width           = width + "px";
    document.getElementById("cub").style.height          = width + "px";
    document.getElementById("cub").style.display         = "block";
    start = new Date().getTime();
}

function timeOut() {
    setTimeout(makeshape, Math.random() * 2000);
}

timeOut();

// Фигуры
document.getElementById("cub").onclick = function(){
    document.getElementById("cub").style.display = "none";
    document.getElementById("cub").style.left = Math.random() * 2000;
    var end = new Date().getTime();
        time = (end - start) / 1000;
    document.getElementById("span").innerHTML = time + "s";    
    timeOut();
}