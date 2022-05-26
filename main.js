let a = 0;
let tm1 = null;

$(function() {
     $("#start").click(function() {
          if(tm1 == null) { tm1 = setInterval("time()",100); }
          
     });
     $("#stop").click(function() {
          clearInterval(tm1); tm1 = null;
     });
     $("#reset").click(function() {
          $("#timer").text("0:0:0:0");
          a = 0;
     });
});

function time() { 
     a += 1;
     let ms = a % 10;
     let s = Math.floor(a / 10) % 60;
     let m = Math.floor(a / 600) % 60;
     let h = Math.floor(a / 36000) % 60;

     $("#timer").text(('0' + h).slice(-1) + ":" + ('0' + m).slice(-1) + ":" + ('0' + s).slice(-1) + ":" + ms);
};

function start(){
     start.disabled=true;
}     
function stop(){
     start.disabled=false;
}
function reset(){
     start.disabled=false;
}
start.addEventListener('click', start, false); 
stop.addEventListener('click', stop, false); 
reset.addEventListener('click', reset, false);