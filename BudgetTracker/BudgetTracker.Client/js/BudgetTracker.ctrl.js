// Start Angular Controller
angular.module('BudgetTrackerApp').controller('BudgetTrackerController', function ($scope) {

    //Define my Properties
    $scope.incomeEntries = [];
    $scope.expenseEntries = [];
    $scope.newIncomeEntry = {};
    $scope.newExpenseEntry = {};
    $scope.negativeNumber = false;

    

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

    $scope.CalcualteSum = function (x, y){
        $scope.sum =  x - y;
        if ($scope.sum < 0) {
            $scope.negativeNumber = true;
        }
        else {
            $scope.negativeNumber = false;
        }

  
    }

    $scope.sum = $scope.CalculateAmount($scope.incomeEntries) - $scope.CalculateAmount($scope.expenseEntries);


}); // End Controller