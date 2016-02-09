/*Задача
Пофиксить вывод функции через замыкание*/
function closureFunc(){
    for (var i = 0; i < 3; i++) {
        (function innerFunc(i) {
            setTimeout(console.log('I am ' + i + ' iteration'), 1000);
        })(i);
    }
    return innerFunc;
}
var s=closureFunc();
s();