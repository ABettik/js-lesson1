/*задачка1
на поиск совпадений в массиве*/
function FindCoincidence(Arr){
    for(var i=0;i<Arr.length;++i){
        for(var t=i+1;t<Arr.length;++t){
            if (Arr[i]===Arr[t]){
                return console.log("Find coincidence!");
            };
        };
        if (i==(Arr.length-1)){
            return console.log("Don't find coincidense!");
        };
    };
};
/*задачка2
вернуть совпадающие элементы массива*/
function ReturnCoincidence(Arr){
    var coincdClicker;
    var buffer;
    var resultArray=[];
    findingCicle:
    for(var i=0;i<Arr.length;++i){
        coincdClicker=0;
        if (resultArray[0]){
             for (var y=0;y<resultArray.length;++y){
                 if (resultArray[y]===Arr[i]){
                     continue findingCicle;
                 };
             };
        };
        for(var t=i+1;t<Arr.length;++t){
            if (Arr[i]===Arr[t]){
                coincdClicker+=1;
                buffer=Arr[i];
            };
        };
        if (coincdClicker){
            resultArray.push(buffer);
        };
        if (i==(Arr.length-1)){
            if (resultArray[0]){
                return resultArray;
            };
            return console.log('Coincidence are not find in this array')
        };
    };
};
/*Задачка 3
на количество отрицательных чисел в массиве*/
function negAmount(Arr){
    var Clicker=0
    for (var i=0;i<Arr.length;++i){
        if (Arr[i]<0) {++Clicker;};
    };
    return Clicker;
}
/*Задачка4
определение индекса наименьшего элемента в одномерном массиве*/
function IndexOfMin(arr){
    var index=0
    for(var i=1;i<arr.length;++i){
        if (arr[index]>arr[i]){
            index=i;
        };
    };
    return index;
};
/*Задачка5
Количество элементов кратных 7*/
function multipleOfSevenQuant(arr){
    var quant=0;
    for (var i=0;i<arr.length;++i){
        if (arr[i]%7===0){
        ++quant;
        };
    };
    return quant;
};
/*Задачка6
Количество совпадений в двух массивах*/
function FindQuantOfCoinc(firstArr,secondArr){
    couner=0
    for (var i=0;i<firstArr.length;++i){
        for (var t=0;t<secondArr.length;++t){
            if (firstArr[i]===secondArr[t]){++couner};
        };
    };
    return couner;
};