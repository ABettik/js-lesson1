function GetFibN(n){
    var sqrtFive=Math.sqrt(5),
        Fi=Math.pow(((1+sqrtFive)/ 2),n)
        unFi=Math.pow(((1-sqrtFive)/2),n);
    return((Fi-unFi)/sqrtFive);
}