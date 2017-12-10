(function(){
    'use strict';

    angular
        .module('app')
        .controller('Photographers.BookingController', Controller);

        function Controller($scope, $stateParams, PhotographerService, UserService){
            var vm = this;
            
            initController();

            $scope.booking = {};
            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
        
                $scope.opened1 = true;
                $scope.opened2 = false;
              };
        
              $scope.open2 = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
        
                $scope.opened1 = false;
                $scope.opened2 = true;
              };
        
              $scope.clear = function() {
                $scope.dt = null;
                $scope.dt2 = null;
              };
        
              $scope.toggleMin = function() {
                $scope.minDate = $scope.minDate ? null : new Date();
              };
              $scope.toggleMin();
        
              $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
              };
        
              $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
              $scope.format = $scope.formats[0];
            
            function initController(){
                vm.loading = 0;
                                
                if ($stateParams._id) {
                    vm.loading += 1;
                    PhotographerService.GetById($stateParams._id)
                        .then(function (post) {
                            vm.loading -= 1;
                            vm.profile = post;
                        });
                    UserService.GetCurrent().then(function (user) {
                        vm.user = user;
                    });
    
                    
                } else {
                    // initialise with defaults
                    
                }
            }

        }//end of controller
})();