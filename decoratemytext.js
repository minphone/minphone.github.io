//alert("Hello, world!");

function showPopup() {
    alert("Hello, world!");
}

window.onload = function() {
    document.getElementById("btnBigDecorate").onclick = changeDecorate;
    document.getElementById("chkBling").onchange = changeBold;
    document.getElementById("btnIgpay").onclick = changeToLatin;
    document.getElementById("btnMalk").onclick = changeToMalkovitch;
    document.getElementById("btnClear").onclick = clearText;

    var txtInput = document.getElementById("txtInput");
    txtInput.value = ""; //as I don't want empty initial spaces
    var chkBling = document.getElementById("chkBling");
    var bodyPart = document.getElementById("bodyPart");

    //this is getting initial font size of textarea
    var fontSize = window.getComputedStyle(txtInput, null).getPropertyValue('font-size'); //in pixels - 16px
    var points = parseInt(fontSize) * 72 / 96; //change pixel to point - 12

    function changeDecorate() {
        //txtInput.style.fontSize = "24pt";

        points += 2;
        txtInput.style.fontSize = points + "pt";
    }

    function changeBold() {
        if (chkBling.checked) {
            txtInput.style.fontWeight = "bold";
            txtInput.style.color = "green";
            txtInput.style.textDecoration = "underline";
            bodyPart.style.backgroundImage = "url('hundred-dollar-bill.jpg')";

        } else {
            txtInput.style.fontWeight = "normal";
            txtInput.style.color = "black";
            txtInput.style.textDecoration = "none";
            bodyPart.style.backgroundImage = "";
        }
    }

    function changeToLatin() {
        var text = txtInput.value;
        if (text.trim() != "") {
            var txtArray = text.split(" ");
            var result = "";
            for (let i = 0; i < txtArray.length; i++) {
                var tempText = txtArray[i];
                if (tempText.charAt(0) == "a" || tempText.charAt(0) == "e" || tempText.charAt(0) == "i" || tempText.charAt(0) == "o" || tempText.charAt(0) == "u" ||
                    tempText.charAt(0) == "A" || tempText.charAt(0) == "E" || tempText.charAt(0) == "I" || tempText.charAt(0) == "O" || tempText.charAt(0) == "U")
                    tempText = tempText.concat("ay");
                else {
                    let firstChar = tempText.charAt(0);
                    tempText = tempText.substring(1, tempText.length);
                    tempText = tempText.concat(firstChar, "ay");
                }

                result += tempText + " ";
            }
            txtInput.value = result;
        }
    }

    function changeToMalkovitch() {
        var text = txtInput.value;
        if (text.trim() != "") {
            var txtArray = text.split(" ");
            var result = "";
            for (let i = 0; i < txtArray.length; i++) {
                var tempText = txtArray[i];
                if (txtArray[i].length >= 5)
                    tempText = "Malkovich";
                result += tempText + " ";
            }
            txtInput.value = result;
        }
    }

    function clearText() {
        txtInput.value = "";
    }
}