// Start Angular Controller
angular.module('BudgetTrackerApp').controller('BudgetTrackerController', function ($scope) {

    //Define my Properties
    $scope.incomeEntries = [];
    $scope.expenseEntries = [];
    $scope.newIncomeEntry = {};
    $scope.newExpenseEntry = {};

    $scope.addIncome = function addIncome() {
        if ($scope.newIncomeEntry.Description == null || $scope.newIncomeEntry.Amount == null)
        {
            Command: toastr["error"]("Please enter an Income 'Description' and 'Amount'.");

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
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
                "positionClass": "toast-top-right",
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
        $scope.expenseEntry = {};

    }


});