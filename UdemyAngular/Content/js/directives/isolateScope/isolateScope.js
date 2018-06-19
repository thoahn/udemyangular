/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('isolateScope', () => {

    //bu directive, isolateScopeController.cs => Index.cshtml de kullanılıyor 
    return {
        scope: {}, //bunu kullandığın için, mainController üzerindeki customer nesnesini ekrana basmadı. Çünkü izole ettin dışarıya karşı.
        template: 'Name : {{customer.name}}, Street : {{customer.street}}'
    };


});