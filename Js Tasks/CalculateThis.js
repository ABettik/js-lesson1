function Calculator(){
    var methods={
        '-':function(a, b) {
        return a - b;
        },
        '+':function(a, b) {
            return a + b;
        }
    };
    this.calculate=function(str){
        var mathArr=str.split(' ');
        return methods[mathArr[1]](+mathArr[0],+mathArr[2])
    };
    this.addMethod=function(name,func){
        methods[name]=func;
    };
}



var powerCalc = new Calculator;

alert( powerCalc.calculate("3 + 7") );// 10
var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8