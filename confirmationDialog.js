var app = angular.module('ConfDialogModal', ['ui.bootstrap']);

app.controller('ConfDialogCtrl', function($scope) {
    $scope.test = function() {
        alert('is working');
    }
});


app.directive('mkConfirmationDialog', function($modal) {
    return {
        restrict: 'A',
        priority: -1,

        replace: true,
        link: function(scope, element, attrs) {
            var clickAction = attrs.confirmedClick;

            element.bind('click', function(e) {
                var modalInstance = $modal.open({
                    templateUrl: 'conftemplate.html',
                    controller: 'ModalConfCtrl',

                });

                modalInstance.result.then(function(selectedItem) {
                    console.log(clickAction);
                    scope.$eval(clickAction)
                }, function() {

                });
            });
        },

    };
});

app.controller('ModalConfCtrl', function($scope, $modalInstance) {
    $scope.ok = function() {
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});