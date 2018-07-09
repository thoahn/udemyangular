/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('withControllerDirective', function() {

    var template = '<button ng-click="vm.addItem()">Tıkla ve Ekle</button><div>{{vm.items[vm.items.length - 1].name}}</div>';
    
    var controller = function() {
        var vm = this;

        vm.init = function () {
            vm.items = angular.copy(vm.dataS);
        }

        vm.init();

        vm.addItem = function(){
            vm.items.push({name : 'addedName' , street : 'addedStreet' , url : 'addedUrl'});
        }

    }


    return {
        restrict: 'EA',
        scope: {
            dataS: '=dataSource'
        },
        controller: controller,
        controllerAs: 'vm',
        bindToController: true,
        template : template

    };
});