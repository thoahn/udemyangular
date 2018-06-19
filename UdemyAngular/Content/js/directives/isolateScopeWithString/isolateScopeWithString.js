/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('isolateScopeWithString', () => {

    //bu directive, isolateScopeController.cs => Index.cshtml de kullanılıyor 
    return {
        scope: {
            customName: '@fullName' //@customName gibi yazmış olmak için sadece '@' yazabilirdin. @ => strinmg alır, one way binding demektir.
        },
        template: 'Name : {{customName}}'
    };


});