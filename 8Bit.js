function rollDice() {
    var dieInterval = setInterval(function() {
        var ranNum = Math.floor( 1 + Math.random() * 6 );
        document.getElementById("dice").innerHTML = ranNum;
    },3)

    var timer = setTimeout(function() {
        clearInterval(dieInterval);
    }, 1000)
}
