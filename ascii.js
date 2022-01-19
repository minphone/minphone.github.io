(function() {
    "use strict";
    var start = 0;

    window.onload = function() {
        var userInput;
        var output = document.getElementById("output");
        var intervalID;

        var animation;
        var size;
        var speed;

        var resultTxtArray;
        var currIndex;

        document.getElementById("btnStop").disabled = true;
        document.getElementById("selAnnimation").disabled = false;

        document.getElementById("btnStart").onclick = function() {
            start = 1;
            document.getElementById("btnStop").disabled = false;
            document.getElementById("selAnnimation").disabled = true;

            animation = document.getElementById("selAnnimation").value;
            size = document.getElementById("selSize").value;
            if (document.getElementById("chkSpeed").checked) {
                speed = 50;
            } else {
                speed = 250;
            }
            //alert(animation + "__" + size + "__" + speed);

            userInput = output.value;
            output.value = "";
            output.style.fontSize = size;
            var whichOne = animation;
            resultTxtArray = (ANIMATIONS[whichOne]).split("=====\n");
            currIndex = -1;
            intervalID = setInterval(animate, speed);
        };

        function animate() {
            ++currIndex;
            if (currIndex >= resultTxtArray.length) {
                currIndex = 0;
            }
            output.value += resultTxtArray[currIndex];
            output.scrollTo(0, output.scrollHeight);
        }


        document.getElementById("btnStop").onclick = function() {
            if (intervalID) {
                clearInterval(intervalID);
                output.value = userInput;
            }
            document.getElementById("btnStop").disabled = true;
            document.getElementById("selAnnimation").disabled = false;
        };

        document.getElementById("selSize").onchange = function() {
            size = document.getElementById("selSize").value;
            output.style.fontSize = size;
        };

        document.getElementById("chkSpeed").onchange = function() {
            if (intervalID) {
                if (document.getElementById("chkSpeed").checked) {
                    clearInterval(intervalID);
                    intervalID = setInterval(animate, 50);
                } else {
                    clearInterval(intervalID);
                    intervalID = setInterval(animate, 250);
                }
            }
        };
    };
}());