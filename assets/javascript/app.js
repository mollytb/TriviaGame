$(document).ready(function() {
//js attached
console.log(12);
//hide questions
$("#div2").hide();
//start function, click start: counter begins and question 1 shows up
$("#start").on("click",init);
function init(){
    $("#start").hide();
  
    $("#question").text("What year was Saint Mary's College founded")
    $("#btn1").text("1844");
    $("#btn2").text("1992");
    $("#btn3").text("1895");
    $("#btn4").text("1888");
    $("#div2").show();
    setTimeout(function() { question2(); }, 1000 * 10);
    

    }


  });


//attach questions to the hidden div

//question 2
function question2(){

$("#question").text("Who was the first SMC student to become president of the college?")
$("#btn1").text("Madaleva");
$("#btn2").text("Mooney");
$("#btn3").text("Potter");
$("#btn4").text("Burns");
$("#div2").show();
    setTimeout(function() { question3(); }, 1000 * 10);
    
}
//question 3
function question3(){
$("#question").text("What year was Regina Hall made into student housing?")
$("#btn1").text("1969");
$("#btn2").text("1965");
$("#btn3").text("1895");
$("#btn4").text("1983");
$("#div2").show();
    setTimeout(function() { question4(); }, 1000 * 10);
    
}
//question 4
function question4(){
$("#question").text("What year was Angela Athletic and Wellness Complex completed?")
$("#btn1").text("1974");
$("#btn2").text("1992");
$("#btn3").text("2018");
$("#btn4").text("1888");
$("#div2").show();
    setTimeout(function() { question5(); }, 1000 * 10);
    
}
//question 5
function question5(){
$("#question").text("What year was Saint Mary's charter authorized to include a college")
$("#btn1").text("1844");
$("#btn2").text("1908");
$("#btn3").text("1915");
$("#btn4").text("1898");
$("#div2").show();
    setTimeout(function() { results(); }, 1000 * 10);
  
}
function results(){
    //show # of correct answers
    //show # of incorrect answers
    $("#div2").text("Game Over")
}