/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../modules/mainApp.js" />
mainApp.controller('mainController', ($scope) => {

    //bu değişken, shared-scope ve isolate-scope directiveleri içinde kullanıldı.
    $scope.customer = {
        name: 'David',
        street : '1324 Street'
    };
    
});
