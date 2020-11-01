document.getElementById("namebutton").onclick = function() { clickingFunction() };

function clickingFunction() {
    $('#namebox').fadeOut(2000);
    document.getElementById("namebutton").style.transition = "none";
    var $lecturerName = document.getElementById("nameinput").value;
    document.getElementById("lecturernamehere").innerHTML = $lecturerThank + $lecturerName;
    myVar = setTimeout(afterClicking1, 3000);
}

function afterClicking1() {
    document.getElementById("section1").style.visibility = "visible";
    $('#section1').hide();
    $('#section1').fadeIn(2000);
    myVar = setTimeout(afterClicking23, 2500);
}

function afterClicking23() {
    document.getElementById("section2").style.visibility = "visible";
    $('#section2').hide();
    $('#section2').fadeIn(2000);
    document.getElementById("section3").style.visibility = "visible";
    $('#section3').hide();
    $('#section3').fadeIn(2000);
    myVar = setTimeout(afterClicking4, 2500);
}

function afterClicking4() {
    document.getElementById("section4").style.visibility = "visible";
    $('#section4').hide();
    $('#section4').fadeIn(2000);
    myVar = setTimeout(afterClicking5, 2500);
}

function afterClicking5() {
    document.getElementById("section5").style.visibility = "visible";
    $('#section5').hide();
    $('#section5').fadeIn(2000);
    myVar = setTimeout(afterClicking6, 2500);
}

function afterClicking6() {
    document.getElementById("section6").style.visibility = "visible";
    $('#section6').hide();
    $('#section6').fadeIn(2000);
}

function afterclickingFunction() {
    document.getElementById("section1").style.visibility = "visible";
    $('#section1').hide();
    $('#section1').fadeIn(2000);
    document.getElementById("section2").style.visibility = "visible";
    $('#section2').hide();
    $('#section2').fadeIn(2000);
    document.getElementById("section3").style.visibility = "visible";
    $('#section3').hide();
    $('#section3').fadeIn(2000);
    document.getElementById("section4").style.visibility = "visible";
    $('#section4').hide();
    $('#section4').fadeIn(2000);
    document.getElementById("section5").style.visibility = "visible";
    $('#section5').hide();
    $('#section5').fadeIn(2000);
    document.getElementById("section6").style.visibility = "visible";
    $('#section6').hide();
    $('#section6').fadeIn(2000);
}

// $("#name").click(function() {
//     $('.transform').toggleClass('transform-active');
//   });