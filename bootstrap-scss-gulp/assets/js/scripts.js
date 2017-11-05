"use strict";


$(function(){
    alert('Hello ISOBAR! ' +
        '\nWelcome to my attempt of the TOY ROBOT CODING CHALLENGE. It took me around 8 hrs and is not exactly complete.' +
        '\n\nTurn LEFT + RIGHT are not present but instead I have MOVE:\[DIRECTION\]');


    /// INIT ///
    var x = 0;
    var y = 0;
    var f = "";

    console.log('Robot is currently at position: ' + x + ',' + y + ',' + f);

    var output = $('#consoleWindow');

    /// WARNING ///
    var warning = null;
    function warningMsg() {
        warning = alert('Your TOY ROBOT is on a suicide mission!!!! ' +
            '\nYou are forbidden to leave the table. ');
        output.text("");
        x = 0;
        y = 0;
    }

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
            output.append('<code class="code">PLACE: ' + x + ',' + y + ',' + f + '</code><br />');
        }
    });

    /// CONSOLE ///
    var consoleWindow = $('.move').click(function() {

        var title = $(this).attr('title')
        output.prepend('<code class="code">' + title + '</code><br />');

        // switch here?? //
        if($(this).hasClass('move west')) {
            x--;
            f = "WEST";
        } else if($(this).hasClass('south')) {
            y--;
            f = "SOUTH";

        } else if($(this).hasClass('north')) {
            y++;
            f = "NORTH";

        } else if($(this).hasClass('east')) {
            x++;
            f = "EAST";
        }

        if(x > 0 && x < 5 || y > 0 && y < 5 ) {
            console.log('robot is inside the table');
        }


        if (x < 0) {
            warningMsg();
        }
        if (y < 0) {
            warningMsg();
        }
        if (x > 5) {
            warningMsg();
        }
        if (y > 5) {
            warningMsg();
        }
    });


    /// REPORT ///
    $('#reportBtn').click(function(){
        $('#report').html('<code class="code">PLACE: ' + x + ',' + y + ',' + f + '</code>')
    });

});