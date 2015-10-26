
//Intro Page
$(document).ready(function () {
    $('.mainContainer').hide();

    $('#reveal').on('click', function () {
        $('.Intro').fadeOut('slow').then(
            $('.mainContainer').fadeIn('slow')
        );
    })
});

//Go Home Button
$(".homeBtn").on('click', function () {
    $('.mainContainer').fadeOut('slow').then($('.Intro').fadeIn('slow'));

})