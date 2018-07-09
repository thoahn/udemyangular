/// <reference path="C:\DOGAN\PROJELER\UdemyAngular\UdemyAngular\scripts/angular.js" />
/// <reference path="../../modules/mainApp.js" />
mainApp.directive('delayBind', ['$interpolate', ($interpolate) => {    
    return {
        restrict: 'A',
        compile: (elem, attr) => {
            console.log('In Compile');
            var interpolateFunc = $interpolate(attr.delayBind);
            //attr.$set('delayBind', 'null'); //clear it out so no bindings occur

            return {
                pre: (scope, elem, attrs) => {
                    console.log('In delayBind pre ' + elem[0].tagName);
                },
                post: (scope, elem, attrs) => {
                    console.log('In delayBind post ' + elem[0].tagName);

                    elem.on(attrs.trigger, (event) => {
                        var attr = attrs.attribute,
                            val = interpolateFunc(scope);

                        if (attr && !elem.attr(attr))
                            elem.attr(attr, val);
                    });
                }
            };
        }
    };
}]);

//interpolation kullanımı için örnek
//let ornekInter = $interpolate('<div>{{ornek.kod}} veee {{ornekSayi}}</div>');
//  let ornekDegisken = {
//      ornek : {
//          kod : 'C++'
//      },
//      ornekSayi : 14
//  }
//console.log( ornekInter(ornekDegisken) );


//eğer compile parametresi varsa, link parametresine girmiyor.
//zaten compile içindeki post, compile ile aynı zamanda giriyor.