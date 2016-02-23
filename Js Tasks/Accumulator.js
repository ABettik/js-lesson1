function Accumulator(startingValue){
    this.value=vailidate(startingValue);
    this.read=function(){
        this.value=vailidate(getVal())
    };
    function vailidate(val){
        if (isNaN(val)){
            console.log('Inputed value is NaN')
            return vailidate(getVal());
        }
        return val;
    }
    function getVal(){
        return prompt('Enter new value');
    }
}
var accumulator=new Accumulator(5);
accumulator.read();
accumulator.read();
alert( accumulator.value );