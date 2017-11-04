"use strict";

console.log('hi');

$(function(){

    $('body').css({
        'backgroundColor': '#f74902', 'color': 'white'
    });

    var output = $('#consoleWindow');



    var place = $('.place').click(function() {
        var xy = prompt('Take your robot for a walk! \n Example: \"0,3 NORTH\"');

        if (xy != null) {
            output.append('<code> PLACE: ' + xy + '</code><br />');
        }
    });


    var consoleWindow = $('.move').click(function() {
        var title = $(this).attr('title')
        console.log(title);
        output.append('<code>' + title + '</code><br />');
    });
});