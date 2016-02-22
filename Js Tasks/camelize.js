function SeaFight(length,height) {

    function innerScope(name) {
        var field = (function () {/*method witch create batle-field*/
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
        };

        function checkVailid(x, y) {
            if (!(1 <= x <= height || 1 <= y <= length)) {
                alert('Your input out of range, please input them again');
                return false;
            }
            return true;
        }

        if (name === 'putChip') {
            return function () {
                x = GetCoordinate('x');
                y = GetCoordinate('y');
                if (checkVailid(x, y)) {
                    if (this.field[x][y].chip) {
                        alert("Вы уже установили тут судно!")
                    } else {
                        this.field[x][y].chip = true;
                        ++this.counter;
                    }
                }
            };
        }

        function setMsg(x, y, msg) {
            this.field[x][y].msg = msg;
        }

        if (name === 'hit') {
            return function (x, y) {
                if (this.hasChip()) {
                    if (checkVailid(x, y)) {
                        if (this.field[x][y].chip) {
                            alert('Попадание!');
                            setMsg(x, y, "Ушел на дно");
                            this.field[x][y].opened = true;
                            --this.counter;
                        } else if (this.field[x][y].opened) {
                            alert(this.field[x][y].msg + 'Эта область уже открыта');
                        } else {
                            alert(this.field[x][y].msg);
                            this.field[x][y].opened = true;
                        }
                    }
                }
                else alert('Нет корабликов!?')
            }
        }
        if (name === 'hasChip') {
            return function () {
                return !!this.counter;
            }
        }

    };
    this.putChip=innerScope('putChip');
    this.hit=innerScope('hit');
    this.hasChip=innerScope('hasChip');
}