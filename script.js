document.getElementById("dice").addEventListener("click", function(){
    var maths = Math.floor(Math.random() * 4) + 1
    if (maths === 2) {
        document.getElementById("player").style.left = ("620px")
        document.getElementById("player").style.top = ("670px")
    }
    if (maths === 1) {
        document.getElementById("player").style.left = ("1170px")
        document.getElementById("player").style.top = ("670px")
    }
    if (maths === 3) {
        document.getElementById("player").style.left = ("620px")
        document.getElementById("player").style.top = ("220px")
    }
    if (maths === 4) {
        document.getElementById("player").style.left = ("1170px")
        document.getElementById("player").style.top = ("220px")
    }
})