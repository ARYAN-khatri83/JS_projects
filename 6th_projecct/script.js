
// to make bubble
var timer = 60;
var score = 0;
var hitrn = 0;

// event bublling means when we click on an element the eevent will be raised and if we didnt get event listner , then event elemeny k parent pr dhundega and if udhr bhi nhi mila then parent k parent k parent par listener dhundega


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i = 1;i<=190;i++){
    var rn = Math.floor(Math.random()*10)
    clutter+= `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
   var timerInt =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }else{
            document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>`;
            clearInterval(timerInt);
        }
    },1000)
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickNumber = Number(dets.target.textContent);
    if(clickNumber == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
makeBubble();
runTimer();