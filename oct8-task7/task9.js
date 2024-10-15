let userInE1 = document.getElementById("userIn");
let  msgE1 = document.getElementById("msg");
let countValEl =document.getElementById("countVal");
let bombTimerEl =document.getElementById("bombTimer");

let counter= 10;
let intervalId = setInterval(()=>{
    counter = counter - 1;

    bombTimerEl.textContent=counter;
    
},1000);

function OndiffuseBomb(){
    clearInterval(intervalId);
}
