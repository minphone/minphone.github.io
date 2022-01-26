(function() {
    "use strict"

    $(document).ready(function() {
        var closeToBlank; 

        $("#puzzlearea div").each(function(i) {
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);

            // set basic style and background
            $(this).addClass("puzzlepiece");
            $(this).css("left", x + "px");
            $(this).css("top", y + "px");
            $(this).css("backgroundImage", "url('photo/background.jpg')");
            $(this).css("backgroundPosition", -x + 'px ' + (-y) + 'px');
        });

        $(".puzzlepiece").hover(function() {
                var blank = findBlank();
                setPuzzlesCloseToBlank(blank);
                if (isNearBlank($(this)))
                    $(this).addClass("squareHoverActive");
            },
            function() {
                var blank = findBlank();
                setPuzzlesCloseToBlank(blank);
                if (isNearBlank($(this)))
                    $(this).removeClass("squareHoverActive");
            });

        $(".puzzlepiece").click(function() {
            var blank = findBlank();
            setPuzzlesCloseToBlank(blank);
            if (isNearBlank($(this))) {
                $(this).css("left", blank.left + "px");
                $(this).css("top", blank.top + "px");
            }
        });

        function findBlank() {
            var defaultSquares = [
                { left: 0, top: 0 },
                { left: 100, top: 0 },
                { left: 200, top: 0 },
                { left: 300, top: 0 },
                { left: 0, top: 100 },
                { left: 100, top: 100 },
                { left: 200, top: 100 },
                { left: 300, top: 100 },
                { left: 0, top: 200 },
                { left: 100, top: 200 },
                { left: 200, top: 200 },
                { left: 300, top: 200 },
                { left: 0, top: 300 },
                { left: 100, top: 300 },
                { left: 200, top: 300 },
                { left: 300, top: 300 }
            ];

            var tempArr = defaultSquares.slice();

            $('.puzzlepiece').each(function(i, v) {
                var position = { left: $(this).css("left"), top: $(this).css("top") };
                tempArr.splice((tempArr.findIndex(v => (v.left == parseInt($(this).css("left"))) && (v.top == parseInt($(this).css("top"))))), 1);
            });

            return tempArr[0];
        }

        function isNearBlank(element) {
            var found = false;
            closeToBlank.forEach(function(val) {
                if (val.left == parseInt(element.css("left")) && val.top == parseInt(element.css("top")))
                    found = true;
            });
            return found;
        }

        function setPuzzlesCloseToBlank(blank) {
            closeToBlank = [];
            let closePositionTemp = [
                { left: blank.left - 100, top: blank.top },
                { left: blank.left + 100, top: blank.top },
                { left: blank.left, top: blank.top - 100 },
                { left: blank.left, top: blank.top + 100 }
            ]

            closePositionTemp.forEach(function(v, i) {
                if (v.left >= 0 && v.left <= 300 && v.top >= 0 && v.top <= 300)
                    closeToBlank.push(v);
            });
        }
        $("#shufflebutton").click(function() {
            for (let i = 0; i < 100; i++) {
                let blank = findBlank();

                setPuzzlesCloseToBlank(blank);

                let randomPosition = closeToBlank[Math.floor(Math.random() * closeToBlank.length)];
                $("#puzzlearea").children().each(function() {
                    if (randomPosition.left == parseInt($(this).css("left")) && randomPosition.top == parseInt($(this).css("top"))) {
                        $(this).css("left", blank.left + "px");
                        $(this).css("top", blank.top + "px");
                    }
                });
            }
        });
    });
})();