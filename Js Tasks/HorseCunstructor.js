function Horse(name){
    this.name=name;
    this.tired=0;
    this.rest=function(){
        if (this.tired==10){
            return
        }
    };
    this.mileage=0;
    this.run=function(n){
        for (var i=0;i<n;++i){
            if (!this.rest()){
                ++this.mileage;
                ++this.__proto__.totalmileage;
                ++this.tired;
            }
        }
    };
};
Horse.prototype={totalmileage:0};
var h1=new Horse(h1);
var h2=new Horse(h1);
h1.run(34);