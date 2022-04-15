


$('#addItem').click(() => {
    
    var newItem = $('input').val();
    var bin = $('.list').append('<li>' + newItem + '</li>');

    var newbin = $(bin).append('<input type="image" class="trash" src="/Icons/211835_trash_icon.svg" alt="">');
    var lastbin = $(bin).append('<input type="image" class="tick" src="/Icons/1737369_answer_circle_okay_tick_icon.svg" alt="">');   
});



