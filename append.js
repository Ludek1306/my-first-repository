

$('ul').append('<li>new Li</li>');

let names = ['Martin', 'Dominik', 'Alena', 'Ludek'];


names.forEach((name) => {    
    $('ul').append("<li>" + name + "</li>");
      
});


let $additionalBlock = $( "<h1>Added with javascript</h1>"), 
additionalBlock2 = ("<p>This block was added using JavaScript's jQuery library. How awesome!</p>");

  $('body').append($additionalBlock, [additionalBlock2]);
  


