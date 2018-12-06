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

$(document).ready(function() {
    createGrid(25);
    hkPop = 7337000;
    waste = 3776250;

    $("#overlayButton").click(function() {
        document.getElementById("overlay").style.display = "none";
    });

    $("#plastic").on('click', () => {
        removeGrid(65);
        $('#headline').html('Hong Kongers average around 3 plastic bags <b>per day</b>. That amounts to <b>44187 tonnes</b> of bags per year.');
        $('#middle').html('In addition, <b>48180 tonnes</b> of plastic bottles are discard per year, and only <b>14%</b> of Hong Kong\'s of them get recycled.');
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
        $('#headline').html('By far, <b>food waste</b> is the type of garbage that makes up most landfill trash.');
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

