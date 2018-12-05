// function that builds a grid in the "container"
function createGrid(x) {
    let id = 1;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#gridWindow").append("<div class='grid'" + "id='" + "" + id + "'></div>");
            id++;
        };
    };
    $(".grid").height(($('.grid').width()));
};

// function that clears the grid
function removeGrid(number){
    for (var num = 625 - number; num <= 625; num++) {
        console.log(num);
        $('#' + num).css('background', 'white');
    }
    $("#dropdown").css('display', 'none');
    $("#reshow").css('display', 'block');
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(25);
    hkPop = 7337000;

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });

    $("#overlayButton").click(function() {
        document.getElementById("overlay").style.display = "none";
    });

    $("#bags").on('click', () => {
        removeGrid(7);
    });

    $("#paper").on('click', () => {
        removeGrid(157);
    });

    $("#reshow").on('click', () => {
        $(".grid").css('background', 'darkred');
        $("#reshow").css('display', 'none');
        $("#dropdown").css('display', 'block');
    });


});

