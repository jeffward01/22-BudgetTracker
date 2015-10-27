// Start Angular Controller
angular.module('BudgetTrackerApp').controller('BudgetTrackerController', function ($scope) {

    //Define my Properties
    $scope.incomeEntries = [];
    $scope.expenseEntries = [];
    $scope.newIncomeEntry = {};
    $scope.newExpenseEntry = {};
    $scope.negativeNumber = false;


    $scope.modalShown = false;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    }

    $scope.addIncome = function addIncome() {
        if ($scope.newIncomeEntry.Description == null || $scope.newIncomeEntry.Amount == null) {
            Command: toastr["error"]("Please enter an Income 'Description' and 'Amount'.");


            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-full-width",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            return;
        }

        $scope.incomeEntries.push($scope.newIncomeEntry);

        $scope.newIncomeEntry = {};

    };

    $scope.addExpense = function addExpense() {
        if ($scope.newExpenseEntry.Description == null || $scope.newExpenseEntry.Amount == null) {
            Command: toastr["error"]("Please enter an Expense 'Description' and 'Amount'.");

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-full-width",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            return;
        }

        $scope.expenseEntries.push($scope.newExpenseEntry);
        $scope.newExpenseEntry = {};

    }


    $scope.CalculateAmount = function (entries) {
        var sum = 0;

        for (var i = 0; i < entries.length; i++) {
            sum += parseInt(entries[i].Amount);
            if ($scope.sum < 0) {
                $scope.negativeNumber = true;
            }
            else {
                $scope.negativeNumber = false;
            }
        }

        return sum;
    };


    $scope.deleteEntry = function (entry, string) {

        if (string == "income") {
            $scope.incomeEntries.splice($scope.incomeEntries.indexOf(entry), 1);
            deleteAlert();
        }
        else {
            $scope.expenseEntries.splice($scope.expenseEntries.indexOf(entry), 1);
            console.log("Deleted");
            deleteAlert();
        }
    }

    function deleteAlert() {
        Command: toastr["error"]("Your Entry was Deleted");
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-full-width",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"

        }
    }

    $scope.editEntry = function (entry, string) {

        if (string == "income") {

            deleteAlert();
        }
        else {
            $scope.expenseEntries.splice($scope.expenseEntries.indexOf(entry), 1);
            console.log("Deleted");


        }

        $scope.sum = $scope.CalculateAmount($scope.incomeEntries) - $scope.CalculateAmount($scope.expenseEntries);

        function checkfornegative() {

            var sum = parseInt($('#LeftAfterSpending').val());
            if (sum < 0) {
                $(sum).css('color', 'red');
            }
        }
        checkfornegative();s


    }; // End Controller

 

});

