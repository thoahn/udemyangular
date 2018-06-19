/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('linkFunction', () => {

    //bu directive, linkFunctionController.cs => Index.cshtml de kullanılıyor 
    return {
        restrict: 'E',
        require : 'ngModel',
        template: '<div>Selam</div>',
        link: (scope, elem, attr, ngModel) => {
            angular.element(elem).on('click', () => {
                angular.element(elem).find('div').css('background-color', 'red');
            });
        }
    };


});