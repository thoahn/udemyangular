/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../modules/mainApp.js" />
mainApp.controller('mainController', ($scope) => {

    //bu değişken, shared-scope ve isolate-scope directiveleri içinde kullanıldı.
    $scope.customer = {
        name: 'David',
        street : '1324 Street'
    };
    
    $scope.customers = [{
        name: 'Seda',
        street: '73 sokak',
        url : 'url1/link'
    }, {
        name: 'Dogan',
        street: '74 sokak',
        url: 'url2/link'
    }, {
        name: 'Nil',
        street: '75 sokak',
        url: 'url3/link'
    }];


});

//copy fonksiyonu ile clone alabiliriz. Bu şekilde bir nesne için watcher açıldıysa, clone ayrı bir nesne olur ve watcher onu izlemeye devam etmez.
//let newCopy = angular.copy($scope.customers);
