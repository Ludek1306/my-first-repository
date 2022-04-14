$('.first').click(() => {
    console.log('Yeah, you clicked me');
});

$('.second').click(() => {
    $('.first').text('It\'s a kind of magic!');
});

$('.red').click(() => {
    $('button').css('background-color', 'red');
});

$('.third').click(() => {
    var change = $('input').val();
    $('button').css('background-color', change);
    
});