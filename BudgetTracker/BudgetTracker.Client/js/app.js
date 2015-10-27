
//Intro Page
$(document).ready(function () {
    $('.mainContainer').hide();

    $('#reveal').on('click', function () {
        $('.Intro').fadeOut('slow', function () {
            ($('.mainContainer').fadeIn('slow')
      )}
        );
    })
});

//Go Home Button
$(".homeBtn").on('click', function () {
    $('.mainContainer').fadeOut('slow', function(){
        ($('.Intro').fadeIn('slow')
        )});

});

//Start Angular
angular.module('BudgetTrackerApp', [])

