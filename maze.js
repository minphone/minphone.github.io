$(document).ready(function() {
    var isStarted = false;

    $("#boundary1").mouseover(function() {
        if (isStarted) {
            $(this).addClass("youlose");
        }
    });

    $(".boundary").mouseover(function() {
        if (isStarted) {
            $(this).addClass("youlose");
        }
    });

    $("#start").click(function() {
        isStarted = true;
        if ($(".boundary").hasClass('youlose'))
            $(".boundary").removeClass("youlose");
        $("#status").text("Playing...");
        $("#status").css("color", "gold");
    });

    $("#end").click(function() {
        if (isStarted && !$(".boundary").hasClass('youlose')) {
            //alert("You win! :]");
            $("#status").text("You win! :]");
            $("#status").css("color", "green");
        } else {
            if (isStarted) {
                $("#status").text("Sorry, you lost. :[");
                $("#status").css("color", "red");
            }
        }
        isStarted = false;
    });

    $("#maze").on("mouseleave", function(event) {
        $(".boundary").addClass("youlose");
        $("#status").text("You lose!");
        $("#status").css("color", "red");
    });
});