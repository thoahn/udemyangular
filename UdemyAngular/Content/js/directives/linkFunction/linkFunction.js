/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('linkFunction', ['$parse', ($parse) => {

    //bu directive, linkFunctionController.cs => Index.cshtml de kullanılıyor 
    return {
        restrict: 'E',
        require: 'ngModel',
        template: '<div>Selam</div>',
        link: (scope, elem, attr, ngModel) => {
            angular.element(elem).on('click', () => {
                angular.element(elem).find('div').css('background-color', 'red');


                let getAttrValue1 = scope.$eval(attr.directiveIcindeKullanilanAttr);    //ikisi de bir attribute ile data almak ve eval etmek için kullanılabilir.
                let getAttrValue2 = $parse(attr.directiveIcindeKullanilanAttr)()        //ikisi de bir attribute ile data almak ve eval etmek için kullanılabilir.
                //getAttrValue1 ile getAttrValue2 aynı değerleri getirir.
            });
        }
    };


}]);


//require parametresi o attribute'u zorunlu yapar.
//o şeklide bir attribute yoksa hata verir.