function AddToObj(str,obj){
    if (!(~(((obj[Object.keys(obj)[0]]).split(' ')).indexOf(str)))){
        obj[Object.keys(obj)[0]]+=' '+str;
    }
    return obj;
}