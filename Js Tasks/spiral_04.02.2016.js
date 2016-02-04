Задачкка
Функция принимает двумерный массив с одинаковыми сторонами.
Возвращает элементы этого массива в порядке спирали в другом массиве.
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