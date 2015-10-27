
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

//if Total less is less than 0
$(document).ready(function () {
    var sum = parseInt($('#LeftAfterSpending').val());
    if(sum < 0 )
    {
        $(sum).css('color', 'red');
    }
});