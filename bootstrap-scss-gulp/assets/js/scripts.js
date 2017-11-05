"use strict";

console.log('hi');

$(function(){

    $('body').css({
        'backgroundColor': '#f74902', 'color': 'white'
    });


    /// ROBOT INIT ///
    var robot = 0;
    var x = 0;
    var y = 0;
    var f = "";

    console.log('Robot is currently at position: ' + x + ',' + y + ',' + f);

    var output = $('#consoleWindow');

    /// WARNING ///
    var warning = null;
    function warningMsg() {
        warning = prompt('Robot is on a suicide mission! \nAre you sure you want to do this?');
        if (warning === "yes") {
            console.log("robot is now outside the table");
            return true;
        } else if (warning === "no") {
            console.log("no");
            output.text("");
            x = 0;
            y = 0;
        } else {
            output.text("");
            x = 0;
            y = 0;
        }
    }
;

    /// POSITION ARRAY ///
    var position = $('.move').map(function() {
        return $(this).attr('title');
    });
    console.log(position);


    $('#placeSubmit').click(function() {
        x = $('#posX').val(); /// EAST + WEST
        console.log(x);
        y = $('#posY').val(); /// NORTH + SOUTH
        console.log(y);
        f = $('#dirF').val(); /// NORTH EAST SOUTH WEST
        console.log('PLACE: ' + x + ',' + y + ',' + f);
        if (x != null && y != null && f != "") {
            output.append('<code>PLACE: ' + x + ',' + y + ',' + f + '</code><br />');
        }
    });



    /// CONSOLE ///

    var consoleWindow = $('.move').click(function() {
        var title = $(this).attr('title')
        output.append('<code>' + title + '</code><br />');
        console.log('hi from coords: x: ' + x + ' y: ' + y + ' f: ' + f);

        // switch here?? //
        if($(this).hasClass('move west')) {
            x--;
            console.log('move west' + x);
        } else if($(this).hasClass('south')) {
            y--;
            console.log('move south' + y);

        } else if($(this).hasClass('north')) {
            y++;
            console.log('move north' + y);

        } else if($(this).hasClass('east')) {
            x++;
            console.log('move east' + x);
        }

        if(x >= 0 && x <= 4 || y >= 0 && y <= 4 ) {
            console.log('robot is inside the table');
        }


        if (x <= -1) {
            warningMsg();
        }
        if (y <= -1) {
            warningMsg();
        }
        if (x >= 4) {
            warningMsg();
        }
        if (y >= 4) {
            warningMsg();
        }
    });




    


    /// REPORT ///
    $('#reportBtn').click(function(){
        $('#report').html('<code>PLACE: ' + x + ',' + y + ',' + f + '</code>')
    });

});