
function timeCalculator() {
var x = new Date();
var y = x.getHours();
var v = x.getMinutes();
var p = x.getSeconds();
var z = document.getElementById("timer")
z.innerHTML ="INKOOP "+ y + ":" + v + ":" + p
}

setInterval(timeCalculator,10)


function handleClick() {
    alert("Contact me at 7014880895")
}


