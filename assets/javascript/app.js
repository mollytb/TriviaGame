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
        question1();
    };

    //attach questions to the hidden div
    function question1() {
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
        $("#div1").show();
        

        var seconds_left = 30;
        var interval = setInterval(function () {
            $("#timer1").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                wrong++;
                clearInterval(interval);
                question2();
            }
        }, 1000);
        $("#btn13").click(function () {
            right++;
            question2();
            clearInterval(interval);
        });
        $("#btn12").click(function () {
            wrong++;
            question2();
            clearInterval(interval);
        });
        $("#btn11").click(function () {
            wrong++;
            question2();
            clearInterval(interval);
        });
        $("#btn14").click(function () {
            wrong++;
            question2();
            clearInterval(interval);
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
        var interval2 = setInterval(function () {
            $("#timer2").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                wrong++;
                clearInterval(interval2);
                question3();
            }
        }, 1000);
        $("#btn23").click(function () {
            clearInterval(interval2);
            right++;
            question3();
        });
        $("#btn22").click(function () {
            clearInterval(interval2);
            wrong++;
            question3();
        });
        $("#btn21").click(function () {
            clearInterval(interval2);
            wrong++;
            question3();
        });
        $("#btn24").click(function () {
            clearInterval(interval2);
            wrong++;
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
      
        setTimeout(function () { question4(); }, 1000 * 30);
        var seconds_left = 30;
        var interval3 = setInterval(function () {
            $("#timer3").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                wrong++;
                clearInterval(interval3);
                question4();
            }
        }, 1000);
        $("#btn31").click(function () {
            clearInterval(interval3);
            right++;
            question4();
        });
        $("#btn32").click(function () {
            clearInterval(interval3);
            wrong++;
            question4();
        });
        $("#btn33").click(function () {
            clearInterval(interval3);
            wrong++;
            question4();
        });
        $("#btn34").click(function () {
            clearInterval(interval3);
            wrong++;
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
        
        setTimeout(function () { question5(); }, 1000 * 30);
        var seconds_left = 30;
        var interval4 = setInterval(function () {
            $("#timer4").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                wrong++;
                clearInterval(interval4);
                question5();
            }
        }, 1000);
        $("#btn43").click(function () {
            clearInterval(interval4);
            right++;
            question5();
        });
        $("#btn42").click(function () {
            clearInterval(interval4);
            wrong++;
            question5();
        });
        $("#btn41").click(function () {
            clearInterval(interval4);
            wrong++;
            question5();
        });
        $("#btn44").click(function () {
            clearInterval(interval4);
            wrong++;
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
       
        $("#btn52").click(function () {
            clearInterval(interval5);
            right++;
            results();

        });
        $("#btn51").click(function () {
            clearInterval(interval5);
            wrong++;
            results();
        });
        $("#btn53").click(function () {
            clearInterval(interval5);
            wrong++;
            results();
        });
        $("#btn54").click(function () {
            clearInterval(interval5);
            wrong++;
            results();
        });
        var seconds_left = 30;
        var interval5 = setInterval(function () {
            $("#timer5").text("Time Left " + --seconds_left);

            if (seconds_left <= 0) {
                wrong++;
                clearInterval(interval5);
                results();
            }
        }, 1000);

    }
    function results() {
        $("#start").hide();
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div6").show();
      

        var newDiv = $("<div id='newdiv'>").text("correct " + right);
        var newDiv2 = $("<div id='newdiv2'>").text("incorrect " + wrong);
        //show # of correct answers
        //show # of incorrect answers
       
        $("#reset").text("Restart");
        
        $("#div6").append(newDiv);
        $("#newdiv").append(newDiv2);
        $("#reset").on("click", restart);

    }
    function restart() {
        right = 0;
        wrong = 0;
        $("#newdiv").remove();
        $("#newdiv2").remove();
        $("#start").show();
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
        $("#div6").hide();
        

    }
});