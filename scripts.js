var board = [
    ["B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "R"],
    ["R", "R", "R", "R", "R"],
    ["R", "R", "N", "N", "N"],
    ["N", "N", "N", "N", "A"]
];

var words = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O"],
    ["P", "Q", "R", "S", "T"],
    ["U", "V", "W", "X", "Y"]
];

$(document).ready(function () {

    generateTable();

    // $('#btn-chat').click(function () {
    //     var ul = document.getElementById("chat");
    //     var li = document.createElement("li");
    //     var msg = document.getElementById('btn-input').value;
    //     li.appendChild(document.createTextNode(msg));
    //     ul.appendChild(li);
    //     alert(msg);
    // });

    function generateTable() {
        for (i = 0; i < 5; i++) {
            $(".words table").append('<tr id = \"row-' + (i + 1) + '\"></div>');
            var row = $("table #row-" + i);
            for (j = 0; j < 5; j++) {
                row.append("<td type='" + board[i][j] + "'>" + words[i][j] + "</td>");
            }
        }
    }

});

var redcount = 9;
var bluecount = 8;
var blackcount = 1;
var graycount = 7;

$(document).ready(function () {
    $("td").each(function () {
        $(this).prop('color', chooseColor());
        alert($(this).attr());
    });

    $("td").click(function () {
        //if (color = "red") {
        //    img.src = "images\red.jpg";
        //} else {
        //    if (color = "blue") {
        //        img.src = "images\blue.jpg";
        //    } else {
        //        if (color = "gray") {
        //            img.src = "images\gray.jpg";
        //        } else {
        //            img.src = "images\black.jpg";
        //        }
        //    }
        //}
    });

});

function chooseColor() {
    var flag = true;
    while (flag) {
        var num = Math.random();
        if (num >= 0 && num <= .25 && redcount > 0) {
            redcount--;
            return "red";
        }
        if (num > .25 && num <= .50 && bluecount > 0) {
            bluecount--;
            return "blue";
        }
        if (num > .50 && num <= .75 && greycount > 0) {
            greycount--;
            return "grey";
        }
        if (num > .75 && num <= 1 && blackcount > 0) {
            blackcount--;
            return "black";
        }
    }
}

function redTeam() {
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").innerHTML = "Red Team!";
  $("#redButton").hide();
  $("#blueButton").hide();
}

function blueTeam() {
  document.getElementById("demo").style.color = "blue";
  document.getElementById("demo").innerHTML = "Blue Team!";
}