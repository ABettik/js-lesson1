function SeaFight(length,height) {

    var field = (function () {/*function wich create batle-field*/
        field = {};
        for (var i = 1; i < height + 1; ++i) {
            field[i] = {};
            for (var j = 1; j < length + 1; ++j) {
                field[i][j] = {
                    chip: false,
                    opened: false,
                    msg: 'Промазал!'
                };
            }
        }
        return field;
    })();

    var counter = 0;

    function GetCoordinate(coordinate) {
        switch (coordinate) {
            case 'x':
                return +prompt('Please input vertical coordinate');
            case 'y':
                return +prompt('Please input horisontal coordinate');
        }
    }

    function checkVailid(x, y) {
        if (!(((1<=x)&&(x<=height))&&((1<=y)&&(y<=length)))) {
            alert('Your input out of range, please input them again');
            return false;
        }
        return true;
    }

    this.putChip=function(){
        x = GetCoordinate('x');
        y = GetCoordinate('y');
        if (checkVailid(x, y)) {
            if (field[x][y].chip) {
                alert("Вы уже установили тут судно!")
            } else {
                field[x][y].chip = true;
                ++counter;
            }
        }
    };

    this.setMsg=function(x, y, msg) {
        if (checkVailid(x, y)){
            field[x][y].msg = msg;
        }
    };

    this.hit=function (x, y){
        if (this.hasChip()) {
            if (checkVailid(x, y)) {
                if (field[x][y].chip) {
                    alert('Попадание!');
                    this.setMsg(x, y, "Ушел на дно");
                    field[x][y].opened = true;
                    --counter;
                } else if (field[x][y].opened) {
                    alert(field[x][y].msg + 'Эта область уже открыта');
                } else {
                    alert(field[x][y].msg);
                    field[x][y].opened = true;
                }
            }
        }
        else alert('Нет корабликов!?')
    };

    this.hasChip=function () {
        return !!counter;
    };
}