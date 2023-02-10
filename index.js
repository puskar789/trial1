var timerObj = document.getElementById("timer")
var startBtnObj = document.getElementById("start-btn")
var resetBtnObj = document.getElementById("reset-btn")
var isTimerRunning = false
var interval

resetBtnObj.addEventListener("click",function(){
    console.log("reset button clicked");
    timerObj.textContent="00:00";
})

startBtnObj.addEventListener("click",()=>{
    console.log("start button clicked");
    if(isTimerRunning){
        startBtnObj.textContent="START";
        isTimerRunning = false
        clearInterval(interval)
    }
    else{
        startBtnObj.textContent="STOP";
        isTimerRunning = true 
        interval = setInterval(function(){
            console.log("hi");
        },1000)
    }
})



