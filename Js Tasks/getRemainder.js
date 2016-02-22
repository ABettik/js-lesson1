function getRemainder(num){
    lenOfnulls=+('1e'+(num.toString().length));
    return (num>0)?
        ((num * lenOfnulls - ((~~num) * lenOfnulls)) / lenOfnulls):
        ((num * lenOfnulls + ((~~num) * lenOfnulls)) / lenOfnulls);
}