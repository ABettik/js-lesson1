/*Задачкка1
Функция принимает двумерный массив с одинаковыми сторонами.
Возвращает элементы этого массива с периметра по часовой стрелке в другом массиве.*/
function getElFromPerim(arr){
    var leng=arr.length,
        resultArrey=[],
        x=0,
        y=0;
    while (y<leng){
        resultArrey.push(arr[x][y++]);
    }
    --y;
    while (x<leng-1){
        resultArrey.push(arr[++x][y]);
    }
    while (y>0){
        resultArrey.push(arr[x][--y]);
    }
    while (x>1){
        resultArrey.push(arr[--x][y]);
    }
    return resultArrey;
}
/*Задачкка2
Функция принимает двумерный массив с одинаковыми сторонами.
Возвращает элементы этого массива с верхней и правой стороны, и по диагонали*/
function getElFromTriangle(arr){
    var leng=arr.length,
        resultArrey=[],
        x=0,
        y=0;
    while (y<leng){
        resultArrey.push(arr[x][y++]);
    }
    --y;
    while (x<leng-1){
        resultArrey.push(arr[++x][y]);
    }
    while (y>1){
        resultArrey.push(arr[--x][--y]);
    }
    return resultArrey;
}
/*Задачкка3
Функция принимает двумерный массив с одинаковыми сторонами.
Возвращает элементы этого массива с правой и нижней сторон, и по диагонали*/
function getElFromPerim(arr){
    var leng=arr.length,
        resultArrey=[],
        x=0,
        y=leng-1;
    for (x;x<leng-1;++x){
        resultArrey.push(arr[x][y]);
    }
    resultArrey.push(arr[x][y]);
    while (y>0){
        resultArrey.push(arr[x][--y]);
    }
    while (x>1){
        resultArrey.push(arr[--x][++y]);
    }
    return resultArrey;
}
/*Задачкка4
Функция принимает двумерный массив с одинаковыми сторонами.
Возвращает элементы этого массива в порядке спирали в другом массиве.*/
function spiralCoun2dArr(arr){
    var leng=arr.length,
        resultArrey=[],
        x=0,
        y=0,
        preLeng=0,
        end;
    (leng%2==0)?
        end=(leng-2)/2:
        end=(leng-1)/2;
    resultArrey.push(arr[x][y]);
    cicle:
    while (true){
        while (y<leng-1){
            resultArrey.push(arr[x][++y]);
        }
        if (leng==end){break cicle}
        while (x<leng-1){
            resultArrey.push(arr[++x][y]);
        }
        --leng;
        while (y>preLeng){
            resultArrey.push(arr[x][--y]);
        }
        if (leng==end){break cicle}
        while (x>preLeng+1){
            resultArrey.push(arr[--x][y]);
        }
        ++preLeng;
    }
    return resultArrey;
}