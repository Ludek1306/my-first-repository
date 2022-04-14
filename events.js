$('.first').click(() => {
    console.log('Yeah, you clicked me');
});

$('.second').click(() => {
    $('.first').text('It\'s a kind of magic!');
});

$('.third').click(() => {
    $('button').css('background-color', 'red');
});