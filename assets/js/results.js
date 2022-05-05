var results = document.getElementById("text");

var button = document.getElementById("submit"); 

var finalScore = window.localStorage.getItem("finalScore");


results.innerText = "Final Score: " + finalScore + "/4";

goToScores = function(){
    window.location.href = 'index.html';
}
button.addEventListener("click", function() {
    var input = document.getElementById("input-field").value;
    var initial = input;
    console.log(initial)
    window.localStorage.setItem(initial, [initial, finalScore]);
   
    goToScores();
})