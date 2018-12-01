var types = [];
var words = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O"],
    ["P", "Q", "R", "S", "T"],
    ["U", "V", "W", "X", "Y"]
];

var redcount = 9;
var bluecount = 8;
var blackcount = 1;
var graycount = 7;



function chooseColor() {

    var base = [];
    types = [];

    for(i = 0; i < redcount; i++)   base.push("R");
    for(i = 0; i < bluecount; i++)  base.push("B");
    for(i = 0; i < graycount; i++) base.push("N");
    for(i = 0; i < blackcount; i++)  base.push("A");

    shuffle(base);

    var row = [];

    for(i = 0; i < 5; i++){
        for(j = 0; j < 5; j++)
            row.push(base.pop());
        types.push(row);
        row = [];
    }
}


$(document).ready(function () {

    chooseColor();
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
            $(".words table").append('<tr id = \"row-' + (i) + '\"></div>');
            var row = $("table #row-" + i);
            for (j = 0; j < 5; j++)
                row.append("<td type='" + types[i][j] + "'>" + words[i][j] + "</td>");
        }
    }

    $("td").click(function () {
        var color = $(this).attr('type');
        if (color == "R") {
            $(this).css('background', 'url("images/red.jpg")');
        }
        if (color == "B") {
            $(this).css('background', 'url("images/blue.jpg")');
        }
        if (color == "N") {
            $(this).css('background', 'url("images/gray.jpg")');
        }
        if (color == "A") {
            $(this).css('background', 'url("images/black.jpg")');
        }
        if (turn != color) {
            if (turn == "R") {
                document.getElementById("head").style.background = "blue";
                turn = "B";
            }
            if (turn == "B") {
                document.getElementById("head").style.background = "red";
                turn = "R";
            }
            if (color == "black") {
                document.getElementById("head").style.background = "black";
            }
        }
    });
});

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function redTeam() {
  document.getElementById("demo").style.color = "white";
  document.getElementById("demo").innerHTML = "Red Team's Turn!";
  $("header").css("background-color", "red");
  $("#redButton").hide();
  $("#blueButton").hide();
}

function blueTeam() {
  document.getElementById("demo").style.color = "white";
  document.getElementById("demo").innerHTML = "Blue Team's Turn!";
  $("header").css("background-color", "blue");
}

