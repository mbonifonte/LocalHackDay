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
var turn = "";

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
                row.append("<td type='" + types[i][j] + "'><p>" + words[i][j] + "</p></td>");
        }
    }

    $("td").click(function () {
        var color = $(this).attr('type');

        if (color == "R") {
            $(this).css('background', 'url("images/red.jpg")');
            $("header").css("background-color", "red");
            document.getElementById("demo").innerHTML = "Red Team's Turn!";
        }
        if (color == "B") {
            $(this).css('background', 'url("images/blue.jpg")');
            $("header").css("background-color", "blue");
            document.getElementById("demo").innerHTML = "Blue Team's Turn!";

        }
        if (color == "N") {
            if($("header").css("background-color") == "blue"){
                redTeam();
            }
            if($("header").css("background-color") == "red"){
                blueTeam();
            }
            $(this).css('background', 'url("images/gray.jpg")');
        }
        if (color == "A") {
            $(this).css('background', 'url("images/black.jpg")');
            $("header").css("background-color", "black");
            document.getElementById("demo").innerHTML = "You Lose!";
        }

        $(this).find("p").css("background-color", "#FCEDD8");
        $(this).find("p").toggle();

        if (color != turn) {
            if (turn == "R") {
                turn = "B";
            } else {
                if (turn == "B") {
                    turn = "R"
                    $("header").css("background-color", "red");
                }
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
  $("td").each(function( index ) {
      $(this).css('color', 'black')});
  }

function blueTeam() {
  document.getElementById("demo").style.color = "white";
  document.getElementById("demo").innerHTML = "Blue Team's Turn!";
  $("header").css("background-color", "blue");
  $("td").each(function( index ) {
      $(this).css('color', 'black')});
}

function spymaster() {
  document.getElementById("demo").style.color = "white";
  document.getElementById("demo").innerHTML = "Spymaster!";
  $("header").css("background-color", "grey");
  $("td").each(function( index ) {
      var color = $(this).attr('type');
      if (color == "R")
        $(this).css('color', 'red');
      if (color == "B")
        $(this).css('color', 'blue');
      if (color == "N")
        $(this).css('color', 'grey');
      if (color == "A")
        $(this).css('color', 'black');
  });
}
