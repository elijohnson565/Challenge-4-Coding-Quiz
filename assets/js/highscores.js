var scores = [],
keys = Object.keys(localStorage),
values = Object.values(localStorage),
allKeys = keys.length
allValues = values.length

var scoreSection = document.getElementById("scores")

for(i = 0; i < allKeys; i++){
    if(keys[i].length < 3 && keys[i] != ""){
   
        //Create a new Div Tag with the createElement()Function
        var newContent = document.createElement("li")
        // add the value inside the Array by using the createTextNode Function
        newContent.innerText = keys[i] + ": " + values[i][3] + "/4 correct"
        newContent.classList.add("center", "scores")
        scoreSection.appendChild(newContent);  
    }
    
}