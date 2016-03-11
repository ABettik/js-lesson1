Function.prototype.difer=function(ms){

    return function (){
        setTimeout(function(){
            return self},ms)
    };
}
function f(verb){
    alert(verb);
};
f.difer(4000)('sdkjksjd');
