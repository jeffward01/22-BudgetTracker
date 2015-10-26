$(document).ready(function () {
    $('.mainContainer').hide();

    $('#reveal').on('click', function () {
        $('.Intro').fadeOut('slow').then(
            $('.mainContainer').fadeIn('slow')
        );
  
       
    })

})