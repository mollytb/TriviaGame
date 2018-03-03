$(document).ready(function() {
    var right = 0;
    var wrong = 0;


//js attached
console.log(12);
//hide questions
$("#div2").hide();
//start function, click start: counter begins and question 1 shows up
$("#start").on("click",init);
function init(){
    $("#start").hide();
    right = 0;
    wrong = 0;
    question1();
}

//attach questions to the hidden div
    function question1(){
    $("#question").text("What year was Saint Mary's College founded?")
    $("#btn1").text("1844");
    $("#btn2").text("1992");
    $("#btn3").text("1895");
    $("#btn4").text("1888");
    $("#div2").show();
    setTimeout(function() { question2(); }, 1000 * 3);
    $("#btn1").click(function(){
        right ++;
        clearTimeout;
        });
    $("#btn2").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn3").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn4").click(function(){
        wrong ++;
        clearTimeout;
        });       
  
    }



//question 2
function question2(){

$("#question").text("Who was the first SMC student to become president of the college?")
$("#btn1").text("potter");
$("#btn2").text("Mooney");
$("#btn3").text("Madaleva");
$("#btn4").text("Burns");
$("#div2").show();
    setTimeout(function() { question3(); }, 1000 * 3);
    $("#btn3").click(function(){
        right ++;
        clearTimeout;
        });
    $("#btn2").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn1").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn4").click(function(){
        wrong ++;
        clearTimeout;
        });
    
}
//question 3
function question3(){
$("#question").text("What year was Regina Hall made into student housing?")
$("#btn1").text("1969");
$("#btn2").text("1965");
$("#btn3").text("1895");
$("#btn4").text("1983");
$("#div2").show();
    setTimeout(function() { question4(); }, 1000 * 3);
    $("#btn1").click(function(){
        right ++;
        clearTimeout;
        });
    $("#btn2").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn3").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn4").click(function(){
        wrong ++;
        clearTimeout;
        });
    
}
//question 4
function question4(){
$("#question").text("What year was Angela Athletic and Wellness Complex completed?")
$("#btn1").text("1974");
$("#btn2").text("1992");
$("#btn3").text("2018");
$("#btn4").text("1888");
$("#div2").show();
    setTimeout(function() { question5(); }, 1000 * 3);
    $("#btn3").click(function(){
        right ++;
        clearTimeout;
        });
    $("#btn2").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn1").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn4").click(function(){
        wrong ++;
        clearTimeout;
        });
}
//question 5
function question5(){
$("#question").text("What year was Saint Mary's charter authorized to include a college?")
$("#btn1").text("1844");
$("#btn2").text("1908");
$("#btn3").text("1915");
$("#btn4").text("1898");
$("#div2").show();
    setTimeout(function() { results(); }, 1000 * 3);
    $("#btn2").click(function(){
        right ++;
        clearTimeout;
        });
    $("#btn1").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn3").click(function(){
        wrong ++;
        clearTimeout;
        });
    $("#btn4").click(function(){
        wrong ++;
        clearTimeout;
        });
  
}
function results(){

    var newDiv = $("<div id='newdiv'>").text("correct " + right);
    var newDiv2 = $("<div id='newdiv2'>").text("incorrect " + wrong);
    //show # of correct answers
    //show # of incorrect answers
    $("#question").hide();
    $("#btn1").text("Game Over");
    $("#btn2").text("restart");
    $("#btn3").hide();
    $("#btn4").hide();
    $("#div2").show();
    $("#div2").append(newDiv);
    $("#newdiv").append(newDiv2);
    $("#btn2").on("click", restart);

}
function restart (){
    right = 0;
    wrong = 0;
    $("#newdiv").empty();
    $("#newdiv2").empty();
    $("#start").show();
    $("#question").show();
    $("#btn3").show();
    $("#btn4").show();
    $("#div2").hide();
    
}
});