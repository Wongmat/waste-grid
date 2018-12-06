// function that builds a grid in the "container"
function createGrid(x) {
    let id = 1;
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#gridWindow").append(/*"<div class='grid'" + "id='" + "" + id + "'>*/"<img src='garbage.png' class='garbage'" + "id='" + id + "'></img>"/*</div>"*/);
            id++;
        };
    };
    $(".grid").height(($('.grid').width()));
};

// function that clears the grid
function removeGrid(number){
    for (var num = 625 - number; num <= 625; num++) {
        $('#' + num)[0].src = "brown.png";//css('background', 'white');
    }
    $(".dropdown").css('display', 'none');
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
    waste = 3776250;

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

    $("#plastic").on('click', () => {
        removeGrid(65);
        $('#headline').html('Hong Kongers use at least 3 plastic bags <b>per day</b>. That amounts to <b>44187 tonnes</b> of bags per year.');
        $('#middle').html('In addition, Hong Kongers throw away <b>48180 tonnes</b> of plastic bottles per year, and only <b>14%</b> of Hong Kong\'s plastic bottles get recycled.');
        $('#bottom').html('Think before buying that next water bottle!');
    });

    $("#paper").on('click', () => {
        removeGrid(68);
        $('#headline').html('Every year, paper comes in as one of top materials that end up at Hong Kong landfills.');
        $('#middle').html('In 2016, paper waste made up <b>21.7%</b> of the total amount.');
        $('#bottom').html('Think before you print!');
    });

    $("#food").on('click', () => {
        removeGrid(109);
        $('#headline').html('By far, the <b>food waste</b> is the type of garbage that makes up most landfill trash.');
        $('#middle').html('Food waste makes up a whopping <b>36%</b> of total landfill waste.');
        $('#bottom').html('Think before you eat!');
    });

    $("#reshow").on('click', () => {
        $('#headline').html('In 2016, Hong Kongers produced 10,345 tonnes of solid waste <b>per day</b> that went to landfills.');
        $('#middle').html('That amounts to almost <b>3,800,000 tonnes</b> of garbage for the year.</h1>');
        $('#bottom').html('What would the effect have been if we...');
        $('#gridWindow img').attr('src', 'garbage.png');
        $("#reshow").css('display', 'none');
        $(".dropdown").css('display', 'block');
    });


});

