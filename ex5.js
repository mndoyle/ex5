$(document).ready(function() {
    console.log('ready')
});

$(function() {
    $('#catalog').droppable();
    $('#catalog li').draggable({
        appendTo: 'body',
        helper: 'clone'
    });

    $('#bag ol').droppable({
        activeClass: 'ui-state-default',
        hoverClass: 'ui-state-hover',
        accept: ':not(.ui-sortable-helper)',
        drop: function (event, ui) {
            $(this).find('.placeholder').remove();
            $('<li></li>').text(ui.draggable.text()).appendTo(this);
        }
    })
    .sortable({
        items: 'li:not(.placeholder)',
        sort: function () {
            $(this).removeClass('ui-state-default');
        }
    });
});


    
