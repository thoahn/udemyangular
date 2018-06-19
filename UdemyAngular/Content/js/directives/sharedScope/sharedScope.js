/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('sharedScope', () => {

    //bu directive, isolateScopeController.cs => Index.cshtml de kullanılıyor 
    return {
        //scope : propertysini kullanmadığın için, mainController üzerindeki customer nesnesini ekrana bastı.
        template : 'Name : {{customer.name}}, Street : {{customer.street}}'
    };


});