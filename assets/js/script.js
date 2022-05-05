var time = 100;
var quizInProgress = true;
var questions = ["What code language creates the style for a website?", "Variables can be a...?", "How is an integer different from a float?", "Where do you use html?"];
var results = document.getElementById("result");
var buttons = document.getElementsByClassName("answer-btn"); 
var answers = [["JavaScript", "Html", "Css", "Plain text"], ["Boolean", "Integer", "String", "All Of The Above"], ["They aren't different at all", "Integers are whole numbers but floats can have a decimal point", "Integers are the same as Strings but floats are whole numbers", "Floats are whole numbers but Integers can have a decimal point"], ["On the front-end", "On the back-end", "Both 1 and 2", "None of the Above"]]
var timeleft = 0;
var score = 0;
var correctQuestion = 2;
var stage = 1;
var correctAmount = 0;
var quizFailed = false;
var youFailed = document.querySelector("#no-time");
youFailed.innerHTML = " ";
startClock = function(){
    var downloadTimer = setInterval(function(){
        if(timeleft >= 60){
          clearInterval(downloadTimer);
        }
        document.getElementById("time").innerText = "Time: " + (60 + timeleft);
        timeleft -= 1;
        if(timeleft <= -60){
            youFailed.innerText = "You have run out of time, quiz over"
            setTimeout(() => {
                finalScore();
            }, 6000)
            timeleft = -60;
          
        }
      }, 1000);
};



Quiz = function(){
    
    startClock();
   
    

    //if out of time
    if(quizFailed){    
        youFailed.innerText = "You have run out of time, quiz failed"
        console.log("quizFailed");
        setTimeout(() => {
            finalScore();
        }, 2000)
    }

    
    for (let i = 0; i < buttons.length; i++) {
       
        buttons[i].addEventListener("click", function() {
            

            if(stage == 2){
                correctQuestion = 3;
            }

            else if(stage == 3){
                correctQuestion = 1;
            }
            else if(stage == 4){
                correctQuestion = 0;
            }

            if(i >= 4){
                buttons[i].addEventListener("click", function(){
                   
                });
            }
            if(i == correctQuestion){
                results.innerText = "Correct"
                correctAmount+=1;
                results.style.color = "green"        
         
                
            } else{
                results.innerText = "Incorrect"
                results.style.color = "red"
                timeleft -= 5;
             
            }

            setTimeout(() => {
                if(stage < 4){
                    nextQuestion();
                }
                else{
                    finalScore();
                }
            }, 2000)
            
        });
      
    }
 
}

var nextQuestion = function(){
    buttons[0].innerText = answers[stage][0];
    buttons[1].innerText = answers[stage][1];
    buttons[2].innerText = answers[stage][2];
    buttons[3].innerText = answers[stage][3];
    stage++;
    results.innerText = ""
   
    var question = document.getElementById("text");
    if(stage == 1){
        question.innerText = questions[0];
       
    } else if(stage == 2){
        question.innerText = questions[1];
       
    } else if(stage == 3){
        question.innerText = questions[2];
       
    } else if(stage == 4){
        question.innerText = questions[3];
     
    }
    
}

var finalScore = function(){
    window.localStorage.setItem("finalScore", correctAmount);
    window.location.href = 'results.html';
}

console.log("hey")


Quiz();





