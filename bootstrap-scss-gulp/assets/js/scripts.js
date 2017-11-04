"use strict";

console.log('hi');

$(function(){

    $('body').css({
        'backgroundColor': '#f74902', 'color': 'white'
    });


    /// ROBOT INIT ///
    var robot = 0;
    console.log('Robot is currently at position: ' + robot);

    var output = $('#consoleWindow');



    /// POSITION ARRAY ///
    var position = $('.move').map(function() {
        return $(this).attr('title');
    });
    console.log(position);





    /// PLACE ///


    var east = 0;
    var north = 0;
    var direction = "NORTH";

    var place = $('.place').click(function(east, north, direction) {
        var xy = prompt('Take your robot for a walk! \n Example: \"0,3 NORTH\"');

        if (xy != null) {
            output.append('<code> PLACE: ' +
                east + ', ' +
                north + ', ' +
                direction + '</code><br />');
        }
    });

    console.log('my ' + place);


    /// CONSOLE ///

    var consoleWindow = $('.move').click(function() {
        var title = $(this).attr('title')
        output.append('<code>' + title + '</code><br />');
        console.log('hi from robot: ' + robot);

        // switch here?? //
        if($(this).hasClass('west')) {
            robot -= 1;
            console.log('west');
        } else if($(this).hasClass('south')) {
            robot -= 1;
            console.log('south');
        } else if($(this).hasClass('north')) {
            robot += 1;
            console.log('north');
        } else if($(this).hasClass('east')) {
            robot += 1;
            console.log('east');
        }


        if(robot >= 0 && robot <= 4) {
            console.log('robot is inside the table');

        } else {
            var warning = prompt('Robot is on a suicide mission! \nAre you sure you want to do this?');
            if (warning === "yes") {
                console.log("robot is now outside the table");
                return true;
            } else if (warning === "no") {
                console.log("no");
                output.text("");
                robot = 0;
            } else {
                output.text("");
                robot = 0;
            }
        }
    });


    /// REPORT ///
    $('#reportBtn').click(function(){
        $('#report').html('<code>' + robot + '</code>')
    });

});