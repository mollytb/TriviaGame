//global variables
var interval
var interval2;
var interval3;
var interval4;
var interval5;
//DOM ready
$(document).ready(function () {
    var right = 0;
    var wrong = 0;
    
    
    //js attached
    console.log(12);
    //hide questions
    
    $("#div1").hide();
    $("#div2").hide();
    $("#div3").hide();
    $("#div4").hide();
    $("#div5").hide();
    $("#div6").hide();
    //start function, click start: counter begins and question 1 shows up
    $("#start").on("click", init);
    function init() {
        $("#start").hide();
        right = 0;
        wrong = 0;
        $("#newdiv").remove();
        $("#newdiv2").remove();
        question1();
     
        
    };

    //attach questions to the hidden div
    function question1() {
        var seconds_left = 30;
        interval = setInterval(function () {
            $("#timer1").text("Time Left " + --seconds_left);
    
            if (seconds_left <= 0) {
                
                clearInterval(interval);
                question3();
            }
        }, 1000);
        $("#div1").show();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div6").hide();
        $("#start").hide();
        $("#question1").text("What year was Saint Mary's College founded?")
        $("#btn11").text("1844");
        $("#btn12").text("1992");
        $("#btn13").text("1895");
        $("#btn14").text("1888");
        
        
    

        $("#btn11").off("click").on("click",function () {
            right++;
            alert("Yep");
            clearInterval(interval);
            question2();
            
        });
        $("#btn12").off("click").on("click",function () {
            wrong++;
            clearInterval(interval);
            alert("No, It was 1844");
            question2();
            
        });
        $("#btn13").off("click").on("click",function () {
            wrong++;
            alert("No, It was 1844");
            clearInterval(interval);
            question2();
            

        });
        $("#btn14").off("click").on("click",function () {
            wrong++;
            alert("No, It was 1844");
            clearInterval(interval);
            question2();
           
        });
        
    };




    //question 2
    function question2() {
        $("#div1").hide();
        $("#div2").show();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div6").hide();
        $("#start").hide();

        $("#question2").text("Who was the first SMC student to become president of the college?")
        $("#btn21").text("Harry Potter");
        $("#btn22").text("Carol Ann Mooney");
        $("#btn23").text("Sister Madaleva");
        $("#btn24").text("Molly Burns");

     
     
        
        var seconds_left = 30;
        interval2 = setInterval(function () {
            $("#timer2").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                
                clearInterval(interval2);
                question3();
            }
        }, 1000);
        $("#btn23").off("click").on("click",function () {
            clearInterval(interval2);
            right++;
            alert("Yep");
            question3();
        });
        $("#btn22").off("click").on("click",function () {
            clearInterval(interval2);
            wrong++;
            alert("No, It was Sister Madaleva");
            question3();
        });
        $("#btn21").off("click").on("click",function () {
            clearInterval(interval2);
            wrong++;
            alert("No, It was Sister Madaleva");
            question3();
        });
        $("#btn24").off("click").on("click",function () {
            clearInterval(interval2);
            wrong++;
            alert("No, It was Sister Madaleva");
            question3();
        });

    }
    //question 3
    function question3() {
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").show();
        $("#div4").hide();
        $("#div5").hide();
        $("#div6").hide();

        $("#start").hide();
        $("#question3").text("What year was Regina Hall made into student housing?")
        $("#btn31").text("1969");
        $("#btn32").text("1965");
        $("#btn33").text("1895");
        $("#btn34").text("1983");

   
        
        
        var seconds_left = 30;
        interval3 = setInterval(function () {
            $("#timer3").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                
                clearInterval(interval3);
                question4();
            }
        }, 1000);
        $("#btn31").off("click").on("click",function () {
            clearInterval(interval3);
            right++;
            alert("Yep");
            question4();
        });
        $("#btn32").off("click").on("click",function () {
            clearInterval(interval3);
            wrong++;
            alert("No, It was 1969");
            question4();
        });
        $("#btn33").off("click").on("click",function () {
            clearInterval(interval3);
            wrong++;
            alert("No, It was 1969");
            question4();
        });
        $("#btn34").off("click").on("click",function () {
            clearInterval(interval3);
            wrong++;
            alert("No, It was 1969");
            question4();
        });

    }
    //question 4
    function question4() {
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").show();
        $("#div5").hide();
        $("#div6").hide();

        $("#start").hide();
        $("#question4").text("What year was Angela Athletic and Wellness Complex completed?")
        $("#btn41").text("1974");
        $("#btn42").text("1992");
        $("#btn43").text("2018");
        $("#btn44").text("1888");
        
     
        
        var seconds_left = 30;
        interval4 = setInterval(function () {
            $("#timer4").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                
                clearInterval(interval4);
                question5();
            }
        }, 1000);
        $("#btn43").off("click").on("click",function () {
            clearInterval(interval4);
            right++;
            alert("Yep");
            question5();
        });
        $("#btn42").off("click").on("click",function () {
            clearInterval(interval4);
            wrong++;
            alert("No, It was 2018");
            question5();
        });
        $("#btn41").off("click").on("click",function () {
            clearInterval(interval4);
            wrong++;
            alert("No, It was 2018");
            question5();
        });
        $("#btn44").off("click").on("click",function () {
            clearInterval(interval4);
            wrong++;
            alert("No, It was 2018");
            question5();
        });
    }
    //question 5
    function question5() {
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").show();
        $("#div6").hide();
    
        $("#start").hide();
        $("#question5").text("What year was Saint Mary's charter authorized to include a college?")
        $("#btn51").text("1844");
        $("#btn52").text("1908");
        $("#btn53").text("1915");
        $("#btn54").text("1898");
        
       
        var seconds_left = 30;
        interval5 = setInterval(function () {
            $("#timer5").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
               
                clearInterval(interval5);
                results();
            }
        }, 1000);
       
        $("#btn52").off("click").on("click",function () {
            clearInterval(interval5);
            right++;
            alert("Yep");
            results();

        });
        $("#btn51").off("click").on("click",function () {
            clearInterval(interval5);
            wrong++;
            alert("No, It was 1908");
            results();
        });
        $("#btn53").off("click").on("click",function () {
            clearInterval(interval5);
            wrong++;
            alert("No, It was 1908");
            results();
        });
        $("#btn54").off("click").on("click",function () {
            clearInterval(interval5);
            wrong++;
            alert("No, It was 1908");
            results();
        });
        

    }
    function results() {
        $("#start").hide();
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div6").show();
      

        //show # of correct answers
        //show # of incorrect answers
       
        $("#reset").text("Restart");
        
        $("#correct").text("Correct " + right);
        $("#incorrect").text("Incorrect " + wrong);
        $("#reset").on("click", restart);

    }
    function restart() {
        right = 0;
        wrong = 0;
       
        $("#start").show();
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div6").hide();
        

    }
});