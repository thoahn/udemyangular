/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('withControllerDirective', function() {

    var template = '<button ng-click="vx.addItem()">Tıkla ve Ekle</button><div>{{vx.items[vx.items.length - 1].name}}</div><button ng-click="vx.runMethod()">Methodu Çalıştır</button><ng-transclude></ng-transclude>',
    controller = ['$scope', function ($scope) {
        var vm = this;
        vm.items = [];

        vm.addItem = function () {
            if (vm.items)
                vm.items.push({ name: 'addedName', street: 'addedStreet', url: 'addedUrl' });
        }

        vm.runMethod = function () {
            vm.methodToBeRun({ parameterCome: 'Sent bitch !' });
        }
    }]


    return {
        transclude : true,
        restrict: 'EA',
        scope: {
            dataSource: '=dSource',
            methodToBeRun : '&cRun'
        },
        controller: controller,
        controllerAs: 'vx',
        bindToController: true,
        template: template,
        link: (scope, elem, attr, ctrl, transclude) => {
            if (scope.vx.dataSource)
                scope.vx.items = angular.copy(scope.vx.dataSource);

            //bu şekilde transclude çalıştığı anda çalışan method ile, override edebilirsin.
            transclude(scope, function (content) {
                if(confirm('Kandırayım mı ?'))
                    elem.replaceWith('Kandırdım :D');
            });
        }
    };
});


//controllerAs kullanımında, bu sayfada nerelerde vm nerelerde vx kullanıldığına dikkat et.

//directive içine dışarıdan method verildiği zaman ve o method bir parametre beklediği zaman
//attribute c-run="methodInMain(parameterCome)" şeklinde ise, yukarıdaki gibi { parameterCome: 'Sent bitch !' } object literal vermemiz lazım.